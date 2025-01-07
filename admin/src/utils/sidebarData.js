import {
  MdDashboard,
  MdLock,
  MdPerson,
  MdShoppingCart,
  MdEmail,
  MdNotifications,
  MdSettings,
  MdOutlinePages,
  MdAddAlert,
  MdPhotoAlbum,
  MdMouse,
  MdColorize,
  MdPieChart,
  MdDocumentScanner,
  MdMenuBook,
  MdCategory,
} from "react-icons/md";
import { GiOverInfinity } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";
import { AiOutlineFontSize } from "react-icons/ai";
import { BsTable, BsLayers } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";

export const navMasterData = [
  {
    Icon: MdDashboard,
    title: "Dashboard",
    details: [
      { name: "Ecommerce", link: "/Ecommerce" },
      { name: "Analytics", link: "/Analytics" },
      { name: "CRM", link: "/CRM" },
    ],
    items: "",
    note: "",
  },
  {
    Icon: MdLock,
    title: "Authentication",
    details: [
      {name:"Login", link: "/login"},
      {name:"Register Page", link: "/register-page"},
      {name:"Forget Password", link: "/forget-password"},
    ],
    items: "",
    note: "",
  },
  {
    Icon: MdPerson,
    title: "Users",
    details: [
      {name: "User List", link: "/user-list"},
      {name: "User Profile", link: "/user-profile"},
      {name: "My Account", link: "/my-account"},
    ],
    items: "",
    note: "HOT",
  },
  {
    Icon: GiOverInfinity,
    title: "Products",
    details: [
      { name: "Product List", link: "/product-list" },
      { name: "Product View", link: "/product-view" },
      { name: "Product Upload", link: "/product-upload" },
    ],
    items: "",
    note: "NEW",
  },
  {
    Icon:   MdCategory,
    title: "Category",
    details: [
      { name: "Category List", link: "/category-list" },
      { name: "Add a category", link: "/category-add" },
    ],
    items: "",
    note: "NEW",
  },
  {
    Icon: IoDocumentText,
    title: "Invoices",
    details: [
      {name: "Invoice List", link: "/invoice-list"},
      {name: "Invoice Details", link: "/invoice-detail"},
    ],
    items: "",
    note: "",
  },
  {
    Icon: MdShoppingCart,
    title: "Orders",
    link: "/order-lists",
    details: [],
    items: "05",
    note: "",
  },
  {
    Icon: MdEmail,
    title: "Messages",
    details: [],
    items: "03",
    note: "",
  },
  {
    Icon: MdNotifications,
    title: "Notification",
    details: [],
    items: "9+",
    note: "",
  },
  {
    Icon: MdSettings,
    title: "Settings",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: MdOutlinePages,
    title: "Blank Page",
    details: [],
    items: "",
    note: "",
  },
];

export const navBlocksData = [
  {
    Icon: MdAddAlert,
    title: "Alerts",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: MdPhotoAlbum,
    title: "Avatars",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: AiOutlineFontSize,
    title: "Headings",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: MdMouse,
    title: "Buttons",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: MdColorize,
    title: "Colors",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: MdPieChart,
    title: "Charts",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: MdDocumentScanner,
    title: "Fields",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: BsTable,
    title: "Tables",
    details: [],
    items: "",
    note: "",
  },
];

export const navSupportsData = [
  {
    Icon: VscOpenPreview,
    title: "Overview",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: MdMenuBook,
    title: "Documentation",
    details: [],
    items: "",
    note: "",
  },
  {
    Icon: BsLayers,
    title: "Change Log",
    details: [],
    items: "",
    note: "",
  },
];