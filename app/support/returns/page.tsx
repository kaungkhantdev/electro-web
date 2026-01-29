import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { ReturnSteps, ReturnPolicy } from "@/components/features/support";

export default function ReturnsPage() {
  return (
    <ContentPageLayout
      title="Returns & Exchanges"
      subtitle="Easy returns within 30 days"
      breadcrumbs={[
        { label: "Support", href: "/support" },
        { label: "Returns" },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <ReturnSteps />
        <ReturnPolicy />
      </div>
    </ContentPageLayout>
  );
}
