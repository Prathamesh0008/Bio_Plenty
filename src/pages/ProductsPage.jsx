import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import MetaTags from "../components/Metatag/MetaTags";
import Productlist from "./Productslist/Productlist";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      setData(allProducts);
    } else {
      const filteredData =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(filteredData);
    }
  }, [allProducts, categoryData]);

  const [sortOrder, setSortOrder] = useState("");

  const handleChange = (event) => {
    setSortOrder(event.target.value);
    let sortedData = [...data];
    if (event.target.value === 10) {
      sortedData.sort((a, b) => a.name.localeCompare(b.name)); // A-Z sorting
    } else if (event.target.value === 20) {
      sortedData.sort((a, b) => a.discountPrice - b.discountPrice); // Low - High sorting
    } else if (event.target.value === 30) {
      sortedData.sort((a, b) => b.discountPrice - a.discountPrice); // High - Low sorting
    }
    setData(sortedData);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <MetaTags
            title="Buy Peptides for Health Development"
            canonicalUrl="/products"
          />
          <br />
          <br />
          <div className="max-w-screen-xl mx-auto p-3 flex flex-col-reverse md:flex-row">
            {/* Left side */}
            <div className="p-3 w-full md:w-3/12 mb-4 md:mb-0">
              <Productlist />
            </div>

            {/* Right side */}
            <div className="p-3 w-full md:w-9/12">
              <div>
                <div className="w-full flex justify-between mb-6">
                  <h2 className="font-bold text-md md:text-2xl">
                    Buy {categoryData ? categoryData : "Peptides"}
                  </h2>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Sort</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={sortOrder}
                      label="Sort"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>A-Z</MenuItem>
                      <MenuItem value={20}>Low - High</MenuItem>
                      <MenuItem value={30}>High - Low</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <h2 className="mb-3">{data && data.length} items</h2>

                <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
                  {data &&
                    data.map((i, index) => (
                      <ProductCard data={i} key={index} />
                    ))}
                </div>
                {data && data.length === 0 ? (
                  <h1 className="text-center w-full pb-[100px] text-[20px]">
                    No products Found!
                  </h1>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsPage;
