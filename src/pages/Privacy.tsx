import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-learnflow-accent bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Last updated: April 7, 2025
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              LearnFlow ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing or using LearnFlow, you consent to the practices described in this policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">We may collect several types of information, including:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, academic institution, profile picture.</li>
              <li><strong>Account Information:</strong> Username, password, account preferences.</li>
              <li><strong>Content:</strong> Notes, documents, and other materials you upload, download, or interact with.</li>
              <li><strong>Usage Data:</strong> Information about how you use our platform, features accessed, time spent.</li>
              <li><strong>Device Information:</strong> IP address, browser type, device identifiers.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Create and manage your account</li>
              <li>Process transactions and send related information</li>
              <li>Respond to comments, questions, and requests</li>
              <li>Send notifications, updates, and promotional messages</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Protect against, identify, and prevent fraud and other illegal activity</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Sharing Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Service Providers:</strong> Third parties who perform services on our behalf.</li>
              <li><strong>Other Users:</strong> Information you choose to share publicly on the platform.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Your Rights and Choices</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Object to our use of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              To exercise these rights, please contact us at privacy@learnflow.edu.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Security</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have questions about this Privacy Policy, please contact us at privacy@learnflow.edu.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;