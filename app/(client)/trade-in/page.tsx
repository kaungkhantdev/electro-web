import {
  TradeInValueProps,
  TradeInSteps,
  DeviceSelector,
  TradeInFAQ,
} from "@/components/features/trade-in";

export default function TradeInPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <TradeInValueProps />
      <TradeInSteps />
      <DeviceSelector />
      <TradeInFAQ />
    </div>
  );
}
