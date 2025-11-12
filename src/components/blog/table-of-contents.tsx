"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-this-matters", title: "Why This Matters" },
    { id: "key-concepts", title: "Key Concepts" },
    { id: "getting-started", title: "Getting Started" },
    { id: "best-practices", title: "Best Practices" },
    { id: "advanced-techniques", title: "Advanced Techniques" },
    { id: "performance-optimization", title: "Performance Optimization" },
    { id: "conclusion", title: "Conclusion" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
          Table of Contents
        </h3>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "block w-full text-left text-sm py-1.5 px-3 rounded transition-colors",
                activeId === section.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}
