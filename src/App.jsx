import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'   // ✅ Correct import
import { Products } from './pages/Products'
import ProductDetailPage from './components/products/ProductDetailPage'
import About from './pages/About'
import Privacy from './pages/Policies'
import SubscriptionPlans from './pages/SubscriptionPlans'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <div className='bg-[#FFFDF6] text-black dark:bg-[#0F1412] dark:text-white'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetailPage />} /> 
        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
        <Route path="/about" element={<About/>} />
        <Route path="/policies/privacy" element={<Privacy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App
