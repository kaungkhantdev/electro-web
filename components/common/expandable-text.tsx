"use client";

import { useState } from "react";

interface ExpandableTextProps {
  text?: string;
  maxChars?: number;
  className?: string;
}

export function ExpandableText({
  text,
  maxChars = 100,
  className,
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const truncated = text.length > maxChars;
  const displayed =
    expanded || !truncated ? text : `${text.slice(0, maxChars)}…`;

  return (
    <div className={className}>
      <p className="text-sm text-muted-foreground mt-1">{displayed}</p>
      {truncated && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-xs text-primary mt-0.5 hover:underline"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}
