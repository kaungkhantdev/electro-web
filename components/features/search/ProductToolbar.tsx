"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Grid3X3,
  LayoutGrid,
  SlidersHorizontal,
  X,
} from "lucide-react";

interface ProductToolbarProps {
  viewMode: "grid" | "compact";
  onViewModeChange: (mode: "grid" | "compact") => void;
  onOpenFilters: () => void;
  showResultCount?: boolean;
  resultCount?: number;
  totalCount?: number;
}

export function ProductToolbar({
  viewMode,
  onViewModeChange,
  onOpenFilters,
  showResultCount = false,
  resultCount,
  totalCount,
}: ProductToolbarProps) {
  return (
    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
      {/* Mobile filter button */}
      <Button
        variant="outline"
        size="sm"
        className="lg:hidden"
        onClick={onOpenFilters}
      >
        <SlidersHorizontal className="w-4 h-4 mr-2" />
        Filters
      </Button>

      {/* Results count or active filters */}
      {showResultCount ? (
        <p className="hidden lg:block text-sm text-gray-500">
          Showing {resultCount} of {totalCount} products
        </p>
      ) : (
        <div className="hidden lg:flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="gap-1">
            In Stock
            <button className="ml-1 hover:text-red-500">
              <X className="w-3 h-3" />
            </button>
          </Badge>
        </div>
      )}

      {/* Sort and view options */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
          <Button variant="outline" size="sm" className="gap-1">
            Featured <ChevronDown className="w-4 h-4" />
          </Button>
        </div>

        <div className="hidden sm:flex items-center gap-1 border border-gray-200 rounded-lg p-1">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-1.5 rounded ${
              viewMode === "grid"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange("compact")}
            className={`p-1.5 rounded ${
              viewMode === "compact"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
