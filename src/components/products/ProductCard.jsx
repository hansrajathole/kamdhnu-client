import React from 'react';

export const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  
  return (
    <div className=" rounded-2xl p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
      {/* Product Title */}
      <h3 className="text-green-400 text-xl font-semibold mb-4">
        {product.name}
      </h3>

      {/* Product Image */}
      <div className="mb-6 rounded-xl overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-48 object-contain "
        />
      </div>

      {/* Price */}
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">₹{product.price}</span>
        <span className="text-gray-400 text-sm ml-2">{product.unit}</span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-white text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Add to Cart
          </button>
          <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
            Buy Now
          </button>
        </div>
        <button
          onClick={() => onViewDetails(product.id)}
          className="w-full bg-transparent border border-gray-600 text-gray-300 py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
        >
          Details
        </button>
      </div>
    </div>
  );
};