import React, { useState } from "react";
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Purchasepeptide from "./Purchasepeptide";
import Igfproteins from "./Igfproteins";
import CosmeticPeptides from "./CosmeticPeptides";
import PeptideBlends from "./PeptideBlends";
import PeptideCapsules from "./PeptideCapsules";

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
      <div className="menu-bar">
        <ul className="flex flex-col w-full">
          {/* Desktop view */}
          <li className="hidden md:block px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold "
              >
                Peptides
              </a>
              <FaArrowRight />
            </div>

            <div className="dropdown-menu">
              <ul>
                <li className="-top-24 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl absolute">
                    <h1 className="text-2xl font-bold mb-4">Buy Peptides</h1>

                    {/* Backend data fetch of card */}
                    <Purchasepeptide />

                    <Link to="/products?category=Purchase%20Peptide">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* Mobile view */}
          <li className="md:hidden px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div
              className="w-full flex justify-between items-center"
              onClick={() =>
                setActiveMenu(activeMenu === "Peptides" ? null : "Peptides")
              }
            >
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg text-gray-800 font-semibold"
              >
                Peptides
              </a>
              <FaArrowRight />
            </div>
            {activeMenu === "Peptides" && (
              <div className="px-6 py-4 bg-white overflow-x-auto rounded-xl shadow-xl w-full mt-2">
                <h1 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Buy Peptides
                </h1>
                <Purchasepeptide />
                <Link to="/products?category=Purchase%20Peptide">
                  <h4 className="mt-2 text-sm flex items-center justify-end gap-1 underline">
                    View More Products <FaArrowRight />
                  </h4>
                </Link>
              </div>
            )}
          </li>

          {/* Desktop view */}
          <li className="hidden md:block p-2 px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br transition ease-in-out duration-300 text-gray-800 font-semibold"
              >
                IGF-1 Proteins
              </a>
              <FaArrowRight />
            </div>
            <div className="dropdown-menu">
              <ul>
                <li className="-top-40 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[60rem] transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl absolute">
                    <h1 className="text-2xl font-bold mb-4">IGF-1 Proteins</h1>

                    {/* from backend data */}
                    <Igfproteins />

                    <Link to="/products?category=IGF-1%20Proteins">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>

                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* Mobile view */}
          <li className="p-2 md:hidden px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div
              className="w-full flex justify-between items-center"
              onClick={() =>
                setActiveMenu(
                  activeMenu === "IGF-1 Proteins" ? null : "IGF-1 Proteins"
                )
              }
            >
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg text-gray-800 font-semibold"
              >
                IGF-1 Proteins
              </a>
              
              <FaArrowRight />
            </div>
            {activeMenu === "IGF-1 Proteins" && (
              <div className="px-6 py-4 bg-white overflow-x-auto rounded-xl shadow-xl w-full mt-2">
                <h1 className="text-2xl font-bold mb-4">IGF-1 Proteins</h1>

                {/* from backend data */}
                <Igfproteins />

                <Link to="/products?category=IGF-1%20Proteins">
                  <h4 className="mt-2 w-44 text-sm flex items-center justify-end gap-1 underline">
                    View More Products <FaArrowRight />
                  </h4>
                </Link>
              </div>
            )}
          </li>

          {/* desktop view */}
          <li className="hidden md:block px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br transition ease-in-out duration-300 text-gray-800 font-semibold"
              >
                Cosmetic Peptides
              </a>
              <FaArrowRight />
            </div>
            <div className="dropdown-menu">
              <ul>
                <li className="-top-52 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[60rem] transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl absolute">
                    <h1 className="text-2xl font-bold mb-4">
                      Cosmetic Peptides
                    </h1>

                    {/* from backend data */}
                    <CosmeticPeptides />

                    <Link to="/products?category=Cosmetic%20Peptides">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* Mobile View */}
          <li className="md:hidden px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div
              className="w-full flex justify-between items-center"
              onClick={() =>
                setActiveMenu(
                  activeMenu === "Cosmetic Peptides"
                    ? null
                    : "Cosmetic Peptides"
                )
              }
            >
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg text-gray-800 font-semibold"
              >
                Cosmetic Peptides
              </a>
              <FaArrowRight />
            </div>
            {activeMenu === "Cosmetic Peptides" && (
              <div className="px-6 py-4 bg-white overflow-x-auto rounded-xl shadow-xl w-full mt-2">
                <h1 className="text-2xl font-bold mb-4">Cosmetic Peptides</h1>

                {/* from backend data */}
                <CosmeticPeptides />

                <Link to="/products?category=Cosmetic%20Peptides">
                  <h4 className="mt-2 w-44 text-sm flex items-center justify-end gap-1 underline">
                    View More Products <FaArrowRight />
                  </h4>
                </Link>
              </div>
            )}
          </li>

          {/* Desktop view */}
          <li className="hidden md:block px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br transition ease-in-out duration-300 text-gray-800 font-semibold"
              >
                Peptide Blends
              </a>
              <FaArrowRight />
            </div>
            <div className="dropdown-menu">
              <ul>
                <li className="-top-72 transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[60rem] transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl absolute">
                    <h1 className="text-2xl font-bold mb-4">Peptide Blends</h1>

                    {/*Data from backend  */}
                    <PeptideBlends />

                    <Link to="/products?category=Peptide%20Blends">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* Mobile View */}
          <li className="md:hidden p-2 px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div
              className="w-full flex justify-between items-center"
              onClick={() =>
                setActiveMenu(
                  activeMenu === "Peptide Blends" ? null : "Peptide Blends"
                )
              }
            >
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg text-gray-800 font-semibold"
              >
                Peptide Blends
              </a>
              <FaArrowRight />
            </div>
            {activeMenu === "Peptide Blends" && (
              <div className="px-6 py-4 bg-white overflow-x-auto rounded-xl shadow-xl w-full mt-2">
                <h1 className="text-2xl font-bold mb-4">Peptide Blends</h1>

                {/*Data from backend  */}
                <PeptideBlends />

                <Link to="/products?category=Peptide%20Blends">
                  <h4 className="mt-2 w-44 text-sm flex items-center justify-end gap-1 underline">
                    View More Products <FaArrowRight />
                  </h4>
                </Link>
              </div>
            )}
          </li>

          {/* Deskotp view */}
          <li className="hidden md:block px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div className="w-full flex justify-between items-center">
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br transition ease-in-out duration-300 text-gray-800 font-semibold"
              >
                Peptide Capsules
              </a>
              <FaArrowRight />
            </div>
            <div className="dropdown-menu">
              <ul>
                <li className="-top-[330px] transition group-hover:translate-y-5 translate-y-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:transform z-50 min-w-[60rem] transform">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-xl absolute">
                    <h1 className="text-2xl font-bold mb-4">
                      Peptide Capsules
                    </h1>

                    {/* Data fetch from backed */}
                    <PeptideCapsules />

                    <Link to="/products?category=Peptide%20Capsules">
                      <h4 className="mt-2 text-md flex items-center justify-end gap-1 underline">
                        View More Products <FaArrowRight />
                      </h4>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* Mobile view */}
          <li className="md:hidden p-2 px-6 py-2 hover:shadow-lg rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
            <div
              className="w-full flex justify-between items-center"
              onClick={() =>
                setActiveMenu(
                  activeMenu === "Peptide Capsules" ? null : "Peptide Capsules"
                )
              }
            >
              <a
                href="#"
                className="block p-2 -mx-2 rounded-lg text-gray-800 font-semibold"
              >
                Peptide Capsules
              </a>
              <FaArrowRight />
            </div>
            {activeMenu === "Peptide Capsules" && (
              <div className="px-6 py-4 bg-white overflow-x-auto rounded-xl shadow-xl w-full mt-2">
                <h1 className="text-2xl font-bold mb-4">Peptide Capsules</h1>

                {/* Data fetch from backed */}
                <PeptideCapsules />

                <Link to="/products?category=Peptide%20Capsules">
                  <h4 className="mt-2 text-sm w-44 flex items-center justify-end gap-1 underline">
                    View More Products <FaArrowRight />
                  </h4>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default MegaMenu;
