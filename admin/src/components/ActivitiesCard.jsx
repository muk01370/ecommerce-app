import React from "react";

const ActivitiesCard = ({
  isDarkmode,
  data: { title, des, profile, time },
}) => {
  return (
    <div
      className={`w-full pl-[20px] pb-[25px] flex gap-[12px] flex-col justify-between border-l-[2px] 
 border-dashed hover:border-[#1F67FE] group relative ${
   isDarkmode ? "border-gray-600" : "border-gray-300"
 }`}
    >
      <div className="flex justify-between sm:items-center sm:flex-row flex-col gap-[5px] items-start">
        <h1
          className={`text-sm ${
            isDarkmode ? "text-white" : "text-black"
          } font-inter font-base font-bold`}
        >
          {title}
        </h1>
        <h1
          className={`${
            isDarkmode ? "text-gray-300" : "text-gray-700"
          } font-inter text-xs font-normal`}
        >
          {time}
        </h1>
      </div>
      <p
        className={`text-xs ${
          isDarkmode ? "text-gray-400" : "text-gray-600"
        } font-inter font-base font-medium`}
      >
        {des}
      </p>
      <div className="flex gap-[10px] items-center mt-[5px]">
        <img
          src={profile.image}
          alt="client"
          className="w-[25px] h-[25px] rounded-full"
        />
        <h1
          className={`sm:text-sm text-xs ${
            isDarkmode ? "text-gray-400" : "text-gray-600"
          } font-inter font-base font-normal`}
        >
          {profile.name}
        </h1>
      </div>

      <div
        className={`w-[8px] h-[8px] rounded-full ${
          isDarkmode ? "bg-gray-300" : "bg-gray-700"
        } absolute top-0 -left-[6px] group-hover:bg-[#1F67FE]`}
      ></div>
    </div>
  );
};

export default ActivitiesCard;
