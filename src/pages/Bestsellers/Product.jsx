import React from "react";
import { FaStar } from "react-icons/fa6";

export default function Product(props) {
  return (
    <div className="card p-3 text-center flex justify-center items-center flex-col border rounded-md me-5">
      <img
        className="product--image"
        width={155}
        height={155}
        src={props.url}
        alt="product image"
      />
        <h2 className="font-bold text-md">{props.name}</h2>
      
      <div className="mt-4">
        <div className="flex justify-center gap-2 items-center">
          <span className="text-sm -mb-2">
            <s>$ {props.overprice}</s>
          </span>
          <span>
            <p className="price mt-2 font-bold">{props.price}</p>
          </span>
        </div>

        <button className="text-white button-bg-color hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
          Shop Now
        </button>

      </div>
    </div>
  );
}
