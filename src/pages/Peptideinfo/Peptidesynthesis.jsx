import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MetaTags from "../../components/Metatag/MetaTags";
import pepsysn from "../../Assests/IMG/Peptide Synthesis Image.webp"
import labeqipment from "../../Assests/IMG/Liberty Lab Equipment.webp"

const Peptidesynthesis = () => {
  return (
    <>
      <Topbar />
      <MetaTags
        title="Peptide Synthesis - Bio plentypeps"
        canonicalUrl="/pepdite-information/peptide-synthesis"
      />
      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-4/12 mb-4 md:mb-0">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-semibold">Peptide Synthesis</h2>
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

                <h2 className="text-2xl mt-3 -mb-5">What is Peptide Synthesis?</h2>
              </div>

              <div className="text-sm">
                <div className="flex flex-col md:flex-row">
                  <p>
                  Characterized by the formation of a peptide bond between two amino acids, peptide synthesis is, essentially, the production of peptides. Though peptide synthesis was somewhat hampered by relatively inefficient production practices at its inception, advancements in chemistry and technology have led to vastly improved synthesis methods. With the strong growth of the field of peptide science, it is clear that synthetic peptides will continue to play vital roles in areas of scientific and medical progress in the modern age.
                  </p>
                </div>
                  <img
                    className="w-full mt-5 rounded-md shadow-lg"
                    src={pepsysn}
                    alt="peptide img"
                  />
              </div>
            </div>

            <div className="text-sm">
              <h2 className="text-2xl mt-3 mb-4">How Are Peptides Formed?</h2>
            <p className="mt-5">Peptides are synthesized by linking two amino acids together. This is most often accomplished by attaching the C-terminus, or carboxyl group, of one amino acid to the N-terminus, or amino group, of another. Unlike protein biosynthesis, which involves N-terminus to C-terminus linkage, peptide synthesis occurs in this C-to-N fashion.</p>

             <div className="flex flex-col md:flex-row">
                  <p className="mt-5">
                  While there are twenty amino acids that occur commonly in the natural world (such as arginine, lysine, and glutamine), many other amino acids have also been synthesized. This allows for abundant possibilities in the creation of new peptides. However, amino acids have numerous reactive groups that can negatively interact during the synthesis process, leading to unwanted truncating or branching of the peptide chain or causing suboptimal purity or yield. As a result, peptide synthesis is a complex process that must be expertly carried out.
                  </p>
                  <img
                  width={150}
                    className="mt-5"
                    src={labeqipment}
                    alt="peptide img"
                  />
                </div>

              <p>
              In order to ensure the desired outcome from the synthesis process and avoid extraneous, unwelcome reactions, certain amino acid reactive groups must be deactivated, or protected, from reacting. Thus, scientists have engineered special chemical groups designed to do just that. Called “protecting groups,” they can be separated into three categories:
              </p>

              <p className="mt-5"><b>N-terminal protecting groups</b> – These groups protect the N-termini of amino acids. Referred to as temporary protecting groups, they are removed relatively easily to facilitate the formation of peptide bonds. Tert-butoxycarbonyl (Boc) and 9-fluorenylmethoxycarbonyl (Fmoc) are two frequently used N-terminal protecting groups.</p>

              <p className="mt-5"><b>C-terminal protecting groups</b> – These groups protect the C-terminus of amino acids. The use of C-terminal protecting groups is warranted in liquid-phase peptide synthesis but not solid-phase peptide synthesis.</p>

              <p className="mt-5"><b>Side chain protecting groups</b> – As amino acid side chains are quite conducive to reactivity during peptide synthesis, various unique side chain protecting groups are needed to protect against unwanted reactions. Able to remain intact during the many cycles of chemical treatment during synthesis, side chain protecting groups are known as permanent protecting groups. They are only removed with strong acids after the conclusion of peptide synthesis.</p>


              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />

              <h2 className="text-2xl mt-3 mb-4">Peptide Synthesis Processes</h2>
              <p>
              The original approach to peptide synthesis was through a process known as solution phase synthesis (SPS). While SPS does have some merit today, notably in large-scale peptide production, it has largely been supplanted by solid-phase peptide synthesis, or SPPS. This is because SPPS offers several advantages, including high yield, purity, and speed of production.
              </p>
              <p className="mt-5">
              SPPS involves five steps performed in a cyclical manner:
              </p>

              <ul className="mt-5">
                <li>1. Attaching an amino acid to the polymer</li>
                <li>2. Protection (to prevent unwanted reactions)</li>
                <li>3. Coupling</li>
                <li>4. Deprotection (to allow the attached acid to react to the next amino acid to be added on)</li>
                <li>5. Polymer removal (resulting in a free peptide)</li>
              </ul>

              <p className="mt-5">Additionally, SPPS synthesis can be further enhanced by the use of microwave-assisted SPPS. This is particularly useful when synthesizing long peptide sequences, as yield and speed can both be improved. However, microwave-assisted SPPS can be more expensive than traditional SPPS.</p>

              <p className="mt-5">While peptide synthesis processes like SPPS offer excellent purity and yield standards, impurities and imperfections can still occur along the way. This likelihood increases with the length of the peptide sequence, as more steps are needed to complete synthesis. Therefore, certain purification techniques are utilized in order to ensure optimal quality. Among these are reverse-phase chromatography (RPC) and high-performance liquid chromatography (HPLC). Capitalizing on peptides’ physiochemical properties, these purification methods are able to separate impurities from the desired peptide. RPC is the most widely used peptide purification method today.</p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">The Value of Synthetic Peptides</h2>

              <p>Peptides have proven to be critical elements of biomedical research, and peptide synthesis continues to fuel scientific progress worldwide. The therapeutic potential of peptides has drawn the attention of various pharmaceutical companies, and several drugs made from peptides have received FDA approval and reached the market. The efficacy, specificity, and low toxicity of peptides assures us that peptides will continue to be pursued and developed for pharmaceutical and diagnostic purposes and will remain a growing area of biochemical research.</p>

            </div>
          </div>
        </div>
      </section>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
    </>
  );
};

export default Peptidesynthesis
