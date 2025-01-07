import { BsPersonCircle, BsStars } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";

export const mainItemData = [
  {
    bg: "bg-[#38C172]",
    header: "Total Users",
    total: "277",
    Icon: BsPersonCircle,
    percentage: "+ 95%",
    trendingUp: true,
  },
  {
    bg: "bg-[#DD4AF5]",
    header: "Total Orders",
    total: "388",
    Icon: FaShoppingCart,
    percentage: "- 30%",
    trendingUp: false,
  },
  {
    bg: "bg-[#4795ED]",
    header: "Total Products",
    total: "577",
    Icon: MdShoppingBag,
    percentage: "- 25%",
    trendingUp: false,
  },
  {
    bg: "bg-[#EBB51E]",
    header: "Total Reviews",
    total: "166",
    Icon: BsStars,
    percentage: "+ 45%",
    trendingUp: true,
  },
];

export const productsSortData = [
  {
    title: "shop by",
    options: ["12 ROW", "24 ROW", "36 ROW"],
  },
  {
    title: "category by",
    options: ["Mens", "Womens", "Kids", "Accessory"],
  },
  {
    title: "brand by",
    options: ["Ecstasy", "Freeland", "Rongdhunu"],
  },
];

export const productItems = [
  {
    image: require("../assets/item-1.webp"),
    name: "Tops and Skirts set...",
    des: "Women's exclusive...",
    category: "womans",
    brand: "richman",
    price: {
      discount: "$19.00",
      original: "$21.00",
    },
    stock: 30,
    rating: [4.9, 16],
    order: 380,
    sales: "$38k",
  }
];

export const clientData = [
  {
    name: "miron madmud",
    orders: 648,
    amount: "$5500",
    image: require("../assets/client-1.webp"),
  },
  {
    name: "tahmina bonny",
    orders: 590,
    amount: "$4400",
    image: require("../assets/client-2.webp"),
  },
  {
    name: "labonna khan",
    orders: 408,
    amount: "$3300",
    image: require("../assets/client-3.webp"),
  },
  {
    name: "sheikh adabali",
    orders: 357,
    amount: "$2200",
    image: require("../assets/client-4.webp"),
  },
  {
    name: "johara khatun",
    orders: 289,
    amount: "$1100",
    image: require("../assets/client-5.webp"),
  },
  {
    name: "kurulus osman",
    orders: 194,
    amount: "$789",
    image: require("../assets/client-6.webp"),
  },
];

export const activitiesData = [
  {
    title: "Your account is logged in",
    des: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend.",
    profile: {
      image: require("../assets/activities-1.webp"),
      name: "Miron Mahmud",
    },
    time: "45 min ago",
  },
  {
    title: "Current language has been changed",
    des: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend.",
    profile: {
      image: require("../assets/activities-2.webp"),
      name: "Bengali Language",
    },
    time: "24 hr ago",
  },
  {
    title: "Asked about this produc",
    des: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, sit amet eleifend.",
    profile: {
      image: require("../assets/activities-3.webp"),
      name: "Modern Tiny Red Skirt",
    },
    time: "Yesterday",
  },
];
