import Link from "next/link";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { WarrantyPlans, WarrantyClaim } from "@/components/features/support";

export default function WarrantyPage() {
  return (
    <ContentPageLayout
      title="Warranty Information"
      subtitle="Protect your investment"
      breadcrumbs={[
        { label: "Support", href: "/support" },
        { label: "Warranty" },
      ]}
    >
      <div className="max-w-5xl mx-auto">
        <WarrantyPlans />
        <WarrantyClaim />

        {/* FAQ */}
        <div className="prose prose-gray max-w-none">
          <h2>Warranty FAQ</h2>

          <h3>What does the standard warranty cover?</h3>
          <p>
            The standard 1-year warranty covers manufacturing defects and hardware
            malfunctions that occur under normal use. It does not cover accidental
            damage, water damage, or unauthorized modifications.
          </p>

          <h3>How do I check my warranty status?</h3>
          <p>
            You can check your warranty status by entering your device's serial
            number on Apple's website or by visiting any XtraSure store with your
            device and proof of purchase.
          </p>

          <h3>Can I add AppleCare+ after purchase?</h3>
          <p>
            Yes, you can add AppleCare+ within 60 days of your device purchase.
            Visit any XtraSure store or contact Apple directly to enroll.
          </p>

          <h3>Where can I get warranty service?</h3>
          <p>
            You can get warranty service at any XtraSure store, Apple Store, or
            Apple Authorized Service Provider. For mail-in service,{" "}
            <Link href="/support/contact" className="text-purple-600 hover:underline">
              contact our support team
            </Link>.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}
