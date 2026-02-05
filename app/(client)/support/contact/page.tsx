"use client";

import { ContactForm, ContactInfoCards } from "@/components/features/support";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfoCards />
      </div>
    </div>
  );
}
