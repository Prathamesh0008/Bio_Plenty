import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { server } from "../../../server";
import { Avatar, Dropdown } from "flowbite-react";
import { IoMdLogOut } from "react-icons/io";
import axios from "axios";
import Logo from "../../../Assests/IMG/logo.png"


const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`,{
      withCredentials: true,
    });
    window.location.reload();
    window.location.replace("/");
  };
  
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img
          loading="lazy"
          width={150}
          height={150}
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Dropdown
            label={
              <Avatar img={seller.avatar?.url} rounded>              
              </Avatar>
            }
            arrowIcon={false}
            inline
          >
            <Dropdown.Header>
              <span className="block text-sm dark:text-white">{seller.name}</span>
              <span className="block truncate text-sm font-medium dark:text-white">
                {seller.email}
              </span>
            </Dropdown.Header>
            <hr />
            <Link to="/dashboard">
              <Dropdown.Item className="hover:bg-green-400 hover:text-white dark:text-white">Dashboard</Dropdown.Item>
            </Link>
            <Link to={`/shop/${seller._id}`}>
              <Dropdown.Item className="dark:text-white dark:hover:text-black">Profile</Dropdown.Item>
            </Link>            
            <Dropdown.Divider />

            <hr />

            <Dropdown.Item onClick={logoutHandler} className="text-red-600 gap-1 hover:bg-red-600 hover:text-white">
            <IoMdLogOut /> Sign out
            </Dropdown.Item>
          </Dropdown>        
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
