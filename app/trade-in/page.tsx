import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import {
  TradeInValueProps,
  TradeInSteps,
  DeviceSelector,
  TradeInFAQ,
} from "@/components/features/trade-in";

export default function TradeInPage() {
  return (
    <ContentPageLayout
      title="Trade-In Program"
      subtitle="Get credit for your old devices"
      breadcrumbs={[{ label: "Trade-In" }]}
      variant="hero"
      heroGradient="from-purple-900 via-purple-700 to-pink-600"
    >
      <div className="max-w-5xl mx-auto">
        <TradeInValueProps />
        <TradeInSteps />
        <DeviceSelector />
        <TradeInFAQ />
      </div>
    </ContentPageLayout>
  );
}
