import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FAQGroup, FAQItem } from "@/components/ui/faq-item";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const generalFAQs: FAQItem[] = [
    {
      id: "what-is-learnflow",
      question: "What is LearnFlow?",
      answer: (
        <p>
          LearnFlow is an educational platform that allows students and educators to share and access academic notes, study materials, and resources. Our platform makes it easy to find quality content organized by departments and subjects.
        </p>
      ),
    },
    {
      id: "is-learnflow-free",
      question: "Is LearnFlow free to use?",
      answer: (
        <p>
          LearnFlow offers both free and premium subscription options. With a free account, you can browse and access a limited number of notes per month. Premium subscriptions provide unlimited access to all content, plus additional features like note downloading and ad-free browsing.
        </p>
      ),
    },
    {
      id: "who-can-use",
      question: "Who can use LearnFlow?",
      answer: (
        <p>
          LearnFlow is designed for students, educators, researchers, and lifelong learners. Whether you're studying at a university, teaching at a high school, or just interested in expanding your knowledge, LearnFlow has resources for you.
        </p>
      ),
    }
  ];

  const accountFAQs: FAQItem[] = [
    {
      id: "create-account",
      question: "How do I create an account?",
      answer: (
        <p>
          To create an account, click on the "Sign up" button in the top right corner of the homepage. You'll need to provide your email address and create a password. You can also sign up using your Google or Facebook account for a quicker registration process.
        </p>
      ),
    },
    {
      id: "forgot-password",
      question: "What if I forgot my password?",
      answer: (
        <p>
          If you forgot your password, click on the "Log in" button, then select "Forgot password?" below the login form. Enter your email address, and we'll send you instructions on how to reset your password.
        </p>
      ),
    },
    {
      id: "delete-account",
      question: "Can I delete my account?",
      answer: (
        <p>
          Yes, you can delete your account at any time. Go to your account settings, scroll to the bottom, and click on "Delete Account." Please note that this action is permanent and will remove all your uploaded content and personal information from our platform.
        </p>
      ),
    }
  ];

  const contentFAQs: FAQItem[] = [
    {
      id: "upload-notes",
      question: "How do I upload my notes?",
      answer: (
        <p>
          To upload notes, first <Link to="/login" className="text-learnflow-primary hover:underline">log in</Link> to your account, then click on "Upload Notes" in the navigation menu. Select the department and subject your notes belong to, add a title, description, and upload your file. You can upload PDF, Word, PowerPoint, and image files.
        </p>
      ),
    },
    {
      id: "quality-standards",
      question: "What are the quality standards for uploaded content?",
      answer: (
        <p>
          We maintain high standards for all content on LearnFlow. Notes should be well-organized, accurate, and provide value to others. Content that violates copyright, contains plagiarized material, or is of poor quality may be removed. We encourage original content and proper citation of sources.
        </p>
      ),
    },
    {
      id: "report-content",
      question: "How do I report inappropriate content?",
      answer: (
        <p>
          If you find content that violates our community guidelines, click on the "Report" button on the note's page. Provide details about why you're reporting the content, and our moderation team will review it promptly.
        </p>
      ),
    }
  ];

  const subscriptionFAQs: FAQItem[] = [
    {
      id: "subscription-plans",
      question: "What subscription plans do you offer?",
      answer: (
        <p>
          We offer several subscription tiers: Free (basic access), Student (full access with student discount), Professional (unlimited access with additional features), and Institution (for schools and universities). Visit our <Link to="/subscriptions" className="text-learnflow-primary hover:underline">Subscription</Link> page for detailed information about each plan.
        </p>
      ),
    },
    {
      id: "cancel-subscription",
      question: "How do I cancel my subscription?",
      answer: (
        <p>
          You can cancel your subscription at any time through your account settings. Go to "Subscriptions," then click "Cancel Subscription." Your premium access will continue until the end of your current billing period.
        </p>
      ),
    },
    {
      id: "refund-policy",
      question: "What is your refund policy?",
      answer: (
        <p>
          We offer a 14-day money-back guarantee for new subscriptions. If you're not satisfied with our service, you can request a refund within 14 days of your initial purchase. For refund requests, please contact our support team at support@learnflow.edu.
        </p>
      ),
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <HelpCircle className="h-8 w-8 text-learnflow-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-learnflow-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about LearnFlow. If you can't find what you're looking for, feel free to <Link to="/contact" className="text-learnflow-primary hover:underline">contact us</Link>.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQGroup title="General Questions" items={generalFAQs} />
          <FAQGroup title="Account Management" items={accountFAQs} />
          <FAQGroup title="Content & Notes" items={contentFAQs} />
          <FAQGroup title="Subscriptions & Billing" items={subscriptionFAQs} />
          
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're here to help! Reach out to our support team and we'll get back to you as soon as possible.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-learnflow-primary text-white rounded-lg hover:bg-learnflow-primary/90 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
