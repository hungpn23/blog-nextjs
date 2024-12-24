import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center py-8">
      <Button variant="ghost" size="icon" asChild disabled={currentPage <= 1}>
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>
      Page {currentPage} of {totalPages}
      <Button
        variant="ghost"
        size="icon"
        asChild
        disabled={currentPage >= totalPages}
      >
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
