import React from "react";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";
import { Link } from "react-router-dom";
import MetaTags from "../components/Metatag/MetaTags";

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
    </div>
  );
};

const Success = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    duration: 9000,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
    <MetaTags
        title="Success your orders."
      />
      <div className="min-h-[70vh] flex items-center justify-center flex-col">
        <Lottie options={defaultOptions} width={200} height={200} />
        <h5 className="text-center mb-4 text-[25px] text-[#000000a1]">
          Your order is successfully done!
        </h5>
        <h6 className="text-center text-[18px] text-[#000000a1]">
          And you can <Link className="text-green-400 font-bold" to="/profile">Track</Link> your order by Accounts profile!
        </h6>
        <p className="mt-2">If you have any questions or issues, please do not hesitate to <Link to="/contact-us" className="text-green-600 font-bold" >Contact Us</Link>.</p>
        <br />
        <br />
      </div>
    </>
  );
};

export default OrderSuccessPage;
