import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SubscriptionPlans from './SubscriptionPlans'
import { Products } from './Products'

const Home = () => {
  return (
    <>
      <Hero/>
      <Products/>
      <SubscriptionPlans/>
      <Footer/>
    </>
  )
}

export default Home