import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Logo from "../../../src/Assests/IMG/logo.png";
import { Avatar, Dropdown } from "flowbite-react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { IoMdLogOut } from "react-icons/io";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);

        setTimeout(() => {
          window.location.reload();
        }, 2000);

        Navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img width={140} height={140} loading="lazy" src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Dropdown
            label={
              <Avatar img={user.avatar.url} rounded>
                <div className="space-y-1 mx-3 text-start font-medium dark:text-white">
                  <div>{user.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                  </div>
                </div>
              </Avatar>
            }
            arrowIcon={false}
            inline
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.name}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <hr />
            <Link to="/admin/dashboard">
              <Dropdown.Item className="hover:bg-green-400 hover:text-white">
                Dashboard
              </Dropdown.Item>
            </Link>
            <Link to="/admin-orders">
              <Dropdown.Item>All Orders</Dropdown.Item>
            </Link>
            <Link to="/admin-users">
              <Dropdown.Item>All Users</Dropdown.Item>
            </Link>
            <Link to="/admin-products">
              <Dropdown.Item>All Products</Dropdown.Item>
            </Link>
            <Link to="/admin-events">
              <Dropdown.Item>All Events</Dropdown.Item>
            </Link>
            <Link to="/admin-contact-us">
              <Dropdown.Item>Contact Us</Dropdown.Item>
            </Link>
            <Link to="/profile">
              <Dropdown.Item>Settings</Dropdown.Item>
            </Link>
            <Dropdown.Divider />

            <hr />

            <Dropdown.Item
              onClick={logoutHandler}
              className="text-red-600 gap-1 hover:bg-red-600 hover:text-white"
            >
              <IoMdLogOut /> Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
