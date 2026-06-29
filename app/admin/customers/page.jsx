'use client'

import Loading from "@/components/Loading"
import { useEffect, useState } from "react"

const dummyCustomers = [
    { id: 'cust_1', name: 'Jenny Wilson', email: 'jenny.wilson@example.com', orders: 12, spend: '$1,240', status: 'Active' },
    { id: 'cust_2', name: 'Kristin Watson', email: 'kristin.watson@example.com', orders: 8, spend: '$860', status: 'Active' },
    { id: 'cust_3', name: 'Bessie Cooper', email: 'bessie.cooper@example.com', orders: 5, spend: '$430', status: 'Inactive' },
    { id: 'cust_4', name: 'Courtney Henry', email: 'courtney.henry@example.com', orders: 2, spend: '$120', status: 'New' },
    { id: 'cust_5', name: 'Robert Fox', email: 'robert.fox@example.com', orders: 16, spend: '$1,980', status: 'Active' },
]

export default function AdminCustomers() {
    const [loading, setLoading] = useState(true)
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        setCustomers(dummyCustomers)
        setLoading(false)
    }, [])

    if (loading) return <Loading />

    return (
        <div className="text-slate-500 mb-28">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                    <h1 className="text-2xl">Customer <span className="text-slate-800 font-medium">Management</span></h1>
                    <p className="text-sm text-slate-400 mt-2">View and manage customer accounts, purchase history, and status.</p>
                </div>
                <div className="text-sm text-slate-500">
                    <span className="font-medium">Total customers:</span> {customers.length}
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-8">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Active customers</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-800">{customers.filter(c => c.status === 'Active').length}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">New customers</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-800">{customers.filter(c => c.status === 'New').length}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Inactive customers</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-800">{customers.filter(c => c.status === 'Inactive').length}</p>
                </div>
            </div>

            <div className="overflow-x-auto bg-white border border-slate-200 rounded-3xl shadow-sm mt-10">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                    <thead className="bg-slate-50 text-slate-500">
                        <tr>
                            <th className="px-6 py-4 text-left font-medium">Customer</th>
                            <th className="px-6 py-4 text-left font-medium">Email</th>
                            <th className="px-6 py-4 text-left font-medium">Orders</th>
                            <th className="px-6 py-4 text-left font-medium">Total Spend</th>
                            <th className="px-6 py-4 text-left font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-600">
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td className="px-6 py-4">{customer.name}</td>
                                <td className="px-6 py-4">{customer.email}</td>
                                <td className="px-6 py-4">{customer.orders}</td>
                                <td className="px-6 py-4">{customer.spend}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${customer.status === 'Active' ? 'bg-green-100 text-green-700' : customer.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>
                                        {customer.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
