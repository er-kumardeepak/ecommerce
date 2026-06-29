'use client'
import { assets } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { addSellerProduct, getSellerStore, readFileAsDataUrl } from "@/lib/sellerData"
import { setProduct } from "@/lib/features/product/productSlice"

export default function StoreAddProduct() {
    const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty & Health', 'Toys & Games', 'Sports & Outdoors', 'Books & Media', 'Food & Drink', 'Hobbies & Crafts', 'Others']
    const dispatch = useDispatch()
    const router = useRouter()

    const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null })
    const [productInfo, setProductInfo] = useState({
        name: "",
        description: "",
        mrp: 0,
        price: 0,
        category: "",
    })
    const [loading, setLoading] = useState(false)
    const [store, setStore] = useState(null)

    useEffect(() => {
        const currentStore = getSellerStore()
        if (!currentStore) {
            toast.error("Create your store first")
            router.push("/create-store")
            return
        }
        setStore(currentStore)
    }, [router])

    const onChangeHandler = (e) => {
        setProductInfo({ ...productInfo, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if (!store) {
            toast.error("Create your store first")
            return
        }

        setLoading(true)

        const imageUrls = []
        for (const key of Object.keys(images)) {
            const file = images[key]
            if (file) {
                imageUrls.push(await readFileAsDataUrl(file))
            }
        }

        const newProduct = {
            id: `prod_${Date.now()}`,
            name: productInfo.name.trim(),
            description: productInfo.description.trim(),
            mrp: Number(productInfo.mrp),
            price: Number(productInfo.price),
            images: imageUrls.length ? imageUrls : [assets.upload_area],
            category: productInfo.category,
            storeId: store.id,
            inStock: true,
            store,
            rating: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        const updatedProducts = addSellerProduct(newProduct)
        dispatch(setProduct(updatedProducts))
        setLoading(false)
        toast.success("Product added successfully")
        setProductInfo({ name: "", description: "", mrp: 0, price: 0, category: "" })
        setImages({ 1: null, 2: null, 3: null, 4: null })
    }

    return (
        <form onSubmit={e => toast.promise(onSubmitHandler(e), { loading: "Adding Product..." })} className="text-slate-500 mb-28">
            <h1 className="text-2xl">Add New <span className="text-slate-800 font-medium">Products</span></h1>
            <p className="mt-7">Product Images</p>

            <div htmlFor="" className="flex gap-3 mt-4 flex-wrap">
                {Object.keys(images).map((key) => (
                    <label key={key} htmlFor={`images${key}`}>
                        <Image width={300} height={300} className='h-15 w-auto border border-slate-200 rounded cursor-pointer' src={images[key] ? URL.createObjectURL(images[key]) : assets.upload_area} alt="" />
                        <input type="file" accept='image/*' id={`images${key}`} onChange={e => setImages({ ...images, [key]: e.target.files[0] })} hidden />
                    </label>
                ))}
            </div>

            <label htmlFor="" className="flex flex-col gap-2 my-6 ">
                Name
                <input type="text" name="name" onChange={onChangeHandler} value={productInfo.name} placeholder="Enter product name" className="w-full max-w-sm p-2 px-4 outline-none border border-slate-200 rounded" required />
            </label>

            <label htmlFor="" className="flex flex-col gap-2 my-6 ">
                Description
                <textarea name="description" onChange={onChangeHandler} value={productInfo.description} placeholder="Enter product description" rows={5} className="w-full max-w-sm p-2 px-4 outline-none border border-slate-200 rounded resize-none" required />
            </label>

            <div className="flex gap-5 flex-wrap">
                <label htmlFor="" className="flex flex-col gap-2 ">
                    Actual Price ($)
                    <input type="number" name="mrp" onChange={onChangeHandler} value={productInfo.mrp} placeholder="0" rows={5} className="w-full max-w-45 p-2 px-4 outline-none border border-slate-200 rounded resize-none" required />
                </label>
                <label htmlFor="" className="flex flex-col gap-2 ">
                    Offer Price ($)
                    <input type="number" name="price" onChange={onChangeHandler} value={productInfo.price} placeholder="0" rows={5} className="w-full max-w-45 p-2 px-4 outline-none border border-slate-200 rounded resize-none" required />
                </label>
            </div>

            <select onChange={e => setProductInfo({ ...productInfo, category: e.target.value })} value={productInfo.category} className="w-full max-w-sm p-2 px-4 my-6 outline-none border border-slate-200 rounded" required>
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>

            <br />

            <button disabled={loading} className="bg-slate-800 text-white px-6 mt-7 py-2 hover:bg-slate-900 rounded transition">Add Product</button>
        </form>
    )
}