import React from "react";

const categories = ["Men’s Clothing", "Women’s Clothing", "Jewelery", "Electronics"];

const FilterButtons = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-3 p-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-lg border ${
            selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
