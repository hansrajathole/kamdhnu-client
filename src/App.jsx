import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'   
import { Products } from './pages/Products'
import ProductDetailPage from './components/products/ProductDetailPage'
import About from './pages/About'
import Privacy from './pages/Policies'
import SubscriptionPlans from './pages/SubscriptionPlans'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import { useLocation } from 'react-router-dom'


const App = () => {
  
  const location = useLocation()
  const isLoginPage = location.pathname !== '/login'


  return (
    <div className='bg-[#FFFDF6] text-black '>
      {
        isLoginPage && <Navbar />
      }
      
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetailPage />} /> 
        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
        <Route path="/about" element={<About/>} />
        <Route path="/policies/privacy" element={<Privacy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
