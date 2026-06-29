'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyProducts = [
  { id: 'prod_1', name: 'Bluetooth Headphones', store: 'Happy Shop', stock: 24, price: '$79' },
  { id: 'prod_2', name: 'Smart Watch', store: 'Happy Shop', stock: 12, price: '$129' },
  { id: 'prod_3', name: 'Yoga Mat Pro', store: 'Fit Life', stock: 8, price: '$49' },
  { id: 'prod_4', name: 'Wireless Charger', store: 'Tech Hub', stock: 3, price: '$39' },
]

export default function AdminProducts() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(dummyProducts)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Product <span className="text-slate-800 font-medium">Management</span></h1>
          <p className="text-sm text-slate-400 mt-2">View and manage products across all stores.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Total products:</span> {products.length}
        </div>
      </div>

      <div className="mt-8 overflow-x-auto bg-white border border-slate-200 rounded-3xl shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Product</th>
              <th className="px-6 py-4 text-left font-medium">Store</th>
              <th className="px-6 py-4 text-left font-medium">Stock</th>
              <th className="px-6 py-4 text-left font-medium">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.store}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
