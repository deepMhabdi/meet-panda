import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleProtectedNav = (path) => {
    const token = localStorage.getItem("token");
    token ? navigate(path) : navigate("/login");
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-start items-center text-center px-6 overflow-hidden font-primary">

      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(120% 120% at 50% 0%, white 25%, #EEF1FF 70%)
          `,
        }}
      />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mt-32">

        {/* TOP BADGE */}
        <div className="px-4 py-1 mb-6 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">
            ✨ New AI Feature Just Launched
          </span>
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-4xl sm:text-5xl md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">

          AI That Manages &nbsp;
          <span className="inline-block align-middle -rotate-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
              className="inline w-8 h-8 sm:w-10 sm:h-10"
            />
          </span>
          Summarizes &nbsp;
          <span className="inline-block align-middle rotate-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
              className="inline w-8 h-8 sm:w-10 sm:h-10"
            />
          </span>

          <br />

          Every Meeting for You.
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-600 text-base md:text-md mt-6 max-w-2xl leading-relaxed">
          MeetPanda joins your meetings, listens, takes notes, and generates
          flawless AI summaries — saving hours every week so you can focus
          on what truly matters.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button className="px-6 py-3 rounded-xl text-white font-semibold bg-[#5748FF] hover:bg-[#4339d3] transition shadow-md">
            Try MeetPanda Free
          </button>

          <button
            onClick={() => handleProtectedNav("/dashboard")}
            className="px-6 py-3 rounded-xl font-semibold border border-gray-300 bg-white hover:bg-gray-100 transition shadow-sm"
          >
            Add to Meeting →
          </button>
        </div>

        {/* SOCIAL PROOF */}
        <div className="flex items-center gap-3 mt-8">
          <div className="flex -space-x-3">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-10 h-10 rounded-full border-[3px] border-white" />
            <img src="https://randomuser.me/api/portraits/men/52.jpg" className="w-10 h-10 rounded-full border-[3px] border-white" />
            <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-10 h-10 rounded-full border-[3px] border-white" />
          </div>

          <span className="text-gray-700 text-sm md:text-base">
            Loved by thousands of daily professionals ❤️
          </span>
        </div>
      </div>

      {/* DEMO IMAGE */}
      <div className="w-full flex justify-center mt-10 relative z-20">
        <img
          src="../assets/dashboard.svg"    // <-- replace this with your SVG path
          alt="Worksheet Preview"
          className="w-[95%] md:w-[80%] max-w-5xl"
        />
      </div>

      {/* BOTTOM WHITE ARC */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-white rounded-t-[50%]"></div>
    </section>
  );
};

export default Landing;
