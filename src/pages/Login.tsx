
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { BookOpen } from "lucide-react";
import { useLogin } from "@/hooks/use-auth";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem('token', data?.data?.token);
          window.location.href = '/';
        },
        onError: () => {
          toast({
            title: "Login Failed",
            description: 'Please check your email and password.',
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 flex flex-col items-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-learnflow-primary">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Enter your email to log in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-learnflow-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-learnflow-primary hover:bg-learnflow-primary/90"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Logging in..." : "Log in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-learnflow-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
