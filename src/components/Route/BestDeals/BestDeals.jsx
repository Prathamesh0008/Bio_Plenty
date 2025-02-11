import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData && sortedData.slice(0, 4);
    setData(firstFive);
  }, [allProducts]);
  
  return (
    <div>
      <div>
        <div className="text-3xl font-bold mt-8 mb-5">
          <h1>Best Deals</h1>
        </div>
        <div className="grid lg:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 mt-8">
           {
            data && data.length !== 0 &&(
              <>
               {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
