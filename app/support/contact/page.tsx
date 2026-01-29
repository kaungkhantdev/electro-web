"use client";

import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { ContactForm, ContactInfoCards } from "@/components/features/support";

export default function ContactPage() {
  return (
    <ContentPageLayout
      title="Contact Us"
      subtitle="We're here to help"
      breadcrumbs={[
        { label: "Support", href: "/support" },
        { label: "Contact Us" },
      ]}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfoCards />
        </div>
      </div>
    </ContentPageLayout>
  );
}
