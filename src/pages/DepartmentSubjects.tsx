
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import SubjectGrid from "@/components/ui/subject-grid";
import { Button } from "@/components/ui/button";
import { departments } from "@/data/mockData";
import { ChevronLeft, Layers } from "lucide-react";

const DepartmentSubjects = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  
  const department = departments.find(d => d.id === departmentId);
  
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
            <Link to="/departments" className="flex items-center text-learnflow-primary hover:text-learnflow-primary/80">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Departments
            </Link>
          </Button>
        </div>
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <Layers className="h-8 w-8 text-learnflow-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-learnflow-accent bg-clip-text text-transparent">
            {department.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {department.description}
          </p>
        </div>
        
        <div className="tech-grid relative pb-16">
          <div className="absolute inset-0 tech-dots opacity-30 pointer-events-none"></div>
          <SubjectGrid subjects={department.subjects} departmentId={departmentId || ''} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentSubjects;
