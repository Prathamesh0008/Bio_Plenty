import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MetaTags from "../../components/Metatag/MetaTags";
import protiensbanner from "../../Assests/IMG/Peptides vs Proteins Imaage.webp"


const Peptideprotiens = () => {
  return (
    <>
      <Topbar />
      <MetaTags
        title="Peptide Proteins - Bio plentypeps"
        canonicalUrl="/pepdite-information/peptide-vs-protiens"
      />
      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-4/12 mb-4 md:mb-0">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-semibold">Peptides vs Proteins</h2>
            <div className="flex gap-10 text-[12px] text-gray-400">
              <p>BY PEPTIDE INFORMATION</p> OCTOBER 20, 2023
            </div>
            <div className="flex flex-col gap-10 mt-7">
              <div>
                <p className="text-[11px] text-gray-600">
                  <b>
                    ALL ARTICLES AND PRODUCT INFORMATION PROVIDED ON THIS
                    WEBSITE ARE FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY.
                  </b>{" "}
                  The products offered on this website are furnished for
                  in-vitro studies only. In-vitro studies (Latin: in glass) are
                  performed outside of the body. These products are not
                  medicines or drugs and have not been approved by the FDA to
                  prevent, treat or cure any medical condition, ailment or
                  disease. Bodily introduction of any kind into humans or
                  animals is strictly forbidden by law.
                </p>

                <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-2" />

                <h2 className="text-2xl mt-3 -mb-5">What are the Differences?</h2>
              </div>

              <div className="text-sm">
                <div className="flex flex-col md:flex-row">
                  <p>
                  Peptides and proteins, while similar in many regards, have several key differences that are important to understand. Oftentimes the terms “peptide” and “protein” are used synonymously, but differing characteristics and biological activities between the two compounds prevent the terms from being totally interchangeable. To fully appreciate the differences between proteins and peptides, it is important to understand amino acids, the building blocks of both, and how all three (amino acids, peptides, and proteins) relate to one another.
                  </p>
                </div>
                  <img
                    className="w-full mt-5"
                    src={protiensbanner}
                    alt="peptide img"
                  />
              </div>
            </div>

            <div className="text-sm">
              <h2 className="text-2xl mt-3 mb-4">Amino Acids</h2>
            <p className="mt-5">Amino acids are small but biologically vital compounds containing an amino group (NH2) and a carboxylic acid group (COOH) as well as a side-chain structure that varies between different amino acids. While hundreds of amino acids are known, only twenty are genetically combined into peptides (such as arginine, lysine, and glutamine), while others can be combined synthetically.</p>
          
            <p className="mt-5">Importantly, amino acids make up the building blocks of peptides. When amine and carboxylic acid functional groups in amino acids join to form amide bonds, a peptide is formed. Combining two or more amino acids, whether naturally or synthetically, results in the formation of a peptide. The shortest peptide, containing two amino acids, can be referred to as a “dipeptide.” A peptide three amino acids in length is a “tripeptide,” and so on.</p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />

              <h2 className="text-2xl mt-3 mb-4">Peptide</h2>
              <p>
              Peptides are short chains of amino acids that have been linked by amide, or peptide, bonds. While the term “peptide” generally refers to a compound made up of two or more amino acids, peptides can be further classified as oligopeptides and polypeptides. Meaning “few,” “oligo” denotes that oligopeptides are made up of relatively small numbers of amino acids, generally less than ten. Polypeptides, on the other hand, are composed of more than ten amino acids.
              </p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">Polypeptides and Proteins</h2>

              <p>Scientists commonly differentiate between proteins and polypeptides based on their size and structure. Regarding size, a polypeptide composed of more than 50 amino acids is generally classified as a protein, though the minimum categorization threshold can range from around 40-100 amino acids. However, 50 is a general guideline.</p>

              <p className="mt-5">Secondly, proteins and polypeptides tend to differ in regards to their structure. Typically, polypeptides shorter than about 40-50 amino acids in length do not fold into a fixed structure. Proteins, however, are able to fold into a three-dimensional stable fixed structure. Proteins tend to have a fixed structure for a certain function (i.e. hemoglobin, a protein responsible for transporting oxygen in the blood). Polypeptides shorter than 40-50 amino acids, on the other hand, generally do not have enough cooperative interactions to form a stable native structure.</p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">Peptide Vs. Protein: Which Term to Use?</h2>

              <p>Importantly, all proteins are technically polypeptides. However, as a researcher, it can sometimes be useful to differentiate between the two and reserve the term “proteins” to refer to relatively long and structurally fixed amino acid chains. Accordingly, peptides will generally refer to shorter (sub-50) amino acid chains.</p>

            </div>
          </div>
        </div>
      </section>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
    </>
  );
};

export default Peptideprotiens
