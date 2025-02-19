import React from "react";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Header from "../components/Layout/Header";
import Payment from "../components/Payment/Payment";

const PaymentPage = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-[#f6f9fc]">
        <CheckoutSteps active={2} />
        <Payment />
      </div>
    </>
  );
};

export default PaymentPage;
