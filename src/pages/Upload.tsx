import React, { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { SubscriptionTier } from "@/types";
import { departments } from "@/data/mockData";
import { Upload, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [semester, setSemester] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [tier, setTier] = useState<SubscriptionTier>(SubscriptionTier.FREE);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Generate semesters array (1-8)
  const semesters = Array.from({ length: 8 }, (_, i) => ({
    id: String(i + 1),
    name: `Semester ${i + 1}`,
  }));

  // Generate subjects based on selected department and semester
  const getSubjects = () => {
    if (!departmentId || !semester) return [];
    
    // Define subjects for each semester (matching the curriculum structure)
    const semesterSubjects: Record<number, Array<{id: string, name: string}>> = {
      1: [
        {
          id: `${departmentId}-sem1-cs100`,
          name: "CS 100 (3 cr.) – Introduction to Computing",
        },
        {
          id: `${departmentId}-sem1-cs106`,
          name: "CS 106 (4 cr.) – Introduction to Computer Programming",
        },
        {
          id: `${departmentId}-sem1-mt112`,
          name: "MT 112 – Calculus I",
        },
        {
          id: `${departmentId}-sem1-ns111`,
          name: "NS 111 (3 cr.) – Applied Physics",
        },
        {
          id: `${departmentId}-sem1-ss104`,
          name: "SS 104 – English I (Comprehension)",
        },
        {
          id: `${departmentId}-sem1-ss108`,
          name: "SS 108 – Islamic Studies",
        },
      ],
      2: [
        {
          id: `${departmentId}-sem2-cs200`,
          name: "CS 200 (4 cr.) – Object‑Oriented Programming",
        },
        {
          id: `${departmentId}-sem2-ee200`,
          name: "EE 200 (4 cr.) – Digital Logic Design",
        },
        {
          id: `${departmentId}-sem2-mt114`,
          name: "MT 114 – Calculus II",
        },
        {
          id: `${departmentId}-sem2-ss118`,
          name: "SS 118 – Pakistan Studies",
        },
        {
          id: `${departmentId}-sem2-ss203`,
          name: "SS 203 – English II",
        },
      ],
      3: [
        {
          id: `${departmentId}-sem3-cs210`,
          name: "CS 210 – Data Structures & Algorithms",
        },
        {
          id: `${departmentId}-sem3-cs251`,
          name: "CS 251 – Computer Organization & Assembly Language",
        },
        {
          id: `${departmentId}-sem3-mt221`,
          name: "MT 221 – Linear Algebra",
        },
        {
          id: `${departmentId}-sem3-se242`,
          name: "SE 242 – Software Engineering",
        },
        {
          id: `${departmentId}-sem3-ss216`,
          name: "SS 216 – Introduction to Sociology",
        },
      ],
      4: [
        {
          id: `${departmentId}-sem4-cs213`,
          name: "CS 213 – Database Management Systems",
        },
        {
          id: `${departmentId}-sem4-cs221`,
          name: "CS 221 – Web Programming Languages",
        },
        {
          id: `${departmentId}-sem4-cs304`,
          name: "CS 304 – Analysis of Algorithms",
        },
        {
          id: `${departmentId}-sem4-mg100`,
          name: "MG 100 – Fundamentals of Accounting",
        },
        {
          id: `${departmentId}-sem4-ss218`,
          name: "SS 218 – Introduction to Psychology",
        },
      ],
      5: [
        {
          id: `${departmentId}-sem5-cs208`,
          name: "CS 208 – Modern Programming Languages",
        },
        {
          id: `${departmentId}-sem5-cs310`,
          name: "CS 310 – Automata Theory",
        },
        {
          id: `${departmentId}-sem5-cs313`,
          name: "CS 313 – Operating System Concepts",
        },
        {
          id: `${departmentId}-sem5-cs342`,
          name: "CS 342 – Visual Programming",
        },
        {
          id: `${departmentId}-sem5-mt201`,
          name: "MT 201 – Discrete Structures",
        },
        {
          id: `${departmentId}-sem5-ss401`,
          name: "SS 401 – Research Methodology & Professional Ethics",
        },
      ],
      6: [
        {
          id: `${departmentId}-sem6-cs306`,
          name: "CS 306 (2 cr.) – Computer Networks",
        },
        {
          id: `${departmentId}-sem6-cs307`,
          name: "CS 307 (4 cr.) – Artificial Intelligence",
        },
        {
          id: `${departmentId}-sem6-cs375`,
          name: "CS 375 – Mobile Application Development",
        },
        {
          id: `${departmentId}-sem6-mt301`,
          name: "MT 301 – Probability & Statistics",
        },
        {
          id: `${departmentId}-sem6-ss211`,
          name: "SS 211 – English III (Technical Report Writing)",
        },
      ],
      7: [
        {
          id: `${departmentId}-sem7-cs300`,
          name: "CS 300 – Data Science",
        },
        {
          id: `${departmentId}-sem7-cs401`,
          name: "CS 401 – Compiler Construction",
        },
        {
          id: `${departmentId}-sem7-cs422`,
          name: "CS 422 – Distributed & Parallel Computing",
        },
        {
          id: `${departmentId}-sem7-mt302`,
          name: "MT 302 (3 cr.) – Numerical Computing",
        },
      ],
      8: [
        {
          id: `${departmentId}-sem8-dip`,
          name: "Digital Image Processing",
        },
        {
          id: `${departmentId}-sem8-entrepreneurship`,
          name: "Entrepreneurship",
        },
        {
          id: `${departmentId}-sem8-infosec`,
          name: "Information Security",
        },
      ],
    };

    const semesterNumber = parseInt(semester);
    return semesterSubjects[semesterNumber] || [];
  };

  // Reset dependent fields when parent selection changes
  const handleDepartmentChange = (value: string) => {
    setDepartmentId(value);
    setSemester("");
    setSubjectId("");
  };

  const handleSemesterChange = (value: string) => {
    setSemester(value);
    setSubjectId("");
  };

  React.useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to upload notes.",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [isAuthenticated, navigate, toast]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Check file size (10MB limit)
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Check file size and type for preview (2MB limit, image only)
      if (selectedFile.size > 2 * 1024 * 1024) {
        toast({
          title: "Preview file too large",
          description: "Please select a preview image smaller than 2MB",
          variant: "destructive",
        });
        return;
      }
      if (!selectedFile.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Preview must be an image file",
          variant: "destructive",
        });
        return;
      }
      setPreview(selectedFile);
    }
  };

  const validateForm = () => {
    if (!title.trim()) {
      toast({
        title: "Missing title",
        description: "Please provide a title for your notes",
        variant: "destructive",
      });
      return false;
    }
    if (!description.trim()) {
      toast({
        title: "Missing description",
        description: "Please provide a description for your notes",
        variant: "destructive",
      });
      return false;
    }
    if (!departmentId) {
      toast({
        title: "Missing department",
        description: "Please select a department",
        variant: "destructive",
      });
      return false;
    }
    if (!semester) {
      toast({
        title: "Missing semester",
        description: "Please select a semester",
        variant: "destructive",
      });
      return false;
    }
    if (!subjectId) {
      toast({
        title: "Missing subject",
        description: "Please select a subject",
        variant: "destructive",
      });
      return false;
    }
    if (!file) {
      toast({
        title: "Missing file",
        description: "Please upload your notes file",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      setIsUploading(true);
      
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast({
        title: "Notes uploaded successfully",
        description: "Your notes have been uploaded and are now available for others to view.",
      });
      
      // Reset form
      setTitle("");
      setDescription("");
      setDepartmentId("");
      setSemester("");
      setSubjectId("");
      setTier(SubscriptionTier.FREE);
      setFile(null);
      setPreview(null);
      
      // Redirect to browse page
      navigate("/browse");
    } catch (error) {
      console.error("Upload failed:", error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your notes. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  if (!isAuthenticated) {
    return null; // We'll redirect via the useEffect
  }

  const canUploadPremium = user?.subscription !== SubscriptionTier.FREE;
  const canUploadElite = user?.subscription === SubscriptionTier.ELITE;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Upload Study Notes</h1>
        
        {!canUploadPremium && (
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Subscription Notice</AlertTitle>
            <AlertDescription>
              You are on the Free tier. Upgrade to Premium or Elite to upload paid content and earn rewards.
            </AlertDescription>
          </Alert>
        )}
        
        <Card>
          <CardHeader>
            <CardTitle>Upload Your Notes</CardTitle>
            <CardDescription>
              Share your knowledge with other students. Quality notes have higher chances of downloads.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Calculus 101 - Integration Techniques"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide a detailed description of what's covered in your notes"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select value={departmentId} onValueChange={handleDepartmentChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.id} value={dept.id}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="semester">Semester</Label>
                <Select 
                  value={semester} 
                  onValueChange={handleSemesterChange}
                  disabled={!departmentId}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {semesters.map((sem) => (
                      <SelectItem key={sem.id} value={sem.id}>
                        {sem.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select 
                  value={subjectId} 
                  onValueChange={setSubjectId}
                  disabled={!semester}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {getSubjects().map((sub) => (
                      <SelectItem key={sub.id} value={sub.id}>
                        {sub.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              
              <div className="space-y-4">
                <Label>Access Tier</Label>
                <RadioGroup value={tier} onValueChange={(value) => setTier(value as SubscriptionTier)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={SubscriptionTier.FREE} id="free" />
                    <Label htmlFor="free" className="cursor-pointer">Free (Available to everyone)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={SubscriptionTier.PREMIUM} 
                      id="premium" 
                      disabled={!canUploadPremium}
                    />
                    <Label 
                      htmlFor="premium" 
                      className={`cursor-pointer ${!canUploadPremium ? "text-gray-400" : ""}`}
                    >
                      Premium (Requires Premium subscription)
                      {!canUploadPremium && " - Upgrade to enable"}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={SubscriptionTier.ELITE} 
                      id="elite" 
                      disabled={!canUploadElite}
                    />
                    <Label 
                      htmlFor="elite" 
                      className={`cursor-pointer ${!canUploadElite ? "text-gray-400" : ""}`}
                    >
                      Elite (Requires Elite subscription)
                      {!canUploadElite && " - Upgrade to enable"}
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="file">Upload Note File</Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-learnflow-primary hover:text-learnflow-primary/90"
                      >
                        <span>Upload a file</span>
                        <Input
                          id="file"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.md"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX, PPT, PPTX, TXT, MD up to 10MB
                    </p>
                    {file && (
                      <p className="text-sm text-green-600 font-medium">
                        Selected: {file.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="preview">Upload Preview Image (Optional)</Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="preview"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-learnflow-primary hover:text-learnflow-primary/90"
                      >
                        <span>Upload a preview</span>
                        <Input
                          id="preview"
                          type="file"
                          className="sr-only"
                          onChange={handlePreviewChange}
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 2MB
                    </p>
                    {preview && (
                      <p className="text-sm text-green-600 font-medium">
                        Selected: {preview.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <p className="text-sm text-gray-500 w-full text-center">
              By uploading, you confirm that these notes don't violate any copyright or academic integrity policies.
            </p>
            <Button
              onClick={handleSubmit}
              className="w-full bg-learnflow-primary hover:bg-learnflow-primary/90"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Notes"}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default UploadPage;
