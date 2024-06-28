import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items : []
  },
  reducers: {
    addToBasket: (state,action) => {
     
      state.items = [...state.items,action.payload]
    },
    removeFromBasket: (state,action) => {
      const index = state.items.findIndex((item)=>item.id === action.payload.id)
      let newBasket = [...state.items]
      if(index >= 0){
        newBasket.splice(index,1)
      }

      state.items = newBasket
    }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

//functions
export const getBasketItems = (state) => state.basket.items;

export const getBasketItemsById = (state,id) => state.basket.items
    .filter((item)=> item.id == id)

export const getBasketPrice = (state) => state.basket.items.reduce(
  (total,item)=>total += item.price,0)


export default basketSlice.reducer



