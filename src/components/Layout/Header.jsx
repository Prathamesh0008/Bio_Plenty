import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { TfiAlignCenter } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import Hoverpeptide from "../../pages/Navigation/Hoverpeptide";
import Specialpeptide from "../../pages/Navigation/Specialpeptide";
import { Avatar, Dropdown } from "flowbite-react";
import { IoMdLogOut } from "react-icons/io";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import Logo from "../../../src/Assests/IMG/logo.png";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  
    if (term.trim() === '') {
      setSearchData(null);
    } else if (allProducts) {
      const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      ).slice(0, 10);
      
      setSearchData(filteredProducts.length > 0 ? filteredProducts : null);
    } else {
      setSearchData(null);
    }
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

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
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[20px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <a href="/">
              <img height={160} loading="lazy" width={160} src={Logo} alt="" />
            </a>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-green-200 border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-auto shadow-lg rounded-md bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <a key={index} href={`/product/${i._id}`}>
                        <div className="w-full gap-2 flex px-1 py-2 items-start-py-3 hover:shadow-md hover:bg-white rounded-md">
                          <AiOutlineSearch size={20} />
                          <h1>{i.name}</h1>
                        </div>
                      </a>
                    );
                  })}
              </div>
            ) : null}
          </div>

          {/* shop links */}
          <div className={`${styles.button} invisible`}>
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">
                {isSeller ? "Shop Dashboard" : "Login to Shop"}{" "}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true
            ? "shadow-sm fixed top-0 left-0 z-10 bg-green-100"
            : null
        } transition hidden 800px:flex items-center justify-between w-full text-black bg-white h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >    
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            {/* Auto Dropdown navigation */}
            <ul className="text-black 800px:text-black pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer">
              <Hoverpeptide />
            </ul>
            <ul className="text-black 800px:text-black pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer">
              <Specialpeptide />
            </ul>
            <Navbar active={activeHeading} />
          </div>

          {/* login icons */}
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-black font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  // color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Dropdown
                    label={<Avatar img={user.avatar.url} rounded></Avatar>}
                    arrowIcon={false}
                    inline
                  >
                    <Dropdown.Header>
                      <span className="block text-sm dark:text-white">{user.name}</span>
                      <span className="block truncate text-sm font-medium dark:text-white">
                        {user.email}
                      </span>
                    </Dropdown.Header>
                    <hr />
                    <Link to="/profile" onClick={() => setActive(2)}>
                      <Dropdown.Item className="hover:bg-green-400 hover:text-white dark:text-white">
                        Profile
                      </Dropdown.Item>
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
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <TfiAlignCenter
              size={25}
              className="ml-4 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                height={120}
                width={120}
                src={Logo}
                alt="hey there"
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[100%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3 cursor-pointer" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5 cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="h-[40px] w-full px-2 border-green-200 border-[2px] rounded-md"
                />
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute min-h-auto z-10 shadow-lg rounded-md bg-slate-50 shadow-sm-2 z-[9] p-4">
                    {searchData &&
                      searchData.map((i, index) => {
                        return (
                          <a key={index} href={`/product/${i._id}`}>
                            <div className="w-full flex px-1 py-2 items-start-py-3 hover:shadow-md hover:bg-white rounded-md">
                              {/* <img
                                src={`${i.images[0]?.url}`}
                                alt=""
                                className="w-[40px] h-[40px] mr-[10px] rounded-sm"
                              /> */}
                              <AiOutlineSearch size={30} />
                              <h1>{i.name}</h1>
                            </div>
                          </a>
                        );
                      })}
                  </div>
                ) : null}
              </div>

              <ul className="text-black 800px:text-black pb-[10px] 800px:pb-0 font-[500] px-2 cursor-pointer">
                <Hoverpeptide />
              </ul>
              <ul className="text-black 800px:text-black pb-[20px] 800px:pb-0 font-[500] px-2 cursor-pointer">
                <Specialpeptide />
              </ul>

              <Navbar active={activeHeading} />

              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/soon">
                  <h1 className="text-[#fff] flex items-center">
                    Staff Login <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={user.avatar.url}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
