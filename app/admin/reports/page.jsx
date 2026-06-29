'use client'

import Loading from "@/components/Loading"
import { useEffect, useState } from "react"
import OrdersAreaChart from "@/components/OrdersAreaChart"

const dummyReportData = [
    { title: 'Total Revenue', value: '$48,760.50' },
    { title: 'Orders This Month', value: '124' },
    { title: 'New Customers', value: '15' },
    { title: 'Refunds', value: '3' },
]

const reportRows = [
    { id: 'r1', label: 'Monthly Revenue', value: '$42,600.90' },
    { id: 'r2', label: 'Average Order Value', value: '$145.20' },
    { id: 'r3', label: 'Conversion Rate', value: '4.8%' },
    { id: 'r4', label: 'Pending Orders', value: '8' },
    { id: 'r5', label: 'Cancelled Orders', value: '2' },
    { id: 'r6', label: 'Refund Requests', value: '3' },
]

const dummyOrdersTrend = [
    { createdAt: '2025-08-20T08:46:58.239Z', total: 145.6 },
    { createdAt: '2025-08-21T09:00:00.000Z', total: 180.4 },
    { createdAt: '2025-08-22T10:15:00.000Z', total: 210.2 },
    { createdAt: '2025-08-23T11:20:00.000Z', total: 320.8 },
    { createdAt: '2025-08-24T12:35:00.000Z', total: 410.5 },
    { createdAt: '2025-08-25T13:50:00.000Z', total: 285.1 },
]

export default function AdminReports() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    if (loading) return <Loading />

    return (
        <div className="text-slate-500 mb-28">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                    <h1 className="text-2xl">Reports <span className="text-slate-800 font-medium">Dashboard</span></h1>
                    <p className="text-sm text-slate-400 mt-2">View performance summaries, KPI reports, and order analytics.</p>
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-8">
                {dummyReportData.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">{item.title}</p>
                        <p className="mt-4 text-2xl font-semibold text-slate-800">{item.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3 mt-10">
                <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Orders Trend</h2>
                    <div className="h-[320px]">
                        <OrdersAreaChart allOrders={dummyOrdersTrend} />
                    </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Report Summary</h2>
                    <div className="space-y-3">
                        {reportRows.map((row) => (
                            <div key={row.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                                <p className="text-sm text-slate-600">{row.label}</p>
                                <p className="font-semibold text-slate-800">{row.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
