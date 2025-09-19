import React from 'react'
import Layout from '../components/Layout/Layout'
import { useGetProductQuery } from '../services/productApi';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { useGetCategoryQuery } from '../services/categoryApi';

// ctrlf + shift + r => hard refresh 
const Home = () => {

  const { id } = useParams()

  const { search } = useLocation();
  const nav = useNavigate()

  console.log("search params", search)

  // const { data: product } = useGetProductQuery(search);
  const { data: product } = useGetProductQuery(id);

  const { data: category } = useGetCategoryQuery()


  return (
    <>

      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

          <form className="max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              nav('/?q=' + e.target.search.value)
            }}
          >
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" name='search' id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>


          <select name="" id=""
            onChange={(e) => nav('/?order=' + e.target.value + '&sortBy=title')}
          >
            <option value>select</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>


          <select name="" id="" onChange={(e) => nav('/category/' + e.target.value )}>
            <option value>Select Category</option>
            {category?.map((data) => (
              <option value={data?.slug}>{data?.name}</option>
            ))}
          </select>


          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">

            {product?.products?.map((products, i) => (
              <article key={i} className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <Link to={`/${products?.id}`}><img className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={products?.thumbnail} alt="" /></Link>
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2">
                    <p className="mr-3 text-sm font-semibold">${products?.price}</p>
                    <p className="text-xs text-gray-400"> {products?.description} </p>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">{products?.title}</h3>
                </div>
                <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                  <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
                  <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home