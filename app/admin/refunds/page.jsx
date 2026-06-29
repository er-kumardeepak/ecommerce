'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyRefunds = [
  { id: 'ref_1', orderId: 'ord_4', customer: 'Courtney Henry', amount: '$214.20', status: 'Requested' },
  { id: 'ref_2', orderId: 'ord_9', customer: 'Robert Fox', amount: '$120.00', status: 'Approved' },
  { id: 'ref_3', orderId: 'ord_5', customer: 'Jenny Wilson', amount: '$54.40', status: 'Completed' },
]

export default function AdminRefunds() {
  const [loading, setLoading] = useState(true)
  const [refunds, setRefunds] = useState([])

  useEffect(() => {
    setRefunds(dummyRefunds)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Refund <span className="text-slate-800 font-medium">Requests</span></h1>
          <p className="text-sm text-slate-400 mt-2">Review refund requests and manage payout status.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Total refunds:</span> {refunds.length}
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-slate-200 rounded-3xl shadow-sm mt-8">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Refund ID</th>
              <th className="px-6 py-4 text-left font-medium">Order ID</th>
              <th className="px-6 py-4 text-left font-medium">Customer</th>
              <th className="px-6 py-4 text-left font-medium">Amount</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
            {refunds.map((refund) => (
              <tr key={refund.id}>
                <td className="px-6 py-4">{refund.id}</td>
                <td className="px-6 py-4">{refund.orderId}</td>
                <td className="px-6 py-4">{refund.customer}</td>
                <td className="px-6 py-4">{refund.amount}</td>
                <td className="px-6 py-4">{refund.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
