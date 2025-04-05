
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SubscriptionTier, Note } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { Download, Star, FileText, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const isAccessible = () => {
    if (!user) return note.tier === SubscriptionTier.FREE;
    
    switch (user.subscription) {
      case SubscriptionTier.FREE:
        return note.tier === SubscriptionTier.FREE;
      case SubscriptionTier.PREMIUM:
        return note.tier === SubscriptionTier.FREE || note.tier === SubscriptionTier.PREMIUM;
      case SubscriptionTier.ELITE:
        return true;
      default:
        return false;
    }
  };

  const getTierBadgeColor = (tier: SubscriptionTier) => {
    switch (tier) {
      case SubscriptionTier.FREE:
        return "bg-gray-500";
      case SubscriptionTier.PREMIUM:
        return "bg-learnflow-primary";
      case SubscriptionTier.ELITE:
        return "bg-learnflow-accent";
      default:
        return "bg-gray-500";
    }
  };

  const handleDownload = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to download this note.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (!isAccessible()) {
      toast({
        title: "Subscription Required",
        description: `You need a ${note.tier} subscription to access this note.`,
        variant: "destructive",
      });
      navigate("/subscriptions");
      return;
    }

    toast({
      title: "Download Started",
      description: "Your note is now downloading.",
    });
  };

  return (
    <Card className="note-card overflow-hidden h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-40 bg-gray-100">
          {note.previewUrl ? (
            <img
              src={note.previewUrl}
              alt={note.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FileText className="h-16 w-16 text-gray-400" />
            </div>
          )}
          <Badge
            className={`absolute top-2 right-2 ${getTierBadgeColor(note.tier)}`}
          >
            {note.tier}
          </Badge>
          {!isAccessible() && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Lock className="h-12 w-12 text-white opacity-70" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg truncate">{note.title}</h3>
          <Badge variant="outline" className="ml-2 whitespace-nowrap">
            {note.fileType}
          </Badge>
        </div>
        <p className="text-sm text-gray-500 mt-1">{note.subject}</p>
        <p className="text-sm mt-2 line-clamp-2">{note.description}</p>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{note.rating}</span>
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Download className="h-4 w-4 mr-1" />
            <span>{note.downloads}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <div className="w-full">
          <p className="text-xs text-gray-500 mb-2">
            By {note.author} • {new Date(note.uploadDate).toLocaleDateString()}
          </p>
          <Button
            onClick={handleDownload}
            className={`w-full ${
              isAccessible()
                ? "bg-learnflow-primary hover:bg-learnflow-primary/90"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            disabled={!isAccessible()}
          >
            {isAccessible() ? (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download
              </>
            ) : (
              <>
                <Lock className="mr-2 h-4 w-4" />
                {`Subscribe to ${note.tier}`}
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
