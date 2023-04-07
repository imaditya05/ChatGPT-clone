import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:w-72 bg-dark-gray flex-col space-y-6 px-2 py-2">
      <button className="relative pl-3 pr-6 py-3 text-white bg-transparent border-[0.025rem] border-zinc-600 rounded-md flex items-center text-sm hover:bg-zinc-800">
        {" "}
        <i className="fa-solid fa-plus mr-4 text-zinc-400 text-md "></i>New chat
      </button>
    </div>
  );
};

export default Sidebar;
