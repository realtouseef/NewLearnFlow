
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types";
import { 
  Code, PieChart, Atom, Briefcase, BookOpen, Users, 
  BookMarked, GraduationCap, Microscope, Languages, Palette, Music
} from "lucide-react";

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  const getIconComponent = (iconName: string) => {
    const iconProps = { className: "h-10 w-10 text-learnflow-primary mb-4" };
    
    switch (iconName) {
      case "Code":
        return <Code {...iconProps} />;
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.id} to={`/browse/${category.id}`}>
          <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              {getIconComponent(category.iconName)}
              <h3 className="text-lg font-bold mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
