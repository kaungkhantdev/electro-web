import { ProductsTable } from "@/components/features/admin";
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared";
import {
  Message,
  MessageSquareCode,
  StartUp01FreeIcons,
  ThumbsUpFreeIcons,
} from "@hugeicons/core-free-icons";

export default function ReviewsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Customers", href: "/admin/customers" },
          { label: "Reviews" },
        ]}
      />
      <div className="flex flex-col gap-5">
        <div className="grid auto-rows-min gap-5 md:grid-cols-4">
          <StatsCard
            title="Total Reviews"
            value="1,284"
            change="+86 this month"
            changeType="positive"
            icon={Message}
          />
          <StatsCard
            title="Average Rating"
            value="4.3 / 5"
            change="+0.2 from last month"
            changeType="positive"
            icon={StartUp01FreeIcons}
          />
          <StatsCard
            title="Pending Review"
            value="24"
            change="Needs moderation"
            changeType="neutral"
            icon={MessageSquareCode}
          />
          <StatsCard
            title="Positive Rate"
            value="87%"
            change="4+ star reviews"
            changeType="positive"
            icon={ThumbsUpFreeIcons}
          />
        </div>
        <ProductsTable />
      </div>
    </>
  );
}
