'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyInventory = [
  { id: 'prod_1', name: 'Bluetooth Headphones', stock: 24, status: 'In Stock' },
  { id: 'prod_2', name: 'Wireless Charger', stock: 3, status: 'Low Stock' },
  { id: 'prod_3', name: 'Yoga Mat Pro', stock: 0, status: 'Out of Stock' },
  { id: 'prod_4', name: 'Smart Watch', stock: 12, status: 'In Stock' },
]

export default function AdminInventory() {
  const [loading, setLoading] = useState(true)
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    setInventory(dummyInventory)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Inventory <span className="text-slate-800 font-medium">Tracking</span></h1>
          <p className="text-sm text-slate-400 mt-2">Monitor inventory status, low stock alerts, and out of stock products.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Products tracked:</span> {inventory.length}
        </div>
      </div>

      <div className="overflow-x-auto bg-white border border-slate-200 rounded-3xl shadow-sm mt-8">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Product</th>
              <th className="px-6 py-4 text-left font-medium">Stock</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
            {inventory.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.stock}</td>
                <td className="px-6 py-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
