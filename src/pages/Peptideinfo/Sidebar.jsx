import React from "react";
import { Link } from "react-router-dom";
import Peptideshop from "../../../../frontend/src/Assests/shopnow.jpg";
import styles from "../../styles/styles";

const Sidebar = () => {
  const links = [
    { text: "Introduction to Peptides", url: "/pepdite-information/peptide" },
    {
      text: "USA Made Peptides",
      url: "/pepdite-information/us-made-peptide",
    },
    { text: "Peptide Bonds", url: "/pepdite-information/Peptide-bond" },
    { text: "Peptide Purity", url: "/pepdite-information/Peptide-purity" },
    {
      text: "Peptide Purification",
      url: "/pepdite-information/peptide-purification",
    },
    {
      text: "Peptide Reconstitution",
      url: "/pepdite-information/peptide-reconstitution",
    },
    {
      text: "Peptide Solubility",
      url: "/pepdite-information/peptide-solubility",
    },
    { text: "Peptide Storage", url: "/pepdite-information/peptide-storage" },
    {
      text: "Peptide Synthesis",
      url: "/pepdite-information/peptide-synthesis",
    },
    {
      text: "Peptide vs Proteins",
      url: "/pepdite-information/peptide-vs-protiens",
    },
    { text: "Research Peptides", url: "/pepdite-information/peptide-research" },
  ];
  return (
    <>
      <form className="flex items-center max-w-sm mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search here peptides related ..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <hr className="my-6 border-gray-300 border-2 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <h3 className="text-xl my-3 lg:my-5 text-green-500 font-bold">Peptide Glossary</h3>

      <ul className="text-gray-500 text-sm">
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:text-green-500 transition-all duration-200"
          >
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>

      <div className="mt-9">
        <img width={200} src={Peptideshop} alt="Peptide pic" />

        <Link to="/products">
        <button
          type="submit"
          className={`${styles.button} ml-12 ${styles.buttonGreen}`}
        >
          <span
            className={`${styles.buttonHoverEffect} ${styles.buttonHoverColorGreen}`}
          />
          <span className={styles.buttonGradient} />
          <span className="relative">Shop now</span>
        </button>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
