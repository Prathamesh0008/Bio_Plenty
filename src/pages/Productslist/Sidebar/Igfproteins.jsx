import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Igfproteins = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("IGF-1 Proteins");

  // Fetching allProducts from Redux store
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    if (allProducts) {
      const filteredProducts = allProducts.filter(
        (product) => product.category === category
      );

      const sortedData = filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      // Selecting the first four products
      const firstFour = sortedData.slice(0, 444);
      setData(firstFour);
      setLoading(false);
    }
  }, [allProducts, category]); // Dependency array for useEffect

  return (
    <div>
      {loading ? ( 
        <p>Loading...</p>
      ) : (
        <div>
          {data && data.length > 0 ? (
            data.map((product) => (
              <a key={product._id} href={`/product/${product._id}`}>
                <p className="text-sm mt-1 hover:text-green-600">{product.name}</p>
              </a>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Igfproteins