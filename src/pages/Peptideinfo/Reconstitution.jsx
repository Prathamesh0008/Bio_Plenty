import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MetaTags from "../../components/Metatag/MetaTags";
import vials from "../../Assests/IMG/Peptide Reconstitution Image.webp"
import vialsbanner from "../../Assests/IMG/Peptide Reconstitution Banner.webp"

const Reconstitution = () => {
  return (
    <>
      <Topbar />
      <MetaTags
        title="Peptide Reconstitution - Bio plentypeps"
        canonicalUrl="/pepdite-information/peptide-reconstitution"
      />
      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-4/12 mb-4 md:mb-0">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-semibold">Peptide Reconstitution</h2>
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

                <h2 className="text-2xl mt-3 -mb-5">Lyophilized Peptides</h2>
              </div>

              <div className="text-sm">
                <div className="flex flex-col md:flex-row">
                  <p>
                  Peptides are commonly supplied in a lyophilized (freeze-dried) powder form. Lyophilization is a process in which water is removed from a compound after it is frozen and placed under a vacuum, allowing the ice to change directly from solid to vapor without passing through a liquid phase. Lyophilized peptides commonly resemble a small white “puck” that may have a fluffy or more granular appearance. Different lyophilization techniques can yield a more voluminous (fluffy) or a more compacted (granular) lyophilized peptide.
                  </p>
                  <img
                    width={175}
                    src={vials}
                    alt="peptide img"
                  />
                </div>
              </div>
            </div>
            <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />

            <div className="text-sm">
              <h2 className="text-2xl mt-3 mb-4">Reconstituting Peptides</h2>
              <p>
              Before lyophilized peptides can be utilized in the lab, they have to be reconstituted; that is, they must be dissolved in a liquid solution. Unfortunately, there is not a “one size fits all” solvent that will solubilize all peptides while maintaining peptide integrity and compatibility with biological assays. While sterile, distilled water or regular bacteriostatic water is the first choice, this will not dissolve all peptides. As a result, the researcher may have to undertake a trial and error approach and attempt to dissolve the peptide in increasingly stronger solvents. <b>Sodium Chloride water is NOT recommended due to its tendency to cause precipitates with acetate salts.</b>
              </p>
              <p className="mt-5">
              A peptide’s polarity is the main factor by which its solubility is determined. Basic peptides can be dissolved in acidic solutions, and, conversely, acidic peptides can be reconstituted in basic solutions. Additionally, hydrophobic peptides, as well as neutral peptides that contain numerous hydrophobic or polar uncharged amino acids, should be dissolved in organic solvents. Examples include acetic acid, propanol, isopropanol, and DMSO. The amount of organic solvent used should be small, however. Once the peptide is dissolved in the solution, then dilution with sterile water or bacteriostatic water should be performed. Sodium Chloride water is NOT recommended due to its tendency to cause precipitates with acetate salts. Importantly, peptides with methionine or free cysteine should not be dissolved in DMSO. Side-chain oxidation may occur, rendering the peptide unfit for laboratory experimentation.
              </p>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <div className="text-sm">
              <h2 className="text-2xl mt-3 mb-4">Peptide Reconstitution Guidelines</h2>
                <div className="flex flex-col md:flex-row">
                  <p>
                  Generally, it is advised to first attempt to dissolve peptides in solvents that are easy to remove by lyophilization. This is a precaution: in case the initial solvent is not effective, it can be removed again by the lyophilization process. Typically, the researcher should first attempt to dissolve the peptide in sterile distilled water or regular bacteriostatic water or in sterile dilute acetic acid (0.1%) solution. As a general guideline, it is recommended to test a small portion of the peptide for solubility in the chosen solvent before attempting to dissolve the entire peptide.
                  </p>
                  <img
                  className="rounded shadow-md"
                    width={175}
                    src={vialsbanner}
                    alt="peptide img"
                  />
                </div>
              </div>
              <p className="mt-5">
              Importantly, the initial use of sterile water (or dilute acetic acid) will allow the researcher to dry the peptide without any unwanted residues in case the peptide fails to dissolve. Once the initial ineffective solvent is removed, the researcher can then attempt to dissolve the peptide in increasingly stronger solvents.
              </p>
              <p className="mt-5">
              Additionally, researchers should dissolve the peptide in a sterile solvent to give a stock solution that is at a higher concentration than required for the assay. If the assay buffer is used first and the peptide does not dissolve, it can be very difficult to recover the peptide unadulterated. However, the peptide can always be diluted further with the assay buffer later on.
              </p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">Sonication</h2>

              <p>In the laboratory, sonication can be tried as method to improve the rate of peptide dissolution in the solvent if the peptide continues to persist as visible particles in the solution. Sonication will not change the peptide’s solubility characteristics in a given solvent; the sonication process merely assists with breaking down lumps of solid peptide and briskly stirring the solution. After the sonication process, the researcher should examine the solution to see if it is cloudy, has gelled, or has any type of surface scum. If so, it is likely that the peptide is only suspended in the solution, not dissolved; therefore, a stronger solvent will probably be required.</p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">Practical Implementation in the Laboratory</h2>

              <p>Although some peptides will need a stronger solvent to fully dissolve in a solution, as discussed above, sterile distilled water or regular bacteriostatic water is effective in many cases and is the most common solvent or diluent for reconstituting a peptide. <b>Sodium Chloride water is NOT recommended due to its tendency to cause precipitates with acetate salts.</b> What follows is a simple, typical example of peptide reconstitution in a laboratory setting. This is simply a general illustration of common laboratory procedure and is not specific to any one peptide.</p>

              <p className="mt-5">Important: allow the peptide to come to room temperature before opening its container. For more information on preserving the stability and integrity of research peptides, read our peptide storage page.</p>

            <p className="mt-5">You may also choose to pass your peptide solution through a 0.2 µm filter if bacterial contamination is a concern.</p>

            <p className="mt-5 font-bold">Example using sterile water as the diluent:</p>

            <p className="mt-5"><b>STEP 1</b> – Remove the plastic cap from the peptide vial to expose the rubber stopper.</p>
            <p><b>STEP 2</b> – Remove the plastic cap from the sterile water vial to expose the rubber stopper.</p>
            <p><b>STEP 3</b> – To prevent bacterial contamination, swab the rubber stoppers with alcohol.</p>
            <p><b>STEP 4</b> – Extract 2mL (milliliters) of water from the sterile water vial.</p>
            <p><b>STEP 5</b> – Insert the 2mL (milliliters) of sterile water into the peptide vial, letting the water slowly enter the vial.</p>
            <p><b>STEP 6</b> – Gently swirl the solution until all peptide is dissolved – do not shake the vial.</p>

            </div>
          </div>
        </div>
      </section>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
    </>
  );
};

export default Reconstitution;
