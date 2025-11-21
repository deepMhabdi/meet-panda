import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white pt-16 pb-10 px-6 font-primary overflow-hidden">

      {/* PAW ILLUSTRATION (right side faded) */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
        className="absolute right-0 bottom-0 w-40 opacity-25 pointer-events-none select-none"
        alt="Paw watermark"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT COLUMN — Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            {/* <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              className="w-10"
            /> */}
            <h2 className="text-xl font-semibold">Meetix</h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Meetix is your AI-powered meeting assistant that joins 
            calls, takes notes, generates summaries, and keeps everything 
            organized—effortlessly, automatically, and intelligently.
          </p>

          <button className="mt-4 bg-[#6366F1] text-white text-sm px-5 py-2 rounded-md hover:bg-[#4839dd] transition">
            Login
          </button>
        </div>

        {/* MIDDLE COLUMN — Quick Links */}
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

        {/* RIGHT COLUMN — Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2 hover:text-[#6366F1] cursor-pointer transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                className="w-5"
              />
              Instagram
            </li>

            <li className="flex items-center gap-2 hover:text-[#6366F1] cursor-pointer transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                className="w-5"
              />
              LinkedIn
            </li>

            <li className="flex items-center gap-2 hover:text-[#6366F1] cursor-pointer transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
                className="w-5"
              />
              Twitter
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copy */}
      <p className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} Meetix. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
