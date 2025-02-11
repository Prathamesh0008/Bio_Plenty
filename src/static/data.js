// navigation Data
import { GrDeliver } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineWorkspacePremium, MdSupportAgent } from "react-icons/md";

export const navItems = [
  // {
  //   title: "Buy Peptides",
  //   url: "/",
  // },
  // {
  //   title: "Peptide Specials",
  //   url: "/best-selling",
  // },
  // {
  //   title: "Products",
  //   url: "/products",
  // },
  {
    title: "Peptides Blog",
    url: "/blog",
  },
  {
    title: "Peptides Information",
    url: "/pepdite-information",
  },
  {
    title: "Our Company",
    url: "/about-us",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];

// branding data
export const brandingData = [
  {
    id: 1,
    title: "Rapid Delivery",
    Description: "Quick, Efficient, Trusted Delivery.",
    icon: <GrDeliver className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Complimentary Shipping",
    Description: "Save up to 25% off",
    icon: <FaShippingFast className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Personalized Support",
    Description: "Get Factory direct price",
    icon: <MdSupportAgent className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Premium Peptides",
    Description: "100% protected payments",
    icon: <MdOutlineWorkspacePremium className="w-6 h-6" />,
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Purchase Peptide",
    subTitle: "",
    // image_Url:,
  },
  {
    id: 2,
    title: "Peptide Capsules",
    subTitle: "",
    // image_Url:,
  },
  {
    id: 3,
    title: "Peptide Blends",
    subTitle: "",
    // image_Url:,
  },
  {
    id: 4,
    title: "IGF-1 Proteins",
    subTitle: "",
    // image_Url:,
  },
  {
    id: 5,
    title: "Cosmetic Peptides",
    subTitle: "",
    // image_Url:,
  },
  {
    id: 6,
    title: "Others",
    subTitle: "",
    // image_Url:,
  },
];
