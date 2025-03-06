import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg p-4 bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain"
          />
          <p className="text-blue-600 font-semibold mt-2">{product.category}</p>
          <h2 className="text-lg font-bold mt-1">{product.title}</h2>
          <p className="text-xl font-semibold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
