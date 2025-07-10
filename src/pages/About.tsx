import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <BookOpen className="h-8 w-8 text-learnflow-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-learnflow-accent bg-clip-text text-transparent">
            About LearnFlow
          </h1>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            LearnFlow is a modern platform designed to connect students, teachers, and academic professionals through knowledge sharing. Our mission is to make education accessible and collaborative.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            We envision a world where knowledge flows freely between academic institutions, where students can easily access quality educational materials, and where educators can share their expertise beyond classroom walls.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Founded in 2024, LearnFlow began as a project to solve the problem of scattered educational resources. We noticed that students were struggling to find comprehensive, reliable study materials, and educators lacked an efficient platform to share their knowledge.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Today, we're proud to offer a robust platform that serves thousands of students and educators, making the flow of academic knowledge smoother than ever before.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Whether you're a student seeking quality notes, or an educator wanting to share your knowledge, LearnFlow welcomes you. Join our growing community and be part of the educational revolution.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;