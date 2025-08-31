import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { CartItem } from './CartItem';
import { useCart } from '../../context/CartContext';


const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Add some delicious dairy products to get started!</p>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Continue Shopping
        </button>

        <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center text-2xl font-bold text-white">
            <span>Total: ₹{getTotalPrice()}</span>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors duration-200">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cart;