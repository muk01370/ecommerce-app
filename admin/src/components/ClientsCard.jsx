import React from "react";
import { BsFillChatLeftTextFill, BsEyeFill } from "react-icons/bs";

const ClientsCard = ({ isDarkmode, data: { image, name, orders, amount } }) => {
  return (
    <div className="w-full grid grid-cols-5">
      <div
        className={`col-span-2 sm:px-[10px] px-[5px] py-[20px] ${
          isDarkmode ? "text-gray-400" : "text-gray-600"
        } border-t-[1px] border-r-[1px] border-opacity-10 ${
          isDarkmode ? "border-white" : "border-black"
        }`}
      >
        <div className="flex items-center gap-[5px]">
          <img
            src={image}
            alt="client-1"
            className="w-[25px] h-[25px]
                rounded-full"
          />
          <h1 className={`font-inter font-normal sm:text-sm text-xs truncate`}>
            {name}
          </h1>
        </div>
      </div>
      <div
        className={`sm:p-[10px] px-[5px] flex items-center uppercase font-inter font-normal truncate sm:text-sm text-xs ${
          isDarkmode ? "text-gray-400" : "text-gray-600"
        } border-t-[1px] border-r-[1px] border-opacity-10 ${
          isDarkmode ? "border-white" : "border-black"
        }`}
      >
        {orders}
      </div>
      <div
        className={`sm:p-[10px] px-[5px] flex items-center font-inter font-normal truncate sm:text-sm text-xs ${
          isDarkmode ? "text-gray-400" : "text-gray-600"
        } border-t-[1px] border-r-[1px] border-opacity-10 ${
          isDarkmode ? "border-white" : "border-black"
        }`}
      >
        {amount}
      </div>
      <div
        className={`sm:p-[10px] px-[5px] flex items-center text-sm ${
          isDarkmode ? "text-gray-200" : "text-gray-600"
        } border-t-[1px] border-r-[1px] border-opacity-10 ${
          isDarkmode ? "border-white" : "border-black"
        }`}
      >
        <div className="flex gap-[5px] items-center">
          <div
            className="bg-green-100 sm:w-[22px] w-[18px] sm:h-[22px] h-[18px] flex 
          justify-center items-center rounded-sm"
          >
            <BsFillChatLeftTextFill className="sm:text-sm text-xs text-green-700" />
          </div>
          <div
            className="bg-purple-100 sm:w-[22px] w-[18px] sm:h-[22px] h-[18px]  flex 
          justify-center items-center rounded-sm"
          >
            <BsEyeFill className="sm:text-sm text-xs text-purple-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCard;
