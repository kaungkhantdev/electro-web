"use client";

import { useState } from "react";

interface ExpandableTextProps {
  text?: string;
  lines?: number;
  className?: string;
}

export function ExpandableText({
  text,
  lines = 2,
  className,
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  return (
    <div className={className}>
      <p
        className={`text-sm text-muted-foreground mt-1 ${!expanded ? `line-clamp-${lines}` : ""}`}
      >
        {text}
      </p>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="text-xs text-primary mt-0.5 hover:underline"
      >
        {expanded ? "See less" : "See more"}
      </button>
    </div>
  );
}
