import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import FilterButtons from "../components/FilterButtons";
import Spinner from "../components/Spinner";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <FilterButtons selectedCategory={selectedCategory} onSelectCategory={handleFilterChange} />
      {loading ? <Spinner /> : <ProductList products={filteredProducts} />}
    </div>
  );
};

export default ProductContainer;
