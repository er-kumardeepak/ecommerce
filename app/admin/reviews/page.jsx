'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyReviews = [
  { id: 'rev_1', product: 'Bluetooth Headphones', customer: 'Jenny Wilson', rating: 5, comment: 'Excellent sound quality and comfort.' },
  { id: 'rev_2', product: 'Smart Watch', customer: 'Kristin Watson', rating: 4, comment: 'Great features, but battery life could improve.' },
  { id: 'rev_3', product: 'Yoga Mat Pro', customer: 'Bessie Cooper', rating: 4, comment: 'Comfortable and easy to clean.' },
]

export default function AdminReviews() {
  const [loading, setLoading] = useState(true)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews(dummyReviews)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Reviews <span className="text-slate-800 font-medium">Management</span></h1>
          <p className="text-sm text-slate-400 mt-2">Monitor product reviews and customer feedback.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Total reviews:</span> {reviews.length}
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{review.product}</p>
            <p className="mt-3 text-slate-800 font-semibold">{review.customer}</p>
            <div className="flex items-center gap-2 mt-3 text-yellow-500">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <p className="mt-4 text-slate-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
