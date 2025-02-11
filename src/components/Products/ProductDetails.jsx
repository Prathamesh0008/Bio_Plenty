import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { server } from "../../server";
import styles from "../../styles/styles";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "./Ratings";
import axios from "axios";
import Productlist from "../../pages/Productslist/Productlist";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import MetaTags from "../Metatag/MetaTags";
import loadinfocins from "../../../src/Assests/animations/Loading_icon.gif";
import Loader from "../Layout/Loader";

const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [loading, setLoading] = useState();
  const coaasImages = data && data.coaimages && data.coaimages.length > 0;
  const hplcimagesss = data && data.hplcimages && data.hplcimages.length > 0;
  const msimagess = data && data.msimages && data.msimages.length > 0;

  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [opencoa, setOpencoa] = React.useState(false);
  const handleOpencoa = () => setOpencoa(true);
  const handleClosecoa = () => setOpencoa(false);

  const [openhplc, setOpenhplc] = React.useState(false);
  const handleOpenhplc = () => setOpenhplc(true);
  const handleClosehplc = () => setOpenhplc(false);

  const [openms, setOpenms] = React.useState(false);
  const handleOpenms = () => setOpenms(true);
  const handleClosems = () => setOpenms(false);

  useEffect(() => {
    dispatch(getAllProductsShop(data && data?.shop._id));

    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data
    dispatch(getAllProductsShop(data?.shop._id)).finally(() =>
      setLoading(false)
    ); // Set loading to false once data fetching is done
  }, [data, wishlist]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg = totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white">
          {data ? (
            <div
              className={`max-w-screen-xl mx-auto 800px:w-[90%] 800px:p-[10px]`}
            >
              <MetaTags 
              title={`Buy ${data.name}`}
              canonicalUrl={`product/${data._id}`}
               />
              <div className="w-full py-5">
                <div className="block w-full 800px:flex gap-14">
                  <div className="w-full 800px:w-[50%] flex justify-center items-center flex-col ">
                    <img
                      loading="lazy"
                      src={`${data && data.images[select]?.url}`}
                      alt="product images"
                      className="w-[50%]"
                    />

                    <div className="w-full mt-4 justify-center flex gap-2">
                      {/* Certificate rendering */}

                      {/* COA images */}

                      <div>
                        {coaasImages && (
                          <>
                            <h2 className="text-center font-bold">COA</h2>
                            <div className="border flex justify-center items-center">
                              <Button onClick={handleOpencoa}>
                                <img
                                  loading="lazy"
                                  width={120}
                                  height={120}
                                  src={`${
                                    data && data.coaimages[select]?.url
                                      ? data.coaimages[select]?.url
                                      : loadinfocins
                                  }`}
                                  alt="COA images"
                                />
                              </Button>
                            </div>
                            <Modal
                              keepMounted
                              open={opencoa}
                              onClose={handleClosecoa}
                              aria-labelledby="keep-mounted-modal-title"
                              aria-describedby="keep-mounted-modal-description"
                            >
                              <Box
                                sx={style}
                                className="certificate-modal-img for-certificate-md"
                              >
                                <img
                                  loading="lazy"
                                  className="w-[100%] h-[100%]"
                                  src={`${
                                    data && data.coaimages[select]?.url
                                      ? data.coaimages[select]?.url
                                      : loadinfocins
                                  }`}
                                  alt="COA images"
                                />
                              </Box>
                            </Modal>
                          </>
                        )}
                      </div>

                      {/* HPLC images */}

                      <div>
                        {hplcimagesss && (
                          <>
                            <h2 className="text-center font-bold">HPLC</h2>
                            <div className="border flex justify-center items-center">
                              <Button onClick={handleOpenhplc}>
                                <img
                                  loading="lazy"
                                  width={120}
                                  height={120}
                                  src={`${
                                    data && data.hplcimages[select]?.url
                                      ? data.hplcimages[select]?.url
                                      : loadinfocins
                                  }`}
                                  alt="Hplc images"
                                />
                              </Button>
                            </div>
                            <Modal
                              keepMounted
                              open={openhplc}
                              onClose={handleClosehplc}
                              aria-labelledby="keep-mounted-modal-title"
                              aria-describedby="keep-mounted-modal-description"
                            >
                              <Box
                                sx={style}
                                className="certificate-modal-img for-certificate-md"
                              >
                                <img
                                  loading="lazy"
                                  className="w-[100%] h-[100%]"
                                  width="{320}"
                                  height="{320}"
                                  src={`${
                                    data && data.hplcimages[select]?.url
                                      ? data.hplcimages[select]?.url
                                      : loadinfocins
                                  }`}
                                  alt="Hplc images"
                                />
                              </Box>
                            </Modal>
                          </>
                        )}
                      </div>

                      {/* MS images */}

                      <div>
                        {msimagess && (
                          <>
                            <h2 className="text-center font-bold">MS</h2>
                            <div className="border flex justify-center items-center">
                              <Button onClick={handleOpenms}>
                                <img
                                  loading="lazy"
                                  width={120}
                                  height={120}
                                  src={`${
                                    data && data.msimages[select]?.url
                                      ? data.msimages[select]?.url
                                      : loadinfocins
                                  }`}
                                />
                              </Button>
                            </div>
                            <Modal
                              keepMounted
                              open={openms}
                              onClose={handleClosems}
                              aria-labelledby="keep-mounted-modal-title"
                              aria-describedby="keep-mounted-modal-description"
                            >
                              <Box
                                sx={style}
                                className="certificate-modal-img for-certificate-md"
                              >
                                <img
                                  loading="lazy"
                                  className="w-[100%] h-[100%]"
                                  width="{320}"
                                  height="{320}"
                                  src={`${
                                    data && data.msimages[select]?.url
                                      ? data.msimages[select]?.url
                                      : loadinfocins
                                  }`}
                                  alt="MS images"
                                />
                              </Box>
                            </Modal>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-full 800px:w-[50%] pt-5 px-4">
                    <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                    <p>{data.description}</p>
                    <div className="flex pt-3">
                      <h4 className={`${styles.productDiscountPrice}`}>
                        ${data.discountPrice.toFixed(2)}
                      </h4>
                      <h3 className={`${styles.price}`}>
                        {/* {data.originalPrice ? data.originalPrice + "$" : null} */}
                        ${data.originalPrice.toFixed(2)}
                      </h3>
                    </div>

                    <div className="flex items-center mt-12 justify-between pr-3">
                      <div className="border gap-2">
                        <button
                          className="font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                          onClick={decrementCount}
                        >
                          -
                        </button>
                        <span className="text-green-500 border-l-2 border-r-2 shadow-lg hover:opacity-75 font-medium px-4 py-[11px]">
                          {count}
                        </span>
                        <button
                          className="font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                          onClick={incrementCount}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        {click ? (
                          <AiFillHeart
                            size={30}
                            className="cursor-pointer"
                            onClick={() => removeFromWishlistHandler(data)}
                            color={click ? "red" : "#333"}
                            title="Remove from wishlist"
                          />
                        ) : (
                          <AiOutlineHeart
                            size={30}
                            className="cursor-pointer"
                            onClick={() => addToWishlistHandler(data)}
                            color={click ? "red" : "#333"}
                            title="Add to wishlist"
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                      onClick={() => addToCartHandler(data._id)}
                    >
                      <span className="text-white flex items-center">
                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ProductDetailsInfo
                data={data}
                products={products}
                totalReviewsLength={totalReviewsLength}
                averageRating={averageRating}
              />
              <br />
              <br />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);
  const coaasImages = data && data.coaimages && data.coaimages.length > 0;
  const hplcimagesss = data && data.hplcimages && data.hplcimages.length > 0;
  const msimagess = data && data.msimages && data.msimages.length > 0;

  return (
    <>
      <div className="mx-auto mt-5 w-full p-3 flex flex-col-reverse md:flex-row">
        {/* Left side */}
        <div className="p-3 w-full md:w-3/12 mb-4 md:mb-0">
          <Productlist />
        </div>

        <div className="p-3 w-full md:w-9/12">
          <div className="bg-[#f2fff0] px-3 800px:px-10 py-2 rounded">
            <div className="w-full flex justify-between border-b pt-10 pb-2">
              <div className="relative">
                <h5
                  className={
                    "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                  }
                  onClick={() => setActive(1)}
                >
                  Product Details
                </h5>
                {active === 1 ? (
                  <div className={`${styles.active_indicator}`} />
                ) : null}
              </div>
              <div className="relative">
                <h5
                  className={
                    "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                  }
                  onClick={() => setActive(2)}
                >
                  Product Reviews
                </h5>
                {active === 2 ? (
                  <div className={`${styles.active_indicator}`} />
                ) : null}
              </div>
            </div>

            {/* Under-process */}

            {active === 1 ? (
              <>
                <p className="p-4 shadow-sm rounded-lg mt-4 bg-white text-[15px] leading-1 mb-10 whitespace-pre-line">
                  {data.description}
                </p>

                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  <h2 className={`${styles.productTitle} md:w-4/12 w-12/12`}>
                    What is {data.name} ?
                  </h2>

                  <p className="md:w-8/12">{data.definition}</p>
                </div>

                <hr className="border border-gray-300 my-6" />

                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  <h2 className={`${styles.productTitle} md:w-4/12 w-12/12`}>
                    {data.name} Structure
                  </h2>

                  <div className="md:w-8/12">
                    <div className="w-[50%] flex">
                      {data &&
                        data.structureimages.map((i, index) => (
                          <div className="w-full">
                            <img
                              loading="lazy"
                              src={`${i?.url}`}
                              alt=""
                              className="w-full overflow-hidden mr-3 mt-3"
                            />
                          </div>
                        ))}
                      <div className={`cursor-pointer`}></div>
                    </div>
                    <p className="mb-6 text-[12px]">
                      Source:{" "}
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-600 hover:underline"
                        to={data.sorceaddress}
                      >
                        {data.sorcename}
                      </Link>
                    </p>

                    <p>
                      <b>{data.structureheading1}:</b> {data.structuredata1}
                    </p>
                    <p>
                      <b>{data.structureheading2}:</b> {data.structuredata2}
                    </p>
                    <p>
                      <b>{data.structureheading3}:</b> {data.structuredata3}
                    </p>
                    <p>
                      <b>{data.structureheading4}:</b> {data.structuredata4}
                    </p>
                    <p>
                      <b>{data.structureheading5}</b> {data.structuredata5}
                    </p>
                    <p>
                      <b>{data.structureheading6}</b> {data.structuredata6}
                    </p>
                    <p>
                      <b>{data.structureheading7}</b> {data.structuredata7}
                    </p>
                    <p>
                      <b>{data.structureheading8}</b> {data.structuredata8}
                    </p>
                  </div>
                </div>

                <hr className="border border-gray-300 my-6" />

                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  <div className="md:w-4/12">
                    <h2 className={`${styles.productTitle} `}>
                      {data.name} {data.researchheading}
                    </h2>
                  </div>

                  <div className="md:w-8/12">
                    {data.researchsubheading1 && (
                      <div className="w-full">
                        <p className="mb-5">
                          <b>1. {data.researchsubheading1}</b>
                        </p>
                        <p>{data.researchvalue1}</p>
                        <p className="mt-2">{data.researchvalue2}</p>
                      </div>
                    )}

                    {data.researchsubheading2 && (
                      <div className="w-full mt-3">
                        <p className="mb-5">
                          <b>2. {data.researchsubheading2}</b>
                        </p>
                        <p>{data.researchvalue3}</p>
                        <p className="mt-2">{data.researchvalue4}</p>
                      </div>
                    )}

                    {data.researchsubheading3 && (
                      <div className="w-full mt-3">
                        <p className="mb-5">
                          <b>3. {data.researchsubheading3}</b>
                        </p>
                        <p>{data.researchvalue5}</p>
                        <p className="mt-2">{data.researchvalue6}</p>
                      </div>
                    )}

                    {data.researchsubheading4 && (
                      <div className="w-full mt-3">
                        <p className="mb-5">
                          <b>4. {data.researchsubheading4}</b>
                        </p>
                        <p>{data.researchvalue7}</p>
                        <p className="mt-2">{data.researchvalue8}</p>
                      </div>
                    )}

                    {data.researchsubheading5 && (
                      <div className="w-full mt-3">
                        <p className="mb-5">
                          <b>5. {data.researchsubheading5}</b>
                        </p>
                        <p>{data.researchvalue9}</p>
                        <p className="mt-2">{data.researchvalue10}</p>
                      </div>
                    )}

                    {data.researchsubheading6 && (
                      <div className="w-full mt-3">
                        <p className="mb-5">
                          <b>6. {data.researchsubheading6}</b>
                        </p>
                        <p>{data.researchvalue11}</p>
                        <p className="mt-2">{data.researchvalue12}</p>
                      </div>
                    )}

                    {data.researchsubheading7 && (
                      <div className="w-full mt-3">
                        <p className="mb-5">
                          <b>7. {data.researchsubheading7}</b>
                        </p>
                        <p>{data.researchvalue13}</p>
                        <p className="mt-2">{data.researchvalue14}</p>
                      </div>
                    )}
                  </div>
                </div>

                <hr className="border border-gray-300 my-6" />

                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  <h2 className={`${styles.productTitle} md:w-4/12 mb-2`}>
                    {data.name} Future Researched
                  </h2>
                  <div className="md:w-8/12">
                    <p className="w-full">{data.researched1}</p>
                    <p className="w-full mt-3">{data.researched2}</p>
                  </div>
                </div>

                <hr className="border border-gray-300 my-6" />

                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  <h2 className={`${styles.productTitle} md:w-4/12`}>
                    Article Author
                  </h2>
                  <p className="md:w-8/12">
                    The preceding literature was researched, revised, and
                    compiled by Dr. Logan, M.D. Dr. Logan holds a doctorate from{" "}
                    <a
                      target="_blank"
                      className="text-green-600 hover:underline"
                      href="https://case.edu/medicine/"
                    >
                      Case Western Reserve University School of Medicine
                    </a>{" "}
                    and a B.S. in molecular biology.
                  </p>
                </div>
                <hr className="border border-gray-300 my-6" />

                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  <h2 className={`${styles.productTitle} md:w-4/12`}>
                    Scientific Journal Author
                  </h2>
                  <div className="md:w-8/12">
                    <p>{data.scientificjournalauthor1}</p>

                    <p className="mt-4">{data.scientificjournalauthor2}</p>
                  </div>
                </div>
                <hr className="border border-gray-300 my-6" />
                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  <h2 className={`${styles.productTitle} md:w-4/12 mb-3`}>
                    Referenced Citations
                  </h2>

                  <div className="md:w-8/12">
                    {[...Array(18)].map((_, index) => {
                      const referencedData = data[`referenceddata${index + 1}`];
                      if (referencedData) {
                        return (
                          <div
                            key={index}
                            className={`mt-${index === 0 ? 0 : 4} flex gap-2`}
                          >
                            <div
                              style={{ borderRadius: "50%" }}
                              className="text-black flex items-center justify-center w-1/12 h-9 w-5 bg-gray-200"
                            >
                              {index + 1}.
                            </div>
                            <div className="w-11/12 break-words">
                              {" "}
                              {referencedData}
                            </div>
                          </div>
                        );
                      } else {
                        return null; // If data is empty, don't render anything
                      }
                    })}
                  </div>
                </div>
                <hr className="border border-gray-300 my-6" />
                {/* coaasImages */}

                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  {coaasImages && (
                    <>
                      <h2 className={`${styles.productTitle} md:w-4/12`}>
                        Certificate of Analysis (COA)
                      </h2>
                      <div className="w-[70%] flex">
                        {data.coaimages.map((i, index) => (
                          <div key={index} className="w-full">
                            <img
                              loading="lazy"
                              src={i.url}
                              alt=""
                              className="w-full overflow-hidden mr-3 mt-3"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <hr className="border border-gray-300 my-6" />

                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  {hplcimagesss && (
                    <>
                      <h2 className={`${styles.productTitle} md:w-4/12`}>
                        Certificate of Analysis (COA)
                      </h2>
                      <div className="w-[70%] flex">
                        {data.hplcimages.map((i, index) => (
                          <div key={index} className="w-full">
                            <img
                              loading="lazy"
                              src={i.url}
                              alt=""
                              className="w-full overflow-hidden mr-3 mt-3"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <hr className="border border-gray-300 my-6" />
                {/* msimagess msimages*/}
                <div className="flex w-full lg:flex-row md:flex-row flex-col">
                  {msimagess && (
                    <>
                      <h2 className={`${styles.productTitle} md:w-4/12`}>
                        Certificate of Analysis (COA)
                      </h2>
                      <div className="w-[70%] flex">
                        {data.msimages.map((i, index) => (
                          <div key={index} className="w-full">
                            <img
                              loading="lazy"
                              src={i.url}
                              alt=""
                              className="w-full overflow-hidden mr-3 mt-3"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <hr className="border border-gray-300 my-6" />
              </>
            ) : null}

            {active === 2 ? (
              <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
                {data &&
                  data.reviews.map((item, index) => (
                    <div className="w-full flex my-2">
                      <img
                        src={`${item.user.avatar?.url}`}
                        alt=""
                        className="w-[50px] h-[50px] rounded-full"
                      />
                      <div className="pl-2 ">
                        <div className="w-full flex items-center">
                          <h1 className="font-[500] mr-3">{item.user.name}</h1>
                          <Ratings rating={data?.ratings} />
                        </div>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  ))}

                <div className="w-full flex justify-center">
                  {data && data.reviews.length === 0 && (
                    <h5>No Reviews have for this product!</h5>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
