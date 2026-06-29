import { dummyStoreData, productDummyData } from '@/assets/assets'

const SELLER_STORE_KEY = 'nexcart_seller_store'
const SELLER_PRODUCTS_KEY = 'nexcart_seller_products'

const readStorage = (key, fallback) => {
  if (typeof window === 'undefined') return fallback

  try {
    const stored = window.localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch (error) {
    console.error(error)
    return fallback
  }
}

const writeStorage = (key, value) => {
  if (typeof window === 'undefined') return

  window.localStorage.setItem(key, JSON.stringify(value))
}

export const getSellerStore = () => {
  return readStorage(SELLER_STORE_KEY, null) || null
}

export const saveSellerStore = (store) => {
  writeStorage(SELLER_STORE_KEY, store)
  return store
}

export const getSellerProducts = () => {
  const storedProducts = readStorage(SELLER_PRODUCTS_KEY, [])
  return Array.isArray(storedProducts) ? storedProducts : []
}

export const saveSellerProducts = (products) => {
  writeStorage(SELLER_PRODUCTS_KEY, products)
  return products
}

export const addSellerProduct = (product) => {
  const currentProducts = getSellerProducts()
  const updatedProducts = [product, ...currentProducts]
  saveSellerProducts(updatedProducts)
  return updatedProducts
}

export const updateSellerProduct = (productId, updates) => {
  const updatedProducts = getSellerProducts().map((product) =>
    product.id === productId ? { ...product, ...updates } : product
  )

  saveSellerProducts(updatedProducts)
  return updatedProducts
}

export const getInitialSellerProducts = () => {
  const storedProducts = getSellerProducts()
  if (storedProducts.length) {
    return storedProducts
  }

  return productDummyData
}

export const getSellerDashboardData = () => {
  const products = getSellerProducts()
  const store = getSellerStore()

  return {
    totalProducts: products.length,
    totalEarnings: products.reduce((sum, product) => sum + Number(product.price || 0), 0),
    totalOrders: 0,
    ratings: [],
    store,
  }
}

export const readFileAsDataUrl = (file) => {
  if (!file) return null

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export const buildStorePreview = (store, fallbackLogo = dummyStoreData.logo) => ({
  ...store,
  logo: store.logo || fallbackLogo,
})
