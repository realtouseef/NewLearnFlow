import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { departments } from "@/data/mockData";
import { ChevronLeft, Layers } from "lucide-react";
import SemesterSubjects from "@/components/ui/semester-subjects";

const DepartmentSubjects = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const [localDepartment, setLocalDepartment] = useState(
    departments.find(d => d.id === departmentId)
  );
  
  useEffect(() => {
    setLocalDepartment(departments.find(d => d.id === departmentId));
  }, [departmentId]);

  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);
  
  if (!localDepartment) {
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
            {localDepartment.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {localDepartment.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {semesters.map((semester) => (
              <AccordionItem
                key={semester}
                value={`semester-${semester}`}
                className="border rounded-lg bg-white dark:bg-gray-800 shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-xl font-semibold">
                    Semester {semester}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-4">
                  <SemesterSubjects 
                    semesterNumber={semester} 
                    departmentId={departmentId || ''} 
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentSubjects;