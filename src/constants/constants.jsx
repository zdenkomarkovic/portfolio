import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { LuMonitorSmartphone } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";

export const cardData = [
  {
    image: "./furnitureStore.png",
    info: "This e-commerce platform is built using React, Node, and MongoDB. Product search by name and category. Sort products by price. Shopping Cart functionality. Purchase confirmation emails. User activation emails. Manipulate product categories Add, delete, and update products",
    title: "Furniture store",
    subTitle: "React.js / Node.js / MongoDB",
    url: "https://furniture-store-r4p8.vercel.app",
    buttonText: "Visit",
    click: "true",
  },
  {
    image: "./easy-production.jpg",
    info: "Production management software for small and large enterprises. This software is designed to help businesses manage their production processes more efficiently, from planning and scheduling to quality control and inventory management.",
    title: "Easy production",
    subTitle: "React.js / Node.js / MongoDB",
    url: "",
    buttonText: "Not available",
    click: "",
  },
];

export const items = [
  {
    icon: <IoDiamondOutline className="text-[40px] md:text-[3vw] mx-auto" />,
    text: (
      <p className=" text-[12px] py-[10px] md:py-[1vw] md:text-[1.05vw]">
        World class Apps
      </p>
    ),
  },
  {
    icon: <BsTools className="text-[40px] md:text-[3vw] mx-auto" />,
    text: (
      <p className="text-[12px] py-[10px] md:py-[1vw] md:text-[1.05vw]">
        Tailored To Your Needs
      </p>
    ),
  },
  {
    icon: <MdOutlineSpeed className="text-[40px] md:text-[3vw] mx-auto" />,
    text: (
      <p className="text-[12px] py-[10px] md:py-[1vw] md:text-[1.05vw]">
        Fast load times
      </p>
    ),
  },
  {
    icon: <LuMonitorSmartphone className="text-[40px] md:text-[3vw] mx-auto" />,
    text: (
      <p className="text-[12px] py-[10px] md:py-[1vw] md:text-[1.05vw]">
        Responsive, work on all devices
      </p>
    ),
  },
  {
    icon: <GoLightBulb className="text-[40px] md:text-[3vw] mx-auto" />,
    text: (
      <p className="text-[12px] py-[10px] md:py-[1vw] md:text-[1.05vw]">
        Intuitive and dynamic
      </p>
    ),
  },
];
