import React from "react";
import Activities from "./Activities";
import Clients from "./Clients";

const Footer = ({ isDarkmode }) => {
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-[20px] mt-[30px] ">
      <Clients isDarkmode={isDarkmode} />
      <Activities isDarkmode={isDarkmode} />
    </div>
  );
};

export default Footer;
