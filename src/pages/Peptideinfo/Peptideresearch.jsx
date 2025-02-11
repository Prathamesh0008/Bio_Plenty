import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import MetaTags from "../../components/Metatag/MetaTags";
import researchpep from "../../Assests/IMG/Research Peptide Image.webp"

const Peptideresearch = () => {
  return (
    <>
      <Topbar />
      <MetaTags
        title="Peptide Research - Bio plentypeps"
        canonicalUrl="/pepdite-information/peptide-research"
      />
      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-4/12 mb-4 md:mb-0">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-semibold">Research Peptides</h2>
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

                <h2 className="text-2xl mt-3 -mb-5">What are Research Peptides?</h2>
              </div>

              <div className="text-sm">
                <div className="flex flex-col md:flex-row">
                  <p>
                  Simply, research peptides are any peptides that are used in scientific research. In recent years, peptides have gained recognition as being highly selective and effective in therapeutic applications, all while being relatively safe and well tolerated in subjects and patients. As a result, there has been a huge uptick in interest in peptides for pharmaceutical research and development. With the promising potential that peptides present for medical applications, more and more research, study, and experimentation with peptides is necessitated in order to unlock the pharmaceuticals and therapeutics of today and tomorrow. Consequently, there has been a surge of demand for research peptides to fuel progress in these new avenues of research.
                  </p>
                  <img
                    width={275}
                    className="me-4 rounded-md shadow-lg"
                    src={researchpep}
                    alt="peptide img"
                  />
                </div>

              </div>
            </div>
            <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />

            <div className="text-sm">
              <h2 className="text-2xl mt-3 mb-4">Research Peptides vs Medicines?</h2>
              <p>
              Importantly, research peptides are only made available for in-vitro study and experimentation. From the Latin for “in glass,” in-vitro refers to studies performed outside of the body. Hundreds of peptide therapeutics have been evaluated in clinical trials, and scientists and researchers around the globe are using research peptides in the lab to explore beyond the realm of traditional peptide design, pushing the boundaries to discover peptide variants that can be used as pharmaceuticals in the future. Already, there are over 60 peptide-based medicines on the market that have received approval from the US Food and Drug Administration (FDA). Among these are LupronTM, a treatment for prostate cancer, and VictozaTM, a treatment for type 2 diabetes. Both pharmaceuticals have achieved sales in the billions. However, it is essential to recognize that such FDA-approved drugs are NOT research peptides, they are just that: FDA-approved medications able to be prescribed by a healthcare professional for the treatment of a specific condition. Research peptides, on the other hand, are only intended for in-vitro study and research: they are not FDA approved for the treatment, prevention, or curing of any medical condition, disease, or ailment. Research peptides are those synthesized for study in the lab that can lead to new breakthroughs and future pharmaceuticals, but they become medicines only after undergoing rigorous study, clinical trial, and, crucially, the FDA approval process.
              </p>
        
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />

              <h2 className="text-2xl mt-3 mb-4">Research Peptides as Future Therapeutics</h2>
              <p>
              Over 7,000 naturally occurring peptides have been discovered. These peptides can often play vital roles in the human body as hormones, growth factors, neurotransmitters, ion channel ligands, and anti-infectives. Generally, peptides are effective and selective signaling molecules that bind to specific cell surface receptors, triggering intracellular effects. Additionally, in clinical trials, peptides have shown exceptional safety and tolerability in study subjects, while maintaining high selectivity and potency as well as a predictable metabolism. Consequently, peptides clearly present an enormous area of opportunity for therapeutic development.
              </p>
              <p className="mt-5">
              Currently, the primary areas of disease fueling the research and use of peptide-based pharmaceuticals are metabolic diseases (such as type 2 diabetes) and oncology. The huge increases in obesity and type 2 diabetes in North America and other parts of the world have driven the development of peptide therapeutics for treatment of these conditions. Increases in cancer mortality and calls for alternatives to chemotherapy have spurred peptide research focused on oncological remedies. In addition, peptide research has expanded into the areas of infectious diseases, inflammation, and rare diseases. Research into peptides has also revealed excellent potential for their use in diagnostics and vaccination. Crucially, all of the research and study focused on unlocking the therapeutic potential of peptides for future medicines is reliant upon research peptides to serve as the basis for experimentation and development in the laboratory.
              </p>

            </div>
          </div>
        </div>
      </section>
              <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
    </>
  );
};

export default Peptideresearch
