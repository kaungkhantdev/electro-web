"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
  type: "checkbox" | "color" | "range";
}

const filterGroups: FilterGroup[] = [
  {
    id: "availability",
    label: "In-stock only",
    options: [{ label: "In Stock", value: "in-stock", count: 245 }],
    type: "checkbox",
  },
  {
    id: "price",
    label: "Price",
    options: [
      { label: "Under $50", value: "0-50", count: 89 },
      { label: "$50 - $100", value: "50-100", count: 124 },
      { label: "$100 - $500", value: "100-500", count: 156 },
      { label: "$500 - $1000", value: "500-1000", count: 78 },
      { label: "Over $1000", value: "1000+", count: 45 },
    ],
    type: "checkbox",
  },
  {
    id: "product-type",
    label: "Product Type",
    options: [
      { label: "Cases", value: "cases", count: 156 },
      { label: "Screen Protectors", value: "screen-protectors", count: 89 },
      { label: "Chargers", value: "chargers", count: 67 },
      { label: "Cables", value: "cables", count: 45 },
      { label: "Stands & Mounts", value: "stands", count: 34 },
    ],
    type: "checkbox",
  },
  {
    id: "sub-product-type",
    label: "Sub Product Type",
    options: [
      { label: "MagSafe", value: "magsafe", count: 78 },
      { label: "Clear Cases", value: "clear", count: 56 },
      { label: "Leather", value: "leather", count: 34 },
      { label: "Silicone", value: "silicone", count: 45 },
    ],
    type: "checkbox",
  },
  {
    id: "ratings",
    label: "Ratings",
    options: [
      { label: "4 Stars & Up", value: "4+", count: 234 },
      { label: "3 Stars & Up", value: "3+", count: 312 },
    ],
    type: "checkbox",
  },
  {
    id: "brand",
    label: "Brand",
    options: [
      { label: "Apple", value: "apple", count: 89 },
      { label: "Spigen", value: "spigen", count: 67 },
      { label: "Anker", value: "anker", count: 56 },
      { label: "Belkin", value: "belkin", count: 45 },
      { label: "ESR", value: "esr", count: 38 },
      { label: "UGREEN", value: "ugreen", count: 34 },
    ],
    type: "checkbox",
  },
];

interface FilterSidebarProps {
  onFilterChange?: (filters: Record<string, string[]>) => void;
  className?: string;
}

export function FilterSidebar({ onFilterChange, className }: FilterSidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    availability: true,
    price: true,
    "product-type": true,
    brand: true,
  });
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const toggleFilter = (groupId: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[groupId] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      const newFilters = { ...prev, [groupId]: updated };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    onFilterChange?.({});
  };

  const activeFilterCount = Object.values(selectedFilters).flat().length;

  return (
    <aside className={`w-full ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-gray-600" />
          <span className="font-medium text-gray-900">Filters</span>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeFilterCount}
            </Badge>
          )}
        </div>
        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-purple-600 hover:text-purple-700 h-auto p-0 text-sm"
          >
            Clear all
          </Button>
        )}
      </div>

      <Separator className="mb-4" />

      {/* Filter groups */}
      <div className="space-y-4">
        {filterGroups.map((group) => (
          <div key={group.id}>
            <button
              onClick={() => toggleGroup(group.id)}
              className="flex items-center justify-between w-full py-2 text-left"
            >
              <span className="text-sm font-medium text-gray-900">{group.label}</span>
              {expandedGroups[group.id] ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {expandedGroups[group.id] && (
              <div className="mt-2 space-y-2">
                {group.options.map((option) => {
                  const isSelected = selectedFilters[group.id]?.includes(option.value);
                  return (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleFilter(group.id, option.value)}
                        className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 flex-1">
                        {option.label}
                      </span>
                      {option.count !== undefined && (
                        <span className="text-xs text-gray-400">({option.count})</span>
                      )}
                    </label>
                  );
                })}
              </div>
            )}

            <Separator className="mt-4" />
          </div>
        ))}
      </div>
    </aside>
  );
}
