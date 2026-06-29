'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyBrands = [
  { id: 'brand_1', name: 'MetroTech', products: 12 },
  { id: 'brand_2', name: 'HappyWear', products: 8 },
  { id: 'brand_3', name: 'FitLife', products: 14 },
  { id: 'brand_4', name: 'HomeEase', products: 9 },
]

export default function AdminBrands() {
  const [loading, setLoading] = useState(true)
  const [brands, setBrands] = useState([])

  useEffect(() => {
    setBrands(dummyBrands)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Brand <span className="text-slate-800 font-medium">Management</span></h1>
          <p className="text-sm text-slate-400 mt-2">Manage brands, label consistency, and product assignments.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Total brands:</span> {brands.length}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mt-8">
        {brands.map((brand) => (
          <div key={brand.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{brand.name}</p>
            <p className="mt-4 text-3xl font-semibold text-slate-800">{brand.products}</p>
            <p className="text-xs text-slate-400 mt-2">Products</p>
          </div>
        ))}
      </div>
    </div>
  )
}
