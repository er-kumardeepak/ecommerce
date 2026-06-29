import { createSlice } from '@reduxjs/toolkit'
import { getInitialSellerProducts } from '@/lib/sellerData'

const initialProducts = getInitialSellerProducts()

const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: initialProducts,
    },
    reducers: {
        setProduct: (state, action) => {
            state.list = action.payload
        },
        clearProduct: (state) => {
            state.list = []
        }
    }
})

export const { setProduct, clearProduct } = productSlice.actions

export default productSlice.reducer