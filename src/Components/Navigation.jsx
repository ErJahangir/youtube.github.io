import React from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";

const Navigation = () => {
  return (
    <>
      <nav className="flex   w-full  bg-white items-center shadow-xl flex-row justify-between px-10">
        <div className="flex items-center text-2xl">
          <FiAlignJustify />
          <img src="/youtube.png" className="w-[100px] h-[80px]" />
        </div>
        <div className="flex flex-row items-center  gap-5">
          <div className="flex items-center border bg-slate-500 border-black h-12 m-0 p-0 rounded-full ">
            <input
              placeholder="search"
              className="border-none w-52 pl-4 h-11 rounded-full rounded-br-none rounded-tr-none"
            />
            <FaSearch className="text-6xl px-4" />
          </div>
          <FaMicrophone className="bg-black text-white text-[50px] p-2 rounded-full" />
        </div>
        <div className="flex text-4xl gap-2">
          <RiVideoAddLine />
          <IoMdNotificationsOutline />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
