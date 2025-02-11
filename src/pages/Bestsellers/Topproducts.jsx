import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

const Topproducts = () => {
  const product = productData.map((item) => (
    <Product
      key={item.id}  // Adding a unique key prop
      name={item.name}
      url={item.imageurl}
      price={item.price}
      overprice={item.overprice}
      description={item.description}
    />
  ));

  return (
    <>
      <section className="w-full">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-7xl">
            <Carousel responsive={responsive}>
              {product}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topproducts;
