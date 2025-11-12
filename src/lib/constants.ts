export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: Author;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  likes: number;
  views: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

// Dummy Authors
export const dummyAuthors: Author[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Tech writer and software engineer passionate about web development",
    email: "sarah.johnson@pencilpress.com",
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    bio: "Full-stack developer and open-source contributor",
    email: "michael.chen@pencilpress.com",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    bio: "UI/UX designer and frontend developer",
    email: "emily.rodriguez@pencilpress.com",
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    bio: "DevOps engineer and cloud architecture enthusiast",
    email: "david.kim@pencilpress.com",
  },
  {
    id: "5",
    name: "Olivia Parker",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    bio: "Data scientist and machine learning researcher",
    email: "olivia.parker@pencilpress.com",
  },
];

// Dummy Categories
export const dummyCategories: Category[] = [
  {
    id: "1",
    name: "Web Development",
    slug: "web-development",
    description: "Articles about modern web development techniques and frameworks",
  },
  {
    id: "2",
    name: "JavaScript",
    slug: "javascript",
    description: "Deep dives into JavaScript and TypeScript",
  },
  {
    id: "3",
    name: "Design",
    slug: "design",
    description: "UI/UX design principles and best practices",
  },
  {
    id: "4",
    name: "DevOps",
    slug: "devops",
    description: "Deployment, CI/CD, and infrastructure topics",
  },
  {
    id: "5",
    name: "AI & ML",
    slug: "ai-ml",
    description: "Artificial Intelligence and Machine Learning insights",
  },
];

// Dummy Blog Posts
export const dummyBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15: A Complete Guide",
    excerpt: "Explore the latest features in Next.js 15 including improved performance, enhanced developer experience, and new architectural patterns.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    author: dummyAuthors[0],
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript"],
    publishedAt: "2024-11-10T10:00:00Z",
    readTime: 8,
    likes: 234,
    views: 1523,
  },
  {
    id: "2",
    title: "Modern CSS Techniques for Responsive Design",
    excerpt: "Learn how to create beautiful, responsive layouts using CSS Grid, Flexbox, and modern CSS features that work across all devices.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    author: dummyAuthors[2],
    category: "Design",
    tags: ["CSS", "Responsive Design", "Frontend"],
    publishedAt: "2024-11-09T14:30:00Z",
    readTime: 6,
    likes: 189,
    views: 987,
  },
  {
    id: "3",
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt: "Discover essential TypeScript patterns and practices that will help you build maintainable and scalable enterprise applications.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    author: dummyAuthors[1],
    category: "JavaScript",
    tags: ["TypeScript", "Best Practices", "Architecture"],
    publishedAt: "2024-11-08T09:15:00Z",
    readTime: 12,
    likes: 456,
    views: 2341,
  },
  {
    id: "4",
    title: "Building a CI/CD Pipeline with GitHub Actions",
    excerpt: "Step-by-step guide to automating your deployment workflow using GitHub Actions, Docker, and modern DevOps practices.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    author: dummyAuthors[3],
    category: "DevOps",
    tags: ["CI/CD", "GitHub Actions", "Docker"],
    publishedAt: "2024-11-07T16:45:00Z",
    readTime: 10,
    likes: 312,
    views: 1876,
  },
  {
    id: "5",
    title: "Introduction to Machine Learning with Python",
    excerpt: "Start your journey into machine learning with this beginner-friendly guide covering fundamental concepts and practical examples.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    author: dummyAuthors[4],
    category: "AI & ML",
    tags: ["Machine Learning", "Python", "AI"],
    publishedAt: "2024-11-06T11:20:00Z",
    readTime: 15,
    likes: 567,
    views: 3245,
  },
  {
    id: "6",
    title: "Mastering React Hooks: useEffect and Custom Hooks",
    excerpt: "Deep dive into React Hooks with practical examples of useEffect, custom hooks, and advanced patterns for state management.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    author: dummyAuthors[0],
    category: "JavaScript",
    tags: ["React", "Hooks", "JavaScript"],
    publishedAt: "2024-11-05T08:00:00Z",
    readTime: 9,
    likes: 423,
    views: 2156,
  },
  {
    id: "7",
    title: "The Art of API Design: RESTful Best Practices",
    excerpt: "Learn how to design clean, intuitive, and scalable REST APIs that developers will love to use and maintain.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    author: dummyAuthors[1],
    category: "Web Development",
    tags: ["API Design", "REST", "Backend"],
    publishedAt: "2024-11-04T13:30:00Z",
    readTime: 7,
    likes: 289,
    views: 1634,
  },
  {
    id: "8",
    title: "Figma to Code: Streamlining Your Design Workflow",
    excerpt: "Bridge the gap between design and development with tools and techniques to convert Figma designs into production-ready code.",
    content: "Full blog content here...",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    author: dummyAuthors[2],
    category: "Design",
    tags: ["Figma", "Design Systems", "Frontend"],
    publishedAt: "2024-11-03T15:00:00Z",
    readTime: 11,
    likes: 378,
    views: 2089,
  },
];

// Featured blog post (usually the latest or most popular)
export const featuredPost = dummyBlogPosts[0];

// Utility function to get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  return dummyBlogPosts.filter((post) => post.category === category);
};

// Utility function to get recent posts
export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return dummyBlogPosts.slice(0, limit);
};
