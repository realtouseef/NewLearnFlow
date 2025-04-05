
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PricingSection from "@/components/ui/pricing-section";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SubscriptionTier } from "@/types";
import { Crown, Star, Download, Upload, Clock } from "lucide-react";

const SubscriptionsPage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null; // We'll redirect via the useEffect
  }

  const getSubscriptionDetails = () => {
    switch (user.subscription) {
      case SubscriptionTier.FREE:
        return {
          name: "Free",
          icon: <Star className="h-8 w-8 text-gray-500" />,
          badge: "bg-gray-500",
          features: [
            { text: "Access to free notes only", icon: <Download className="h-4 w-4" /> },
            { text: "Limited downloads per month", icon: <Clock className="h-4 w-4" /> },
            { text: "Upload your own notes", icon: <Upload className="h-4 w-4" /> },
          ],
        };
      case SubscriptionTier.PREMIUM:
        return {
          name: "Premium",
          icon: <Crown className="h-8 w-8 text-learnflow-primary" />,
          badge: "bg-learnflow-primary",
          features: [
            { text: "Access to free and premium notes", icon: <Download className="h-4 w-4" /> },
            { text: "Unlimited downloads", icon: <Download className="h-4 w-4" /> },
            { text: "Upload notes for monetization", icon: <Upload className="h-4 w-4" /> },
            { text: "Early access to new content", icon: <Star className="h-4 w-4" /> },
          ],
        };
      case SubscriptionTier.ELITE:
        return {
          name: "Elite",
          icon: <Crown className="h-8 w-8 text-learnflow-accent" />,
          badge: "bg-learnflow-accent",
          features: [
            { text: "Access to all notes (free, premium, elite)", icon: <Download className="h-4 w-4" /> },
            { text: "Unlimited downloads", icon: <Download className="h-4 w-4" /> },
            { text: "Higher revenue share for your notes", icon: <Upload className="h-4 w-4" /> },
            { text: "Priority support", icon: <Star className="h-4 w-4" /> },
            { text: "Exclusive content access", icon: <Star className="h-4 w-4" /> },
          ],
        };
      default:
        return {
          name: "Unknown",
          icon: <Star className="h-8 w-8 text-gray-500" />,
          badge: "bg-gray-500",
          features: [],
        };
    }
  };

  const subscriptionDetails = getSubscriptionDetails();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Manage Subscriptions</h1>

        <div className="mb-12">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {subscriptionDetails.icon}
                  <CardTitle className="ml-2 text-2xl">Current Subscription</CardTitle>
                </div>
                <Badge className={subscriptionDetails.badge}>
                  {subscriptionDetails.name}
                </Badge>
              </div>
              <CardDescription>Your current subscription details and benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Your Benefits</h3>
                    <ul className="space-y-2">
                      {subscriptionDetails.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          {feature.icon}
                          <span className="ml-2">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Subscription Management</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        You're currently on the{" "}
                        <span className="font-semibold">{subscriptionDetails.name}</span> plan.
                      </p>
                      {user.subscription !== SubscriptionTier.ELITE && (
                        <div className="space-y-2">
                          <p className="text-gray-600">Want to access more premium content?</p>
                          <Button 
                            onClick={() => navigate("/subscriptions#plans")}
                            className="bg-learnflow-primary hover:bg-learnflow-primary/90"
                          >
                            Upgrade Plan
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div id="plans">
          <h2 className="text-2xl font-bold mb-6">Available Plans</h2>
          <PricingSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionsPage;
