import React, { useState } from 'react';
import { ProductCard } from '../components/products/ProductCard';
import { ProductFilters } from '../components/products/ProductFilters';
import { useCart } from '../context/CartContext';
import { products, categories } from '../data/products';
import { useNavigate , useLocation} from 'react-router-dom';
import Footer from '../components/Footer';

export const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  


  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section className=" px-42 ">
      <div className="max-w-7xl mx-auto pb-20 ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between  md:items-center mb-12 items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6 md:mb-0">
            Our Products
          </h2>

          <ProductFilters
            filters={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
      {
        location.pathname === '/products' && <Footer />
      }
    </section>
  );
};