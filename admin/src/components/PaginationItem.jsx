import React from "react";

const PaginationItem = ({ isDarkmode, Icon, page, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isDarkmode ? "bg-[#122955]" : "bg-[#F8F8F8]"
      } sm:w-[35px] sm:h-[35px] w-[30px] h-[30px] rounded-full cursor-pointer font-inter text-sm font-semibold
      flex justify-center items-center hover:bg-[#1E66FF] hover:text-white transition-all duration-200 ease-in-out
      ${
        active
          ? "bg-[#1E66FF] text-white"
          : isDarkmode
          ? "text-gray-200"
          : "text-gray-700"
      } shadow-md`}
    >
      {Icon ? <Icon size={20} /> : page}
    </button>
  );
};

export default PaginationItem;
