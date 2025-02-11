import React from "react";
import { Link } from "react-router-dom";
import Purchasepeptide from "./Sidebar/Purchasepeptide";
import Peptidecapsules from "./Sidebar/Peptidecapsules";
import Peptideblends from "./Sidebar/Peptideblends";
import Igfproteins from "./Sidebar/Igfproteins";
import Cosmeticpepide from "./Sidebar/Cosmeticpepide";

const Productlist = () => {
  return (
    <>
      <section>
        <div>
        <h5 className="text-green-600 mb-3 font-bold">
            Peptide Capsules
          </h5>
           <Peptidecapsules />

          <h5 className="text-green-600 mt-5 mb-3 font-bold">Purchase Peptide</h5>
          <Purchasepeptide />

          {/* Peptide blends */}
          <h5 className="text-green-600 mt-5 mb-3 font-bold">Peptide Blends</h5>
           <Peptideblends />

          {/* Peptide Proteins */}
          <h5 className="text-green-600 mt-5 mb-3 font-bold">IGF-1 Proteins</h5>
           <Igfproteins />

          <h5 className="text-green-600 mt-5 mb-3 font-bold">
            Cosmetic Peptides
          </h5>
           <Cosmeticpepide />

        </div>
      </section>
    </>
  );
};

export default Productlist;
