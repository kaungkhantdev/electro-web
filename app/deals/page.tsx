import { ContentPageLayout } from "@/components/layout/content-page-layout";
import {
  FeaturedDeals,
  FlashSaleBanner,
  CategoryDeals,
  DealsNewsletter,
} from "@/components/features/deals";

export default function DealsPage() {
  return (
    <ContentPageLayout
      title="Deals & Offers"
      subtitle="Save on your favorite Apple products"
      breadcrumbs={[{ label: "Deals" }]}
      variant="hero"
      heroGradient="from-red-600 via-red-500 to-orange-500"
    >
      <div className="max-w-6xl mx-auto">
        <FeaturedDeals />
        <FlashSaleBanner />
        <CategoryDeals />
        <DealsNewsletter />
      </div>
    </ContentPageLayout>
  );
}
