import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../Slice/Counter'
  
/**
 * This is a redux store where we will connect all the slice with the application. 
 * @param options — The store configuration.
 * @returns — A configured Redux store.
 */
export const store = configureStore({
  reducer: {
    counter:CounterReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})

