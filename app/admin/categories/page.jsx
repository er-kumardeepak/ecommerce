'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyCategories = [
  { id: 'cat_1', name: 'Electronics', products: 42 },
  { id: 'cat_2', name: 'Fitness', products: 18 },
  { id: 'cat_3', name: 'Home & Kitchen', products: 27 },
  { id: 'cat_4', name: 'Fashion', products: 33 },
]

export default function AdminCategories() {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(dummyCategories)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Category <span className="text-slate-800 font-medium">Management</span></h1>
          <p className="text-sm text-slate-400 mt-2">Manage category structure and product organization.</p>
        </div>
        <div className="text-sm text-slate-500">
          <span className="font-medium">Total categories:</span> {categories.length}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mt-8">
        {categories.map((category) => (
          <div key={category.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{category.name}</p>
            <p className="mt-4 text-3xl font-semibold text-slate-800">{category.products}</p>
            <p className="text-xs text-slate-400 mt-2">Products</p>
          </div>
        ))}
      </div>
    </div>
  )
}
