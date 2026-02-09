import {
  SupportCategories,
  SupportContactInfo,
} from "@/components/features/support";

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <SupportCategories />
      <SupportContactInfo />
    </div>
  );
}
