import React, { useState, useEffect } from "react";
import Peptideimg from "../../../Assests/IMG/Peptide.jpg";
import capsules from "../../../Assests/IMG/capsules.jpg";
import blends from "../../../Assests/IMG/Blends.jpg";
import underconst from "../../../Assests/animations/Loading_icon.gif";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 9000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  // Sample data for each slide
  const slides = [
    {
      imageUrl: Peptideimg,
      title: "USA Made Products",
      subtitle: "Purchase Peptides",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      buttonText: "Shop Now",
      addresscart: "/products?category=Purchase%20Peptide",
    },
    {
      imageUrl: capsules,
      title: "Quality Capsules",
      subtitle: "Find Your Supplements",
      description: "High-quality supplements for all your needs.",
      buttonText: "Shop Now",
      addresscart: "/products?category=Peptide%20Capsules",
    },
    {
      imageUrl: blends,
      title: "Exclusive Blends",
      subtitle: "Perfect Combinations",
      description: "Blended for your specific needs.",
      buttonText: "Shop Now",
      addresscart: "/products?category=Peptide%20Blends",
    },
    {
      imageUrl: underconst,
      title: "Update Soon....",
      subtitle: "On All Orders",
      description: "Under construction",
      buttonText: "Shop Now",
      addresscart: "/",
    },
    {
      imageUrl: Peptideimg,
      title: "USA Made Products",
      subtitle: "Purchase Peptides",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      buttonText: "Shop Now",
      addresscart: "/products?category=Purchase%20Peptide",
    },
  ];

  return (
    <>
      <section className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto mt-5 md:mt-0 md:text-left text-center">
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="h-56 overflow-hidden rounded-lg md:h-96 mt-20 md:mt-0">
            {/* Iterate over slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`duration-900 ease-in-out ${
                  index === currentSlide ? "" : "hidden"
                }`}
                data-carousel-item
              >
                <img
                  loading="lazy"
                  src={slide.imageUrl}
                  className="absolute block -translate-y-1/2 top-1/2 w-72 h-auto left-1/2 md:left-2/3 transform md:translate-x-0 -translate-x-1/2"
                  alt={`Slide ${index + 1}`}
                  title={slide.title}
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-10 md:bottom-24 md:ml-24 ml-10 px-16">
            <div>
              <h1 className="text-2xl md:text-3xl mb-2 font-bold text-green-600 inline-flex">
                {slides[currentSlide].title}
              </h1>
              <h3 className="text-2xl mb-1 font-semibold md:visible invisible">
                {slides[currentSlide].subtitle}
              </h3>
              <p className="mt-1 mb-4 md:visible invisible">{slides[currentSlide].description}</p>
              <Link to={slides[currentSlide].addresscart}>
                <button
                  type="button"
                  className="button-bg-color text-white hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2"
                >
                  {slides[currentSlide].buttonText}
                </button>
              </Link>
            </div>
          </div>

          {/* Slider controls */}
          <div className="absolute flex items-center h-full top-0 start-0">
            <button
              type="button"
              className="inline-flex z-0  px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={handlePrevSlide}
            >
              <span className="inline-flex shadow-lg items-center justify-center w-10 h-10 rounded-full bg-green-900 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-white group-focus:ring-4 group-focus:ring-green-900 dark:group-focus:ring-green-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white hover:text-green-900 dark:text-green-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
          </div>
          <div className="absolute flex items-center h-full top-0 start-0 right-0 ">
            <button
              type="button"
              className="z-0 px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={handleNextSlide}
            >
              <span className="inline-flex shadow-lg items-center justify-center w-10 h-10 rounded-full bg-green-900 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-white group-focus:ring-4 group-focus:ring-green-900 dark:group-focus:ring-green-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white hover:text-green-900 dark:text-green-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
