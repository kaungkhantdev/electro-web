import {
  FeaturedDeals,
  FlashSaleBanner,
  CategoryDeals,
  DealsNewsletter,
} from "@/components/features/deals";

export default function DealsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <FeaturedDeals />
      <FlashSaleBanner />
      <CategoryDeals />
      <DealsNewsletter />
    </div>
  );
}
