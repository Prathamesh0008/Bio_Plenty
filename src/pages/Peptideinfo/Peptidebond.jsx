import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MetaTags from "../../components/Metatag/MetaTags";
import bondstructure from "../../Assests/IMG/Peptide Bond Formation.webp"
import pepbonsgif from "../../Assests/IMG/Peptide Bond Formation.webp"


const Peptidebond = () => {
  return (
    <>
      <Topbar />
      <MetaTags
        title="Peptide Bonds - Bio plentypeps"
        canonicalUrl="/pepdite-information/Peptide-bond"
      />
      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-4/12 mb-4 md:mb-0">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-semibold">Peptide Bonds</h2>
            <div className="flex gap-10 text-sm text-gray-400">
              <p>BY PEPTIDE INFORMATION</p> SEP 17, 2023
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

                <h2 className="text-2xl mt-3 mb-5">What is a Peptide Bond?</h2>
                <p className="text-sm">
                  A peptide bond is a covalent bond that is formed between two amino acids. To form a peptide bond, a carboxyl group of one amino acid reacts with the amino group of another amino acid. As a result, a molecule of water is also released. This is referred to as a condensation reaction. The resulting bond is a CO-NH bond and is henceforth referred to as a peptide bond. Additionally, the resulting molecule is termed an amide.
                  </p>
                <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-2" />

                <h2 className="text-2xl mt-3 -mb-5">Peptide Bond Formation</h2>
                
              </div>

              <div className="text-sm">
                <div className="flex flex-col">
                  <p>
                  In order to form a peptide bond, the molecules of the amino acids in question must be orientated so that the carboxylic acid group of one amino acid is able to react with the amine group of another amino acid. At its most basic, this can be illustrated by two lone amino acids combining through the formation of a peptide bond to form a dipeptide, the smallest peptide (i.e. only composed of 2 amino acids).
                  </p>
                  <img
                    width={355}
                    src={pepbonsgif}
                    alt="peptide img"
                  />
                </div>

                <p className="mt-3">
                The term “peptide” originates from the Greek word πέσσειν, which translates to “to digest.” Peptides play a crucial role in nature and biochemistry, with numerous peptides naturally found in humans and animals. Furthermore, new peptides are continuously being identified and created in labs. This ongoing discovery and innovation in peptide research show significant potential for advancements in health and pharmaceutical sciences.
                </p>
                <p className="mt-3">Hydrolysis (a chemical breakdown of a compound resulting from a reaction with water) can break down a peptide bond. Though the reaction itself is quite slow, the peptide bonds formed within peptides, polypeptides, and proteins are susceptible to breakage when they come into contact with water (metastable bonds). The reaction between a peptide bond and water releases about 10kJ/mol of free energy. The wavelength of absorbance for a peptide bond is 190-230 nm.</p>
                <p className="mt-3">In the biological realm, enzymes inside living organisms can both form and break down peptide bonds. A number of hormones, antibiotics, antitumor agents and neurotransmitters are peptides, most of which are referred to as proteins (due to the number of amino acids contained).</p>
              </div>
            </div>
            <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />

            <div className="text-sm">
              <h2 className="text-2xl mt-3 mb-4">Structure of the Peptide Bond</h2>
              <div className="flex flex-col md:flex-row">
                  <p>
                  Scientists have conducted x-ray diffraction studies of several small peptides in order to ascertain the physical characteristics of peptide bonds. Such studies have indicated that peptide bonds are rigid and planer. These physical characteristics are principally derived as a result of the resonance interaction of the amide: the amide nitrogen is able to delocalize its sole pair of electrons into the carbonyl oxygen.
                  </p>
                  <img
                    width={305}
                    src={bondstructure}
                    alt="peptide img"
                  />
                </div>

              <p>
              This resonance directly affects the structure of the peptide bond. Indeed, the N–C bond of the peptide bond is actually shorter than the N–Cα bond, and the C=O bond is longer than normal carbonyl bonds. In the peptide, the carbonyl oxygen and amide hydrogen are in a trans configuration, not a cis configuration; such a configuration is more energetically favorable due to the possibility of steric interactions in a cis configuration.
              </p>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />

              <h2 className="text-2xl mt-3 mb-4">The Polarity of the Peptide Bond</h2>
              <p>
              Usually, free rotation should be able to take place about a single bond between a carbonyl carbon and amide nitrogen, the structure of a peptide bond. However, the nitrogen in this case has a lone pair of electrons. These electrons are near a carbon-oxygen bond. As a result, a reasonable resonance structure can be drawn, in which a double bond links the carbon and nitrogen. Consequently, the oxygen has a negative charge and the nitrogen has a positive charge. Rotation around the peptide bond is therefore inhibited by the resonance structure. Additionally, the real structure is a weighted hybrid of these two structures. The resonance structure is a significant factor in depicting the true electron distribution: the peptide bond has approximately 40% double-bond character. As a result, it is rigid.
              </p>
              <p className="mt-5">
              Charges result in the peptide bond having a permanent dipole. The oxygen has a -0.28 charge, and the nitrogen has a +0.28 charge as a result of the resonance.
              </p>
            </div>
          </div>
        </div>
      </section>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
    </>
  );
};

export default Peptidebond
