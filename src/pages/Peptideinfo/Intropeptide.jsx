import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MetaTags from "../../components/Metatag/MetaTags";
import introimg from "../../Assests/IMG/Intro to Peptides Image.webp"
import introstructure from "../../Assests/IMG/Intro to Peptides Structure.webp"

const Intropeptide = () => {
  return (
    <>
      <Topbar />
      <MetaTags
        title="Intro to Peptides - Bio plentypeps"
        canonicalUrl="/pepdite-information/peptide"
      />
      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-4/12 mb-4 md:mb-0">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-semibold">Intro to Peptides</h2>
            <div className="flex gap-10 text-sm text-gray-400">
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

                <h2 className="text-2xl mt-3 -mb-5">What is Peptide?</h2>
              </div>

              <div className="text-sm">
                <div className="flex flex-col md:flex-row">
                  <p>
                    A peptide is a naturally occurring chemical substance
                    comprising two or more amino acids linked together by
                    peptide bonds. A peptide bond is a covalent linkage formed
                    between two amino acids when a carboxyl group or C-terminus
                    of one amino acid reacts with the amino group or N-terminus
                    of another amino acid in a condensation reaction (a molecule
                    of water is expelled during the reaction). The resulting
                    bond is a CO-NH linkage and creates a peptide, or amide
                    compound. Similarly, peptide bonds are amide linkages.
                  </p>
                  <img
                    width={175}
                    src={introimg}
                    alt="peptide img"
                  />
                </div>

                <p>
                  The term “peptide” originates from the Greek word πέσσειν,
                  which translates to “to digest.” Peptides play a crucial role
                  in nature and biochemistry, with numerous peptides naturally
                  found in humans and animals. Furthermore, new peptides are
                  continuously being identified and created in labs. This
                  ongoing discovery and innovation in peptide research show
                  significant potential for advancements in health and
                  pharmaceutical sciences.
                </p>
              </div>
            </div>
            <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />

            <div className="text-sm">
              <h2 className="text-2xl mt-3 mb-4">How Are Peptides Formed?</h2>
              <p>
                Peptides are formed both naturally within the body and
                synthetically in the laboratory. The body manufactures some
                peptides organically, such as ribosomal and non-ribosomal
                peptides. In the laboratory, modern peptide synthesis processes
                can create a virtually boundless number of peptides using
                peptide synthesis techniques like liquid phase peptide synthesis
                or solid phase peptide synthesis. While liquid phase peptide
                synthesis has some advantages, solid phase peptide synthesis is
                the standard peptide synthesis process used today. Read more
                about peptide synthesis.
              </p>
              <img className="my-5"
                width={300}
                src={introstructure}
                alt="peptide img"
              />

              <p>
              The first synthetic peptide was discovered in 1901 by Emil Fischer in collaboration with Ernest Fourneau. Oxytocin, the first polypeptide, was synthesized in 1953 by Vincent du Vigneaud.
              </p>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />

              <h2 className="text-2xl mt-3 mb-4">Peptide Terminology</h2>
              <p>
              Peptides are generally classified according to the amount of amino acids contained within them. The shortest peptide, one composed of just two amino acids, is termed a “dipeptide.” Likewise, a peptide with 3 amino acids is referred to as a “tripeptide.” Oligopeptides refer to shorter peptides made up of relatively small numbers of amino acids, generally less than ten. Polypeptides, conversely, are typically composed of more than at least ten amino acids. Much larger peptides (those composed of more than 40-50 amino acids) are generally referred to as proteins.
              </p>
              <p className="mt-5">
              While the number of amino acids contained is a main determinate when it comes to differentiating between peptides and proteins, exceptions are sometimes made. For example, certain longer peptides have been considered proteins (like amyloid beta), and certain smaller proteins are referred to as peptides in some cases (such as insulin). For more information about the similarities and differences among peptides and proteins, read our Peptides Vs. Proteins page.
              </p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">Classification of Peptides</h2>

              <p>Peptides are generally divided into several classes. These classes vary with how the peptides themselves are produced. For example, ribosomal peptides are produced from the translation of mRNA. Ribosomal peptides often function as hormones and signaling molecules in organisms. These can include tachykinin peptides, vasoactive intestinal peptides, opioid peptides, pancreatic peptides, and calcitonin peptides. Antibiotics like microcins are ribosomal peptides produced by certain organisms. Ribosomal peptides often go through the process of proteolysis (the breakdown of proteins into smaller peptides or amino acids) to reach the mature form.</p>

              <p className="mt-5">Conversely, nonribosomal peptides are produced by peptide-specific enzymes, not by the ribosome (as in ribosomal peptides). Nonribosomal peptides are frequently cyclic rather than linear, although linear nonribosomal peptides can often occur. Nonribosomal peptides can develop extremely intricate cyclic structures. Nonribosomal peptides frequently appear in plants, fungi, and one-celled organisms. Glutathione, a key part of antioxidant defenses in aerobic organisms, is the most common nonribosomal peptide.</p>

              <p className="mt-5">
              Milk peptides in organisms are formed from milk proteins. They can be produced by enzymatic breakdown by digestive enzymes or by the proteinases formed by lactobacilli during the fermentation of milk. Additionally, peptones are peptides derived from animal milk or meat that have been digested by proteolytic digestion. Peptones are often used in the laboratory as nutrients for growing fungi and bacteria.
              </p>

              <p className="mt-5">
              Peptide fragments, moreover, are most commonly found as the products of enzymatic degradation performed in the laboratory on a controlled sample. However, peptide fragments can also occur naturally as a result of degradation by natural effects.
              </p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">Important Peptide Terms</h2>

              <p>There are some basic peptide-related terms that are key to a general understanding of peptides, peptide synthesis, and the use of peptides for research and experimentation:</p>

              <p className="mt-5">Amino Acids – Peptides are composed of amino acids. An amino acid is any molecule that contains both amine and carboxyl functional groups. Alpha-amino acids are the building blocks from which peptides are constructed.</p>

            <p className="mt-5">Cyclic Peptides – A cyclic peptide is a peptide in which the amino acid sequence forms a ring structure instead of a straight chain. Examples of cyclic peptides include melanotan-2 and PT-141 (Bremelanotide).</p>

            <p className="mt-5">Peptide Sequence – The peptide sequence is simply the order in which amino acid residues are connected by peptide bonds in the peptide.</p>

            <p className="mt-5">Peptide Bond – A peptide bond is a covalent bond that is formed between two amino acids when a carboxyl group of one amino acid reacts with the amino group of another amino acid. This reaction is a condensation reaction (a molecule of water is released during the reaction).</p>

            <p className="mt-5">Peptide Mapping – Peptide mapping is a process that can be used to validate or discover the amino acid sequence of specific peptides or proteins. Peptide mapping methods can accomplish this by breaking up the peptide or protein with enzymes and examining the resulting pattern of their amino acid or nucleotide base sequences.</p>    

            <p className="mt-5">Peptide Mimetics – A peptide mimetic is a molecule that biologically mimics active ligands of hormones, cytokines, enzyme substrates, viruses or other bio-molecules. Peptide mimetics can be natural peptides, a synthetically modified peptide, or any other molecule that performs the aforementioned function.</p>      

            <p className="mt-5">Peptide Fingerprint – A peptide fingerprint is a chromatographic pattern of the peptide. A peptide fingerprint is produced by partially hydrolyzing the peptide, which breaks up the peptide into fragments, and then 2-D mapping those resulting fragments.</p>      

            <p className="mt-5">Peptide Library – A peptide library is composed of a large number of peptides that contain a systematic combination of amino acids. Peptide libraries are often utilized in the study of proteins for biochemical and pharmaceutical purposes. Solid phase peptide synthesis is the most frequent peptide synthesis technique used to prepare peptide libraries.</p>


            </div>
          </div>
        </div>
      </section>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
    </>
  );
};

export default Intropeptide;
