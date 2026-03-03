import { cn } from "@/lib/utils";
import { type InputHTMLAttributes } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputFieldProps<
  T extends FieldValues,
> extends InputHTMLAttributes<HTMLInputElement> {
  id: Path<T>;
  label: string;
  className?: string;
  errors?: FieldErrors<T>;
  register?: UseFormRegister<T>;
}

const BaseInput = <T extends FieldValues>({
  id,
  label,
  className = "",
  errors,
  register,
  ...props
}: InputFieldProps<T>) => {
  return (
    <div className="grid gap-3">
      <Label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
      <div>
        <Input
          {...register?.(id)}
          id={id}
          className={cn(
            "flex h-11 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            errors?.[id]
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-input focus-visible:ring-ring",
            className,
          )}
          {...props}
        />
        {errors?.[id] && (
          <p className="text-red-500 text-sm mt-1">
            {String(errors[id]?.message)}
          </p>
        )}
      </div>
    </div>
  );
};

export default BaseInput;
