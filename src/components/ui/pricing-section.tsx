
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SubscriptionTier } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const tiers = [
  {
    name: "Free",
    id: SubscriptionTier.FREE,
    price: "$0",
    description: "Basic access to study materials.",
    features: [
      "Access to free notes only",
      "Limited downloads per month",
      "Basic search functionality",
      "Upload your own notes",
    ],
    cta: "Current Plan",
    isCurrent: (userTier: SubscriptionTier) => userTier === SubscriptionTier.FREE,
  },
  {
    name: "Premium",
    id: SubscriptionTier.PREMIUM,
    price: "$15",
    description: "Everything in Free plus premium features.",
    features: [
      "Access to free and premium notes",
      "Unlimited downloads",
      "Advanced search functionality",
      "Early access to new content",
      "Upload notes for monetization",
    ],
    cta: "Upgrade to Premium",
    isCurrent: (userTier: SubscriptionTier) => userTier === SubscriptionTier.PREMIUM,
  },
  {
    name: "Elite",
    id: SubscriptionTier.ELITE,
    price: "$25",
    description: "Our most comprehensive plan.",
    features: [
      "Access to all notes (free, premium, elite)",
      "Unlimited downloads",
      "Priority support",
      "Exclusive content from top contributors",
      "Higher revenue share for your notes",
      "Downloadable in all available formats",
    ],
    cta: "Upgrade to Elite",
    isCurrent: (userTier: SubscriptionTier) => userTier === SubscriptionTier.ELITE,
  },
];

const PricingSection = () => {
  const { user, isAuthenticated, upgradeSubscription } = useAuth();
  const navigate = useNavigate();

  const handleSubscribe = (tier: SubscriptionTier) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (user?.subscription === tier) {
      return;
    }

    upgradeSubscription(tier);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-learnflow-primary">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Choose the right plan for you
          </p>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Whether you're just browsing or sharing your premium content, we have
            a plan that suits your needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 bg-white overflow-hidden ${
                tier.id === SubscriptionTier.PREMIUM
                  ? "border-2 border-learnflow-primary"
                  : "border border-gray-200"
              }`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4 text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  {tier.id !== SubscriptionTier.FREE && (
                    <span className="text-base font-medium text-gray-500">
                      /month
                    </span>
                  )}
                </p>
                <Button
                  onClick={() => handleSubscribe(tier.id)}
                  className={`mt-8 w-full ${
                    tier.id === SubscriptionTier.FREE
                      ? "bg-gray-300 hover:bg-gray-400 text-gray-800"
                      : tier.id === SubscriptionTier.PREMIUM
                      ? "bg-learnflow-primary hover:bg-learnflow-primary/90 text-white"
                      : "bg-learnflow-accent hover:bg-learnflow-accent/90 text-white"
                  } ${
                    user && tier.isCurrent(user.subscription)
                      ? "cursor-default opacity-75"
                      : ""
                  }`}
                  disabled={user && tier.isCurrent(user.subscription)}
                >
                  {user && tier.isCurrent(user.subscription)
                    ? "Current Plan"
                    : tier.cta}
                </Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
