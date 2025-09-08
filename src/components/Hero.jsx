import React from 'react';
import heroImage from '../assets/farm-dairy-sunrise-pasture.png'; 
import { useNavigate } from 'react-router-dom'; 

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px] flex items-center overflow-hidden rounded-2xl mx-4 mt-6 ">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl h-[90%] mx-auto w-[80%]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImage}')`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Farm-Fresh Milk to
            <br />
            Your Doorstep
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Pure, premium, and delivered daily. Experience the richness of nature with
            <br />
            Kamdhnu's Cream & Gold standard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent  text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base cursor-pointer"
            onClick={() => navigate('/login')}
            >
              Get Started
            </button>
            
            <button className="bg-transparent border-2 border-white/80 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm text-base cursor-pointer"
            onClick={() => navigate('/products')}
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;