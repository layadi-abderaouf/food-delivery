import { createSlice } from '@reduxjs/toolkit'

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant : []
  },
  reducers: {
    setRetaurant : (state,action)=>{
        state.restaurant = action.payload
    }
  
  }
})

export const { setRetaurant } = restaurantSlice.actions

//functions
export const getRestaurant = (state) => state.restaurant.restaurant;




export default restaurantSlice.reducer