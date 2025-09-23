// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({

    // all product 
    // getProduct: builder.query({
    //   query: () => `products`,
    // }),

    // pagination 
    getProduct: builder.query({
      query: ({page=1, limit = 10}) => {
        const skip = ( page - 1) * limit
       return `products/?limit=${limit}&skip=${skip}`
      },
    }),

    // search 
    // getProduct: builder.query({
    //   query: (search) => `products/search${search}`,
    // }),

    // sorting 
    // getProduct: builder.query({
    //   query: (search) => `products/${search}`,
    // }),

    // category filter 
    // getProduct: builder.query({
    //   query: (cat) => `products/category/${cat}`,
    // }),

    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),

    postProduct: builder.mutation({
      query: (formData) => ({
        url: `products/add`,
        method: 'POST',
        body: formData
      }),
    }),

  }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery, useGetProductByIdQuery, usePostProductMutation } = productApi