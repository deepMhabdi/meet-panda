import React from "react";

const Benefits = () => {
  return (
    <section className="w-full py-20 px-6 font-primary bg-linear-to-br from-[#f8faff] via-[#ffffff] to-[#f3f5ff]">

      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="px-5 py-1 bg-white/70 backdrop-blur-md border border-gray-300 rounded-full text-xs text-gray-700 shadow-sm">
          ✨ Benefits
        </span>
      </div>

      <div className="md:-mt-16 flex justify-center ">
        <img
          src="/assets/benefits_image.svg"
          alt="Benefits Flow"
          className="w-[110%] max-w-none md:w-full md:max-w-6xl h-auto select-none"
        />
      </div>

    </section>
  );
};

export default Benefits;
