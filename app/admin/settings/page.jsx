'use client'
import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummySettings = [
  { id: 'set_1', name: 'Store Approval', value: 'Enabled' },
  { id: 'set_2', name: 'Coupon Management', value: 'Enabled' },
  { id: 'set_3', name: 'Payment Gateways', value: 'Stripe, PayPal' },
  { id: 'set_4', name: 'User Roles', value: 'Admin, Seller, Customer' },
]

export default function AdminSettings() {
  const [loading, setLoading] = useState(true)
  const [settings, setSettings] = useState([])

  useEffect(() => {
    setSettings(dummySettings)
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="text-slate-500 mb-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl">Admin <span className="text-slate-800 font-medium">Settings</span></h1>
          <p className="text-sm text-slate-400 mt-2">Configure platform behavior and administrative controls.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mt-8">
        {settings.map((setting) => (
          <div key={setting.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{setting.name}</p>
            <p className="mt-4 text-lg font-semibold text-slate-800">{setting.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
