import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full pt-16 pb-10 font-primary 
      bg-gradient-to-br from-[#eef2ff] via-[#e0e7ff] to-[#f5f3ff]">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Meetix</h2>

          <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
            Meetix is your AI-powered meeting assistant that joins 
            calls, takes notes, generates summaries, and keeps everything 
            organized—effortlessly, automatically, and intelligently.
          </p>

          <button className="mt-4 bg-[#6366F1] text-white text-sm px-5 py-2 rounded-md hover:bg-[#4F46E5] transition">
            Login
          </button>
        </div>

        {/* MIDDLE COLUMN */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Important Links</h3>

          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:text-[#6366F1] cursor-pointer transition">Getting Started</li>
            <li className="hover:text-[#6366F1] cursor-pointer transition">How it Works</li>
            <li className="hover:text-[#6366F1] cursor-pointer transition">Pricing</li>
            <li className="hover:text-[#6366F1] cursor-pointer transition">FAQs</li>
            <li className="hover:text-[#6366F1] cursor-pointer transition">Contact Us</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2 hover:text-[#6366F1] cursor-pointer transition">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-5" />
              Instagram
            </li>

            <li className="flex items-center gap-2 hover:text-[#6366F1] cursor-pointer transition">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" className="w-5" />
              LinkedIn
            </li>

            <li className="flex items-center gap-2 hover:text-[#6366F1] cursor-pointer transition">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" className="w-5" />
              Twitter
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copy */}
      <p className="text-center text-gray-600 text-xs mt-12">
        © {new Date().getFullYear()} Meetix. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
