import React from 'react';
import { Link } from 'react-router-dom';
import './Bestseller.css'
import Peptideimg from "../../../src/Assests/IMG/Peptide.jpg";
import capsules from "../../../src/Assests/IMG/capsules.jpg";
import blends from "../../../src/Assests/IMG/Blends.jpg";
import igfimg from "../../../src/Assests/IMG/IGF-group.jpg";

const products = [
  {
    name: "Buy Peptides",
    imgSrc: Peptideimg,
    link: "/products?category=Purchase%20Peptide",
    title: "Buy Peptides",
  },
  {
    name: "IGF-1 Proteins",
    imgSrc: igfimg,
    link: "/products?category=IGF-1%20Proteins",
    title: "IGF-1 Proteins"
  },
  {
    name: "Peptide Blends",
    imgSrc: blends,
    link: "/products?category=Peptide%20Blends",
    title: "Peptide Blends"
  },
  {
    name: "Cosmetic Peptides",
    imgSrc: capsules,
    link: "/products?category=Peptide%20Capsules",
    title: "Cosmetic Peptides",
  },
];

const ProductGrid = () => {
  return (
    <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
      {products.map((product, index) => (
        <div key={index} className="border grid grid-cols-2 product-design-bg rounded-md">
          <div className="h-full p-7 product-design-bg">
            <h2 className="font-bold text-2xl mb-6">{product.name}</h2>
            <Link to={product.link}>
              <button className="text-white button-bg-color hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="p-1 flex items-center justify-center">
            <img
            loading='lazy'
              src={product.imgSrc}
              alt="product img"
              title={product.title}
              width={200}
              height={200}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
