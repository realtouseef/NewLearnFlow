
import React from "react";
import { Upload, Download, DollarSign, Search, BookOpen, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    name: "Upload Your Notes",
    description:
      "Share your knowledge by uploading your study notes, summaries, and guides in various formats including PDF, DOCX, and more.",
    icon: <Upload className="h-10 w-10 text-white" />,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    name: "Access Quality Content",
    description:
      "Browse and download thousands of high-quality notes from students across different subjects and universities.",
    icon: <Download className="h-10 w-10 text-white" />,
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    name: "Earn From Your Knowledge",
    description:
      "Monetize your study materials through our premium and elite subscription tiers and receive payments directly.",
    icon: <DollarSign className="h-10 w-10 text-white" />,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    name: "Find Exactly What You Need",
    description:
      "Our smart search and categorization makes it easy to find relevant notes for your courses and study goals.",
    icon: <Search className="h-10 w-10 text-white" />,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "Academic Integrity",
    description:
      "All content is verified to ensure academic integrity and adherence to educational standards.",
    icon: <ShieldCheck className="h-10 w-10 text-white" />,
    gradient: "from-red-500 to-rose-600"
  },
  {
    name: "Track Your Progress",
    description:
      "Monitor your uploads, downloads, earnings and engagement metrics with our comprehensive analytics.",
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    gradient: "from-sky-500 to-cyan-600"
  },
  {
    name: "Fast Performance",
    description:
      "Our platform is optimized for speed and efficiency, ensuring quick access to the materials you need.",
    icon: <Zap className="h-10 w-10 text-white" />,
    gradient: "from-lime-500 to-green-600"
  },
  {
    name: "Extensive Library",
    description:
      "Access a growing collection of study notes from various disciplines, continuously updated by our community.",
    icon: <BookOpen className="h-10 w-10 text-white" />,
    gradient: "from-fuchsia-500 to-violet-600"
  }
];

const FeatureSection = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-learnflow-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to share and access study materials
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            LearnFlow connects students who create exceptional study materials with those who need them.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-90 blur-sm group-hover:blur-md group-hover:scale-105 transition-all duration-300`}></div>
                <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform group-hover:translate-y-[-5px] group-hover:shadow-xl">
                  <div className={`w-full h-3 bg-gradient-to-r ${feature.gradient}`}></div>
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-5 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
