
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import DepartmentGrid from "@/components/ui/department-grid";
import { departments } from "@/data/mockData";
import { BookOpen } from "lucide-react";

const Departments = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <BookOpen className="h-8 w-8 text-learnflow-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-learnflow-accent bg-clip-text text-transparent">
            Academic Departments
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our specialized technical departments and discover notes tailored to your field of study
          </p>
        </div>
        
        <div className="tech-grid relative pb-16">
          <div className="absolute inset-0 tech-dots opacity-30 pointer-events-none"></div>
          <DepartmentGrid departments={departments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Departments;
