import { LoginForm } from "@/components/features/auth";

export default function LoginPage() {
  return (
    <main className="flex-1">
      <section className="container mx-auto px-4 py-8">
        <div className="w-full max-w-sm mx-auto">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
