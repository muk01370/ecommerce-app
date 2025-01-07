import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { clientData } from "../utils/data";
import ClientsCard from "./ClientsCard";

const Clients = ({ isDarkmode }) => {
  return (
    <div
      className={`${
        isDarkmode ? "bg-[#112143]" : "bg-white"
      } sm:p-[20px] py-[20px] px-[5px] shadow-sm hover:shadow-lg rounded-md h-auto`}
    >
      <div className="w-full flex justify-between items-center">
        <h1
          className={`font-inter sm:text-lg text-base ${
            isDarkmode ? "text-white" : "text-black"
          } font-bold`}
        >
          Popular Clients
        </h1>
        <BsThreeDots
          className={`${isDarkmode ? "text-white" : "text-black"} opacity-60 
        sm:text-2xl text-lg cursor-pointer`}
        />
      </div>

      <div className="w-full mt-[20px] flex flex-col">
        <div className="w-full grid grid-cols-5">
          <div
            className={`col-span-2 p-[10px]  uppercase font-inter font-medium sm:text-sm text-xs ${
              isDarkmode ? "text-gray-200" : "text-gray-600"
            } border-t-[1px] border-r-[1px] border-opacity-10 ${
              isDarkmode ? "border-white" : "border-black"
            }`}
          >
            Clients
          </div>
          <div
            className={`p-[10px] truncate uppercase font-inter font-medium sm:text-sm text-xs ${
              isDarkmode ? "text-gray-200" : "text-gray-600"
            } border-t-[1px] border-r-[1px] border-opacity-10 ${
              isDarkmode ? "border-white" : "border-black"
            }`}
          >
            Orders
          </div>
          <div
            className={`p-[10px] truncate  uppercase font-inter font-medium sm:text-sm text-xs ${
              isDarkmode ? "text-gray-200" : "text-gray-600"
            } border-t-[1px] border-r-[1px] border-opacity-10 ${
              isDarkmode ? "border-white" : "border-black"
            }`}
          >
            Amount
          </div>
          <div
            className={`p-[10px] truncate  uppercase font-inter font-medium sm:text-sm text-xs ${
              isDarkmode ? "text-gray-200" : "text-gray-600"
            } border-t-[1px] border-r-[1px] border-opacity-10 ${
              isDarkmode ? "border-white" : "border-black"
            }`}
          >
            Action
          </div>
        </div>

        {clientData.map((data, index) => (
          <ClientsCard key={index} data={data} isDarkmode={isDarkmode} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
