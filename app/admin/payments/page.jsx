'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyPayments = [
  { id: 'pay_1', method: 'Stripe', amount: '$2,150.00', status: 'Settled' },
  { id: 'pay_2', method: 'PayPal', amount: '$1,020.50', status: 'Pending' },
  { id: 'pay_3', method: 'Bank Transfer', amount: '$860.00', status: 'Processing' },
]

export default function AdminPayments() {
  const [loading, setLoading] = useState(true)
  const [payments, setPayments] = useState([])

  useEffect(() => {
    setPayments(dummyPayments)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Payments <span className="text-slate-800 font-medium">Management</span></h1>
          <p className="text-sm text-slate-400 mt-2">Track payouts, pending transactions, and payment methods.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Total payments:</span> {payments.length}
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-slate-200 rounded-3xl shadow-sm mt-8">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Payment ID</th>
              <th className="px-6 py-4 text-left font-medium">Method</th>
              <th className="px-6 py-4 text-left font-medium">Amount</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
            {payments.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.method}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
