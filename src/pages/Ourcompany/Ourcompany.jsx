import React from "react";
import Latestinformation from "./../Latestinformation";
import Header from "../../components/Layout/Header";
import MetaTags from '../../components/Metatag/MetaTags';
import banner1 from '../../../src/Assests/IMG/banner2.webp'



const Ourcompany = () => {
  return (
    <>
    <Header />
    <MetaTags
    title="About Us | Bioplentypeps"
     />
      <section>
      <div className="max-w-screen-xl mx-auto">
        <section className="z-10 overflow-hidden mt-6 rounded-xl shadow-xl dark:text-white dark:bg-gray-900 bg-white py-20 dark:bg-dark lg:py-[120px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap lg:justify-between">
              <div className="w-full px-7 lg:w-1/2 xl:w-6/12">

                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h2 className="mb-6 text-[22px] font-bold uppercase text-dark dark:text-white sm:text-[20px] lg:text-[25px] xl:text-[30px]">
                    About bioplentypeps
                  </h2>

                  <h2 className="mb-6 text-[15px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[20px]">
                    Our Company
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Bioplentypeps™ is a leading provider of USA manufactured, research peptides. We have negotiated and partnered with WHO/GMP and ISO 9001:2008 approved manufacturers for the best prices available and for the highest quality and highest purity products. We are happy to pass those savings on to our customers, and are proud to be a trusted resource for the products we provide to the scientific communities.
                  </p>

                  <h2 className="mb-6 text-[15px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[20px]">
                  Quality. Service. Value.
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Bioplentypeps™ is your safe, convenient, and private online source for U.S.A manufactured, highest purity, research peptides. Quality products and exceptional service are very important to us, and we work hard to bring value to our customers. We manufacture our products through the most reputable research chemical manufacturing companies in the world, and our prices are some of the lowest online.
                  </p>

                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">Purchasing online is easy and hassle-free. You benefit from full confidentiality and can shop at any time, 24/7. Our checkout system is fully secured with the latest SSL technology, ensuring your information is safeguarded to the highest privacy standards. Your orders and payment details remain encrypted, protected, and completely discreat.</p>

                  <h2 className="mb-4 text-[15px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[20px]">
                  Shipping
                  </h2>

                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  We ensure swift and safe shipping to the USA.
                  </p>

                  <h2 className="mb-4 text-[15px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[20px]">
                  Our Customers
                  </h2>

                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  We take pride in our service and value every customer relationship. With satisfied customers around the world, you can be assured of a safe and satisfied shopping experience with the highest quality research products from Bioplentypeps™
                  </p>

                  <p>
                  From all of us at Bioplentypeps™, thank you. Please don't hesitate to contact us at info@bioplentypeps.com with any questions you may have.
                  </p>
                </div>
              </div>

              <div className="w-full h-auto md:w-4/6 lg:w-2/4 xl:w-3/6">
                <div className="shadow-lg dark:bg-dark-2">
                <img loading="lazy" className="rounded-lg" src={banner1} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </section>

      <Latestinformation />
    </>
  );
};

export default Ourcompany;
