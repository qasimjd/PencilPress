"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Successfully subscribed to newsletter!");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <Card className="bg-black text-primary-foreground">
      <CardContent className="p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Get the latest articles and insights delivered directly to your inbox.
            Join thousands of developers staying up-to-date with PencilPress.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              disabled={isLoading}
              className="sm:w-auto"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
