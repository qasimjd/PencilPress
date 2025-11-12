import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 z-10 bg-linear-to-br from-primary/10 via-transparent to-secondary/5" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Welcome to PencilPress
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
            Where Ideas Take
            <br />
            <span className="text-primary">Shape in Words</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover insightful articles, in-depth tutorials, and inspiring
            stories from developers around the world. Stay ahead with the latest
            in technology, design, and innovation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
            {[
              { label: "Articles", value: "100+" },
              { label: "Authors", value: "50+" },
              { label: "Readers", value: "10k+" },
            ].map((stat) => (
              <Card key={stat.label} className="border-0 bg-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
