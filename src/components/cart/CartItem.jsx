import React from 'react';

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-6">
      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
      
      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-400">₹{item.price} {item.unit}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-600 rounded-lg">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 text-white hover:bg-gray-700"
          >
            -
          </button>
          <span className="px-4 py-1 text-white bg-gray-700">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 text-white hover:bg-gray-700"
          >
            +
          </button>
        </div>

        <span className="text-white font-semibold min-w-20">
          ₹{item.price * item.quantity}
        </span>

        <button
          onClick={() => onRemove(item.id)}
          className="text-red-400 hover:text-red-300 px-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
};