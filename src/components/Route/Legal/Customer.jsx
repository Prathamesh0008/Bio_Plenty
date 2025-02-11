import React from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import Latestinformation from "../../../pages/Latestinformation";
import Header from "../../Layout/Header";
import MetaTags from "../../Metatag/MetaTags";

const Customer = () => {
  const sections = [
    {
      title: "Shipment & Conveyance",
      content: "We offer a variety of conveyance options to suit your needs. Enjoy complimentary shipping on all orders, ensuring swift delivery of our products across Europe in just 4 to 5 days. Your satisfaction is our priority, and we strive to deliver right to your doorstep, making your experience seamless and convenient. Whether you're in bustling city centers or remote countryside, our reliable shipping service ensures you receive your order promptly. Trust us to provide efficient and hassle-free delivery, so you can enjoy our products without delay."
    },
    {
      title: "Confidentiality & Safeguarding",
      content: "Once you place your order online, it's protected by advanced 256-bit SSL (Secure Socket Layer) encryption technology on our secure server. We take your privacy seriously and adhere strictly to all federal and state privacy laws to safeguard your information. Your personal and order details are kept completely confidential and will never be disclosed to any third party or used for any purposes other than processing your orders."
    },
    {
      title: "Exchanges & Refunds",
      content: "Due to regulatory constraints on product sales, returns are not permitted. Nevertheless, if your order is shipped incorrectly or if you receive items different from those ordered, kindly reach out to us via email. We will promptly arrange a replacement for your initial order."
    },
    {
      title: "Placing Orders",
      content: "You can place orders with Bioplentypeps anytime, day or night, via our secure website. Once your order is placed, processed, and payment is confirmed, it will be packed carefully and shipped using a trusted courier service like SHIPROCKET. You will receive shipping details as soon as your order is dispatched."
    },
    {
      title: "Transaction, Pricing & Deals",
      content: "We accept payments via all major credit cards. We offer both individual and wholesale bulk pricing. Please refer to our product pages for quantity discounts. For substantial bulk discounts, please reach out to us via email."
    },
    {
      title: "Tracking Orders",
      content: "During checkout, you'll have the option to register or checkout as a guest. We recommend registration, though it's entirely optional. Registration doesn't add extra time and enables you to monitor order status, modify your account details, and access past orders by logging into our website. It also expedites checkout for future orders. If you opt not to create an account during checkout and have inquiries about your order status, please drop us an email. Alternatively, you can check out as a Guest."
    },
    {
      title: "Absolute Satisfaction",
      content: "We're dedicated to delivering exceptional quality and service, and we're here to assist you. If you have any queries or concerns regarding our service, please contact us to apprise us of the situation. We respond to ALL inquiries and requests."
    }
  ];

  return (
    <>
    <Header/>
    <MetaTags
        title="Shipping and Payments"
        canonicalUrl="/customer-service"
      />
      <section>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <h2 className="mb-6 text-[22px] font-bold text-dark dark:text-white sm:text-[20px] lg:text-[25px] xl:text-[30px]">
            Client Support
          </h2>

          <ul>
            {sections.map((section, index) => (
              <li key={index} className="flex items-center justify-start">
                <span>
                  <BsDot className="w-7 h-7" />
                </span>
                {section.title}
              </li>
            ))}
          </ul>

          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-2 mt-4 text-[20px] font-bold text-dark dark:text-white sm:text-[15px] lg:text-[20px] xl:text-[15px]">
                {section.title}
              </h2>
              <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
                {section.content}
              </p>
            </div>
          ))}

          <p className="mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
            Feel free to reach us at  {" "}
            <Link className="underline" to="/">
              info@bioplentypeps.com
            </Link>{" "}
            for assistance.
          </p>
        </div>
      </section>

      <Latestinformation />
    </>
  );
};

export default Customer;
