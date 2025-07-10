
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface SemesterSubjectsProps {
  semesterNumber: number;
  departmentId: string;
}

const SemesterSubjects: React.FC<SemesterSubjectsProps> = ({
  semesterNumber,
  departmentId,
}) => {
  // Define subjects for each semester
  const getSubjects = () => {
    const semesterSubjects = {
      1: [
        {
          id: `${departmentId}-sem1-cs100`,
          name: "CS 100 (3 cr.) – Introduction to Computing",
          description: "Basic concepts of computing and computer systems",
        },
        {
          id: `${departmentId}-sem1-cs106`,
          name: "CS 106 (4 cr.) – Introduction to Computer Programming",
          description: "Fundamentals of programming and problem solving",
        },
        {
          id: `${departmentId}-sem1-mt112`,
          name: "MT 112 – Calculus I",
          description: "Introduction to differential and integral calculus",
        },
        {
          id: `${departmentId}-sem1-ns111`,
          name: "NS 111 (3 cr.) – Applied Physics",
          description: "Physics concepts relevant to computer science",
        },
        {
          id: `${departmentId}-sem1-ss104`,
          name: "SS 104 – English I (Comprehension)",
          description: "English language skills for academic and professional communication",
        },
        {
          id: `${departmentId}-sem1-ss108`,
          name: "SS 108 – Islamic Studies",
          description: "Study of Islamic principles and values",
        },
      ],
      2: [
        {
          id: `${departmentId}-sem2-cs200`,
          name: "CS 200 (4 cr.) – Object‑Oriented Programming",
          description: "Principles of object-oriented programming and design",
        },
        {
          id: `${departmentId}-sem2-ee200`,
          name: "EE 200 (4 cr.) – Digital Logic Design",
          description: "Fundamentals of digital circuits and logic design",
        },
        {
          id: `${departmentId}-sem2-mt114`,
          name: "MT 114 – Calculus II",
          description: "Advanced calculus concepts and applications",
        },
        {
          id: `${departmentId}-sem2-ss118`,
          name: "SS 118 – Pakistan Studies",
          description: "History, culture, and development of Pakistan",
        },
        {
          id: `${departmentId}-sem2-ss203`,
          name: "SS 203 – English II",
          description: "Advanced English language and communication skills",
        },
      ],
      3: [
        {
          id: `${departmentId}-sem3-cs210`,
          name: "CS 210 – Data Structures & Algorithms",
          description: "Fundamental data structures and algorithmic techniques",
        },
        {
          id: `${departmentId}-sem3-cs251`,
          name: "CS 251 – Computer Organization & Assembly Language",
          description: "Computer architecture and assembly language programming",
        },
        {
          id: `${departmentId}-sem3-mt221`,
          name: "MT 221 – Linear Algebra",
          description: "Vector spaces, matrices, and linear transformations",
        },
        {
          id: `${departmentId}-sem3-se242`,
          name: "SE 242 – Software Engineering",
          description: "Software development methodologies and practices",
        },
        {
          id: `${departmentId}-sem3-ss216`,
          name: "SS 216 – Introduction to Sociology",
          description: "Basic concepts of sociology and social structures",
        },
      ],
      4: [
        {
          id: `${departmentId}-sem4-cs213`,
          name: "CS 213 – Database Management Systems",
          description: "Design and implementation of database systems",
        },
        {
          id: `${departmentId}-sem4-cs221`,
          name: "CS 221 – Web Programming Languages",
          description: "Modern web development technologies and frameworks",
        },
        {
          id: `${departmentId}-sem4-cs304`,
          name: "CS 304 – Analysis of Algorithms",
          description: "Mathematical analysis of algorithm efficiency",
        },
        {
          id: `${departmentId}-sem4-mg100`,
          name: "MG 100 – Fundamentals of Accounting",
          description: "Basic principles of accounting and financial management",
        },
        {
          id: `${departmentId}-sem4-ss218`,
          name: "SS 218 – Introduction to Psychology",
          description: "Basic concepts of human behavior and mental processes",
        },
      ],
      5: [
        {
          id: `${departmentId}-sem5-cs208`,
          name: "CS 208 – Modern Programming Languages",
          description: "Contemporary programming paradigms and languages",
        },
        {
          id: `${departmentId}-sem5-cs310`,
          name: "CS 310 – Automata Theory",
          description: "Formal languages, automata, and computational theory",
        },
        {
          id: `${departmentId}-sem5-cs313`,
          name: "CS 313 – Operating System Concepts",
          description: "Principles of operating system design and implementation",
        },
        {
          id: `${departmentId}-sem5-cs342`,
          name: "CS 342 – Visual Programming",
          description: "GUI development and visual programming environments",
        },
        {
          id: `${departmentId}-sem5-mt201`,
          name: "MT 201 – Discrete Structures",
          description: "Mathematical structures for computer science",
        },
        {
          id: `${departmentId}-sem5-ss401`,
          name: "SS 401 – Research Methodology & Professional Ethics",
          description: "Research methods and ethical considerations in computing",
        },
      ],
      6: [
        {
          id: `${departmentId}-sem6-cs306`,
          name: "CS 306 (2 cr.) – Computer Networks",
          description: "Network protocols, architectures, and communication",
        },
        {
          id: `${departmentId}-sem6-cs307`,
          name: "CS 307 (4 cr.) – Artificial Intelligence",
          description: "AI algorithms, machine learning, and intelligent systems",
        },
        {
          id: `${departmentId}-sem6-cs375`,
          name: "CS 375 – Mobile Application Development",
          description: "Development of mobile applications for various platforms",
        },
        {
          id: `${departmentId}-sem6-mt301`,
          name: "MT 301 – Probability & Statistics",
          description: "Statistical methods and probability theory",
        },
        {
          id: `${departmentId}-sem6-ss211`,
          name: "SS 211 – English III (Technical Report Writing)",
          description: "Technical writing and professional communication",
        },
      ],
      7: [
        {
          id: `${departmentId}-sem7-cs300`,
          name: "CS 300 – Data Science",
          description: "Data analysis, visualization, and machine learning techniques",
        },
        {
          id: `${departmentId}-sem7-cs401`,
          name: "CS 401 – Compiler Construction",
          description: "Design and implementation of programming language compilers",
        },
        {
          id: `${departmentId}-sem7-cs422`,
          name: "CS 422 – Distributed & Parallel Computing",
          description: "Distributed systems and parallel programming paradigms",
        },
        {
          id: `${departmentId}-sem7-mt302`,
          name: "MT 302 (3 cr.) – Numerical Computing",
          description: "Numerical methods and computational mathematics",
        },
      ],
      8: [
        {
          id: `${departmentId}-sem8-dip`,
          name: "Digital Image Processing",
          description: "Techniques for processing and analyzing digital images",
        },
        {
          id: `${departmentId}-sem8-entrepreneurship`,
          name: "Entrepreneurship",
          description: "Business development and entrepreneurial skills",
        },
        {
          id: `${departmentId}-sem8-infosec`,
          name: "Information Security",
          description: "Security principles and practices for information systems",
        },
      ],
    };

    return semesterSubjects[semesterNumber as keyof typeof semesterSubjects] || [];
  };

  const subjects = getSubjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {subjects.map((subject) => (
        <Link
          key={subject.id}
          to={`/departments/${departmentId}/subjects/${subject.id}`}
          className="block transition-transform hover:-translate-y-1"
        >
          <Card className="h-full border-t-4 border-learnflow-primary hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <FileText className="h-4 w-4 text-learnflow-primary" />
                </div>
                <h3 className="font-semibold text-sm leading-tight">{subject.name}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {subject.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default SemesterSubjects;
