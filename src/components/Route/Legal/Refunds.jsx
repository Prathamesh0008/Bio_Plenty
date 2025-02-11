import React from "react";
import Header from "../../Layout/Header";
import MetaTags from "../../Metatag/MetaTags";

const Refunds = () => {
  return (
    <>
    <Header/>
    <MetaTags
        title="Refunds & Return"
        description="Refunds & Return"
        canonicalUrl="/refunds"
      />
      <section>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <h2 className="mb-6 text-[22px] font-bold text-dark dark:text-white sm:text-[20px] lg:text-[25px] xl:text-[30px]">
            Refunds & Returns
          </h2>

          <h2 className="mb-5 text-[20px] font-semibold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[20px]">
            Refunds & Returns for www.bioplentypeps.com (Bioplentypeps™)
          </h2>

          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
          Due to our rigorous quality control standards and the fragile nature of our products, we cannot give returns. In the rare occasion that your order arrives with missing, incorrect or damaged items, please email service@bioplentypeps.com for assistance. Our customer support representatives are standing by to ensure that our customers are 100% satisfied with our product quality, customer support and delivery. Cancellations must be requested by change before the order shipment has shipped. Once the order has given you may not change your order. Please contact us at service@bioplentypeps.com with any questions or concerns that you may have regarding your order. We will do our absolute best to assist you as quickly and satisfactorily as possible. Thank you.
          </p>
        </div>
      </section>
    </>
  );
};

export default Refunds;
