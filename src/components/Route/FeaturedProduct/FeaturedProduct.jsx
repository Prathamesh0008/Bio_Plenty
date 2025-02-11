import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const {allProducts} = useSelector((state) => state.products);
   
  return (
    <div>
      <div>
        <div className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-bold mt-8 mb-5">
          <h1>Purchase The Highest Quality USA Made Peptides Direct from Bio Plenty</h1>
        </div>
        <div className="grid lg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 mt-8">
        {
            allProducts && allProducts.length !== 0 &&(
              <>
               {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
