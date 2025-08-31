import React from 'react';

export const ProductFilters = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-green-600 text-white'
              : 'bg-gray-800 text-gray-300 border border-gray-600 hover:border-gray-500 hover:bg-gray-700'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};