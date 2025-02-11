import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/Route/ProductCard/ProductCard";

const PeptideCapsules = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("Peptide Capsules");
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    if (allProducts) {
      // Filter products by the desired category
      const filteredProducts = allProducts.filter(
        (product) => product.category === category
      );

      // Sort by 'sold_out' in descending order
      const sortedData = filteredProducts.sort(
        (a, b) => b.sold_out - a.sold_out
      );

      // Get the first 4 products
      const firstFour = sortedData.slice(0, 4);
      setData(firstFour);
    }
  }, [allProducts, category]);

  return (
    <div>
      <div>
        <div className="block space-y-1 inline-flex gap-5 mt-1 justify-around">
          {data && data.length > 0 ? (
            data.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeptideCapsules;
