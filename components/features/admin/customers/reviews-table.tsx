"use client"

import { useState } from "react"
import { Check, Star, X } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface Review {
  id: string
  customer: {
    id: string
    name: string
    email: string
  }
  product: string
  rating: number
  title: string
  comment: string
  date: string
  helpful: number
  status: "pending" | "approved" | "rejected"
}

const sampleReviews: Review[] = [
  { id: "1", customer: { id: "1", name: "John Doe", email: "john@example.com" }, product: "iPhone 15 Pro Max", rating: 5, title: "Incredible upgrade!", comment: "Excellent phone! The camera quality is amazing and the battery lasts all day. The titanium design feels premium.", date: "2025-01-15", helpful: 12, status: "approved" },
  { id: "2", customer: { id: "2", name: "Jane Smith", email: "jane@example.com" }, product: "MacBook Pro 16\"", rating: 4, title: "Worth the investment", comment: "Great laptop for professional work. A bit pricey but worth it. The M3 chip is blazing fast for video editing.", date: "2025-01-14", helpful: 8, status: "approved" },
  { id: "3", customer: { id: "3", name: "Bob Johnson", email: "bob@example.com" }, product: "AirPods Pro 2", rating: 5, title: "Best earbuds ever", comment: "Best earbuds I've ever owned. Noise cancellation is superb! The adaptive audio feature is a game changer.", date: "2025-01-14", helpful: 15, status: "pending" },
  { id: "4", customer: { id: "4", name: "Alice Brown", email: "alice@example.com" }, product: "iPad Pro 12.9\"", rating: 3, title: "Good but overpriced", comment: "Good device but too expensive for what it offers. The software still feels limited compared to a laptop.", date: "2025-01-13", helpful: 6, status: "pending" },
  { id: "5", customer: { id: "5", name: "Charlie Wilson", email: "charlie@example.com" }, product: "Apple Watch Ultra 2", rating: 5, title: "Adventure companion", comment: "Perfect for my outdoor activities. Very durable and the GPS accuracy is impressive!", date: "2025-01-12", helpful: 9, status: "approved" },
  { id: "6", customer: { id: "6", name: "Diana Miller", email: "diana@example.com" }, product: "Samsung Galaxy S24 Ultra", rating: 2, title: "Disappointing battery", comment: "Disappointed with the battery life. Not as good as advertised. Expected much better for the price.", date: "2025-01-11", helpful: 3, status: "rejected" },
  { id: "7", customer: { id: "9", name: "George Martinez", email: "george@example.com" }, product: "Sony WH-1000XM5", rating: 5, title: "Audio perfection", comment: "The sound quality is phenomenal. Noise cancellation blocks out everything. Super comfortable for long sessions.", date: "2025-02-01", helpful: 18, status: "approved" },
  { id: "8", customer: { id: "10", name: "Hannah Lee", email: "hannah@example.com" }, product: "Dell XPS 15", rating: 4, title: "Solid Windows laptop", comment: "Beautiful display and great build quality. Runs a bit warm under heavy load but overall very satisfied.", date: "2025-02-03", helpful: 5, status: "pending" },
]

const statusConfig = {
  approved: { label: "Approved", variant: "default" as const, className: "bg-green-600 hover:bg-green-600" },
  pending: { label: "Pending", variant: "default" as const, className: "bg-yellow-600 hover:bg-yellow-600" },
  rejected: { label: "Rejected", variant: "destructive" as const, className: "" },
}

type FilterType = "all" | "pending" | "approved" | "rejected"

const ratingDistribution = [
  { stars: 5, count: 4 },
  { stars: 4, count: 2 },
  { stars: 3, count: 1 },
  { stars: 2, count: 1 },
  { stars: 1, count: 0 },
]

const maxRatingCount = Math.max(...ratingDistribution.map(r => r.count))

export function ReviewsTable() {
  const [filter, setFilter] = useState<FilterType>("all")

  const filteredReviews = filter === "all"
    ? sampleReviews
    : sampleReviews.filter(r => r.status === filter)

  const filterCounts = {
    all: sampleReviews.length,
    pending: sampleReviews.filter(r => r.status === "pending").length,
    approved: sampleReviews.filter(r => r.status === "approved").length,
    rejected: sampleReviews.filter(r => r.status === "rejected").length,
  }

  return (
    <div className="space-y-4">
      {/* Rating Distribution */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold mb-4">Rating Distribution</h3>
        <div className="space-y-2">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <div className="flex items-center gap-1 w-20 shrink-0">
                <span className="text-sm tabular-nums">{item.stars}</span>
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full transition-all"
                  style={{ width: maxRatingCount > 0 ? `${(item.count / maxRatingCount) * 100}%` : "0%" }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-8 text-right tabular-nums">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {(["all", "pending", "approved", "rejected"] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors capitalize ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "border hover:bg-muted"
            }`}
          >
            {f} ({filterCounts[f]})
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-muted-foreground text-sm">No reviews found for this filter.</p>
          </div>
        ) : (
          filteredReviews.map((review) => {
            const config = statusConfig[review.status]
            return (
              <div key={review.id} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <Link
                      href={`/admin/customers/${review.customer.id}`}
                      className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full font-medium shrink-0 hover:bg-primary/20 transition-colors"
                    >
                      {review.customer.name.split(" ").map(n => n[0]).join("")}
                    </Link>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link
                          href={`/admin/customers/${review.customer.id}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {review.customer.name}
                        </Link>
                        <Badge variant={config.variant} className={`text-[10px] px-1.5 py-0 ${config.className}`}>
                          {config.label}
                        </Badge>
                      </div>
                      <div className="text-muted-foreground text-sm mt-0.5">{review.product}</div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3.5 w-3.5 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-muted-foreground text-xs">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                        {review.helpful > 0 && (
                          <>
                            <span className="text-muted-foreground text-xs">·</span>
                            <span className="text-muted-foreground text-xs">
                              {review.helpful} found helpful
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {review.status === "pending" && (
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="hover:bg-green-100 text-green-600 rounded-md p-2 border border-green-200 transition-colors" title="Approve">
                        <Check className="h-4 w-4" />
                      </button>
                      <button className="hover:bg-red-100 text-red-600 rounded-md p-2 border border-red-200 transition-colors" title="Reject">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="mt-3 pl-13">
                  <p className="font-medium text-sm mb-1">{review.title}</p>
                  <p className="text-muted-foreground text-sm">{review.comment}</p>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
