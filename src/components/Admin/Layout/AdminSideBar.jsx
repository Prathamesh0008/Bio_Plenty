import React, { useEffect } from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { SiProducthunt } from "react-icons/si";
import { IoIosContacts } from "react-icons/io";
import MetaTags from "../../Metatag/MetaTags";
import { BiSolidOffer } from "react-icons/bi";

const AdminSideBar = ({ active }) => {

  const titles = {
    1: "Admin Dashboard",
    2: "All Orders",
    3: "All Users",
    5: "All Products",
    6: "All Events",
    7: "Contact Us",
    8: "profile Settings",
  };

  const currentTitle = titles[active] || "Admin Dashboard";

  useEffect(() => {
    document.title = currentTitle;
  }, [currentTitle]);


  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      <MetaTags title={currentTitle} />

      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <MdOutlineDashboard
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

      <div className="w-full flex items-center p-4">
        <Link to="/admin-orders" className="w-full flex items-center">
          <HiMiniShoppingBag 
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

      <div className="w-full flex items-center p-4">
        <Link to="/admin-users" className="w-full flex items-center">
          <FaUsers
            size={30}
            color={`${active === 4 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[green]" : "text-[#555]"
            }`}
          >
            All Users
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-products" className="w-full flex items-center">
          <SiProducthunt
            size={30}
            color={`${active === 5 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[green]" : "text-[#555]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-events" className="w-full flex items-center">
          <BsFillCalendar2EventFill
            size={30}
            color={`${active === 6 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[green]" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/admin-contact-us"
          className="w-full flex items-center"
        >
          <IoIosContacts
            size={30}
            color={`${active === 7 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Contact Us
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/admin-all-latestoffer"
          className="w-full flex items-center"
        >
          <BiSolidOffer 
            size={30}
            color={`${active === 8 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Latest Offer
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/profile"
          className="w-full flex items-center"
        >
          <AiOutlineSetting
            size={30}
            color={`${active === 9 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-[green]" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default AdminSideBar;
