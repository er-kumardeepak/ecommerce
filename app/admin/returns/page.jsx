'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyReturns = [
  { id: 'ret_1', orderId: 'ord_4', customer: 'Courtney Henry', reason: 'Wrong size', status: 'Pending' },
  { id: 'ret_2', orderId: 'ord_7', customer: 'Robert Fox', reason: 'Damaged product', status: 'Approved' },
  { id: 'ret_3', orderId: 'ord_2', customer: 'Jenny Wilson', reason: 'No longer needed', status: 'Processing' },
]

export default function AdminReturns() {
  const [loading, setLoading] = useState(true)
  const [returns, setReturns] = useState([])

  useEffect(() => {
    setReturns(dummyReturns)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Returns <span className="text-slate-800 font-medium">Management</span></h1>
          <p className="text-sm text-slate-400 mt-2">Track return requests and process approvals.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Pending returns:</span> {returns.filter((item) => item.status === 'Pending').length}
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-slate-200 rounded-3xl shadow-sm mt-8">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Return ID</th>
              <th className="px-6 py-4 text-left font-medium">Order</th>
              <th className="px-6 py-4 text-left font-medium">Customer</th>
              <th className="px-6 py-4 text-left font-medium">Reason</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
            {returns.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.orderId}</td>
                <td className="px-6 py-4">{item.customer}</td>
                <td className="px-6 py-4">{item.reason}</td>
                <td className="px-6 py-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
