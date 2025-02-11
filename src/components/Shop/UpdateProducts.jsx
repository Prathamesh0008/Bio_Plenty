import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";

const UpdateProducts = ({ productId }) => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [images, setImages] = useState([]);
  const [structureimages, setStructureimages] = useState([]);
  const [coaimages, setCoaimages] = useState([]);
  const [hplcimages, setHplcimages] = useState([]);
  const [msimages, setMsimages] = useState([]);

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    definition: "",
    images: [],
    structureimages: [],
    coaimages: [],
    hplcimages: [],
    msimages: [],
    sorcename: "",
    sorceaddress: "",
    structureheading1: "",
    structureheading2: "",
    structureheading3: "",
    structureheading4: "",
    structureheading5: "",
    structureheading6: "",
    structureheading7: "",
    structureheading8: "",
    structuredata1: "",
    structuredata2: "",
    structuredata3: "",
    structuredata4: "",
    structuredata5: "",
    structuredata6: "",
    structuredata7: "",
    structuredata8: "",
    researchheading: "",
    researchsubheading1: "",
    researchsubheading2: "",
    researchsubheading3: "",
    researchsubheading4: "",
    researchsubheading5: "",
    researchsubheading6: "",
    researchsubheading7: "",
    researchvalue1: "",
    researchvalue2: "",
    researchvalue3: "",
    researchvalue4: "",
    researchvalue5: "",
    researchvalue6: "",
    researchvalue7: "",
    researchvalue8: "",
    researchvalue9: "",
    researchvalue10: "",
    researchvalue11: "",
    researchvalue12: "",
    researchvalue13: "",
    researchvalue14: "",
    scientificjournalauthor1: "",
    scientificjournalauthor2: "",
    referenceddata1: "",
    referenceddata2: "",
    referenceddata3: "",
    referenceddata4: "",
    referenceddata5: "",
    referenceddata6: "",
    referenceddata7: "",
    referenceddata8: "",
    referenceddata9: "",
    referenceddata10: "",
    referenceddata11: "",
    referenceddata12: "",
    referenceddata13: "",
    referenceddata14: "",
    referenceddata15: "",
    referenceddata16: "",
    referenceddata17: "",
    referenceddata18: "",
    researched1: "",
    researched2: "",
    category: "",
    tags: "",
    originalPrice: "",
    discountPrice: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `${server}/product/get-single-products/${id}`
        );
        setProductData(data.singleproduct);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setProductData({ ...productData, [name]: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    for (const key in productData) {
      if (Array.isArray(productData[key])) {
        Array.from(productData[key]).forEach((file) =>
          formData.append(key, file)
        );
      } else {
        formData.append(key, productData[key]);
      }
    }

    try {
      await axios.put(
        `${server}/product/update-product/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product", error);
      toast.error("Error updating product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
        <h5 className="text-[30px] font-Poppins text-center">Update Product</h5>
        {/* create product form */}
        <form onSubmit={handleSubmit}>
          <br />
          <div>
            <label className="pb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product name..."
            />
          </div>
          <br />
          <div>
            <label className="pb-2">
              Description in short <span className="text-red-500">*</span>
            </label>
            <textarea
              cols="30"
              required
              rows="3"
              type="text"
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product description..."
            ></textarea>
          </div>
          <br />
          <div>
            <label className="pb-2">
              Definition <span className="text-red-500">*</span>
            </label>
            <textarea
              cols="30"
              required
              rows="3"
              type="text"
              name="definition"
              value={productData.definition}
              onChange={handleChange}
              className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product definition..."
            ></textarea>
          </div>
          <br />
          {/* Category */}
          <div>
            <label className="pb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full mt-2 border h-[35px] rounded-[5px]"
              value={productData.category}
              onChange={handleChange}
            >
              <option value="Choose a category">Choose a category</option>
              {categoriesData &&
                categoriesData.map((i) => (
                  <option value={i.title} key={i.title}>
                    {i.title}
                  </option>
                ))}
            </select>
          </div>

          <br />

          <div>
            <label className="pb-2">Tags</label>
            <input
              type="text"
              name="tags"
              value={productData.tags}
              onChange={handleChange}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product tags..."
            />
          </div>
          <br />
          <div>
            <label className="pb-2">Original Price</label>
            <input
              type="number"
              name="price"
              value={productData.originalPrice}
              onChange={handleChange}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product price..."
            />
          </div>
          <br />
          <div>
            <label className="pb-2">
              Price (With Discount) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={productData.discountPrice}
              onChange={handleChange}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product price with discount..."
            />
          </div>
          <br />
          <div>
            <label className="pb-2">
              Product Stock <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={productData.stock}
              onChange={handleChange}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your product stock..."
            />
          </div>
          <br />
          <div>
            <label className="pb-2">
              Upload product Images <span className="text-red-500">*</span>
            </label>
            <input type="file" id="upload" className="hidden" />
            <div className="w-full flex items-center flex-wrap">
              <label htmlFor="upload">
                <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
              </label>
              {productData.images &&
                productData.images.map((i) => (
                  <img
                    src={i?.url}
                    key={i}
                    alt=""
                    className="h-[120px] w-[120px] object-cover m-2"
                  />
                ))}
            </div>
            <br />
          </div>

          <br />

          <div>
            <label className="pb-2">Upload product COA Certificate </label>
            <input
              type="file"
              name=""
              id="uploadcoa"
              className="hidden"
              multiple
              onChange={handleFileChange}
            />
            <div className="w-full flex items-center flex-wrap">
              <label htmlFor="uploadcoa">
                <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
              </label>
              {productData.coaimages &&
                productData.coaimages.map((i) => (
                  <img
                    src={i?.url}
                    key={i}
                    alt=""
                    className="h-[120px] w-[120px] object-cover m-2"
                  />
                ))}
            </div>
            <br />
          </div>

          <br />

          <div>
            <label className="pb-2">Upload product HPLC Certificate </label>
            <input
              type="file"
              name=""
              id="uploadhplc"
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
            <div className="w-full flex items-center flex-wrap">
              <label htmlFor="uploadhplc">
                <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
              </label>
              {productData.hplcimages &&
                productData.hplcimages.map((i) => (
                  <img
                    src={i?.url}
                    key={i}
                    alt=""
                    className="h-[120px] w-[120px] object-cover m-2"
                  />
                ))}
            </div>
            <br />
          </div>

          <br />
          <div>
            <label className="pb-2">Upload product MS Certificate </label>
            <input
              type="file"
              name=""
              id="uploadms"
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
            <div className="w-full flex items-center flex-wrap">
              <label htmlFor="uploadms">
                <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
              </label>
              {productData.msimages &&
                productData.msimages.map((i) => (
                  <img
                    src={i?.url}
                    key={i?.url}
                    alt=""
                    className="h-[120px] w-[120px] object-cover m-2"
                  />
                ))}
            </div>
            <br />
          </div>
          <br />

          {/* Structure input */}

          <div>
            <label className="pb-2">Upload Structure Image</label>
            <input
              type="file"
              name=""
              id="uploadstructure"
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
            <div className="w-full flex items-center flex-wrap">
              <label htmlFor="uploadstructure">
                <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
              </label>
              {productData.structureimages &&
                productData.structureimages.map((i) => (
                  <img
                    src={i?.url}
                    key={i}
                    alt=""
                    className="h-[120px] w-[120px] object-cover m-2"
                  />
                ))}
            </div>
            <br />
          </div>
          <br />
          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">Source Name -</label>
              <input
                type="text"
                name="sorcename"
                value={productData.sorcename}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your Source Name..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Source Address -</label>
              <input
                type="text"
                name="sorceaddress"
                value={productData.sorceaddress}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your Source Address..."
              />
            </div>
          </div>

          <br />

          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Structure Heading 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="structureheading1"
                value={productData.structureheading1}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Structure Value 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="structuredata1"
                value={productData.structuredata1}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>
          <br />
          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Structure Heading 2 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="structureheading2"
                value={productData.structureheading2}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Structure Value 2 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="structuredata2"
                value={productData.structuredata2}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>
          <br />
          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Structure Heading 3 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="structureheading3"
                value={productData.structureheading3}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Structure Value 3 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="structuredata3"
                value={productData.structuredata3}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>
          <br />
          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Structure Heading 4 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="structureheading4"
                value={productData.structureheading4}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Structure Value 4 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="structuredata4"
                value={productData.structuredata4}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>
          <br />
          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">Structure Heading 5</label>
              <input
                type="text"
                name="structureheading5"
                value={productData.structureheading5}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Structure Value 5</label>
              <input
                type="text"
                name="structuredata5"
                value={productData.structuredata5}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>
          <br />
          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">Structure Heading 6</label>
              <input
                type="text"
                name="structureheading6"
                value={productData.structureheading6}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Structure Value 6</label>
              <input
                type="text"
                name="structuredata6"
                value={productData.structuredata6}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>
          <br />
          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">Structure Heading 7</label>
              <input
                type="text"
                name="structureheading7"
                value={productData.structureheading7}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Structure Value 7</label>
              <input
                type="text"
                name="structuredata7"
                value={productData.structuredata7}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>
          <br />
          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">Structure Heading 8</label>
              <input
                type="text"
                name="structureheading8"
                value={productData.structureheading8}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Structure Value 8</label>
              <input
                type="text"
                name="structuredata8"
                value={productData.structuredata8}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>
          <br />

          {/* // Research & Effects section */}

          <div>
            <label className="pb-2">
              Based on your needs, please write either one of them{" "}
              <b>(Research or Effects etc...)</b>{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="researchheading"
              value={productData.researchheading}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handleChange}
              placeholder="Enter your product Research and heading..."
            />
          </div>
          <br />

          <div className="w-full flex gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Sub-Heading Research & Effects 1
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="researchsubheading1"
                value={productData.researchsubheading1}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your product Research & Effects of Sub-Heading ..."
              />
            </div>
            <div className="w-6/12">
              <div>
                <label className="pb-2">
                  Content of Research & Effects (i)
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  cols="30"
                  required
                  rows="1"
                  type="text"
                  name="researchvalue1"
                  value={productData.researchvalue1}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Content of Research & Effects (ii)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue2"
                  value={productData.researchvalue2}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
            </div>
          </div>
          <br />

          <div className="w-full flex gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Sub-Heading Research & Effects (2)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="researchsubheading2"
                value={productData.researchsubheading2}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your product Research & Effects of Sub-Heading ..."
              />
            </div>
            <div className="w-6/12">
              <div>
                <label className="pb-2">
                  Content of Research & Effects (i)
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  cols="30"
                  required
                  rows="1"
                  type="text"
                  name="researchvalue3"
                  value={productData.researchvalue3}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Content of Research & Effects (ii)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue4"
                  value={productData.researchvalue4}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
            </div>
          </div>

          <br />

          <div className="w-full flex gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Sub-Heading Research & Effects (3)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="researchsubheading3"
                value={productData.researchsubheading3}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your product Research & Effects of Sub-Heading ..."
              />
            </div>
            <div className="w-6/12">
              <div>
                <label className="pb-2">
                  Content of Research & Effects (i)
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  cols="30"
                  required
                  rows="1"
                  type="text"
                  name="researchvalue5"
                  value={productData.researchvalue5}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Content of Research & Effects (ii)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue6"
                  value={productData.researchvalue6}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
            </div>
          </div>

          <br />

          <div className="w-full flex gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Sub-Heading Research & Effects (4)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="researchsubheading4"
                value={productData.researchsubheading4}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your product Research & Effects of Sub-Heading ..."
              />
            </div>
            <div className="w-6/12">
              <div>
                <label className="pb-2">
                  Content of Research & Effects (i)
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  cols="30"
                  required
                  rows="1"
                  type="text"
                  name="researchvalue7"
                  value={productData.researchvalue7}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Content of Research & Effects (ii)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue8"
                  value={productData.researchvalue8}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
            </div>
          </div>

          <br />

          <div className="w-full flex gap-2">
            <div className="w-6/12">
              <label className="pb-2">Sub-Heading Research & Effects (5)</label>
              <input
                type="text"
                name="researchsubheading5"
                value={productData.researchsubheading5}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your product Research & Effects of Sub-Heading ..."
              />
            </div>
            <div className="w-6/12">
              <div>
                <label className="pb-2">
                  Content of Research & Effects (i)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue9"
                  value={productData.researchvalue9}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Content of Research & Effects (ii)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue10"
                  value={productData.researchvalue10}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
            </div>
          </div>

          <br />

          <div className="w-full flex gap-2">
            <div className="w-6/12">
              <label className="pb-2">Sub-Heading Research & Effects (6)</label>
              <input
                type="text"
                name="researchsubheading6"
                value={productData.researchsubheading6}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your product Research & Effects of Sub-Heading ..."
              />
            </div>
            <div className="w-6/12">
              <div>
                <label className="pb-2">
                  Content of Research & Effects (i)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue11"
                  value={productData.researchvalue11}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Content of Research & Effects (ii)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue12"
                  value={productData.researchvalue12}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
            </div>
          </div>
          <br />

          <div className="w-full flex gap-2">
            <div className="w-6/12">
              <label className="pb-2">Sub-Heading Research & Effects (7)</label>
              <input
                type="text"
                name="researchsubheading7"
                value={productData.researchsubheading7}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your product Research & Effects of Sub-Heading ..."
              />
            </div>
            <div className="w-6/12">
              <div>
                <label className="pb-2">
                  Content of Research & Effects (i)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue13"
                  value={productData.researchvalue13}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
              <br />
              <div>
                <label className="pb-2">
                  Content of Research & Effects (ii)
                </label>
                <textarea
                  cols="30"
                  rows="1"
                  type="text"
                  name="researchvalue14"
                  value={productData.researchvalue14}
                  className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={handleChange}
                  placeholder="Enter your Content of Research & Effects..."
                ></textarea>
              </div>
            </div>
          </div>

          <br />
          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Future Research 1<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="researched1"
                value={productData.researched1}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Future Research 2 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="researched2"
                value={productData.researched2}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>
          <br />

          {/* Scientific Journal Author section */}

          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                Scientific Journal Author details 1{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="scientificjournalauthor1"
                value={productData.scientificjournalauthor1}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure heading..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Scientific Journal Author details 2{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="scientificjournalauthor2"
                value={productData.scientificjournalauthor2}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your structure value..."
              />
            </div>
          </div>

          <br />

          {/* Referenced Citations */}

          <div className="w-full flex justify-between gap-2">
            <div className="w-6/12">
              <label className="pb-2">
                {" "}
                Referenced Citations 1 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="referenceddata1"
                value={productData.referenceddata1}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Referenced Citations 2 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="referenceddata2"
                value={productData.referenceddata2}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between gap-2 mt-4">
            <div className="w-6/12">
              <label className="pb-2">
                {" "}
                Referenced Citations 3 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="referenceddata3"
                value={productData.referenceddata3}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Referenced Citations 4 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="referenceddata4"
                value={productData.referenceddata4}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between gap-2 mt-4">
            <div className="w-6/12">
              <label className="pb-2">
                {" "}
                Referenced Citations 5 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="referenceddata5"
                value={productData.referenceddata5}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Referenced Citations 6 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="referenceddata6"
                value={productData.referenceddata6}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between gap-2 mt-4">
            <div className="w-6/12">
              <label className="pb-2">
                {" "}
                Referenced Citations 7 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="referenceddata7"
                value={productData.referenceddata7}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">
                Referenced Citations 8 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                name="referenceddata8"
                value={productData.referenceddata8}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between gap-2 mt-4">
            <div className="w-6/12">
              <label className="pb-2"> Referenced Citations 9</label>
              <input
                type="text"
                name="referenceddata9"
                value={productData.referenceddata9}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Referenced Citations 10</label>
              <input
                type="text"
                name="referenceddata10"
                value={productData.referenceddata10}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between gap-2 mt-4">
            <div className="w-6/12">
              <label className="pb-2"> Referenced Citations 11</label>
              <input
                type="text"
                name="referenceddata11"
                value={productData.referenceddata11}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Referenced Citations 12</label>
              <input
                type="text"
                name="referenceddata12"
                value={productData.referenceddata12}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between gap-2 mt-4">
            <div className="w-6/12">
              <label className="pb-2"> Referenced Citations 13</label>
              <input
                type="text"
                name="referenceddata13"
                value={productData.referenceddata13}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Referenced Citations 14</label>
              <input
                type="text"
                name="referenceddata14"
                value={productData.referenceddata14}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between gap-2 mt-4">
            <div className="w-6/12">
              <label className="pb-2"> Referenced Citations 15</label>
              <input
                type="text"
                name="referenceddata15"
                value={productData.referenceddata15}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Referenced Citations 16</label>
              <input
                type="text"
                name="referenceddata16"
                value={productData.referenceddata16}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
          </div>

          <div className="w-full flex justify-between gap-2 mt-4">
            <div className="w-6/12">
              <label className="pb-2"> Referenced Citations 17</label>
              <input
                type="text"
                name="referenceddata17"
                value={productData.referenceddata17}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
            <div className="w-6/12">
              <label className="pb-2">Referenced Citations 18</label>
              <input
                type="text"
                name="referenceddata18"
                value={productData.referenceddata18}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleChange}
                placeholder="Enter your referenced Citations..."
              />
            </div>
          </div>

          <br />

          <div>
            <button
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="submit"
            >
              {loading ? "Updating..." : "Update Product"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProducts;
