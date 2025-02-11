import React, { useEffect } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import MetaTags from "../Metatag/MetaTags";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);

        setTimeout(() => {
          window.location.reload();
        }, 2000);

        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const titles = {
    1: "Profile",
    2: "Orders",
    3: "Refunds",
    5: "Track Order",
    6: "Change Password",
    7: "Address",
    8: "Admin Dashboard",
  };

  const currentTitle = titles[active] || "Profile"; // Default to "Profile" if no match

  useEffect(() => {
    document.title = currentTitle;
  }, [currentTitle]);

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] py-8">
      <MetaTags title={currentTitle} />
      <div
        className={`flex items-center cursor-pointer w-full px-4 py-3 rounded-lg ${active === 1 ? "shadow-lg bg-gray-50" : ""}`}
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "green" : ""} />
        <span
          className={`pl-3 ${active === 1 ? "text-[green]" : ""} 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full px-4 py-3 rounded-lg ${active === 2 ? "shadow-lg bg-gray-50" : ""}`}
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "green" : ""} />
        <span
          className={`pl-3 ${active === 2 ? "text-[green]" : ""} 800px:block hidden`}
        >
          Orders
        </span>
      </div>
      <div
        className={`flex items-center cursor-pointer w-full px-4 py-3 rounded-lg ${active === 3 ? "shadow-lg bg-gray-50" : ""}`}
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "green" : ""} />
        <span
          className={`pl-3 ${active === 3 ? "text-[green]" : ""} 800px:block hidden`}
        >
          Refunds
        </span>
      </div>

      <div
        className={`flex items-center cursor-pointer w-full px-4 py-3 rounded-lg ${active === 5 ? "shadow-lg bg-gray-50" : ""}`}
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "green" : ""} />
        <span
          className={`pl-3 ${active === 5 ? "text-[green]" : ""} 800px:block hidden`}
        >
          Track Order
        </span>
      </div>

      <div
        className={`flex items-center cursor-pointer w-full px-4 py-3 rounded-lg ${active === 6 ? "shadow-lg bg-gray-50" : ""}`}
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "green" : ""} />
        <span
          className={`pl-3 ${active === 6 ? "text-[green]" : ""} 800px:block hidden`}
        >
          Change Password
        </span>
      </div>

      <div
        className={`flex items-center cursor-pointer w-full px-4 py-3 rounded-lg ${active === 7 ? "shadow-lg bg-gray-50" : ""}`}
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "green" : ""} />
        <span
          className={`pl-3 ${active === 7 ? "text-[green]" : ""} 800px:block hidden`}
        >
          Address
        </span>
      </div>

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className={`flex items-center cursor-pointer w-full px-4 py-3 rounded-lg ${active === 8 ? "shadow-lg bg-gray-50" : ""}`}
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 8 ? "green" : ""}
            />
            <span
              className={`pl-3 ${active === 8 ? "text-[green]" : ""} 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
      <div
        className={`flex items-center cursor-pointer w-full px-4 py-3 rounded-lg ${active === 8 ? "shadow-lg bg-gray-50" : ""}`}
        onClick={logoutHandler}
      >
        <AiOutlineLogin className="text-red-400" size={20} color={active === 8 ? "red" : ""} />
        <span
          className={`text-red-400 pl-3 ${active === 8 ? "text-[red]" : ""} 800px:block hidden`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
