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
              ? 'bg-green-700 text-white '
              : 'border border-amber-300  hover:bg-[#386641] '
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};