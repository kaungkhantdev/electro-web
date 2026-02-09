import { ShippingOptions, ShippingPolicy } from "@/components/features/support";

export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <ShippingOptions />
      <ShippingPolicy />
    </div>
  );
}
