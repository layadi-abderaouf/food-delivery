import {configureStore} from '@reduxjs/toolkit'
import basket from './features/basket'
import restaurant from './features/restaurant'

export const store = configureStore({
    reducer: {
        basket : basket,
        restaurant:restaurant
    }
})