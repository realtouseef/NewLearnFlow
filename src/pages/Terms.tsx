import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-learnflow-accent bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Last updated: April 7, 2025
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing or using LearnFlow, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Use License</h2>
            <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-300 space-y-4">
              <li>
                <p className="mb-2">Permission is granted to temporarily download one copy of the materials on LearnFlow for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose or for any public display;</li>
                  <li>Attempt to reverse engineer any software contained on LearnFlow;</li>
                  <li>Remove any copyright or other proprietary notations from the materials; or</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
              </li>
              <li>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by LearnFlow at any time.
              </li>
            </ol>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">User Content</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When you upload content to LearnFlow, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>You own or have the necessary rights to the content you post;</li>
              <li>The content does not infringe on any intellectual property right, privacy right, or other rights;</li>
              <li>The content does not contain material that is unlawful, defamatory, or otherwise objectionable;</li>
              <li>The content does not contain malware or other harmful components.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Prohibited Activities</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You may not use LearnFlow for any purpose that is prohibited by these Terms. You are responsible for all your activity in connection with LearnFlow. Prohibited activities include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Violating laws or regulations;</li>
              <li>Posting unauthorized copyrighted content;</li>
              <li>Transmitting viruses or malicious code;</li>
              <li>Interfering with the proper working of LearnFlow;</li>
              <li>Conducting automated activity (scraping, harvesting, etc.);</li>
              <li>Impersonating others;</li>
              <li>Collecting user information without consent.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300">
              The materials on LearnFlow are provided on an 'as is' basis. LearnFlow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Limitations</h2>
            <p className="text-gray-600 dark:text-gray-300">
              In no event shall LearnFlow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LearnFlow, even if LearnFlow or a LearnFlow authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Modifications</h2>
            <p className="text-gray-600 dark:text-gray-300">
              LearnFlow may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about these Terms, please contact us at legal@learnflow.edu.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;