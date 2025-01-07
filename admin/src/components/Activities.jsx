import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { activitiesData } from "../utils/data";
import ActivitiesCard from "./ActivitiesCard";

const Activities = ({ isDarkmode }) => {
  return (
    <div
      className={`${
        isDarkmode ? "bg-[#112143]" : "bg-white"
      } sm:p-[20px] py-[20px] px-[5px] overflow-hidden shadow-sm hover:shadow-lg rounded-md h-auto`}
    >
      <div className="w-full flex justify-between items-center">
        <h1
          className={`font-inter sm:text-lg text-base ${
            isDarkmode ? "text-white" : "text-black"
          } font-bold`}
        >
          Recent Activities
        </h1>
        <BsThreeDots
          className={`${isDarkmode ? "text-white" : "text-black"} opacity-60 
        sm:text-2xl text-lg cursor-pointer`}
        />
      </div>

      <div className="mt-[20px] w-full h-[420px] overflow-y-scroll px-[4px] scrollbar">
        {activitiesData.map((data, index) => (
          <ActivitiesCard key={index} data={data} isDarkmode={isDarkmode} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
