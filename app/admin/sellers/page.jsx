'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummySellers = [
  { id: 'seller_1', name: 'Happy Shop', email: 'happyshop@example.com', status: 'Active', totalProducts: 34 },
  { id: 'seller_2', name: 'Fit Life', email: 'fitlife@example.com', status: 'Pending', totalProducts: 12 },
  { id: 'seller_3', name: 'Tech Hub', email: 'techhub@example.com', status: 'Suspended', totalProducts: 18 },
]

export default function AdminSellers() {
  const [loading, setLoading] = useState(true)
  const [sellers, setSellers] = useState([])

  useEffect(() => {
    setSellers(dummySellers)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Seller <span className="text-slate-800 font-medium">Management</span></h1>
          <p className="text-sm text-slate-400 mt-2">Approve seller accounts and review seller performance.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Total sellers:</span> {sellers.length}
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-slate-200 rounded-3xl shadow-sm mt-8">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Seller</th>
              <th className="px-6 py-4 text-left font-medium">Email</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
              <th className="px-6 py-4 text-left font-medium">Products</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
            {sellers.map((seller) => (
              <tr key={seller.id}>
                <td className="px-6 py-4">{seller.name}</td>
                <td className="px-6 py-4">{seller.email}</td>
                <td className="px-6 py-4">{seller.status}</td>
                <td className="px-6 py-4">{seller.totalProducts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
