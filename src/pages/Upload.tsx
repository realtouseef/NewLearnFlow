
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
import { categories } from "@/data/mockData";
import { Upload, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [tier, setTier] = useState<SubscriptionTier>(SubscriptionTier.FREE);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
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
    if (!subject) {
      toast({
        title: "Missing subject",
        description: "Please select a subject for your notes",
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
      setSubject("");
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
                <Label htmlFor="subject">Subject</Label>
                <Select value={subject} onValueChange={setSubject} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
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
