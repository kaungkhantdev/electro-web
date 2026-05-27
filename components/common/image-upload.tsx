"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AlertCircleIcon,
  Cancel01Icon,
  CheckmarkCircle01Icon,
  ImageUploadIcon,
  Loading03Icon,
} from "@hugeicons/core-free-icons";
import { uploadService } from "@/services/upload.service";
import { fi } from "zod/v4/locales";

type UploadStatus = "uploading" | "done" | "error";

interface UploadFile {
  id: string;
  file: File;
  preview: string;
  status: UploadStatus;
  url?: string; // public URL returned by the API
  key?: string; // storage key used for deletion
  error?: string;
}

interface ImageUploadProps {
  maxFiles?: number;
  maxSizeBytes?: number;
  acceptedTypes?: string[];
  allowMultiple?: boolean;
  /** Called with the final remote URL(s) whenever the uploaded set changes. */
  onChange?: (urls: string[]) => void;
}

const DEFAULT_MAX_SIZE = 2 * 1024 * 1024;
const DEFAULT_ACCEPTED = ["image/png", "image/jpeg", "image/webp"];

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const ImageUpload = ({
  maxFiles = 1,
  maxSizeBytes = DEFAULT_MAX_SIZE,
  acceptedTypes = DEFAULT_ACCEPTED,
  allowMultiple = false,
  onChange,
}: ImageUploadProps) => {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadingIds = useRef<Set<string>>(new Set());
  const deletingKeys = useRef<Set<string>>(new Set());

  const emit = useCallback(
    (updated: UploadFile[]) => {
      const urls = updated
        .filter((f) => f.status === "done" && f.url)
        .map((f) => f.url!);
      onChange?.(urls);
    },
    [onChange],
  );

  // Validate a file locally before uploading
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

  useEffect(() => {
    const pending = files.filter(
      (f) => f.status === "uploading" && !uploadingIds.current.has(f.id),
    );

    if (!pending.length) return;

    pending.forEach((entry) => {
      // Mark as in-flight before the async call
      uploadingIds.current.add(entry.id);

      uploadService
        .image(entry.file)
        .then(({ url, key }) => {
          setFiles((cur) => {
            const next = cur.map((f) =>
              f.id === entry.id
                ? { ...f, status: "done" as const, url, key }
                : f,
            );
            emit(next);
            return next;
          });
        })
        .catch((err: unknown) => {
          const message = err instanceof Error ? err.message : "Upload failed";
          setFiles((cur) => {
            const next = cur.map((f) =>
              f.id === entry.id
                ? { ...f, status: "error" as const, error: message }
                : f,
            );
            emit(next);
            return next;
          });
        })
        .finally(() => {
          // Clean up tracking ref once settled
          uploadingIds.current.delete(entry.id);
        });
    });
  }, [files, emit]);

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      const limit = allowMultiple ? maxFiles : 1;

      setFiles((prev) => {
        const remaining = limit - prev.length;
        if (remaining <= 0) return prev;

        const eligible = Array.from(incoming).slice(0, remaining);
        const newEntries: UploadFile[] = eligible.map((f) => {
          const error = validate(f) ?? undefined;
          return {
            id: `${f.name}-${Date.now()}-${Math.random()}`,
            file: f,
            preview: URL.createObjectURL(f),
            // Immediately mark invalid files as "error" so the effect skips them
            status: error ? "error" : "uploading",
            error,
          };
        });

        return [...prev, ...newEntries];
      });
    },
    [allowMultiple, maxFiles, validate],
  );

  const removeFile = useCallback(
    (id: string) => {
      setFiles((prev) => {
        const target = prev.find((f) => f.id === id);
        if (!target) return prev;

        // Revoke blob URL
        URL.revokeObjectURL(target.preview);

        if (
          target.status === "done" &&
          target.key &&
          !deletingKeys.current.has(target.key)
        ) {
          deletingKeys.current.add(target.key);
          uploadService
            .deleteImage(target.key)
            .catch(() => {
              console.warn("Failed to delete image from server");
            })
            .finally(() => {
              deletingKeys.current.delete(target.key!);
            });
        }

        const updated = prev.filter((f) => f.id !== id);
        emit(updated);
        return updated;
      });
    },
    [emit],
  );

  const atLimit = files.length >= (allowMultiple ? maxFiles : 1);

  return (
    <div className="space-y-3">
      {/* ── Drop zone ── */}
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

      {/* ── Thumbnail grid ── */}
      {files.length > 0 && (
        <div
          className={
            allowMultiple ? "grid grid-cols-3 gap-2" : "grid grid-cols-1"
          }
        >
          {files.map((f) => (
            <div
              key={f.id}
              className={[
                "group relative aspect-square overflow-hidden rounded-xl border",
                f.status === "error"
                  ? "border-red-200 bg-red-50"
                  : "border-gray-100 bg-gray-50",
              ].join(" ")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.preview}
                alt={f.file.name}
                className="h-full w-full object-cover"
              />

              {/* Uploading overlay */}
              {f.status === "uploading" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                  <HugeiconsIcon
                    icon={Loading03Icon}
                    className="h-5 w-5 text-white animate-spin"
                  />
                </div>
              )}

              {/* Done badge */}
              {f.status === "done" && (
                <div className="absolute bottom-1.5 left-1.5">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="h-4 w-4 text-green-400 drop-shadow"
                  />
                </div>
              )}

              {/* Error overlay */}
              {f.status === "error" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-red-50/80 p-1">
                  <HugeiconsIcon
                    icon={AlertCircleIcon}
                    className="h-4 w-4 text-red-500"
                  />
                  <p className="text-center text-[10px] text-red-500 leading-tight">
                    {f.error}
                  </p>
                </div>
              )}

              {/* Remove button — visible on hover */}
              <button
                type="button"
                onClick={() => removeFile(f.id)}
                disabled={f.status === "uploading"}
                className="absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                aria-label="Remove file"
              >
                <HugeiconsIcon icon={Cancel01Icon} className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
