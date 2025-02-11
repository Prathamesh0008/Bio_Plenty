import React from "react";
import { FaPhoneAlt, FaFacebook, FaGooglePlus } from "react-icons/fa";
import {
  MdMyLocation,
  MdOutlineDateRange,
  MdOutlineMail,
} from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../Assests/IMG/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 dark:text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 p-3">
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  width={140}
                  height={140}
                  alt="Flowbite Logo"
                  loading="lazy"
                />
              </Link>
              <p className="w-72 mt-6">
                We are committed to handling every client, regardless of size,
                with the greatest care.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 w-full">
              <div>
                <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
                  Information
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link
                      to="/products?category=Purchase%20Peptide"
                      className="hover:underline"
                    >
                      Buy Peptides
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/best-selling" className="hover:underline">
                      Peptide Specials
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/blog" className="hover:underline">
                      Peptide Blog
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/pepdite-information" className="hover:underline">
                      Peptide Information
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/about-us" className="hover:underline">
                      Our Company
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
                  Buy Peptides
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="/products?category=Peptide%20Capsules"
                      className="hover:underline"
                    >
                      Peptide Capsules
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/products?category=Purchase%20Peptide"
                      className="hover:underline"
                    >
                      Purchase Peptides
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/products?category=Peptide%20Blends"
                      className="hover:underline"
                    >
                      Peptide Blends
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/products?category=IGF-1%20Proteins"
                      className="hover:underline"
                    >
                      IGF-1 Proteins
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/products?category=Cosmetic%20Peptides"
                      className="hover:underline"
                    >
                      Cosmetic Peptides
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="privacy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="terms" className="hover:underline">
                      Terms of use
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="customer-service" className="hover:underline">
                      Shipping & Payments
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="refunds" className="hover:underline">
                      Refunds & Returns
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
                  Support
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="/contact-us" className="hover:underline ">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-md font-bold text-gray-900 uppercase dark:text-white">
              More Details
            </h2>

            <ul className="text-gray-500 dark:text-gray-400 flex grid md:grid-cols-4">
              <li className="mb-4">
                <span className="inline-block flex justify-start items-center gap-1">
                  <FaPhoneAlt />
                  <h4 className="font-bold"> Phone</h4>
                </span>
                <a href="#" className="hover:underline">
                  +11 0000 0000 00
                </a>
                <p className="text-sm">Mon - Fri 10AM - 6PM EST</p>
              </li>

              <li className="mb-4">
                <span className="inline-block flex justify-start items-center gap-1">
                  <MdOutlineMail />
                  <h4 className="font-bold"> Email</h4>
                </span>
                <span className="inline-block">
                  <a href="#" className="hover:underline text-pretty">
                    info@bioplentypeps.com
                  </a>
                </span>
                <br />
                <span className="inline-block">
                  <a href="#" className="hover:underline text-pretty">
                    support@bioplentypeps.com
                  </a>
                </span>
              </li>

              <li className="mb-4">
                <span className="inline-block flex justify-start items-center gap-1">
                  <MdOutlineDateRange />
                  <h4 className="font-bold"> Shipping Days</h4>
                </span>
                <p className="text-sm">
                  Orders placed and paid for after 12 PM EST from Mon to Sun
                  will be shipped on the next business day.
                </p>
              </li>

              <li className="mb-4">
                <span className="inline-block flex justify-start items-center gap-1">
                  <MdMyLocation />
                  <h4 className="font-bold">Mailing Address</h4>
                </span>
                <address>
                  <p className="text-sm">
                    Suite 403, Aventura, Florida, 33180. US
                  </p>
                </address>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-1" />
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 {""}
              <Link to="/" className="hover:underline">
                Bioplentypeps.com™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center gap-4 sm:mt-0">
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <IoLogoLinkedin />
                <span className="sr-only">Linkdln page</span>
              </Link>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaFacebook />
                <span className="sr-only">facebook page</span>
              </Link>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaSquareXTwitter />
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <RiInstagramFill />
                <span className="sr-only">Instagram account</span>
              </Link>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaGooglePlus />
                <span className="sr-only">Gogole account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
