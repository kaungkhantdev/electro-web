"use client";

import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { FAQAccordion } from "@/components/features/support";

export default function FAQsPage() {
  return (
    <ContentPageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions"
      breadcrumbs={[
        { label: "Support", href: "/support" },
        { label: "FAQs" },
      ]}
    >
      <FAQAccordion />
    </ContentPageLayout>
  );
}
