"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BaseInput from "@/components/common/base-input";
import PasswordInput from "@/components/common/password-input";
import { RotateCw } from "lucide-react";
import { useRegister } from "@/hooks/mutations/use-register";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    formState: { errors },
    onSubmit,
    isLoading,
  } = useRegister();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-lg font-medium">Register</h1>
            <div className="text-center text-sm text-muted-foreground">
              Do you have an account?{" "}
              <Link href={"/login"} className="underline underline-offset-4">
                Login
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
              placeholder="Add user name"
            />
            <div className="grid grid-cols-2 gap-4">
              <BaseInput
                id="firstName"
                register={register}
                errors={errors}
                label="First Name"
                type="text"
                required
                placeholder="First name"
              />
              <BaseInput
                id="lastName"
                register={register}
                errors={errors}
                label="Last Name"
                type="text"
                required
                placeholder="Last name"
              />
            </div>
            <BaseInput
              id="email"
              register={register}
              errors={errors}
              label="Email"
              type="email"
              required
              placeholder="Enter your email"
            />
            <PasswordInput
              id="password"
              register={register}
              errors={errors}
              label="Password"
              required
              placeholder="Enter your password"
            />
            <PasswordInput
              id="confirmPassword"
              register={register}
              errors={errors}
              label="Confirm Password"
              required
              placeholder="Confirm your password"
            />

            <Button
              disabled={isLoading}
              type="submit"
              size={"lg"}
              className="w-full base-btn base-btn-primary"
            >
              {isLoading ? (
                <>
                  <RotateCw className="h-4 animate-spin" />
                  Loading
                </>
              ) : (
                "Register"
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
              size={"lg"}
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
