import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({ 
    login: builder.mutation({
      query: (formData) => ({
        url: `auth/login`,
        method: 'POST',
        body: formData
      }) ,
    }),
 
  }),
}) 
export const { useLoginMutation } = authApi