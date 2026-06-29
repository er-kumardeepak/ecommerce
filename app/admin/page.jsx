'use client'
import { dummyAdminDashboardData } from "@/assets/assets"
import Loading from "@/components/Loading"
import OrdersAreaChart from "@/components/OrdersAreaChart"
import { CircleDollarSignIcon, ShoppingBasketIcon, StoreIcon, TagsIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function AdminDashboard() {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    const [loading, setLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState({
        products: 0,
        revenue: 0,
        orders: 0,
        stores: 0,
        allOrders: [],
    })

    const dashboardCardsData = [
        { title: 'Total Products', value: dashboardData.products, icon: ShoppingBasketIcon },
        { title: 'Total Revenue', value: currency + dashboardData.revenue, icon: CircleDollarSignIcon },
        { title: 'Total Orders', value: dashboardData.orders, icon: TagsIcon },
        { title: 'Total Stores', value: dashboardData.stores, icon: StoreIcon },
    ]

    const panelItems = [
        { name: 'Dashboard', href: '/admin' },
        { name: 'Products', href: '/admin/products' },
        { name: 'Categories', href: '/admin/categories' },
        { name: 'Brands', href: '/admin/brands' },
        { name: 'Orders', href: '/admin/orders' },
        { name: 'Returns', href: '/admin/returns' },
        { name: 'Refunds', href: '/admin/refunds' },
        { name: 'Customers', href: '/admin/customers' },
        { name: 'Sellers', href: '/admin/sellers' },
        { name: 'Inventory', href: '/admin/inventory' },
        { name: 'Payments', href: '/admin/payments' },
        { name: 'Coupons', href: '/admin/coupons' },
        { name: 'Reviews', href: '/admin/reviews' },
        { name: 'Reports', href: '/admin/reports' },
        { name: 'Settings', href: '/admin/settings' }
    ]

    const kpiCardsData = [
        { title: "Today's Revenue", value: currency + dashboardData.todayRevenue },
        { title: "Today's Orders", value: dashboardData.todayOrders },
        { title: 'Monthly Revenue', value: currency + dashboardData.monthlyRevenue },
        { title: 'Pending Orders', value: dashboardData.pendingOrders },
        { title: 'Cancelled Orders', value: dashboardData.cancelledOrders },
        { title: 'Refund Requests', value: dashboardData.refundRequests },
        { title: 'New Customers', value: dashboardData.newCustomers },
        { title: 'Active Sellers', value: dashboardData.activeSellers },
        { title: 'Low Stock Products', value: dashboardData.lowStockProducts },
        { title: 'Out of Stock Products', value: dashboardData.outOfStockProducts },
        { title: 'Pending Store Approval', value: dashboardData.pendingStoreApproval },
        { title: 'Pending Withdrawals', value: dashboardData.pendingWithdrawals },
        { title: 'Average Order Value', value: dashboardData.averageOrderValue },
        { title: 'Conversion Rate', value: dashboardData.conversionRate },
    ]

    const capabilityItems = [
        'Dashboard with real KPIs and analytics.',
        'Product management.',
        'Order management with full lifecycle.',
        'Customer management.',
        'Seller management and approval.',
        'Inventory tracking and low-stock alerts.',
        'Payments and payout management.',
        'Reports and exports.',
        'Role-based access control.',
        'Homepage/CMS management.'
    ]

    const fetchDashboardData = async () => {
        setDashboardData(dummyAdminDashboardData)
        setLoading(false)
    }

    useEffect(() => {
        fetchDashboardData()
    }, [])

    if (loading) return <Loading />

    return (
        <div className="text-slate-500">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                    <h1 className="text-2xl">Admin <span className="text-slate-800 font-medium">Dashboard</span></h1>
                    <p className="text-sm text-slate-400 mt-2">Manage everything from products and orders to sellers, inventory, payments, and reports.</p>
                </div>
                <div className="text-sm text-slate-500">
                    <span className="font-medium">Ready for:</span> Business KPIs, analytics, inventory alerts, approvals, payouts and store management.
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 my-10">
                {dashboardCardsData.map((card, index) => (
                    <div key={index} className="flex items-center gap-4 border border-slate-200 p-4 rounded-lg bg-white shadow-sm">
                        <div className="flex flex-col gap-2 text-xs text-slate-500">
                            <p>{card.title}</p>
                            <b className="text-2xl font-semibold text-slate-800">{card.value}</b>
                        </div>
                        <card.icon size={40} className="text-slate-400 p-2 bg-slate-100 rounded-full" />
                    </div>
                ))}
            </div>

            <section className="bg-white border border-slate-200 rounded-3xl p-6 mb-10 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-800 mb-4">Admin Dashboard Modules</h2>
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                    {panelItems.map((item) => (
                        <a key={item.name} href={item.href} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 bg-slate-50 text-center hover:border-slate-300 hover:bg-slate-100 transition">
                            {item.name}
                        </a>
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-lg font-semibold text-slate-800 mb-4">Business KPIs</h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                    {kpiCardsData.map((card) => (
                        <div key={card.title} className="border border-slate-200 rounded-3xl p-5 bg-white shadow-sm">
                            <p className="text-sm text-slate-500">{card.title}</p>
                            <p className="mt-4 text-2xl font-semibold text-slate-800">{card.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-10 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-800">Platform Capabilities</h2>
                        <p className="text-sm text-slate-500 mt-2">The admin dashboard supports a complete marketplace management experience.</p>
                    </div>
                </div>
                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-6">
                    {capabilityItems.map((item) => (
                        <div key={item} className="rounded-3xl border border-slate-200 p-4 text-sm text-slate-700 bg-slate-50">
                            • {item}
                        </div>
                    ))}
                </div>
            </section>

            <OrdersAreaChart allOrders={dashboardData.allOrders} />
        </div>
    )
}