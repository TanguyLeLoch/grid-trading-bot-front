import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import orderDbReducer from '../features/orderDb/orderDbSlice'
import orderCexReducer from '../features/orderCex/orderCexSlice'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    orderDb: orderDbReducer,
    orderCex: orderCexReducer
  }
})
