"use client";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage = 1,
  totalPages = 32,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange?.(currentPage - 1)}
      >
        Previous
      </Button>
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((page) => (
          <Button
            key={page}
            size="sm"
            variant={page === currentPage ? "default" : "ghost"}
            className={
              page === currentPage ? "bg-purple-600 hover:bg-purple-700 text-white" : ""
            }
            onClick={() => onPageChange?.(page)}
          >
            {page}
          </Button>
        ))}
        <span className="px-2 text-gray-400">...</span>
        <Button variant="ghost" size="sm" onClick={() => onPageChange?.(totalPages)}>
          {totalPages}
        </Button>
      </div>
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
