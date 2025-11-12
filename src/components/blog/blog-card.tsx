import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/constants";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "horizontal" | "minimal";
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (variant === "horizontal") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <Link href={`/blog/${post.id}`} className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
          <div className="flex flex-col flex-1">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{formattedDate}</span>
              </div>
              <h3 className="text-xl font-bold leading-tight hover:text-primary transition-colors">
                {post.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min
                </span>
              </div>
            </CardFooter>
          </div>
        </Link>
      </Card>
    );
  }

  if (variant === "minimal") {
    return (
      <Link href={`/blog/${post.id}`} className="group">
        <div className="flex gap-4 py-4 border-b last:border-0 hover:bg-accent/50 transition-colors px-2 -mx-2 rounded">
          <div className="relative w-24 h-24 shrink-0 rounded overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="96px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors mb-1">
              {post.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{post.author.name}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <Link href={`/blog/${post.id}`}>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className="absolute top-3 left-3">{post.category}</Badge>
        </div>
        <CardHeader>
          <h3 className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <div className="flex items-center gap-3 w-full">
            <Avatar className="h-9 w-9">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {post.views}
              </span>
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
