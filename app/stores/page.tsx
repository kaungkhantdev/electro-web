import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { StoreList } from "@/components/features/stores";

export default function StoresPage() {
  return (
    <ContentPageLayout
      title="Our Stores"
      subtitle="Find a XtraSure location near you"
      breadcrumbs={[{ label: "Stores" }]}
      variant="hero"
    >
      <div className="max-w-5xl mx-auto">
        <StoreList />
      </div>
    </ContentPageLayout>
  );
}
