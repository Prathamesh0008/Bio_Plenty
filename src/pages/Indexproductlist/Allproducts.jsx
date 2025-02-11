import React from "react";
import { Link } from "react-router-dom";
import Allsingleproducts from "./Allsingleproducts";

const Allproducts = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="text-3xl font-bold mt-8 mb-5">
            Purchase The Highest Quality INDIA Made Peptides Direct from
            Bioplentypeps
          </h1>

          <div>
            <ul className="flex mt-8 sm:mb-4 gap-10 flex-wrap">
              <li className="hover:text-orange-700 hover:underline hover:underline-offset-4 transition-all hover:font-semibold duration-400">
                <Link to="/">All</Link>
              </li>
              <li className="hover:text-orange-700 hover:underline hover:underline-offset-4 transition-all hover:font-semibold duration-400">
                <Link to="/">Peptide Capsules</Link>
              </li>
              <li className="hover:text-orange-700 hover:underline hover:underline-offset-4 transition-all hover:font-semibold duration-400">
                <Link to="/">Peptides</Link>
              </li>
              <li className="hover:text-orange-700 hover:underline hover:underline-offset-4 transition-all hover:font-semibold duration-400">
                <Link to="/">Peptide Blends</Link>
              </li>
              <li className="hover:text-orange-700 hover:underline hover:underline-offset-4 transition-all hover:font-semibold duration-400">
                <Link to="/">IGF-1 Proteins</Link>
              </li>
            </ul>
          </div>
          <div>
            <Allsingleproducts/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Allproducts;
