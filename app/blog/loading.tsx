import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8 py-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="space-y-3">
          {/* Post title skeleton */}
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-48 bg-muted" /> {/* Post title */}
          </div>

          {/* Date and read time skeleton */}
          <div className="flex items-center space-x-2 text-sm">
            <Skeleton className="h-4 w-32 bg-muted" /> {/* Date */}
            <Skeleton className="h-4 w-12 bg-muted" /> {/* Read time */}
          </div>

          {/* Tags skeleton */}
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, tagIndex) => (
              <Skeleton
                key={tagIndex}
                className="h-4 w-16 rounded-full bg-muted"
              />
            ))}
          </div>

          {/* Divider */}
          <Skeleton className="my-4 h-px w-full bg-muted/20" />
        </div>
      ))}
    </div>
  );
}
