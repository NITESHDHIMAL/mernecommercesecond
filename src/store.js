import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from './services/productApi'
import { authApi } from './services/authApi'
import { profileApi } from './services/profileApi'
import { categoryApi } from './services/categoryApi'

import authReducer from './redux/authSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,

     auth: authReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      authApi.middleware,
      profileApi.middleware,
      categoryApi.middleware,
    ),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)