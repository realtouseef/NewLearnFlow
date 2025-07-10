import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Mail, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  Github, 
  ChevronRight,
  Phone,
  MapPin,
  Send
} from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-10 w-10 text-learnflow-primary" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-learnflow-primary to-learnflow-accent">LearnFlow</span>
            </div>
            <p className="text-gray-300 text-base max-w-xs">
              Share knowledge, earn rewards, and help fellow students succeed in their academic journey.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-learnflow-primary transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-learnflow-primary transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-learnflow-primary transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-learnflow-primary transition-colors duration-300">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-learnflow-primary transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-learnflow-primary uppercase tracking-wider">
                  Resources
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link to="/departments" className="text-base text-gray-300 hover:text-white flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 text-gray-500 group-hover:text-learnflow-primary transition-colors" />
                      Browse Notes
                    </Link>
                  </li>
                  <li>
                    <Link to="/upload" className="text-base text-gray-300 hover:text-white flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 text-gray-500 group-hover:text-learnflow-primary transition-colors" />
                      Upload Notes
                    </Link>
                  </li>
                  <li>
                    <Link to="/subscriptions" className="text-base text-gray-300 hover:text-white flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 text-gray-500 group-hover:text-learnflow-primary transition-colors" />
                      Subscription Plans
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-base text-gray-300 hover:text-white flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 text-gray-500 group-hover:text-learnflow-primary transition-colors" />
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-learnflow-primary uppercase tracking-wider">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link to="/about" className="text-base text-gray-300 hover:text-white flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 text-gray-500 group-hover:text-learnflow-primary transition-colors" />
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 text-gray-500 group-hover:text-learnflow-primary transition-colors" />
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-base text-gray-300 hover:text-white flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 text-gray-500 group-hover:text-learnflow-primary transition-colors" />
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-base text-gray-300 hover:text-white flex items-center group">
                      <ChevronRight className="h-4 w-4 mr-1 text-gray-500 group-hover:text-learnflow-primary transition-colors" />
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-learnflow-primary uppercase tracking-wider">
                Contact & Newsletter
              </h3>
              <div className="mt-4 space-y-5">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-learnflow-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">123 University Ave, College Town, ST 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-learnflow-primary flex-shrink-0" />
                  <span className="text-gray-300">(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-learnflow-primary flex-shrink-0" />
                  <span className="text-gray-300">support@learnflow.edu</span>
                </div>
                <div className="pt-3">
                  <p className="text-base text-gray-300 mb-3">
                    Subscribe to our newsletter for updates on new features and notes.
                  </p>
                  <form onSubmit={handleSubscribe} className="sm:flex max-w-md">
                    <div className="min-w-0 flex-1">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-learnflow-primary focus:ring-learnflow-primary"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-learnflow-primary hover:bg-learnflow-primary/90 flex-shrink-0 transition-all duration-300 transform hover:scale-105"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} LearnFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;