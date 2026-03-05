"use client";

import { useCallback, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AlertCircleIcon,
  Cancel01Icon,
  CheckmarkCircle01Icon,
  ImageUploadIcon,
} from "@hugeicons/core-free-icons";

interface UploadFile {
  id: string;
  file: File;
  preview: string;
  status: "valid" | "error";
  error?: string;
}

interface ImageUploadProps {
  maxFiles?: number;
  maxSizeBytes?: number;
  acceptedTypes?: string[];
  allowMultiple?: boolean;
  onChange?: (files: File[]) => void;
}

const DEFAULT_MAX_SIZE = 2 * 1024 * 1024;
const DEFAULT_ACCEPTED = ["image/png", "image/jpeg", "image/webp"];

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const BackupImageUpload = ({
  maxFiles = 1,
  maxSizeBytes = DEFAULT_MAX_SIZE,
  acceptedTypes = DEFAULT_ACCEPTED,
  allowMultiple = false,
  onChange,
}: ImageUploadProps) => {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validate = useCallback(
    (file: File): string | null => {
      if (!acceptedTypes.includes(file.type))
        return `Invalid type. Accepted: ${acceptedTypes.map((t) => t.split("/")[1].toUpperCase()).join(", ")}`;
      if (file.size > maxSizeBytes)
        return `File too large. Max ${formatBytes(maxSizeBytes)}`;
      return null;
    },
    [acceptedTypes, maxSizeBytes],
  );

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      const limit = allowMultiple ? maxFiles : 1;
      setFiles((prev) => {
        const remaining = limit - prev.length;
        if (remaining <= 0) return prev;
        const newEntries: UploadFile[] = Array.from(incoming)
          .slice(0, remaining)
          .map((f) => {
            const error = validate(f) ?? undefined;
            return {
              id: `${f.name}-${Date.now()}-${Math.random()}`,
              file: f,
              preview: URL.createObjectURL(f),
              status: error ? "error" : "valid",
              error,
            };
          });
        const updated = [...prev, ...newEntries];
        onChange?.(
          updated.filter((u) => u.status === "valid").map((u) => u.file),
        );
        return updated;
      });
    },
    [allowMultiple, maxFiles, validate, onChange],
  );

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const removed = prev.find((f) => f.id === id);
      if (removed) URL.revokeObjectURL(removed.preview);
      const updated = prev.filter((f) => f.id !== id);
      onChange?.(
        updated.filter((u) => u.status === "valid").map((u) => u.file),
      );
      return updated;
    });
  };

  const atLimit = files.length >= (allowMultiple ? maxFiles : 1);

  return (
    <div className="space-y-3">
      {/* Drop zone */}
      {!atLimit && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
          }}
          className={[
            "relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 cursor-pointer select-none transition-colors duration-200",
            dragging
              ? "border-purple-500 bg-purple-50"
              : "border-gray-200 bg-gray-50 hover:border-purple-400 hover:bg-purple-50/40",
          ].join(" ")}
        >
          <div
            className={[
              "flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200",
              dragging ? "bg-purple-100" : "bg-white shadow-sm",
            ].join(" ")}
          >
            <HugeiconsIcon
              icon={ImageUploadIcon}
              className={`h-5 w-5 ${dragging ? "text-purple-600" : "text-gray-400"}`}
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-700">
              Drag &amp; drop{" "}
              <span className="text-purple-600 underline underline-offset-2">
                or browse
              </span>
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {acceptedTypes
                .map((t) => t.split("/")[1].toUpperCase())
                .join(", ")}{" "}
              · Max {formatBytes(maxSizeBytes)}
              {allowMultiple && maxFiles > 1 && ` · Up to ${maxFiles} files`}
            </p>
          </div>
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            multiple={allowMultiple}
            accept={acceptedTypes.join(",")}
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
        </div>
      )}

      {/* File list */}
      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((f) => (
            <li
              key={f.id}
              className={[
                "flex items-center gap-3 rounded-xl border p-3 transition-colors",
                f.status === "error"
                  ? "border-red-200 bg-red-50"
                  : "border-gray-100 bg-white",
              ].join(" ")}
            >
              {/* Thumbnail */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.preview}
                  alt={f.file.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-800">
                  {f.file.name}
                </p>
                {f.status === "error" ? (
                  <p className="flex items-center gap-1 text-xs text-red-500">
                    <HugeiconsIcon
                      icon={AlertCircleIcon}
                      className="h-3 w-3 shrink-0"
                    />
                    {f.error}
                  </p>
                ) : (
                  <p className="flex items-center gap-1 text-xs text-gray-400">
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      className="h-3 w-3 text-green-500 shrink-0"
                    />
                    {formatBytes(f.file.size)}
                  </p>
                )}
              </div>

              {/* Remove */}
              <button
                type="button"
                onClick={() => removeFile(f.id)}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                aria-label="Remove file"
              >
                <HugeiconsIcon icon={Cancel01Icon} className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
