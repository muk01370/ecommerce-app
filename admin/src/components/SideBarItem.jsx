import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBarItem = ({ data: { Icon, title, details = [], note }, isDarkmode }) => {
  const [showDetail, setShowDetail] = useState(false);

  const containerClasses = `w-full h-[50px] rounded-lg flex justify-between items-center cursor-pointer
    transition-all duration-200 ease-in-out px-[10px] ${
      isDarkmode
        ? "bg-[#112143] hover:bg-blue-500"
        : "bg-white hover:bg-[#F1F1F1]"
    }`;

  const iconClasses = `${
    showDetail ? "text-[#0858F7]" : isDarkmode ? "text-[#f5f5f5]" : "text-gray-600"
  }`;

  const titleClasses = `${
    showDetail ? "text-[#0858F7]" : isDarkmode ? "text-[#f5f5f5]" : "text-gray-600"
  } font-inter text-sm font-medium`;

  const arrowClasses = `${
    showDetail ? "text-[#0858F7] rotate-90" : "text-gray-600 rotate-0"
  } transition-all duration-200 ease-in-out`;

  const detailContainerClasses = `ml-[20px] border-l-[1px] ${
    isDarkmode ? "border-gray-500" : "border-black"
  }`;

  const detailItemClasses = `pl-[20px] h-[40px] flex items-center font-inter font-normal text-sm 
    hover:border-r-[3px] hover:border-[#0858F7] cursor-pointer 
    transition-all duration-200 ease-in-out ${
      isDarkmode ? "hover:bg-blue-500 text-[#f5f5f5]" : "hover:bg-[#F1F1F1] text-gray-600"
    }`;

  return (
    <div className="flex flex-col">
      {/* Main Container */}
      <div className={containerClasses} onClick={() => setShowDetail((prev) => !prev)}>
        <div className="flex items-center h-full gap-[7px]">
          <Icon size={22} className={iconClasses} />
          <h1 className={titleClasses}>{title}</h1>
        </div>
        <div className="flex gap-5 items-center">
          {note && (
            <div
              className={`px-[5px] py-[2px] text-[8px] text-white font-inter font-bold rounded-sm ${
                note === "HOT" ? "bg-[#0858F7]" : "bg-red-600"
              }`}
            >
              {note}
            </div>
          )}
          {details.length > 0 && <MdArrowRight size={25} className={arrowClasses} />}
        </div>
      </div>

      {/* Detail Section */}
      {showDetail && details.length > 0 && (
        <div className={detailContainerClasses}>
          {details.map((detail, index) => (
            <Link
              key={index}
              to={detail.link || "#"} // Fallback to "#" if link is missing
              className={detailItemClasses}
            >
              {detail.name || "Unnamed Item"} {/* Fallback if name is missing */}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarItem;
