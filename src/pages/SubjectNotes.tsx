
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import NoteCard from "@/components/ui/note-card";
import { departments, notes } from "@/data/mockData";
import { ChevronLeft, FileUp, Book } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import UploadNotesForm from "@/components/ui/upload-notes-form";
import { Note, SubscriptionTier } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SubjectNotes = () => {
  const { departmentId, subjectId } = useParams<{ departmentId: string, subjectId: string }>();
  const { toast } = useToast();
  
  const department = departments.find(d => d.id === departmentId);
  const [subjectName, setSubjectName] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const subjectParts = subjectId?.split('-') || [];
  const semesterNum = subjectParts[1]?.replace('sem', '');
  const courseCode = subjectParts[2];

   const { data: localNotes = [], isLoading } = useQuery({
    queryKey: ['notes', departmentId, subjectId, semesterNum],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/notes/filter`, {
        params: {
          department: departmentId,
          subject: subjectId,
          semester: semesterNum,
        },
      });
      return data.data;
    },
  });

  // Extract subject name from ID
  useEffect(() => {
    if (subjectId && departmentId) {
      const subjectParts = subjectId.split('-');
      if (subjectParts.length >= 3) {
        const semesterNum = subjectParts[1].replace('sem', '');
        const courseCode = subjectParts[2];
        
        const semesterSubjects = {
          1: [
            { id: 'cs100', name: 'CS 100 (3 cr.) – Introduction to Computing' },
            { id: 'cs106', name: 'CS 106 (4 cr.) – Introduction to Computer Programming' },
            { id: 'mt112', name: 'MT 112 – Calculus I' },
            { id: 'ns111', name: 'NS 111 (3 cr.) – Applied Physics' },
            { id: 'ss104', name: 'SS 104 – English I (Comprehension)' },
            { id: 'ss108', name: 'SS 108 – Islamic Studies' }
          ],
          2: [
            { id: 'cs200', name: 'CS 200 (4 cr.) – Object‑Oriented Programming' },
            { id: 'ee200', name: 'EE 200 (4 cr.) – Digital Logic Design' },
            { id: 'mt114', name: 'MT 114 – Calculus II' },
            { id: 'ss118', name: 'SS 118 – Pakistan Studies' },
            { id: 'ss203', name: 'SS 203 – English II' }
          ],
          3: [
            { id: 'cs210', name: 'CS 210 – Data Structures & Algorithms' },
            { id: 'cs251', name: 'CS 251 – Computer Organization & Assembly Language' },
            { id: 'mt221', name: 'MT 221 – Linear Algebra' },
            { id: 'se242', name: 'SE 242 – Software Engineering' },
            { id: 'ss216', name: 'SS 216 – Introduction to Sociology' }
          ],
          4: [
            { id: 'cs213', name: 'CS 213 – Database Management Systems' },
            { id: 'cs221', name: 'CS 221 – Web Programming Languages' },
            { id: 'cs304', name: 'CS 304 – Analysis of Algorithms' },
            { id: 'mg100', name: 'MG 100 – Fundamentals of Accounting' },
            { id: 'ss218', name: 'SS 218 – Introduction to Psychology' }
          ],
          5: [
            { id: 'cs208', name: 'CS 208 – Modern Programming Languages' },
            { id: 'cs310', name: 'CS 310 – Automata Theory' },
            { id: 'cs313', name: 'CS 313 – Operating System Concepts' },
            { id: 'cs342', name: 'CS 342 – Visual Programming' },
            { id: 'mt201', name: 'MT 201 – Discrete Structures' },
            { id: 'ss401', name: 'SS 401 – Research Methodology & Professional Ethics' }
          ],
          6: [
            { id: 'cs306', name: 'CS 306 (2 cr.) – Computer Networks' },
            { id: 'cs307', name: 'CS 307 (4 cr.) – Artificial Intelligence' },
            { id: 'cs375', name: 'CS 375 – Mobile Application Development' },
            { id: 'mt301', name: 'MT 301 – Probability & Statistics' },
            { id: 'ss211', name: 'SS 211 – English III (Technical Report Writing)' }
          ],
          7: [
            { id: 'cs300', name: 'CS 300 – Data Science' },
            { id: 'cs401', name: 'CS 401 – Compiler Construction' },
            { id: 'cs422', name: 'CS 422 – Distributed & Parallel Computing' },
            { id: 'mt302', name: 'MT 302 (3 cr.) – Numerical Computing' }
          ],
          8: [
            { id: 'dip', name: 'Digital Image Processing' },
            { id: 'entrepreneurship', name: 'Entrepreneurship' },
            { id: 'infosec', name: 'Information Security' }
          ]
        };
        
        const semesterData = semesterSubjects[parseInt(semesterNum)];
        const subject = semesterData?.find(s => s.id === courseCode);
        setSubjectName(subject?.name || `Subject ${courseCode}`);
      }
    }
  }, [subjectId, departmentId]);

  // // Fetch notes
  // useEffect(() => {
  //   if (departmentId && subjectId) {
  //     const storedNotes = localStorage.getItem(`notes-${departmentId}-${subjectId}`);
  //     const filteredMockNotes = notes.filter(note => 
  //       note.subject === subjectId && note.department === departmentId
  //     );
      
  //     if (storedNotes) {
  //       try {
  //         const parsedNotes = JSON.parse(storedNotes);
  //         setLocalNotes([...filteredMockNotes, ...parsedNotes]);
  //       } catch (e) {
  //         console.error('Error parsing stored notes:', e);
  //         setLocalNotes(filteredMockNotes);
  //       }
  //     } else {
  //       setLocalNotes(filteredMockNotes);
  //     }
  //   }
  // }, [departmentId, subjectId]);

  const handleUploadSuccess = (uploadedNote: Note) => {
    const updatedNotes = [...localNotes, uploadedNote];
    // setLocalNotes(updatedNotes);
    
    const userNotes = updatedNotes.filter(note => 
      !notes.some(mockNote => mockNote.id === note.id)
    );
    localStorage.setItem(`notes-${departmentId}-${subjectId}`, JSON.stringify(userNotes));
    
    setIsDialogOpen(false);
    toast({
      title: "Upload successful!",
      description: `"${uploadedNote.title}" has been uploaded and is now available.`,
    });
  };

  const handleDownload = (noteTitle: string, noteId: string) => {
    const updatedNotes = localNotes.map(note => 
      note.id === noteId ? { ...note, downloads: note.downloads + 1 } : note
    );
    // setLocalNotes(updatedNotes);

    const userNotes = updatedNotes.filter(note => 
      !localNotes.some(mockNote => mockNote.id === note.id)
    );
    localStorage.setItem(`notes-${departmentId}-${subjectId}`, JSON.stringify(userNotes));

    toast({
      title: "Download started",
      description: `"${noteTitle}" is being downloaded.`,
    });
  };

  if (!department) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Department Not Found</h1>
          <p className="mb-8">The department you're looking for does not exist.</p>
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
            {subjectName}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Browse and download study notes for this subject
          </p>

          <div className="flex justify-center mb-10">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md flex items-center">
                  <FileUp className="mr-2 h-5 w-5" />
                  Upload Notes
                </Button>
              </DialogTrigger>
              <UploadNotesForm 
                subjectId={subjectId || ""}
                departmentId={departmentId || ""}
                subjectName={subjectName} 
                departmentName={department.name}
                onSuccess={handleUploadSuccess}
              />
            </Dialog>
          </div>
        </div>

        <div className="tech-grid relative pb-16">
          <div className="absolute inset-0 tech-dots opacity-30 pointer-events-none"></div>
          {localNotes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {localNotes.map((note) => (
                <div key={note.id} className="relative group">
                  <NoteCard note={note} onDownload={() => handleDownload(note.title, note.id)} />
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
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md flex items-center">
                    <FileUp className="mr-2 h-5 w-5" />
                    Upload Notes
                  </Button>
                </DialogTrigger>
                <UploadNotesForm 
                  subjectId={subjectId || ""}
                  departmentId={departmentId || ""}
                  subjectName={subjectName} 
                  departmentName={department.name}
                  onSuccess={handleUploadSuccess}
                />
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
