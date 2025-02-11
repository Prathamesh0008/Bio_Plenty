import React from "react";
import Productlist from "../Productslist/Productlist";
import FeaturedProduct from "../../components/Route/FeaturedProduct/FeaturedProduct";
import BestDeals from "../../components/Route/BestDeals/BestDeals";
import ProductGrid from "../Bestsellers/Categorywisebox";

const Indexproductlist = () => {
  return (
    <>
      <section className="mt-8 mb-10">
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col-reverse md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-3/12 mb-4 md:mb-0">
            <Productlist />
          </div>
          
          {/* Right side */}
          <div className="p-3 w-full md:w-9/12">
            <p className="text-[14px]">
            Bio Plenty™ specializes in creating highly purified peptides, proteins, and amino acid derivatives for scientific research and development. Bio Plenty™ employs both automated and manual peptide synthesizers along with solution and solid-phase peptide synthesis technology to produce top-quality peptides and proteins with purity levels exceeding 99%. From the initial stages of peptide synthesis to packaging and delivery, our company adheres to the strictest quality control standards to ensure that all peptides reach you in their purest and most stable form. In-house testing at every stage of production in our analytical laboratory verifies the precise sequential fingerprints of our peptides for accuracy. This is achieved through highly precise High-Performance Liquid Chromatography and Mass Spectrometry analysis, which scientifically confirms the purity, accuracy, and identity of each peptide.
            </p>
            <BestDeals />
            <ProductGrid />
            <FeaturedProduct />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Indexproductlist;
