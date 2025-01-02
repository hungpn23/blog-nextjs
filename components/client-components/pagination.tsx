"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MetadataType } from "@/types/paginated.type";

/**
 * @deprecated
 */
export function Pagination({ metadata }: { metadata: MetadataType }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const { totalPages } = metadata;

  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (currentPage > totalPages || currentPage < 1) {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [currentPage, totalPages, searchParams, pathname, router]);

  const getPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-center py-8">
      <Button
        variant="ghost"
        size="icon"
        asChild
        className={currentPage <= 1 ? "invisible" : "visible"}
      >
        <Link href={getPageURL(currentPage - 1)} aria-label="Previous page">
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="ghost"
        size="icon"
        asChild
        className={currentPage >= totalPages ? "invisible" : "visible"}
      >
        <Link href={getPageURL(currentPage + 1)} aria-label="Next page">
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
