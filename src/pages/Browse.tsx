import React, { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NoteCard from "@/components/ui/note-card";
import CategoryGrid from "@/components/ui/category-grid";
import { categories } from "@/data/mockData";
import { SubscriptionTier, Note } from "@/types";
import { Filter, Search } from "lucide-react";
import { fetchAllNotes } from "@/services/notes";
import { useQuery } from "@tanstack/react-query";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [activeTab, setActiveTab] = useState("all");

  const {
    data: notes = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchAllNotes,
  });

  const filterNotes = () => {
    let filteredNotes = [...notes];

    // Filter by category if not "all"
    if (activeTab !== "all") {
      filteredNotes = filteredNotes.filter(
        (note) => note.subject.toLowerCase() === activeTab.toLowerCase()
      );
    }

    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredNotes = filteredNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(term) ||
          note.description.toLowerCase().includes(term) ||
          note.subject.toLowerCase().includes(term) ||
          note.author?.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        return filteredNotes.sort(
          (a, b) =>
            new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
        );
      case "oldest":
        return filteredNotes.sort(
          (a, b) =>
            new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime()
        );
      case "popular":
        return filteredNotes.sort((a, b) => b.downloads - a.downloads);
      case "rating":
        return filteredNotes.sort((a, b) => b.rating - a.rating);
      default:
        return filteredNotes;
    }
  };

  const groupNotesByTier = (notes: Note[]) => {
    const grouped: Record<SubscriptionTier, Note[]> = {
      [SubscriptionTier.FREE]: [],
      [SubscriptionTier.PREMIUM]: [],
      [SubscriptionTier.ELITE]: [],
    };

    notes.forEach((note) => {
      grouped[note.tier].push(note);
    });

    return grouped;
  };

  const filteredNotes = filterNotes();
  const groupedNotes = groupNotesByTier(filteredNotes);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Browse Study Notes</h1>

        <Tabs defaultValue="notes" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="categories">
            <CategoryGrid categories={categories} />
          </TabsContent>

          <TabsContent value="notes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  className="pl-10"
                  placeholder="Search notes by title, description, or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400" />
                <span className="text-sm text-gray-500">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="flex-grow">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="popular">Most Downloaded</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Subjects</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.name.toLowerCase()}
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="space-y-10">
                {isLoading ? (
                  <div className="text-center py-12 text-gray-500">
                    Loading notes...
                  </div>
                ) : isError ? (
                  <div className="text-center py-12 text-red-500">
                    Failed to load notes. Please try again later.
                  </div>
                ) : Object.values(groupedNotes).every(
                    (notes) => notes.length === 0
                  ) ? (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500">
                      No notes found matching your criteria.
                    </p>
                  </div>
                ) : (
                  <>
                    {groupedNotes[SubscriptionTier.FREE].length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Free Notes</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {groupedNotes[SubscriptionTier.FREE].map((note) => (
                            <NoteCard key={note.id} note={note} />
                          ))}
                        </div>
                      </div>
                    )}

                    {groupedNotes[SubscriptionTier.PREMIUM].length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-4 text-learnflow-primary">
                          Premium Notes
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {groupedNotes[SubscriptionTier.PREMIUM].map(
                            (note) => (
                              <NoteCard key={note.id} note={note} />
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {groupedNotes[SubscriptionTier.ELITE].length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-4 text-learnflow-accent">
                          Elite Notes
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {groupedNotes[SubscriptionTier.ELITE].map((note) => (
                            <NoteCard key={note.id} note={note} />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
