import { Route, Routes } from 'react-router'
import './App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import Blog from './pages/Blog'
import AddProduct from './pages/AddProduct'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <Layout>
        <ToastContainer />
        <Routes>
          {/* public route  */}
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Home />} />
          <Route path='/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />

          {/* protected route  */}
          <Route path='/addproduct' element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
          <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        </Routes>
      </Layout>
    </>
  )
}

export default App
