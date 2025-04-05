
import React from "react";
import { Upload, Download, DollarSign, Search } from "lucide-react";

const features = [
  {
    name: "Upload Your Notes",
    description:
      "Share your knowledge by uploading your study notes, summaries, and guides in various formats.",
    icon: <Upload className="h-10 w-10 text-learnflow-primary" />
  },
  {
    name: "Access Quality Content",
    description:
      "Browse and download thousands of high-quality notes from students across different subjects and universities.",
    icon: <Download className="h-10 w-10 text-learnflow-primary" />
  },
  {
    name: "Earn From Your Knowledge",
    description:
      "Monetize your study materials through our premium and elite subscription tiers.",
    icon: <DollarSign className="h-10 w-10 text-learnflow-primary" />
  },
  {
    name: "Find Exactly What You Need",
    description:
      "Our smart search and categorization makes it easy to find relevant notes for your courses.",
    icon: <Search className="h-10 w-10 text-learnflow-primary" />
  }
];

const FeatureSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg text-learnflow-primary font-semibold">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to share and access study materials
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            LearnFlow connects students who create exceptional study materials with those who need them.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
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
