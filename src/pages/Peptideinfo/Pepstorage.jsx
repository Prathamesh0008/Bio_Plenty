import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MetaTags from "../../components/Metatag/MetaTags";
import pepstorage from "../../Assests/IMG/Peptide Storage Image.webp"


const Pepstorage = () => {
  return (
    <>
      <Topbar />
      <MetaTags
        title="Peptide Storage - Bio plentypeps"
        canonicalUrl="/pepdite-information/peptide-storage"
      />
      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-4/12 mb-4 md:mb-0">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-semibold">Peptide Storage</h2>
            <div className="flex gap-10 text-[12px] mt-1 text-gray-400">
              <p>BY PEPTIDE INFORMATION</p> OCTOBER 20, 2023
            </div>
            <div className="flex flex-col gap-10 mt-7">
              <div>
                <p className="text-[11px] text-gray-600">
                  <b>
                  ALL ARTICLES AND PRODUCT INFORMATION PROVIDED ON THIS WEBSITE ARE FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY.
                  </b>{" "}
                  The products offered on this website are furnished for in-vitro studies only. In-vitro studies (Latin: in glass) are performed outside of the body. These products are not medicines or drugs and have not been approved by the FDA to prevent, treat or cure any medical condition, ailment or disease. Bodily introduction of any kind into humans or animals is strictly forbidden by law.
                </p>

                <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-2" />

                <h2 className="text-2xl mt-3 -mb-5">Best Practices For Storing Peptides</h2>
              </div>

              <div className="text-sm">
                <div className="flex flex-col md:flex-row">
                  <p>
                  To preserve the integrity of laboratory results, proper storage of peptides is essential. Correct storage practices can maintain peptides for years and guard against contamination, oxidation, and degradation that may render your peptides, and therefore experiments, useless. While some peptides are more susceptible to degradation than others, knowing and implementing the best practices for peptide storage can greatly lengthen their stability and integrity regardless of composition.
                  </p>
                </div>
                <p className="mt-5">Once peptides have been received, it is imperative that they are kept cold and away from light. If the peptides will be used immediately, or in the next several days, weeks or months, short-term refrigeration under 4C (39F) is generally acceptable. Lyophilized peptides are usually stable at room temperatures for several weeks or more, so if they will be utilized within weeks or months such storage is typically adequate.</p>

                <p className="mt-5">However, for longer term storage (several months to years) it is more preferable to store peptides in a freezer at -80C (-112F). When storing peptides for months or even years, freezing is optimal in order to preserve the peptide’s stability.</p>

                <p className="mt-5">Additionally, it is important to avoid repeated freeze-thaw cycles. This can increase the peptide’s susceptibility to degradation. Also, frost-free freezers should be avoided to store peptides, as temperatures can fluctuate widely during defrosting cycles.</p>
              </div>
            </div>

            <div className="text-sm mt-5">
              <div className="text-sm">
                <div className="flex flex-col md:flex-row">
                  <img
                    width={550}
                    src={pepstorage}
                    alt="peptide img"
                  />
                </div>
              </div>
              <p className="mt-5">
              It is imperative to avoid contaminating peptides with both air and moisture. Moisture contamination is especially prone to occur when using a peptide immediately after withdrawing it from the freezer. To prevent uptake of moisture from the air on the cold surface of the peptide or on the inside of its container, allow the peptide to come to room temperature before opening.
              </p>
              <p className="mt-5">
              It is also crucially important to minimize a peptide’s exposure to the air. A peptide’s container should therefore be kept closed as much as possible. After the required amount of peptide has been removed, resealing the container under an atmosphere of dry, inert gas (such as nitrogen or argon) will minimize the potential for the remaining peptide to become oxidized. Peptides with sequences C (cysteine), M (methionine), and W (tryptophan) are especially prone to air oxidation.
              </p>

              <p className="mt-5">Because frequent thawing and refreezing as well as exposure to air can greatly reduce a peptide’s long-term stability, many researchers prefer to determine each experiment’s required amount of peptide and then aliquot this amount into separate vials as necessary. This is a highly useful preventative measure against peptide degradation.</p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">Storing Peptides In Solution</h2>

              <p>The shelf life of peptide solutions is far less than that of lyophilized peptides, and peptides stored in solution are also vulnerable to bacterial degradation. Peptides containing Cys, Met, Trp, Asp, Gln, and N-terminal Glu in their sequences have especially short shelf lives when in solution.</p>

              <p className="mt-5">Nevertheless, if peptides absolutely must be stored in solution, sterile buffers at pH 5-6 should be used, and the peptide solution should be separated into aliquots to avoid repeated freezing and thawing. Peptide solutions are generally stable for up to 30 days when refrigerated at 4C (39F), but those peptides with inherent instability should be kept frozen when not in use.</p>
            
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">Peptide Storage Containers</h2>

              <p>Containers for peptide storage should be completely clean, clear, and structurally sound. They should also be chemically resistant and appropriately sized for the amount of peptide in them. Both glass and plastic vials are commonly used; plastic vials vary between those composed of polystyrene and those made of polypropylene. Polystyrene vials are generally clear but not chemically resistant; however, polypropylene vials are generally translucent but chemically resistant.</p>

              <p className="mt-5">While high quality glass vials offer all of the desirable characteristics for a peptide storage container, peptides are sometimes shipped in plastic vials in order to guard against breakage. Still, peptides can always be transferred from a plastic container to a glass container or vice versa, if necessary.</p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">Peptide Storage Guidelines: General Tips</h2>

            <p className="mt-5 font-bold">When storing peptides, remember to:</p>

            <p className="mt-5"><b>&#x2022;</b> Store peptide in a cold, dry, dark place</p>
            <p><b>&#x2022;</b> Avoid repeated freezing and thawing of peptide</p>
            <p><b>&#x2022;</b> Avoid overexposure to the air</p>
            <p><b>&#x2022;</b> Avoid light exposure</p>
            <p><b>&#x2022;</b> Avoid storing peptides in solution long term</p>
            <p><b>&#x2022;</b> Aliquot peptide according to experimental requirements</p>

            </div>
          </div>
        </div>
      </section>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
    </>
  );
};

export default Pepstorage;

