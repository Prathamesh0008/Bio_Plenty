import React, { useEffect } from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { IoIosContacts } from "react-icons/io";
import MetaTags from "../../Metatag/MetaTags";
import axios from "axios";
import { server } from "../../../server";
import { IoMdLogOut } from "react-icons/io";


const DashboardSideBar = ({ active }) => {

  const titles = {
    1: "Shop Dashboard",
    2: "All Orders",
    3: "All Products",
    4: "Create Products",
    5: "All Events",
    6: "Create Events",
    9: "Discount Coupons",
    10: "Refunds Product",
    11: "profile Settings",
    12: "Support Request",
  };

  const currentTitle = titles[active] || "Shop Dashboard";

  useEffect(() => {
    document.title = currentTitle;
  }, [currentTitle]);

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`,{
      withCredentials: true,
    });
    window.location.reload();
    window.location.replace("/");
  };

  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      <MetaTags title={currentTitle} />

      {/* single item */}
      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 1 ? "bg-gray-100" : ""}`}>
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 2 ? "bg-gray-100" : ""}`}>
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[green]" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 3 ? "bg-gray-100" : ""}`}>
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage size={30} color={`${active === 3 ? "green" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-[green]" : "text-[#555]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 4 ? "bg-gray-100" : ""}`}>
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <AiOutlineFolderAdd
            size={30}
            color={`${active === 4 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Create Product
          </h5>
        </Link>
      </div>

      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 5 ? "bg-gray-100" : ""}`}>
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[green]" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>

      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 6 ? "bg-gray-100" : ""}`}>
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile
            size={30}
            color={`${active === 6 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div>
      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 9 ? "bg-gray-100" : ""}`}>
        <Link to="/dashboard-coupouns" className="w-full flex items-center">
          <AiOutlineGift
            size={30}
            color={`${active === 9 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>

      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 10 ? "bg-gray-100" : ""}`}>
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={30}
            color={`${active === 10 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 10 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div>

      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 12 ? "bg-gray-100" : ""}`}>
        <Link to="/dashboard-Allcontact" className="w-full flex items-center">
          <IoIosContacts
            size={30}
            color={`${active === 12 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 12 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Contact Us
          </h5>
        </Link>
      </div>

      <div className={`w-full flex items-center p-4 hover:bg-gray-100 ${active === 11 ? "bg-gray-100" : ""}`}>
        <Link to="/settings" className="w-full flex items-center">
          <CiSettings
            size={30}
            color={`${active === 11 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 11 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center hover:bg-gray-100 cursor-pointer p-4" onClick={logoutHandler}>
          <IoMdLogOut
            size={25}
            className="text-red-600"
          />
          <h5
            className={`hidden 800px:block pl-2 text-red-600 font-[400] ${
              active === 13 ? "text-[green]" : "text-red-600"
            }`}
          >
            Log Out
          </h5>
      </div>

    </div>
  );
};

export default DashboardSideBar;
