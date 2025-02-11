import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Peptidecapsules = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("Peptide Capsules");

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

      const firstFour = sortedData.slice(0, 444);
      setData(firstFour);
      setLoading(false);
    }
  }, [allProducts, category]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data && data.length > 0 ? (
            data.map((product) => (
              <Link target="_blank" key={product._id} to={`/product/${product._id}`}>
                <p className="text-sm mt-1 hover:text-green-600">{product.name}</p>
              </Link>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Peptidecapsules;
