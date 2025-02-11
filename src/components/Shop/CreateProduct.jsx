import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/actions/product";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [structureimages, setStructureimages] = useState([]);
  const [coaimages, setCoaimages] = useState([]);
  const [hplcimages, setHplcimages] = useState([]);
  const [msimages, setMsimages] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [definition, setDefinition] = useState("");
  
  const [sorcename, setSorcename] = useState("");
  const [sorceaddress, setSorceaddress] = useState("");

  const [structureheading1, setStructureheading1] = useState("");
  const [structureheading2, setStructureheading2] = useState("");
  const [structureheading3, setStructureheading3] = useState("");
  const [structureheading4, setStructureheading4] = useState("");
  const [structureheading5, setStructureheading5] = useState("");
  const [structureheading6, setStructureheading6] = useState("");
  const [structureheading7, setStructureheading7] = useState("");
  const [structureheading8, setStructureheading8] = useState("");

  const [structuredata1, setStructuredata1] = useState("");
  const [structuredata2, setStructuredata2] = useState("");
  const [structuredata3, setStructuredata3] = useState("");
  const [structuredata4, setStructuredata4] = useState("");
  const [structuredata5, setStructuredata5] = useState("");
  const [structuredata6, setStructuredata6] = useState("");
  const [structuredata7, setStructuredata7] = useState("");
  const [structuredata8, setStructuredata8] = useState("");

  const [researchheading, setResearchheading] = useState("");
  const [researchsubheading1, setResearchsubheading1] = useState("");
  const [researchsubheading2, setResearchsubheading2] = useState("");
  const [researchsubheading3, setResearchsubheading3] = useState("");
  const [researchsubheading4, setResearchsubheading4] = useState("");
  const [researchsubheading5, setResearchsubheading5] = useState("");
  const [researchsubheading6, setResearchsubheading6] = useState("");
  const [researchsubheading7, setResearchsubheading7] = useState("");

  const [researchvalue1, setResearchvalue1] = useState("");
  const [researchvalue2, setResearchvalue2] = useState("");
  const [researchvalue3, setResearchvalue3] = useState("");
  const [researchvalue4, setResearchvalue4] = useState("");
  const [researchvalue5, setResearchvalue5] = useState("");
  const [researchvalue6, setResearchvalue6] = useState("");
  const [researchvalue7, setResearchvalue7] = useState("");
  const [researchvalue8, setResearchvalue8] = useState("");
  const [researchvalue9, setResearchvalue9] = useState("");
  const [researchvalue10, setResearchvalue10] = useState("");
  const [researchvalue11, setResearchvalue11] = useState("");
  const [researchvalue12, setResearchvalue12] = useState("");
  const [researchvalue13, setResearchvalue13] = useState("");
  const [researchvalue14, setResearchvalue14] = useState("");

  const [scientificjournalauthor1, setScientificjournalauthor1] = useState("");
  const [scientificjournalauthor2, setScientificjournalauthor2] = useState("");

  const [referenceddata1, setReferenceddata1] = useState("");
  const [referenceddata2, setReferenceddata2] = useState("");
  const [referenceddata3, setReferenceddata3] = useState("");
  const [referenceddata4, setReferenceddata4] = useState("");
  const [referenceddata5, setReferenceddata5] = useState("");
  const [referenceddata6, setReferenceddata6] = useState("");
  const [referenceddata7, setReferenceddata7] = useState("");
  const [referenceddata8, setReferenceddata8] = useState("");
  const [referenceddata9, setReferenceddata9] = useState("");
  const [referenceddata10, setReferenceddata10] = useState("");
  const [referenceddata11, setReferenceddata11] = useState("");
  const [referenceddata12, setReferenceddata12] = useState("");
  const [referenceddata13, setReferenceddata13] = useState("");
  const [referenceddata14, setReferenceddata14] = useState("");
  const [referenceddata15, setReferenceddata15] = useState("");
  const [referenceddata16, setReferenceddata16] = useState("");
  const [referenceddata17, setReferenceddata17] = useState("");
  const [referenceddata18, setReferenceddata18] = useState("");

  const [researched1, setResearched1] = useState("");
  const [researched2, setResearched2] = useState("");

  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Product created successfully!");
      navigate("/dashboard");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handlestructureImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setStructureimages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setStructureimages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handlecoaImageChange = (e) => {
    const files = Array.from(e.target.files);

    setCoaimages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setCoaimages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handlehplcImageChange = (e) => {
    const files = Array.from(e.target.files);

    setHplcimages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setHplcimages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handlemsImageChange = (e) => {
    const files = Array.from(e.target.files);

    setMsimages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setMsimages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.set("images", image);
    });

    structureimages.forEach((image) => {
      newForm.set("structureimages", structureimages);
    });

    coaimages.forEach((image) => {
      newForm.set("coaimages", coaimages);
    });

    hplcimages.forEach((image) => {
      newForm.set("hplcimages", hplcimages);
    });

    msimages.forEach((image) => {
      newForm.set("msimages", msimages);
    });

    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("definition", definition);
    newForm.append("sorcename", sorcename);
    newForm.append("sorceaddress", sorceaddress);
    newForm.append("structureheading1", structureheading1);
    newForm.append("structureheading2", structureheading2);
    newForm.append("structureheading3", structureheading3);
    newForm.append("structureheading4", structureheading4);
    newForm.append("structureheading5", structureheading5);
    newForm.append("structureheading6", structureheading6);
    newForm.append("structureheading7", structureheading7);
    newForm.append("structureheading8", structureheading8);

    newForm.append("structuredata1", structuredata1);
    newForm.append("structuredata2", structuredata2);
    newForm.append("structuredata3", structuredata3);
    newForm.append("structuredata4", structuredata4);
    newForm.append("structuredata5", structuredata5);
    newForm.append("structuredata6", structuredata6);
    newForm.append("structuredata7", structuredata7);
    newForm.append("structuredata8", structuredata8);

    newForm.append("researchheading", researchheading);
    newForm.append("researchsubheading1", researchsubheading1);
    newForm.append("researchsubheading2", researchsubheading2);
    newForm.append("researchsubheading3", researchsubheading3);
    newForm.append("researchsubheading4", researchsubheading4);
    newForm.append("researchsubheading5", researchsubheading5);
    newForm.append("researchsubheading6", researchsubheading6);
    newForm.append("researchsubheading7", researchsubheading7);

    newForm.append("researchvalue1", researchvalue1);
    newForm.append("researchvalue2", researchvalue2);
    newForm.append("researchvalue3", researchvalue3);
    newForm.append("researchvalue4", researchvalue4);
    newForm.append("researchvalue5", researchvalue5);
    newForm.append("researchvalue6", researchvalue6);
    newForm.append("researchvalue7", researchvalue7);
    newForm.append("researchvalue8", researchvalue8);
    newForm.append("researchvalue9", researchvalue9);
    newForm.append("researchvalue10", researchvalue10);
    newForm.append("researchvalue11", researchvalue11);
    newForm.append("researchvalue12", researchvalue12);
    newForm.append("researchvalue13", researchvalue13);
    newForm.append("researchvalue14", researchvalue14);

    newForm.append("scientificjournalauthor1", scientificjournalauthor1);
    newForm.append("scientificjournalauthor2", scientificjournalauthor2);

    newForm.append("referenceddata1", referenceddata1);
    newForm.append("referenceddata2", referenceddata2);
    newForm.append("referenceddata3", referenceddata3);
    newForm.append("referenceddata4", referenceddata4);
    newForm.append("referenceddata5", referenceddata5);
    newForm.append("referenceddata6", referenceddata6);
    newForm.append("referenceddata7", referenceddata7);
    newForm.append("referenceddata8", referenceddata8);
    newForm.append("referenceddata9", referenceddata9);
    newForm.append("referenceddata10", referenceddata10);
    newForm.append("referenceddata11", referenceddata11);
    newForm.append("referenceddata12", referenceddata12);
    newForm.append("referenceddata13", referenceddata13);
    newForm.append("referenceddata14", referenceddata14);
    newForm.append("referenceddata15", referenceddata15);
    newForm.append("referenceddata16", referenceddata16);
    newForm.append("referenceddata17", referenceddata17);
    newForm.append("referenceddata18", referenceddata18);

    newForm.append("researched1", researched1);
    newForm.append("researched2", researched2);

    newForm.append("category", category);
    newForm.append("tags", tags);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("shopId", seller._id);
    dispatch(
      createProduct({
        name,
        description,
        definition,

        sorcename,
        sorceaddress,
        
        structureheading1,
        structureheading2,
        structureheading3,
        structureheading4,
        structureheading5,
        structureheading6,
        structureheading7,
        structureheading8,

        structuredata1,
        structuredata2,
        structuredata3,
        structuredata4,
        structuredata5,
        structuredata6,
        structuredata7,
        structuredata8,

        researchheading,
        researchsubheading1,
        researchsubheading2,
        researchsubheading3,
        researchsubheading4,
        researchsubheading5,
        researchsubheading6,
        researchsubheading7,

        researchvalue1,
        researchvalue2,
        researchvalue3,
        researchvalue4,
        researchvalue5,
        researchvalue6,
        researchvalue7,
        researchvalue8,
        researchvalue9,
        researchvalue10,
        researchvalue11,
        researchvalue12,
        researchvalue13,
        researchvalue14,

        scientificjournalauthor1,
        scientificjournalauthor2,

        referenceddata1,
        referenceddata2,
        referenceddata3,
        referenceddata4,
        referenceddata5,
        referenceddata6,
        referenceddata7,
        referenceddata8,
        referenceddata9,
        referenceddata10,
        referenceddata11,
        referenceddata12,
        referenceddata13,
        referenceddata14,
        referenceddata15,
        referenceddata16,
        referenceddata17,
        referenceddata18,

        researched1,
        researched2,

        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        shopId: seller._id,
        images,
        structureimages,
        coaimages,
        hplcimages,
        msimages,
      })
    );
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
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
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
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
            value={description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
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
            value={definition}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDefinition(e.target.value)}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter your product tags..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
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
            value={discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
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
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter your product stock..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload product Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            required
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={i}
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
          <label className="pb-2">
            Upload product COA Certificate{" "}
          </label>
          <input
            type="file"
            name=""
            id="uploadcoa"
            className="hidden"
            onChange={handlecoaImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="uploadcoa">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {coaimages &&
              coaimages.map((i) => (
                <img
                  src={i}
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
          <label className="pb-2">
            Upload product HPLC Certificate{" "}
          </label>
          <input
            type="file"
            name=""
            id="uploadhplc"
            className="hidden"
            onChange={handlehplcImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="uploadhplc">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {hplcimages &&
              hplcimages.map((i) => (
                <img
                  src={i}
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
          <label className="pb-2">
            Upload product MS Certificate{" "}
          </label>
          <input
            type="file"
            name=""
            id="uploadms"
            className="hidden"
            onChange={handlemsImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="uploadms">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {msimages &&
              msimages.map((i) => (
                <img
                  src={i}
                  key={i}
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
          <label className="pb-2">
            Upload Structure Image
          </label>
          <input
            type="file"
            name=""
            id="uploadstructure"
            className="hidden"
            onChange={handlestructureImagesChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="uploadstructure">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {structureimages &&
              structureimages.map((i) => (
                <img
                  src={i}
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
            <label className="pb-2">
              Source Name -
            </label>
            <input
              type="text"
              name="sorcename"
              value={sorcename}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setSorcename(e.target.value)}
              placeholder="Enter your Source Name..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">
              Source Address -
            </label>
            <input
              type="text"
              name="sorceaddress"
              value={sorceaddress}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setSorceaddress(e.target.value)}
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
              value={structureheading1}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructureheading1(e.target.value)}
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
              value={structuredata1}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructuredata1(e.target.value)}
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
              value={structureheading2}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructureheading2(e.target.value)}
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
              value={structuredata2}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructuredata2(e.target.value)}
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
              value={structureheading3}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructureheading3(e.target.value)}
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
              value={structuredata3}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructuredata3(e.target.value)}
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
              value={structureheading4}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructureheading4(e.target.value)}
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
              value={structuredata4}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructuredata4(e.target.value)}
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
              value={structureheading5}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructureheading5(e.target.value)}
              placeholder="Enter your structure heading..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">Structure Value 5</label>
            <input
              type="text"
              name="structuredata5"
              value={structuredata5}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructuredata5(e.target.value)}
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
              value={structureheading6}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructureheading6(e.target.value)}
              placeholder="Enter your structure heading..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">Structure Value 6</label>
            <input
              type="text"
              name="structuredata6"
              value={structuredata6}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructuredata6(e.target.value)}
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
              value={structureheading7}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructureheading7(e.target.value)}
              placeholder="Enter your structure heading..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">Structure Value 7</label>
            <input
              type="text"
              name="structuredata7"
              value={structuredata7}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructuredata7(e.target.value)}
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
              value={structureheading8}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructureheading8(e.target.value)}
              placeholder="Enter your structure heading..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">Structure Value 8</label>
            <input
              type="text"
              name="structuredata8"
              value={structuredata8}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStructuredata8(e.target.value)}
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
            value={researchheading}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setResearchheading(e.target.value)}
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
              value={researchsubheading1}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setResearchsubheading1(e.target.value)}
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
                value={researchvalue1}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue1(e.target.value)}
                placeholder="Enter your Content of Research & Effects..."
              ></textarea>
            </div>
            <br />
            <div>
              <label className="pb-2">Content of Research & Effects (ii)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue2"
                value={researchvalue2}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue2(e.target.value)}
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
              value={researchsubheading2}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setResearchsubheading2(e.target.value)}
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
                value={researchvalue3}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue3(e.target.value)}
                placeholder="Enter your Content of Research & Effects..."
              ></textarea>
            </div>
            <br />
            <div>
              <label className="pb-2">Content of Research & Effects (ii)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue4"
                value={researchvalue4}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue4(e.target.value)}
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
              value={researchsubheading3}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setResearchsubheading3(e.target.value)}
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
                value={researchvalue5}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue5(e.target.value)}
                placeholder="Enter your Content of Research & Effects..."
              ></textarea>
            </div>
            <br />
            <div>
              <label className="pb-2">Content of Research & Effects (ii)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue6"
                value={researchvalue6}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue6(e.target.value)}
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
              value={researchsubheading4}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setResearchsubheading4(e.target.value)}
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
                value={researchvalue7}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue7(e.target.value)}
                placeholder="Enter your Content of Research & Effects..."
              ></textarea>
            </div>
            <br />
            <div>
              <label className="pb-2">Content of Research & Effects (ii)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue8"
                value={researchvalue8}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue8(e.target.value)}
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
              value={researchsubheading5}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setResearchsubheading5(e.target.value)}
              placeholder="Enter your product Research & Effects of Sub-Heading ..."
            />
          </div>
          <div className="w-6/12">
            <div>
              <label className="pb-2">Content of Research & Effects (i)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue9"
                value={researchvalue9}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue9(e.target.value)}
                placeholder="Enter your Content of Research & Effects..."
              ></textarea>
            </div>
            <br />
            <div>
              <label className="pb-2">Content of Research & Effects (ii)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue10"
                value={researchvalue10}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue10(e.target.value)}
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
              value={researchsubheading6}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setResearchsubheading6(e.target.value)}
              placeholder="Enter your product Research & Effects of Sub-Heading ..."
            />
          </div>
          <div className="w-6/12">
            <div>
              <label className="pb-2">Content of Research & Effects (i)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue11"
                value={researchvalue11}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue11(e.target.value)}
                placeholder="Enter your Content of Research & Effects..."
              ></textarea>
            </div>
            <br />
            <div>
              <label className="pb-2">Content of Research & Effects (ii)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue12"
                value={researchvalue12}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue12(e.target.value)}
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
              value={researchsubheading7}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setResearchsubheading7(e.target.value)}
              placeholder="Enter your product Research & Effects of Sub-Heading ..."
            />
          </div>
          <div className="w-6/12">
            <div>
              <label className="pb-2">Content of Research & Effects (i)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue13"
                value={researchvalue13}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue13(e.target.value)}
                placeholder="Enter your Content of Research & Effects..."
              ></textarea>
            </div>
            <br />
            <div>
              <label className="pb-2">Content of Research & Effects (ii)</label>
              <textarea
                cols="30"
                rows="1"
                type="text"
                name="researchvalue14"
                value={researchvalue14}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setResearchvalue14(e.target.value)}
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
              value={researched1}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setResearched1(e.target.value)}
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
              value={researched2}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setResearched2(e.target.value)}
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
              value={scientificjournalauthor1}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setScientificjournalauthor1(e.target.value)}
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
              value={scientificjournalauthor2}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setScientificjournalauthor2(e.target.value)}
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
              value={referenceddata1}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata1(e.target.value)}
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
              value={referenceddata2}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata2(e.target.value)}
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
              value={referenceddata3}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata3(e.target.value)}
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
              value={referenceddata4}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata4(e.target.value)}
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
              value={referenceddata5}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata5(e.target.value)}
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
              value={referenceddata6}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata6(e.target.value)}
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
              value={referenceddata7}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata7(e.target.value)}
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
              value={referenceddata8}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata8(e.target.value)}
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
              value={referenceddata9}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata9(e.target.value)}
              placeholder="Enter your referenced Citations..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">Referenced Citations 10</label>
            <input
              type="text"
              name="referenceddata10"
              value={referenceddata10}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata10(e.target.value)}
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
              value={referenceddata11}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata11(e.target.value)}
              placeholder="Enter your referenced Citations..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">Referenced Citations 12</label>
            <input
              type="text"
              name="referenceddata12"
              value={referenceddata12}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata12(e.target.value)}
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
              value={referenceddata13}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata13(e.target.value)}
              placeholder="Enter your referenced Citations..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">Referenced Citations 14</label>
            <input
              type="text"
              name="referenceddata14"
              value={referenceddata14}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata14(e.target.value)}
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
              value={referenceddata15}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata15(e.target.value)}
              placeholder="Enter your referenced Citations..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">Referenced Citations 16</label>
            <input
              type="text"
              name="referenceddata16"
              value={referenceddata16}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata16(e.target.value)}
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
              value={referenceddata17}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata17(e.target.value)}
              placeholder="Enter your referenced Citations..."
            />
          </div>
          <div className="w-6/12">
            <label className="pb-2">Referenced Citations 18</label>
            <input
              type="text"
              name="referenceddata18"
              value={referenceddata18}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setReferenceddata18(e.target.value)}
              placeholder="Enter your referenced Citations..."
            />
          </div>
        </div>

        <br />

        <div>
          <input
            type="submit"
            value="Create"
            className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
