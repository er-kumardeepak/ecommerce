'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyOrders = [
  { id: 'ord_1', customer: 'Jenny Wilson', total: '$145.60', status: 'Delivered' },
  { id: 'ord_2', customer: 'Kristin Watson', total: '$97.20', status: 'Pending' },
  { id: 'ord_3', customer: 'Bessie Cooper', total: '$54.40', status: 'Shipped' },
  { id: 'ord_4', customer: 'Courtney Henry', total: '$214.20', status: 'Cancelled' },
]

export default function AdminOrders() {
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setOrders(dummyOrders)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Order <span className="text-slate-800 font-medium">Management</span></h1>
          <p className="text-sm text-slate-400 mt-2">Manage order lifecycle from pending to completed and cancelled.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Total orders:</span> {orders.length}
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-slate-200 rounded-3xl shadow-sm mt-8">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Order</th>
              <th className="px-6 py-4 text-left font-medium">Customer</th>
              <th className="px-6 py-4 text-left font-medium">Total</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
