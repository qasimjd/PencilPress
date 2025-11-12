
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Eye, Heart, ArrowLeft, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BlogCard } from "@/components/blog/blog-card";
import { NewsletterSection } from "@/components/blog/newsletter-section";
import { dummyBlogPosts } from "@/lib/constants";
import { ShareButtons } from "@/components/blog/share-buttons";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { AuthorCard } from "@/components/blog/author-card";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const post = dummyBlogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const relatedPosts = dummyBlogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen relative">
      {/* Back Button */}
      <Link href="/"> 
        <Button variant="outline" size="icon-lg" className="rounded-full absolute top-4 left-4 md:top-8 md:left-8 z-10">
          <ArrowLeft className="size-5" />
        </Button>
      </Link>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <Badge className="mb-4">{post.category}</Badge>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Link href={`/author/${post.author.id}`}>
                <Avatar className="h-12 w-12 ring-2 ring-offset-2 ring-primary/20 hover:ring-primary transition-all cursor-pointer">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Link>
              <div>
                <Link href={`/author/${post.author.id}`}>
                  <p className="font-semibold hover:text-primary transition-colors cursor-pointer">
                    {post.author.name}
                  </p>
                </Link>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formattedDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime} min read
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                {post.views}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Heart className="h-4 w-4" />
                {post.likes}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tag/${tag.toLowerCase()}`}>
                <Badge variant="outline" className="hover:bg-accent cursor-pointer">
                  #{tag}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Table of Contents - Desktop */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <TableOfContents />
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-2">
            <Card className="border-0 shadow-none">
              <CardContent className="prose prose-lg dark:prose-invert max-w-none p-0">
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <Separator className="my-8" />

                {/* Article Content */}
                <div className="space-y-6">
                  <h2>Introduction</h2>
                  <p>
                    Welcome to this comprehensive guide where we'll explore the intricacies of {post.title.toLowerCase()}.
                    This article will provide you with practical insights, real-world examples, and actionable takeaways
                    that you can implement immediately in your projects.
                  </p>

                  <h2>Why This Matters</h2>
                  <p>
                    Understanding these concepts is crucial for modern web development. In today's fast-paced digital landscape,
                    staying updated with the latest best practices and techniques can make the difference between a good developer
                    and a great one.
                  </p>

                  <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                    "The best way to predict the future is to create it." - Peter Drucker
                  </blockquote>

                  <h2>Key Concepts</h2>
                  <p>
                    Let's dive into the fundamental principles that make this approach so effective. We'll break down complex
                    topics into digestible sections, ensuring you grasp each concept before moving forward.
                  </p>

                  <h3>Getting Started</h3>
                  <p>
                    Before we jump into the technical details, it's important to understand the foundation. This section will
                    cover the prerequisites and set you up for success in the subsequent sections.
                  </p>

                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`// Example code snippet
const example = () => {
  console.log('Hello, PencilPress!');
  return 'Quality code matters';
};`}</code>
                  </pre>

                  <h3>Best Practices</h3>
                  <p>
                    Following industry best practices ensures your code is maintainable, scalable, and performs optimally.
                    Here are the key principles to keep in mind:
                  </p>

                  <ul>
                    <li>Write clean, readable code that others can understand</li>
                    <li>Implement proper error handling and validation</li>
                    <li>Optimize for performance without sacrificing readability</li>
                    <li>Test your code thoroughly before deployment</li>
                    <li>Document your work for future reference</li>
                  </ul>

                  <h2>Advanced Techniques</h2>
                  <p>
                    Once you've mastered the basics, it's time to explore more advanced patterns and techniques. These strategies
                    will help you tackle complex challenges and build more sophisticated applications.
                  </p>

                  <h3>Performance Optimization</h3>
                  <p>
                    Performance is a critical aspect of any application. Users expect fast, responsive interfaces, and search
                    engines favor well-optimized sites. Let's explore how to achieve optimal performance.
                  </p>

                  <h2>Conclusion</h2>
                  <p>
                    We've covered a lot of ground in this article. From fundamental concepts to advanced techniques, you now
                    have the knowledge to implement these practices in your own projects. Remember, the key to mastery is
                    consistent practice and continuous learning.
                  </p>

                  <p>
                    What challenges have you faced in this area? Share your experiences in the comments below, and let's
                    continue the conversation!
                  </p>
                </div>

                <Separator className="my-12" />

                {/* Share Section */}
                <div className="flex items-center justify-between flex-wrap gap-4 not-prose">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Enjoyed this article?</h3>
                    <p className="text-sm text-muted-foreground">Share it with your network!</p>
                  </div>
                  <ShareButtons post={post} />
                </div>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Author Bio */}
            <AuthorCard author={post.author} />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Heart className="h-4 w-4" />
                      Like this article
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Article Stats</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Published</span>
                      <span className="font-medium">{formattedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reading time</span>
                      <span className="font-medium">{post.readTime} min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Views</span>
                      <span className="font-medium">{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Likes</span>
                      <span className="font-medium">{post.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <NewsletterSection />
        </div>
      </section>
    </main>
  );
}
