import React from "react";
import Blogsidebar from "./Blogsidebar";
import { CgDanger } from "react-icons/cg";
import { FaRegCalendarCheck, FaRegUser } from "react-icons/fa";
import Header from "../../components/Layout/Header";
import blog1 from "../../../src/Assests/IMG/blog1.webp"
import blog2 from "../../../src/Assests/IMG/blog2.webp"
import blog3 from "../../../src/Assests/IMG/blog3.webp"

const Blog = () => {
  return (
    <>
      <Header activeHeading={1} />
      <section>
        <div className="max-w-screen-xl mx-auto p-3 flex flex-col md:flex-row">
          {/* Left side */}
          <div className="p-3 w-full md:w-3/12 mb-4 md:mb-0">
            <Blogsidebar />
          </div>
          {/* Right side */}
          <div className="p-3 w-full md:w-8/12">
            <h2 className="text-3xl font-bold">Peptide Sciences Blog</h2>

            <div className="mt-5 flex rounded-md bg-gray-100 p-4 text-[13px] gap-2">
              <span>
                <CgDanger className="text-green-400 w-6 h-6" />
              </span>
              <p>
                <b>
                  ALL ARTICLES AND PRODUCT INFORMATION PROVIDED ON THIS WEBSITE
                  ARE FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY.
                </b>{" "}
                The products offered on this website are furnished for in-vitro
                studies only. In-vitro studies (Latin: in glass) are performed
                outside of the body. These products are not medicines or drugs
                and have not been approved by the FDA to prevent, treat or cure
                any medical condition, ailment or disease. Bodily introduction
                of any kind into humans or animals is strictly forbidden by law.
              </p>
            </div>

            <h2 className="text-3xl mt-5 text-green-500 font-bold">
              Buntanetap: A Promising Small Molecule Inhibitor for
              Neurodegenerative Diseases
            </h2>

            <div className="flex gap-10 mt-5 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <FaRegUser /> By Dr. Logan
              </p>
              <div className="flex items-center gap-2">
                <FaRegCalendarCheck /> 4 months ago
              </div>
            </div>

            <div className="text-[13px]">
              <h2 className="text-2xl mt-5 font-semibold">
                Figure 2. The role of TDP-43 in neurodegeneration of motor
                neurons
              </h2>
              <img
                src={blog1}
                alt="banner"
                width={620}
                height={620}
              />
              <p>
                Buntanetap has been demonstrated to be a multitargeted therapy
                capable of decreasing neurotoxic proteins involved in the
                development and progression of AD by reducing the levels of
                amyloid beta, improving neuroplasticity, and reducing
                neuroinflammatory species. Moreover, this novel therapy can also
                decrease PD-related proteins like alpha-synuclein and TDP-43,
                which have been demonstrated to have a role in the degeneration
                of motor neurons, thus causing the progression of
                neurodegenerative disorders like PD. In general terms,
                Buntanetap promotes the recovery of cognition, increases
                proliferation, improves neuronal plasticity, and significantly
                reduces neuroinflammation, thus slowing down the progression of
                PD and AD.[2,3,5]
              </p>

              <h2 className="text-2xl mt-5 font-bold text-green-500">
                miRNA Researched for Parkinson's Disease: Neuroprotection Blocks
                Neuron Death
              </h2>

              <div className="flex gap-10 mt-5 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <FaRegUser /> By Dr. Logan
                </p>
                <div className="flex items-center gap-2">
                  <FaRegCalendarCheck /> 4 months ago
                </div>
              </div>

              <p className="mt-4">
                Programmed cell death, better known as apoptosis, is crucial in
                eliminating abnormal or unwanted cells in the body.[2] In recent
                years, the complex pathways regulating apoptosis have been
                well-studied as potential therapy targets.[2,10] Parkinson's
                disease (PD) is no exception since the leading cause of this
                disorder is the death of dopamine-producing neurons in the brain
                (see Fig.1).[1-4] PD is a debilitating neurodegenerative
                disorder that steals a person's ability to control movement.[8]
                Currently, levodopa (L-Dopa) is the most effective treatment for
                PD, helping in the improvement of the symptoms but not in the
                progression of the disease.[3] In addition, the use of L-Dopa
                led to adverse reactions after long-term administration.[3,7]
                Several studies propose using microRNAs (miRNAs) to inhibit the
                apoptosis of the dopamine-producing neurons found in PD.[6-9]
                miRNAs are tiny molecules capable of regulating gene expression
                (molecular switches) in the most critical processes for cell
                survival, like proliferation, cell differentiation, and
                apoptosis when required.[5-8]
              </p>

              <h2 className="text-2xl mt-5 font-semibold mb-5">
                Figure 1. The comparison between the normal functioning of
                dopaminergic neurons in healthy individuals vs in PD patients.
              </h2>
              <img
                src={blog2}
                alt="banner"
                width={620}
                height={620}
              />

              <p className="mt-5">
                For this reason, understanding the role of miRNAs in PD could be
                vital to developing new treatments to decrease the progression
                of the disorder. The apoptosis process is significant for
                eliminating unwanted cells.[2] Therefore, using miRNAs as a
                therapy has the potential to inhibit unwanted cell death and
                induce apoptosis in abnormal cells as well.[3-6] Understanding
                this interplay between miRNAs and apoptosis could lead to new
                treatment strategies for PD.[7] Several investigations found
                that miRNAs have neuroprotection abilities, safeguarding neurons
                from apoptotic cell death.[5] Alternatively, miRNAs promote
                apoptosis, thus eliminating damaged or dysfunctional neurons,
                which is crucial to clear cellular debris from
                microenvironments.[5]
              </p>

              <p className="mt-5">
                Some benefits of using miRNAs as a therapy for PD are the
                following: (1) miRNAs can target specific genes involved
                directly in the apoptotic pathway (specificity). (2) miRNAs are
                molecular switches, activating or inhibiting the apoptosis
                pathway. This adaptive characteristic is very convenient for
                this type of therapy since PD requires, in some cases, the
                inhibition of neuronal death (dopamine-producing neurons) and
                the activation of apoptosis in unwanted cells in the brain. (3)
                miRNAs can cross the blood-brain barrier and enter into cells,
                which is a challenge in developing neurodegenerative diseases.
                The apoptosis pathway accelerates the progression of PD by the
                direct dopamine depletion caused by the death of
                dopamine-producing neurons.[4-6] As the disease progresses, more
                and more neurons are lost, leading to worsening symptoms and
                disability.
              </p>

              <h2 className="text-3xl mt-5 text-green-500 font-bold">
                Lipid Nanoparticles Deliver RNA to the Brain for Alzheimer's
              </h2>

              <div className="flex gap-10 mt-5 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <FaRegUser /> By Dr. Logan
                </p>
                <div className="flex items-center gap-2">
                  <FaRegCalendarCheck /> 4 months ago
                </div>
              </div>

              <h2 className="text-2xl mt-5 font-semibold mb-5">
                The inhibition of PU.1 using RNA therapy delivered with lipid
                nanoparticles as a novel treatment for Alzheimer’s disease.
              </h2>

              <p>
                Neurodegenerative disorders are typically linked to chronic
                neuroinflammation. Alzheimer’s disease (AD) is not an exception
                since chronic inflammation is one of the hallmarks that
                contributes to the progression of the disorder.[2] Microglia
                cells are the main characters in promoting neuroinflammation
                since they are the most abundant brain immune cells. [2-5]
                Microglia cells are well known to clear different waste
                materials from the brain and confer neuroprotection (see
                Fig.1).[6] However, recent studies have pointed to the presence
                of AD-risk locus in the microglia genome.[2] AD-risk loci are
                specific fragments located in the genome that can potentially
                promote AD development.[3,14] These AD-risk loci open many
                opportunities for RNA therapeutic methods.[3,6] RNA therapies
                have been studied for almost all types of disorders, like
                Parkinson’s disease, AD, and cancer, among others.[3,9,10] The
                problem with this type of therapy is that it is difficult to
                find the correct method for transfection, depending on the area
                or interest. The transfection process, which introduces RNA into
                cells, is used to modify the host cell genome, changing the cell
                fate. [10,11] In the case of inhibiting with RNA transfection
                therapy, the siRNA is used. [2,12] siRNA (small interfering RNA)
                are small fragments of artificially synthesized RNA capable of
                inhibiting a specific genome fragment.[10]
              </p>

              <p className="font-bold mt-5">
                Figure 1. Show the roles of the microglia in a healthy brain
                versus one with Alzheimer’s disease.[6]
              </p>

              <img
                className="mt-5"
                width={550}
                height={550}
                src={blog3}
                alt="blog img"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="my-5 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-7" />
    </>
  );
};

export default Blog;
