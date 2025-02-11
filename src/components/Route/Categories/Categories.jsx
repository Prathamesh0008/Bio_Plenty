import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData } from "../../../static/data";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="w-full">
      <div className={`max-w-screen-xl mx-auto `}>
        <div
          className={`branding my-12 flex justify-between w-full flex-wrap gap-4 shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                <div className="w-10 h-10 flex justify-center items-center">
                {i.icon}
                </div>
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default Categories;
