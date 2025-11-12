"use client";

import { Badge } from "@/components/ui/badge";
import { dummyCategories } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export function CategoryFilter({
  selectedCategory = "All",
  onSelectCategory,
}: CategoryFilterProps) {
  const categories = ["All", ...dummyCategories.map((cat) => cat.name)];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={cn(
            "cursor-pointer transition-all hover:scale-105",
            selectedCategory === category && "shadow-md"
          )}
          onClick={() => onSelectCategory?.(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
}
