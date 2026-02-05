"use client"

import { Check, Star, X } from "lucide-react"

interface Review {
  id: string
  customer: {
    name: string
    email: string
  }
  product: string
  rating: number
  comment: string
  date: string
  status: "pending" | "approved" | "rejected"
}

const sampleReviews: Review[] = [
  { id: "1", customer: { name: "John Doe", email: "john@example.com" }, product: "iPhone 15 Pro Max", rating: 5, comment: "Excellent phone! The camera quality is amazing and the battery lasts all day.", date: "2024-01-15", status: "approved" },
  { id: "2", customer: { name: "Jane Smith", email: "jane@example.com" }, product: "MacBook Pro 16\"", rating: 4, comment: "Great laptop for professional work. A bit pricey but worth it.", date: "2024-01-14", status: "approved" },
  { id: "3", customer: { name: "Bob Johnson", email: "bob@example.com" }, product: "AirPods Pro 2", rating: 5, comment: "Best earbuds I've ever owned. Noise cancellation is superb!", date: "2024-01-14", status: "pending" },
  { id: "4", customer: { name: "Alice Brown", email: "alice@example.com" }, product: "iPad Pro 12.9\"", rating: 3, comment: "Good device but too expensive for what it offers.", date: "2024-01-13", status: "pending" },
  { id: "5", customer: { name: "Charlie Wilson", email: "charlie@example.com" }, product: "Apple Watch Ultra 2", rating: 5, comment: "Perfect for my outdoor activities. Very durable!", date: "2024-01-12", status: "approved" },
  { id: "6", customer: { name: "Diana Miller", email: "diana@example.com" }, product: "Samsung Galaxy S24", rating: 2, comment: "Disappointed with the battery life. Not as good as advertised.", date: "2024-01-11", status: "rejected" },
]

export function ReviewsTable() {
  return (
    <div className="space-y-4">
      {sampleReviews.map((review) => (
        <div key={review.id} className="bg-card border rounded-xl p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full font-medium shrink-0">
                {review.customer.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{review.customer.name}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                    review.status === "approved" ? "bg-green-100 text-green-800" :
                    review.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {review.status}
                  </span>
                </div>
                <div className="text-muted-foreground text-sm">{review.product}</div>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-muted-foreground text-sm ml-2">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            {review.status === "pending" && (
              <div className="flex items-center gap-2">
                <button className="hover:bg-green-100 text-green-600 rounded p-2">
                  <Check className="h-4 w-4" />
                </button>
                <button className="hover:bg-red-100 text-red-600 rounded p-2">
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
          <p className="text-muted-foreground mt-3 text-sm">{review.comment}</p>
        </div>
      ))}
    </div>
  )
}
