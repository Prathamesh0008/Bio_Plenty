import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MetaTags from "../../components/Metatag/MetaTags";

const Intropurity = () => {
  return (
    <>
      <Topbar />
      <MetaTags
        title="Peptide Purity - Bio plentypeps"
        canonicalUrl="/pepdite-information/Peptide-purity"
      />
      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-4/12 mb-4 md:mb-0">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-semibold">Peptide Purity</h2>
            <div className="flex gap-10 text-[12px] mt-1 text-gray-400">
              <p>BY PEPTIDE INFORMATION</p> OCTOBER 21, 2023
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

                <h2 className="text-2xl mt-3 -mb-5">
                  How is Peptide Purity Achieved and Verified?
                </h2>
              </div>

              <div className="text-sm">
                <div className="flex flex-col md:flex-row">
                  <p>
                    At peptidesciences.com, we provide peptides that exceed 99%
                    purity. Using state-of-the-art solution and solid phase
                    peptide synthetic technology, Peptide Sciences is able to
                    offer the finest quality peptides and proteins fit for any
                    research study or application. Peptide purity is achieved
                    and verified through uncompromising manufacturing and
                    production processes, quality control measures, and the
                    implementation of both high-performance liquid
                    chromatography and mass spectrometry analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm mt-5">
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">HPLC and Mass Spectrometry</h2>

              <p>
                High performance liquid chromatography, or HPLC, is a scientific
                technique used to separate, identify, and quantify each
                component in a mixture. It is a superior process that allows
                highly accurate peptide testing to be accomplished. Mass
                spectrometry (MS) is a technique used to measure masses within a
                sample by ionizing chemical species and sorting the ions based
                on their mass to charge ratio. The results are plotted with the
                ion signal as a function of the mass to charge ratio. Both
                methods are highly accurate peptide testing techniques and
                scientifically prove the purity and identity of peptides ordered
                from peptidesciences.com.
              </p>

              <p className="mt-5">
                Peptide Sciences takes great pride in the quality of all of the
                products we manufacture, and we implement testing at all stages
                of peptide production at our peptide snythesis lab, verifying
                our peptides’ sequential fingerprints for precision accuracy in
                every preparation.
              </p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">
                What is the Recommended Peptide Purity Level?
              </h2>

              <p>
                Peptide Sciences provides only the highest purity peptides (>99%
                pure) for sale for research and development use. However,
                preparations of peptides synthesized for research by many other
                manufacturers can vary widely in purity. Occasionally,
                researchers can wonder what the minimum acceptable level of
                peptide purity is for their given purpose. Generally, the higher
                the peptide purity level, the more favorable the preparation;
                critically, for certain applications (such as in vitro studies
                or clinical trials), only exceedingly pure peptides will be
                appropriate (greater than 98% purity). However, there are some
                applications for which a lower peptide purity would be
                acceptable. The minimum recommended peptide purity level for a
                given application will therefore depend upon that specific
                application. Examples of minimum acceptable purity levels are as
                follows.
              </p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">
                Highly Pure (>95% Peptide Purity)
              </h2>

              <p className="mt-5">
                <b>&#x2022;</b> In vitro and in vivo studies
              </p>
              <p>
                <b>&#x2022;</b> Clinical trials
              </p>
              <p>
                <b>&#x2022;</b> Drug studies in which peptides are used as
                pharmaceuticals
              </p>
              <p>
                <b>&#x2022;</b> Cosmetic peptides for cosmeceuticals
              </p>
              <p>
                <b>&#x2022;</b> Crystallography
              </p>
              <p>
                <b>&#x2022;</b> Monoclonal antibody production
              </p>
              <p>
                <b>&#x2022;</b> Quantitative protease studies and enzyme studies
              </p>
              <p>
                <b>&#x2022;</b> Quantitative receptor – ligand interaction
                studies
              </p>
              <p>
                <b>&#x2022;</b> Quantitative blocking and competitive inhibition
                studies
              </p>
              <p>
                <b>&#x2022;</b> Quantitative ELISA and RIA protocol standard
              </p>
              <p>
                <b>&#x2022;</b> Chromatography standard
              </p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">
              Mid-range Peptide Purity (>85%)
              </h2>

              <p className="mt-5">
                <b>&#x2022;</b> Peptide blocking studies (Western blot)
              </p>
              <p>
                <b>&#x2022;</b> Phosphorylation studies
              </p>
              <p>
                <b>&#x2022;</b> NMR studies
              </p>
              <p>
                <b>&#x2022;</b> Cell attachment studies
              </p>
              <p>
                <b>&#x2022;</b> Phosphorylation studies
              </p>
              <p>
                <b>&#x2022;</b> Semi-quantitative studies of enzyme-substrate interactions
              </p>
              <p>
                <b>&#x2022;</b> Epitope mapping tests
              </p>
              <p>
                <b>&#x2022;</b> Biological activity testing
              </p>

              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
              <h2 className="text-2xl mt-3 mb-4">
              Lower Peptide Purity (>70%)
              </h2>

              <p className="mt-5">
                <b>&#x2022;</b> Peptide arrays
              </p>
              <p>
                <b>&#x2022;</b> Performing an ELISA standard for measuring titers of antibodies
              </p>
              <p>
                <b>&#x2022;</b> Antigens for polyclonal antibody production or affinity purification
              </p>
              <p className="mt-4">Those peptides with greater purity are appropriate for use in an application with a lower minimum acceptable level of purity. Peptide Sciences provides exceedingly high purity peptides that will meet or exceed all previously stated purity requirements.</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
    </>
  );
};

export default Intropurity;
