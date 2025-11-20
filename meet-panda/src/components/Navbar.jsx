import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md rounded-full px-6 py-3 flex justify-between items-center w-[90%] md:w-[70%] lg:w-[60%] fixed left-1/2 transform -translate-x-1/2 top-5 z-50 font-primary">

      {/* Left Logo Section */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-400 w-6 h-6 rounded-full flex items-center justify-center font-bold text-gray-900">
          ⚙️
        </div>
        <p className="font-semibold text-gray-800 text-lg">Meet Panda</p>
      </div>

      {/* Center Navigation Links */}
      <ul className="hidden md:flex gap-6 font-medium text-gray-700">
        <li className="hover:text-[#4339d3] cursor-pointer transition">
          Home
        </li>
        <li className="hover:text-[#4339d3] cursor-pointer transition">
          App
        </li>

        {/* Static Dropdown (UI only) */}
        <li className="relative group cursor-pointer">
          <div className="flex items-center gap-1 hover:text-[#4339d3] transition">
            Others <span className="text-xs">▼</span>
          </div>

          {/* Dropdown on hover */}
          <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-44 text-sm text-gray-700 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer transition">AI Generator</li>
            <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer transition">Features</li>
            <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer transition">About Us</li>
            <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer transition">Pricing</li>
          </ul>
        </li>
      </ul>

      {/* Right side Button (only UI) */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#5748FF] hover:bg-[#4339d3] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
