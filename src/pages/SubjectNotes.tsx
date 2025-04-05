
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import NoteCard from "@/components/ui/note-card";
import { departments, notes } from "@/data/mockData";
import { ChevronLeft, FileUp, Download, Book } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SubscriptionTier } from "@/types";

const SubjectNotes = () => {
  const { departmentId, subjectId } = useParams<{ departmentId: string, subjectId: string }>();
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  
  const department = departments.find(d => d.id === departmentId);
  const subject = department?.subjects.find(s => s.id === subjectId);
  
  const subjectNotes = notes.filter(note => 
    note.subject === subject?.name && 
    note.department === department?.name
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast({
        title: "File required",
        description: "Please select a file to upload",
        variant: "destructive"
      });
      return;
    }
    
    // Simulation of file upload
    toast({
      title: "Upload successful!",
      description: `Your note "${file.name}" has been uploaded.`,
    });
    
    setFile(null);
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const handleDownload = (noteTitle: string) => {
    toast({
      title: "Download started",
      description: `"${noteTitle}" is being downloaded.`,
    });
  };
  
  if (!department || !subject) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Subject Not Found</h1>
          <p className="mb-8">The subject you're looking for does not exist.</p>
          <Button asChild>
            <Link to="/departments">Back to Departments</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-6">
            <Link to={`/departments/${departmentId}`} className="flex items-center text-learnflow-primary hover:text-learnflow-primary/80">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to {department.name}
            </Link>
          </Button>
        </div>
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <Book className="h-8 w-8 text-learnflow-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-learnflow-accent bg-clip-text text-transparent">
            {subject.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            {subject.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center bg-learnflow-primary hover:bg-learnflow-primary/90">
                  <FileUp className="mr-2 h-4 w-4" />
                  Upload Notes
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Upload New Notes</DialogTitle>
                  <DialogDescription>
                    Share your knowledge with others by uploading your notes.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleUpload} className="space-y-4 pt-4">
                  <div className="space-y-1">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Enter a descriptive title" required />
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Briefly describe what these notes cover..." 
                      className="min-h-[80px]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="tier">Subscription Tier</Label>
                    <Select defaultValue={SubscriptionTier.FREE} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={SubscriptionTier.FREE}>Free</SelectItem>
                        <SelectItem value={SubscriptionTier.PREMIUM}>Premium</SelectItem>
                        <SelectItem value={SubscriptionTier.ELITE}>Elite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="file">File</Label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center bg-gray-50 dark:bg-gray-800/50">
                      {file ? (
                        <div className="text-sm">
                          <p className="font-medium">{file.name}</p>
                          <p className="text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm" 
                            className="mt-2"
                            onClick={() => setFile(null)}
                          >
                            Change
                          </Button>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center justify-center mb-3">
                            <FileUp className="h-10 w-10 text-gray-400" />
                          </div>
                          <div className="text-sm text-gray-500 mb-3">
                            <p className="font-medium">Drag and drop or click to upload</p>
                            <p>Supports PDF, DOCX, PPTX (max. 20MB)</p>
                          </div>
                          <Input 
                            id="file" 
                            type="file" 
                            className="hidden" 
                            accept=".pdf,.docx,.pptx" 
                            onChange={handleFileChange}
                            required
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => document.getElementById('file')?.click()}
                          >
                            Browse files
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button type="submit" className="bg-learnflow-primary hover:bg-learnflow-primary/90">
                      Upload Notes
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="tech-grid relative pb-16">
          <div className="absolute inset-0 tech-dots opacity-30 pointer-events-none"></div>
          {subjectNotes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subjectNotes.map((note) => (
                <div key={note.id} className="relative group">
                  <NoteCard note={note} />
                  <div className="absolute inset-x-0 bottom-0 p-4 flex justify-center space-x-2 bg-gradient-to-t from-white dark:from-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="sm" 
                      className="flex items-center bg-learnflow-primary hover:bg-learnflow-primary/90"
                      onClick={() => handleDownload(note.title)}
                    >
                      <Download className="mr-1 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800/20 rounded-lg border border-gray-200 dark:border-gray-700">
              <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">No notes available yet</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Be the first to upload notes for this subject!</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex items-center bg-learnflow-primary hover:bg-learnflow-primary/90">
                    <FileUp className="mr-2 h-4 w-4" />
                    Upload Notes
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  {/* Same content as above */}
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubjectNotes;
