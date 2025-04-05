
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, SubscriptionTier } from '@/types';
import { useToast } from "@/components/ui/use-toast";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  upgradeSubscription: (tier: SubscriptionTier) => Promise<void>;
};

const defaultAuthContext: AuthContextType = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  upgradeSubscription: async () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('learnflow-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // For demo purposes, we're just simulating an API call
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate a successful login with a mock user
      const mockUser: User = {
        id: '1',
        name: 'Demo User',
        email: email,
        subscription: SubscriptionTier.FREE
      };
      
      setUser(mockUser);
      localStorage.setItem('learnflow-user', JSON.stringify(mockUser));
      toast({
        title: "Success",
        description: "You are now logged in.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to login. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      // For demo purposes, we're just simulating an API call
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate a successful signup with a mock user
      const mockUser: User = {
        id: '1',
        name: name,
        email: email,
        subscription: SubscriptionTier.FREE
      };
      
      setUser(mockUser);
      localStorage.setItem('learnflow-user', JSON.stringify(mockUser));
      toast({
        title: "Success",
        description: "Your account has been created.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('learnflow-user');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  const upgradeSubscription = async (tier: SubscriptionTier) => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (user) {
        const updatedUser = { ...user, subscription: tier };
        setUser(updatedUser);
        localStorage.setItem('learnflow-user', JSON.stringify(updatedUser));
        
        toast({
          title: "Subscription Updated",
          description: `You now have ${tier} access.`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upgrade subscription. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
    upgradeSubscription,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
