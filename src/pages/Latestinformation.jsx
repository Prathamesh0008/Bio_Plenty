import React, { useState, useEffect } from "react";
import { server } from "../server";
import { toast } from "react-toastify";

const defaultContactFormData = {
  email: "",
};

const LatestInformation = () => { 
  const [latestData, setLatestData] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);

  useEffect(() => {
    if (userData) {
      setLatestData({
        email: "",
      });
      setUserData(false);
    }
  }, [userData]); 

  // Handling the input value
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setLatestData({
      ...latestData,
      [name]: value,
    });
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${server}/form/latestdata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(latestData),
      });

      if (response.ok) {
        setLatestData(defaultContactFormData);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Message not delivered!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <section className="p-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="flex flex-col">
            <h2 className="font-bold text-4xl">Be the first to know</h2>
            <h6>
              Receive all the latest information on events, sales, & offers.
            </h6>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <div className="relative mb-6">
                <input
                  type="email"
                  name="email"
                  required
                  value={latestData.email}
                  onChange={handleInput}
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Address...."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </>
  );
};

export default LatestInformation;
