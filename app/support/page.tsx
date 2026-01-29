import { ContentPageLayout } from "@/components/layout/content-page-layout";
import {
  SupportCategories,
  SupportContactInfo,
} from "@/components/features/support";

export default function SupportPage() {
  return (
    <ContentPageLayout
      title="Support Center"
      subtitle="How can we help you today?"
      breadcrumbs={[{ label: "Support" }]}
      variant="hero"
    >
      <div className="max-w-4xl mx-auto">
        <SupportCategories />
        <SupportContactInfo />
      </div>
    </ContentPageLayout>
  );
}
