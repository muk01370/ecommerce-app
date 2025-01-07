import React, { useState } from "react";
import {
  MdMenu,
  MdMenuOpen,
  MdShoppingCart,
  MdEmail,
  MdNotifications,
  MdArrowDropDown,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import { NavbarButton } from "./StyleComponents";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const Navbar = ({ showSideBar, setShowSideBar, isDarkmode, setIsDarkmode }) => {
  const [input, setInput] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const handleClick = () => {
    console.log("Button clicked!");
    // Add your custom logic here
  };
  

  return (
    <div className="w-full fixed top-0 z-50">
      <div
        className={`w-full h-[80px] flex justify-between items-center lg:px-[20px] px-[10px] ${isDarkmode ? "bg-[#112143]" : "bg-white"
          }
        transition-all duration-200 ease-in-out `}
      >
        <div className="w-1/4 h-full flex justify-between items-center">
          <div className="flex items-center gap-1">
            <img
              src={require("../assets/logo.webp")}
              alt="logo"
              className="w-[45px] h-[45px]"
            />
            <h1
              className={`font-inter font-extrabold text-2xl uppercase sm:block hidden
            ${isDarkmode ? "text-white" : "text-[#403E57]"
                }  transition-all duration-200 ease-in-out`}
            >
              Hotash
            </h1>
          </div>
        </div>

        <div className="w-1/4 xl:flex hidden h-full pl-[30px] items-center justify-start gap-5">
          <button
            className={`w-[40px] h-[36px] rounded-full flex justify-center items-center group 
        relative opacity-90 hover:opacity-100 transition-all duration-200 ease-in-out 
        ${isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"}`}
            onClick={() => setShowSideBar((prev) => !prev)}
          >
            {showSideBar ? (
              <MdMenuOpen
                size={20}
                className={`${isDarkmode ? "text-white" : "text-[#403E57]"
                  } group-hover:text-[#0858F7] transition-all 
                    duration-200 ease-in-out `}
              />
            ) : (
              <MdMenu
                size={20}
                className={`${isDarkmode ? "text-white" : "text-[#403E57]"
                  } group-hover:text-[#0858F7] transition-all 
                    duration-200 ease-in-out `}
              />
            )}
          </button>
          <div
            className="w-[250px] h-[40px] flex rounded-md overflow-hidden relative opacity-90 hover:opacity-100
        transition duration-200 ease-in-out"
          >
            <div
              className={`w-[40px] h-full flex justify-center items-center ${isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"
                }`}
            >
              <FiSearch
                size={14}
                className={`${isDarkmode ? "text-white" : "text-[#403E57]"}`}
              />
            </div>
            <input
              value={input}
              type="text"
              className={`bg-[#E6EEFE] w-[210px] h-full border-none outline-none text-xs font-inter
              ${isDarkmode ? "text-white" : "text-[#403E57]"} ${isDarkmode ? "bg-[#132955]" : "bg-[#E6EEFE]"
                }`}
              placeholder="Quick Finding"
              onChange={(e) => setInput(e.target.value)}
            />
            {input.length > 0 && (
              <button
                className="absolute top-0 right-0 w-[40px] h-full flex justify-center items-center border-none
              outline-none"
                onClick={() => setInput("")}
              >
                <HiXMark
                  size={16}
                  className={`${isDarkmode ? "text-white" : "text-[#403E57]"
                    } hover:text-[#0858F7] font-bold`}
                />
              </button>
            )}
          </div>
        </div>

        <div
          className="xl:w-2/4 w-3/4 flex justify-end sm:gap-5 gap-3 items-center sm:px-[20px] 
      px-0"
        >
          <div className="xl:hidden flex h-full items-center sm:gap-5 gap-3 ">
            <div className="lg:hidden block">
              <NavbarButton
                onClick={() => setShowSearch(!showSearch)}
                isDarkmode={isDarkmode}
              >
                <FiSearch
                  className={`group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out  ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
                />
              </NavbarButton>
            </div>
            <button
              className={`sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-full flex justify-center 
              items-center group relative opacity-90 hover:opacity-100 transition-all duration-200 ease-in-out 
        text-black group-hover:text-[#0858F7] ${isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"
                }`}
              onClick={() => setShowSideBar((prev) => !prev)}
            >
              {showSideBar ? (
                <MdMenuOpen
                  size={20}
                  className={`${isDarkmode ? "text-white" : "text-[#403E57]"
                    } group-hover:text-[#0858F7] transition-all 
                      duration-200 ease-in-out `}
                />
              ) : (
                <MdMenu
                  size={20}
                  className={`${isDarkmode ? "text-white" : "text-[#403E57]"
                    } group-hover:text-[#0858F7] transition-all 
                      duration-200 ease-in-out `}
                />
              )}
            </button>
            <div
              className="w-[250px] h-[40px]  rounded-md overflow-hidden relative opacity-90 hover:opacity-100
        transition duration-200 ease-in-out lg:flex hidden"
            >
              <div
                className={`w-[40px] h-full flex justify-center items-center  ${isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"
                  }`}
              >
                <FiSearch
                  size={16}
                  className={`group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out  ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
                />
              </div>
              <input
                value={input}
                type="text"
                className={`w-[210px] h-full border-none outline-none text-sm font-inter  ${isDarkmode ? "bg-[#132956]" : "bg-[#E6EEFE]"
                  }`}
                placeholder="Quick Finding"
                onChange={(e) => setInput(e.target.value)}
              />
              {input.length > 0 && (
                <button
                  className="absolute top-0 right-0 w-[40px] h-full flex justify-center items-center border-none
              outline-none"
                  onClick={() => setInput("")}
                >
                  <HiXMark
                    size={16}
                    className="text-black hover:text-[#0858F7] font-bold"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center sm:gap-5 gap-3 ">
            <NavbarButton
              onClick={() => setIsDarkmode(!isDarkmode)}
              isDarkmode={isDarkmode}
            >
              {isDarkmode ? (
                <BsSunFill
                  className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
                />
              ) : (
                <BsMoonFill
                  className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
                />
              )}
            </NavbarButton>
            <NavbarButton isDarkmode={isDarkmode}>
              <TbWorld
                className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
              />
            </NavbarButton>
            <NavbarButton isDarkmode={isDarkmode} item={"02"} hidden>
              <MdShoppingCart
                className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
              />
            </NavbarButton>
            <NavbarButton isDarkmode={isDarkmode} item={"03"} hidden>
              <MdEmail
                className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
              />
            </NavbarButton>
            <NavbarButton isDarkmode={isDarkmode} item={"04"} hidden>
              <MdNotifications
                className={` group-hover:text-[#0858F7] transition-all duration-200 
                ease-in-out ${isDarkmode ? "text-white" : "text-[#403E57]"}`}
              />
            </NavbarButton>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] rounded-full border-[1px] border-[#0858F7] 
          p-[2px]"
            >
              <img
                src={require("../assets/profile.webp")}
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex-col gap-[2px] justify-center items-start sm:flex hidden">
              <a
                href="#"
                role="button"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleClick(); // Call the custom click handler
                }}
                className={`font-inter font-semibold text-sm ${isDarkmode ? "text-white" : "text-black"
                  }`}
              >
                Mukesh Chauhan
                <MdArrowDropDown size={20} className="inline" />
              </a>
              <h1
                className={`font-inter text-xs font-medium ${isDarkmode ? "text-gray-200" : "text-gray-600"
                  }`}
              >
                @MukeshChauhan
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-[80px] h-[60px] w-full flex bg-[#E6EEFE] lg:hidden 
      ${showSearch ? "block" : "hidden"}`}
      >
        <input
          type="text"
          className="bg-[#E6EEFE] w-10/12 h-full border-none outline-none text-sm font-inter px-[20px]"
          placeholder="Ouick Finding..."
        />
        <button className="w-2/12 hover:text-[#0858F7] h-full flex justify-center items-center">
          <FiSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
