"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BaseInput from "@/components/common/base-input";
import PasswordInput from "@/components/common/password-input";
import { RotateCw } from "lucide-react";
import { useLogin } from "@/hooks/mutations/use-login";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    formState: { errors },
    onSubmit,
    isLoading,
  } = useLogin();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-lg font-medium">Login</h1>
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href={"/register"} className="underline underline-offset-4">
                Register
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <BaseInput
              id="username"
              register={register}
              errors={errors}
              label="Username"
              type="text"
              required
              placeholder="Enter your username"
            />
            <PasswordInput
              id="password"
              register={register}
              errors={errors}
              label="Password"
              required
              placeholder="Enter your password"
            />
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              disabled={isLoading}
              type="submit"
              size="lg"
              className="w-full base-btn base-btn-primary"
            >
              {isLoading ? (
                <>
                  <RotateCw className="h-4 animate-spin" />
                  Loading
                </>
              ) : (
                "Login"
              )}
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background dark:bg-card text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>
          <div className="grid gap-4">
            <Button
              variant="outline"
              type="button"
              size="lg"
              className="w-full base-btn base-btn-outline"
            >
              Continue with Google
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
