import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useLoginMutation } from '../services/authApi'
import { setCredential } from '../redux/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    const nav = useNavigate()

    const [login] = useLoginMutation()

    const onSubmit = async (formData) => {
        try {
            let res = await login(formData).unwrap();
            //    localStorage.setItem('user', JSON.stringify(res) )

            dispatch(setCredential(res))
            toast.success("Login successfully!")
            nav('/')
            console.log(formData)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <form class="max-w-sm mx-auto shadow-2xl p-4" onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-5">
                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                    <input type="text" defaultValue="emilys" {...register("username")} id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" defaultValue="emilyspass" {...register("password")} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your password' required />
                </div>
                <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>
    )
}

export default Login