import React from "react";
import Latestinformation from "../../../pages/Latestinformation";
import Header from "../../Layout/Header";
import MetaTags from "../../Metatag/MetaTags";

const Privacypolicy = () => {
  return (
    <>
    <Header/>
    <MetaTags
        title="Privacy Policy"
        canonicalUrl="/privacy"
      />
      <section>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <h2 className="mb-6 text-[22px] font-bold text-dark dark:text-white sm:text-[20px] lg:text-[25px] xl:text-[30px]">
            Privacy Policy
          </h2>
          <h2 className="mb-5 text-[20px] underline font-semibold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[20px]">
          Privacy Policy for Bioplentypeps Pvt Ltd.
          </h2>

          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
          If you have any questions about our privacy policy, please feel free to contact us by email at info@bioplentypeps.com.
          </p>
          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
          At Bioplentypeps Pvt Ltd, we value the privacy of our visitors and customers. This privacy policy document outlines the types of personal information we receive and collect when you use our website, how we use it, and how we protect your information.
          </p>

          <h2 className="mb-2 text-[20px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[15px]">
            Log Files
          </h2>

          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
          Like many other websites, Bioplentypeps Pvt Ltd makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.
          </p>

          <h2 className="mb-2 text-[20px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[15px]">
            Cookies and Web Beacons
          </h2>

          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
          Bioplentypeps Pvt Ltd uses cookies to store information about visitors' preferences, record user-specific information on which pages the user accesses or visits, and customize web page content based on visitors' browser type or other information that the visitor sends via their browser. If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.
          </p>

          <h2 className="mb-2 text-[20px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[15px]">
          Email and Personal Information
          </h2>

          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
          Bioplentypeps.com collects information about the use of our website to provide a secure and personalized experience. This includes the customer's name, email address, purchasing records, and browsing patterns. We collect this information when you place an order with us.
          </p>

          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
          We do not sell, rent, or loan your information to third parties without your permission. We may contact you with special offers and information related to Bioplentypeps.com and products you have purchased or shown interest in. If you no longer wish to receive emails or newsletters from us, you can unsubscribe using the link provided in our emails or by contacting us directly.
          </p>

          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
            If you are currently receiving a newsletter or emails from us and
            would like to stop receiving them, please notify us by contacting us
            by email at info@bioplentypeps.com or simply unsubscribe, and
            your name and email will be automatically removed from the email and
            customer database.
          </p>
          <h2 className="mb-2 text-[20px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[15px]">
            Third Party Content
          </h2>
          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
            We do not partner or use any 3rd party ad services or content
            delivering services.
          </p>

          <h2 className="mb-2 text-[20px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[15px]">
            Security
          </h2>
          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
          We use industry-standard encryption technologies when transferring and receiving data from visitors on our website. Sensitive information, such as credit card or banking information, is transmitted securely over SSL/TLS connections.
          </p>

          <h2 className="mb-2 text-[20px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[15px]">
          Changes to This Privacy Policy
          </h2>
          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
          Bioplentypeps Pvt Ltd may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
          </p>

          <hr />
          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6 mt-6">This Privacy Policy for Bioplentypeps Pvt Ltd ensures transparency regarding how we collect, use, and protect your personal information. If you have any further questions or require clarification, please contact us at <a href="mailto:info@bioplentypeps.com">info@bioplentypeps.com</a>.</p>
        </div>
      </section>

      <Latestinformation />
    </>
  );
};

export default Privacypolicy;
