'use client'
import Link from 'next/link'
import { StoreIcon, ShoppingBag, ArrowRight } from 'lucide-react'

export default function LoginPage() {
    return (
        <div className="min-h-[80vh] mx-6 my-16">
            <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                <div className="bg-slate-800 text-white px-8 py-12">
                    <h1 className="text-4xl font-semibold">Welcome to NexCart</h1>
                    <p className="mt-4 text-slate-200 max-w-2xl text-sm">Choose your path below to enter the marketplace as a customer or manage your store as a seller.</p>
                </div>
                <div className="p-8 grid gap-6 md:grid-cols-2">
                    <div className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition">
                        <div className="flex items-center gap-3 text-slate-800">
                            <ShoppingBag size={28} className="text-green-600" />
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Customer</p>
                                <h2 className="text-2xl font-semibold">Browse & Shop</h2>
                            </div>
                        </div>
                        <p className="mt-5 text-slate-500">Find the latest products, place orders, and manage your cart from the customer experience.</p>
                        <Link href="/shop" className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-full bg-slate-800 text-white hover:bg-slate-900 transition">
                            Continue as customer <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition">
                        <div className="flex items-center gap-3 text-slate-800">
                            <StoreIcon size={28} className="text-green-600" />
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Seller</p>
                                <h2 className="text-2xl font-semibold">Manage Your Store</h2>
                            </div>
                        </div>
                        <p className="mt-5 text-slate-500">Create your store, add products, and view your seller dashboard in one place.</p>
                        <Link href="/create-store" className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
                            Seller signup / login <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
