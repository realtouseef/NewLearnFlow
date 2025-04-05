
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Subject } from "@/types";
import { 
  Code, PieChart, Atom, Briefcase, BookOpen, Users, 
  BookMarked, GraduationCap, Microscope, Languages, Palette, Music,
  Brain, Shield, GitBranch, BarChart, PencilRuler, Database, Network, Server,
  LineChart, MessageSquare, Camera, Puzzle, FileBadge, Repeat, Lock, Globe,
  Search, Sigma
} from "lucide-react";

interface SubjectGridProps {
  subjects: Subject[];
  departmentId: string;
}

const SubjectGrid: React.FC<SubjectGridProps> = ({ subjects, departmentId }) => {
  const getIconComponent = (iconName: string) => {
    const iconProps = { className: "h-12 w-12 text-learnflow-primary mb-3" };
    
    switch (iconName) {
      case "Code":
        return <Code {...iconProps} />;
      case "Brain":
        return <Brain {...iconProps} />;
      case "GitBranch":
        return <GitBranch {...iconProps} />;
      case "Shield":
        return <Shield {...iconProps} />;
      case "BarChart":
        return <BarChart {...iconProps} />;
      case "Network":
        return <Network {...iconProps} />;
      case "Server":
        return <Server {...iconProps} />;
      case "Database":
        return <Database {...iconProps} />;
      case "LineChart":
        return <LineChart {...iconProps} />;
      case "MessageSquare":
        return <MessageSquare {...iconProps} />;
      case "Camera":
        return <Camera {...iconProps} />;
      case "Puzzle":
        return <Puzzle {...iconProps} />;
      case "FileBadge":
        return <FileBadge {...iconProps} />;
      case "Repeat":
        return <Repeat {...iconProps} />;
      case "Lock":
        return <Lock {...iconProps} />;
      case "Globe":
        return <Globe {...iconProps} />;
      case "Search":
        return <Search {...iconProps} />;
      case "Sigma":
        return <Sigma {...iconProps} />;
      // Fallback to existing icons
      case "PieChart":
        return <PieChart {...iconProps} />;
      case "Atom":
        return <Atom {...iconProps} />;
      case "Briefcase":
        return <Briefcase {...iconProps} />;
      case "BookOpen":
        return <BookOpen {...iconProps} />;
      case "Users":
        return <Users {...iconProps} />;
      case "BookMarked":
        return <BookMarked {...iconProps} />;
      case "GraduationCap":
        return <GraduationCap {...iconProps} />;
      case "Microscope":
        return <Microscope {...iconProps} />;
      case "Languages":
        return <Languages {...iconProps} />;
      case "Palette":
        return <Palette {...iconProps} />;
      case "Music":
        return <Music {...iconProps} />;
      default:
        return <BookOpen {...iconProps} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subjects.map((subject) => (
        <Link key={subject.id} to={`/departments/${departmentId}/subjects/${subject.id}`}>
          <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-learnflow-primary to-learnflow-accent"></div>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full p-3 bg-blue-50 dark:bg-blue-900/20 mb-4 transform transition-transform group-hover:rotate-12">
                {getIconComponent(subject.iconName)}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-learnflow-primary transition-colors">
                {subject.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {subject.description}
              </p>
              <div className="mt-3 text-learnflow-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                <span className="font-medium">View Notes</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default SubjectGrid;
