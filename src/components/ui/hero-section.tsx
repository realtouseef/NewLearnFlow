
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative bg-gradient-to-br from-learnflow-primary to-learnflow-accent text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Share Knowledge, Earn Rewards
        </h1>
        <p className="mt-6 text-xl max-w-2xl mx-auto">
          LearnFlow is where students share and monetize their study notes. 
          Access top-quality notes or upload your own to help others succeed.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          {!isAuthenticated ? (
            <>
              <Button
                onClick={() => navigate("/signup")}
                className="px-6 py-6 text-lg bg-white text-learnflow-primary hover:bg-gray-100"
              >
                Join LearnFlow
              </Button>
              <Button
                onClick={() => navigate("/browse")}
                variant="outline"
                className="px-6 py-6 text-lg bg-transparent border-white text-white hover:bg-white/10"
              >
                Browse Notes
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => navigate("/upload")}
                className="px-6 py-6 text-lg bg-white text-learnflow-primary hover:bg-gray-100"
              >
                Upload Notes
              </Button>
              <Button
                onClick={() => navigate("/browse")}
                variant="outline"
                className="px-6 py-6 text-lg bg-transparent border-white text-white hover:bg-white/10"
              >
                Browse Notes
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
