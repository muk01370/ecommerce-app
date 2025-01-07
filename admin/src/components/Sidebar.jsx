import React, { useState } from "react";
import { MdLock } from "react-icons/md";
import {
  navBlocksData,
  navMasterData,
  navSupportsData,
} from "../utils/sidebarData";
import SideBarItem from "./SideBarItem";

const Sidebar = ({ showSideBar, isDarkmode }) => {
  const [showScrollbar, setShowScrollbar] = useState(false);

  const sidebarClasses = `
    ${showSideBar ? "translate-x-0 sm:w-[300px] w-full px-[20px]" : "w-0 -translate-x-[350px]"}
    top-0 h-screen overflow-y-scroll pb-[100px] fixed lg:static lg:pt-[20px] pt-[100px] 
    ${isDarkmode ? "bg-[#112143]" : "bg-white"}
    ${showScrollbar ? "scrollbar" : "hideScrollbar"}
    transition-all duration-200 ease-in-out z-10
  `;

  const sectionTitleClasses = `
    text-sm font-inter font-medium uppercase 
    ${isDarkmode ? "text-gray-400" : "text-gray-600"}
  `;

  const logoutButtonClasses = `
    cursor-pointer bg-[#0858F7] rounded-md w-[120px] h-[45px] flex justify-center items-center gap-[2px]
  `;

  const logoutBackgroundCircleClasses = `
    absolute rounded-full bg-[#0858F7] opacity-50
  `;

  return (
    <div
      className={sidebarClasses}
      onMouseEnter={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}
    >
      <div className="w-full flex flex-col gap-[30px]">
        {/* Master Section */}
        <div>
          <h1 className={sectionTitleClasses}>Master</h1>
          <div className="w-full flex flex-col my-[10px]">
            {navMasterData.map((data, index) => (
              <SideBarItem key={index} data={data} isDarkmode={isDarkmode} />
            ))}
          </div>
        </div>

        {/* Blocks Section */}
        <div>
          <h1 className={sectionTitleClasses}>Blocks</h1>
          <div className="w-full flex flex-col my-[10px]">
            {navBlocksData.map((data, index) => (
              <SideBarItem key={index} data={data} isDarkmode={isDarkmode} />
            ))}
          </div>
        </div>

        {/* Supports Section */}
        <div>
          <h1 className={sectionTitleClasses}>Supports</h1>
          <div className="w-full flex flex-col my-[10px]">
            {navSupportsData.map((data, index) => (
              <SideBarItem key={index} data={data} isDarkmode={isDarkmode} />
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div className="w-full h-[150px] bg-[#ADC7FC] rounded-lg flex justify-center items-center relative overflow-hidden">
          <div className={logoutButtonClasses}>
            <MdLock className="text-white" size={22} />
            <h1 className="uppercase font-inter font-bold text-white text-sm">
              Log out
            </h1>
          </div>
          <div
            className={`${logoutBackgroundCircleClasses} top-[10px] left-[10px] w-[50px] h-[50px]`}
          ></div>
          <div
            className={`${logoutBackgroundCircleClasses} -bottom-[25px] -right-[25px] w-[80px] h-[80px]`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
