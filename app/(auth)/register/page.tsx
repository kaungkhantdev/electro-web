import { RegisterForm } from "@/components/features/auth";

export default function RegisterPage() {
  return (
    <main className="flex-1">
      <section className="container mx-auto px-4 py-8">
        <div className="w-full max-w-sm mx-auto">
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}
