import { ArrowLeft, MessageSquare, Star, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"
import { ReviewsTable } from "@/components/features/admin/customers"

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
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/customers"
            className="hover:bg-muted rounded-md p-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Customer Reviews</h1>
            <p className="text-muted-foreground text-sm mt-0.5">Manage and moderate product reviews</p>
          </div>
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Reviews"
            value="1,284"
            change="+86 this month"
            changeType="positive"
            icon={MessageSquare}
          />
          <StatsCard
            title="Average Rating"
            value="4.3 / 5"
            change="+0.2 from last month"
            changeType="positive"
            icon={Star}
          />
          <StatsCard
            title="Pending Review"
            value="24"
            change="Needs moderation"
            changeType="neutral"
            icon={MessageSquare}
          />
          <StatsCard
            title="Positive Rate"
            value="87%"
            change="4+ star reviews"
            changeType="positive"
            icon={ThumbsUp}
          />
        </div>

        <ReviewsTable />
      </div>
    </>
  )
}
