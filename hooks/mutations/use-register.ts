"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import { registerAction } from "@/lib/auth/actions";

const registerSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

export function useRegister() {
  const router = useRouter();

  const { register, handleSubmit, formState, setValue, watch } =
    useForm<RegisterFormValues>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      },
    });

  const mutation = useMutation({
    mutationFn: (values: RegisterFormValues) => {
      const { confirmPassword, ...payload } = values;
      void confirmPassword;
      return registerAction(payload);
    },
    onSuccess: async (credentials) => {
      toast.success("Account created! Signing you in...");
      await signIn("credentials", { ...credentials, redirect: false });
      router.push("/");
      router.refresh();
    },
    onError: () => {
      toast.error("Registration failed. Please try again.");
    },
  });

  const onSubmit = handleSubmit((values) => mutation.mutate(values));

  return {
    register,
    handleSubmit,
    formState,
    setValue,
    watch,
    onSubmit,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
}
