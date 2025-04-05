
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { BookOpen, Upload, Download, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative overflow-hidden">
      {/* Background with mesh gradient and animated patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-learnflow-primary/90 via-learnflow-accent/80 to-learnflow-primary/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0wIDEyaC02VjMwaDZ2MTJ6TTE4IDMwaC02VjBoNnYzMHptMCAxMmgtNlYzMGg2djEyek00OCAzMGgtNlYwaDZ2MzB6bTAgMTJoLTZWMzBoNnYxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:max-w-xl text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Share Knowledge,</span>
              <span className="block text-white/90">Earn Rewards</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl">
              LearnFlow is where students share and monetize their study notes. 
              Access top-quality notes or upload your own to help others succeed.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {!isAuthenticated ? (
                <>
                  <Button
                    onClick={() => navigate("/signup")}
                    className="px-8 py-6 text-lg bg-white text-learnflow-primary hover:bg-white/90 shadow-lg shadow-learnflow-primary/20 rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    Join LearnFlow
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => navigate("/browse")}
                    variant="outline"
                    className="px-8 py-6 text-lg bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    Browse Notes
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => navigate("/upload")}
                    className="px-8 py-6 text-lg bg-white text-learnflow-primary hover:bg-white/90 shadow-lg shadow-learnflow-primary/20 rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Notes
                  </Button>
                  <Button
                    onClick={() => navigate("/browse")}
                    variant="outline"
                    className="px-8 py-6 text-lg bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Browse Notes
                  </Button>
                </>
              )}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Abstract tech illustration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-70">
                <div className="w-64 h-64 rounded-full bg-white/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
                <div className="absolute w-48 h-48 rounded-full bg-white/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute w-32 h-32 rounded-full bg-white/30 animate-pulse" style={{ animationDuration: '5s' }}></div>
              </div>
              
              {/* Notes graphical representation */}
              <div className="relative transform transition-all hover:scale-105 duration-700">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl rotate-3 transform transition-transform duration-500">
                  <div className="w-full h-32 bg-white/20 rounded-lg mb-4"></div>
                  <div className="w-3/4 h-4 bg-white/20 rounded-full mb-3"></div>
                  <div className="w-1/2 h-4 bg-white/20 rounded-full"></div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl -rotate-2 transform absolute top-6 -left-6 transition-transform duration-500">
                  <div className="w-full h-32 bg-white/20 rounded-lg mb-4"></div>
                  <div className="w-3/4 h-4 bg-white/20 rounded-full mb-3"></div>
                  <div className="w-1/2 h-4 bg-white/20 rounded-full"></div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl rotate-6 transform absolute -top-6 left-6 transition-transform duration-500">
                  <div className="w-full h-32 bg-white/20 rounded-lg mb-4"></div>
                  <div className="w-3/4 h-4 bg-white/20 rounded-full mb-3"></div>
                  <div className="w-1/2 h-4 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="white" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,224C672,235,768,245,864,250.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
