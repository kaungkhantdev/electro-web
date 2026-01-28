import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { ShippingOptions, ShippingPolicy } from "@/components/features/support";

export default function ShippingPage() {
  return (
    <ContentPageLayout
      title="Shipping Information"
      subtitle="Fast and reliable delivery options"
      breadcrumbs={[
        { label: "Support", href: "/support" },
        { label: "Shipping Info" },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <ShippingOptions />
        <ShippingPolicy />
      </div>
    </ContentPageLayout>
  );
}
