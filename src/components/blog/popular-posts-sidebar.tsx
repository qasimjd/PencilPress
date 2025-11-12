import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/lib/constants";

interface PopularPostsSidebarProps {
  posts: BlogPost[];
}

export function PopularPostsSidebar({ posts }: PopularPostsSidebarProps) {
  const topPosts = posts
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Posts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0">
        {topPosts.map((post) => (
          <BlogCard key={post.id} post={post} variant="minimal" />
        ))}
      </CardContent>
    </Card>
  );
}
