import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MetaTags from "../../components/Metatag/MetaTags";
import homeintro from "../../Assests/IMG/homeintro.webp"
import intro1 from "../../Assests/IMG/1 intro.webp"
import intro2 from "../../Assests/IMG/2 intro.webp"
import intro3 from "../../Assests/IMG/3 intro.webp"
import intro4 from "../../Assests/IMG/4 intro.webp"
import intro5 from "../../Assests/IMG/5 intro.webp"
import intro6 from "../../Assests/IMG/6 intro.webp"
import intro7 from "../../Assests/IMG/7 intro.webp"
import intro8 from "../../Assests/IMG/8 intro.webp"
import intro9 from "../../Assests/IMG/9 intro.webp"
import intro10 from "../../Assests/IMG/10 intro.webp"

const Peptideinfo = () => {
  const sections = [
    {
      title: "Intro to Peptides",
      date: "OCT 20, 2023",
      addresslink: "/pepdite-information/peptide",
      imgSrc: intro1,
    },
    {
      title: "USA Made Peptides",
      date: "OCT 16, 2023",
      addresslink: "/pepdite-information/indian-made-peptide",
      imgSrc:
      intro2,
    },
    {
      title: "Peptide Synthesis",
      date: "SEP 27, 2023",
      addresslink: "/pepdite-information/peptide-synthesis",
      imgSrc:
      intro3,
    },
    {
      title: "Peptide Solubility",
      date: "OCT 16, 2023",
      addresslink: "/pepdite-information/peptide-solubility",
      imgSrc:
      intro4,
    },
    {
      title: "Peptide Purification",
      date: "SEP 19, 2023",
      addresslink: "/pepdite-information/peptide-purification",
      imgSrc:
      intro5,
    },
    {
      title: "Peptide Bonds",
      date: "SEP 17, 2023",
      addresslink: "/pepdite-information/Peptide-bond",
      imgSrc:
      intro6,
    },
    {
      title: "Peptide Reconstitution",
      date: "SEP 17, 2023",
      addresslink: "/pepdite-information/peptide-reconstitution",
      imgSrc:
      intro7,
    },
    {
      title: "Peptide Storage",
      date: "SEP 15, 2023",
      addresslink: "/pepdite-information/peptide-storage",
      imgSrc:
      intro8,
    },
    {
      title: "Research Peptides",
      date: "SEP 09, 2023",
      addresslink: "/pepdite-information/peptide-research",
      imgSrc:
      intro9,
    },
    {
      title: "Peptide vs Proteins",
      date: "AUG 07, 2023",
      addresslink: "/pepdite-information/peptide-vs-protiens",
      imgSrc:
      intro10,
    },
  ];
  return (
    <>
      <Topbar />
      <MetaTags
      title="Peptide information -"
      canonicalUrl="/pepdite-information"
      description="Peptide purity at Bioplentypeps is achieved through rigorous manufacturing and production processes, characterized by meticulous attention to detail and quality control. Our state-of-the-art facilities and experienced team enable us to consistently produce peptides that meet or exceed industry benchmarks for purity and efficacy."
       />

      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-4/12 mb-4 md:mb-0">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-semibold">Peptide Information</h2>

            <div className="flex flex-col lg:flex-row gap-10 mt-7">
              <img
                width={350}
                height={350}
                src={homeintro}
                alt="lab img"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl mb-5 font-semibold">
                  Peptide Information
                </h2>
                <p className="text-sm text-gray-600">
                  How is Peptide Purity Achieved and Verified? At
                  peptidesciences.com, we provide peptides that exceed 99%
                  purity. Using state-of-the-art solution and solid phase
                  peptide synthetic technology, Peptide Sciences is able to
                  offer the finest quality peptides and proteins fit for any
                  research study or application. Peptide purity is achieved and
                  verified through uncompromising manufacturing and production…{" "}
                  <br />
                  BY PEPTIDE INFORMATION OCT 21, 2023
                </p>
              </div>
            </div>

            <div className="w-full flex-wrap flex flex-col lg:flex-row mt-10">
              {sections.map((section, index) => (
                <div key={index} className="w-full lg:w-6/12 flex gap-4 mt-3">
                  <div className="inline-block border">
                  <Link to={section.addresslink}>
                    <img width={110} src={section.imgSrc} alt="dynamo" />
                  </Link>
                  </div>
                  <div>
                  <Link to={section.addresslink}>
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                  </Link>

                  <Link to={section.addresslink}>
                    <p className="text-sm text-gray-400">{section.date}</p>
                  </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </>
  );
};

export default Peptideinfo;
