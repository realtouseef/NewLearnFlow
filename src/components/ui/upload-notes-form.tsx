import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileUp, Loader2 } from "lucide-react";
import { SubscriptionTier, Note } from "@/types";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUploadFile } from "@/hooks/use-upload-file";
import { useCreateNote } from "@/hooks/use-create-notes";

interface UploadNotesFormProps {
  subjectId: string;
  departmentId: string;
  subjectName: string;
  departmentName: string;
  onSuccess: (note: Note) => void;
}

const UploadNotesForm: React.FC<UploadNotesFormProps> = ({
  subjectId,
  departmentId,
  subjectName,
  departmentName,
  onSuccess,
}) => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tier, setTier] = useState<SubscriptionTier>(SubscriptionTier.FREE);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const uploadFileMutation = useUploadFile();
  const createNoteMutation = useCreateNote();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      toast({
        title: "File required",
        description: "Please select a file to upload",
        variant: "destructive",
      });
      return;
    }

    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please enter a title for your notes",
        variant: "destructive",
      });
      return;
    }

    if (!description.trim()) {
      toast({
        title: "Description required",
        description: "Please enter a description for your notes",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      const fileForm = new FormData();
      fileForm.append("file", file!);
      const fileRes = await uploadFileMutation.mutateAsync(fileForm);
      const fileData = fileRes.data;

      // Step 2: Prepare note metadata
      const payload = {
        title: title.trim(),
        description: description.trim(),
        subject: subjectId,
        department: departmentId,
        tier,
        fileUrl: fileData.fileUrl,
        previewUrl: fileData.previewUrl,
        fileName: file.name,
        fileType: file.name.split(".").pop()?.toUpperCase() || "PDF",
        fileSize: file.size,
        author: "Ibrahim",
      };

      const createdNote = await createNoteMutation.mutateAsync(payload);

      setUploading(false);

      // Reset form
      setTitle("");
      setDescription("");
      setTier(SubscriptionTier.FREE);
      setFile(null);

      // Call success callback with the new note
      onSuccess(createdNote);
    } catch (error) {
      console.error("Upload error:", error);
      setUploading(false);
      toast({
        title: "Upload failed",
        description:
          "There was an error uploading your notes. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <DialogContent className="sm:max-w-[525px]">
      <DialogHeader>
        <DialogTitle>Upload New Notes</DialogTitle>
        <DialogDescription>
          Share your knowledge with others by uploading your notes for{" "}
          {subjectName} in {departmentName}.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleUpload} className="space-y-4 pt-4">
        <div className="space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter a descriptive title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Briefly describe what these notes cover..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[80px]"
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="tier">Subscription Tier</Label>
          <Select
            value={tier}
            onValueChange={(value) => setTier(value as SubscriptionTier)}
            required
          >
            <SelectTrigger id="tier">
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
                <p className="text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
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
                  <p className="font-medium">
                    Drag and drop or click to upload
                  </p>
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
                  onClick={() => document.getElementById("file")?.click()}
                >
                  Browse files
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            disabled={uploading}
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...
              </>
            ) : (
              "Upload Notes"
            )}
          </Button>
        </div>
      </form>
    </DialogContent>
  );
};

export default UploadNotesForm;
