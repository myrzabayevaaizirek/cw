import React from "react";
import ProductContainer from "./containers/ProductContainer";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
      <ProductContainer />
    </div>
  );
};

export default App;
