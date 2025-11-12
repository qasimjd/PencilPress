import Link from "next/link";
import { Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Author } from "@/lib/constants";

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Link href={`/author/${author.id}`}>
            <Avatar className="h-20 w-20 ring-2 ring-offset-2 ring-primary/20 hover:ring-primary transition-all cursor-pointer">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="text-xl">{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1">
            <div className="mb-3">
              <Link href={`/author/${author.id}`}>
                <h3 className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">
                  {author.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mt-1">{author.bio}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={`mailto:${author.email}`}>
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-3.5 w-3.5" />
                  Twitter
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
