"use client";

import { Input } from "@/components/ui/input";
import { Search, LocateFixed } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoreSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function StoreSearch({ value, onChange }: StoreSearchProps) {
  return (
    <div className="relative mt-6 mb-10">
      <div className="bg-white max-w-2xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by city, state, or zip code..."
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="pl-11 h-11 text-base rounded-full"
            />
          </div>
          <Button size="sm" className="h-11 px-4 shrink-0 rounded-full">
            <LocateFixed className="w-4 h-4 mr-1.5" />
            Near Me
          </Button>
        </div>
      </div>
    </div>
  );
}
