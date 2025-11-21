import React, { useEffect, useState } from "react";

const Benefits = () => {
  const [percent, setPercent] = useState(0);

  // Animate percentage from 0 → 95
  useEffect(() => {
    let start = 0;
    const end = 95;
    const duration = 1500;
    const increment = end / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setPercent(Math.floor(start));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 px-6 font-primary bg-linear-to-br from-[#f8faff] via-[#ffffff] to-[#f3f5ff]">

      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="px-5 py-1 bg-white/70 backdrop-blur-md border border-gray-300 rounded-full text-xs text-gray-700 shadow-sm">
          ✨ Benefits
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight">
        One <span className="text-[#5748FF]">Product</span> Many{" "}
        <span className="text-black">Benefits</span>
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        Reclaim 3+ hours every week and keep your team aligned with instant AI-powered summaries  
        — find any moment across meetings in seconds.
      </p>

      {/* GRID */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">

        {/* CARD TEMPLATE */}
        {/* Each card has smoother shadow + hover lift effect */}
        {/* AUTO JOIN */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-1">
          <h3 className="font-semibold text-xl mb-2">Auto-Join & Record</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Hands-free calendar sync: Meetix joins your calls without downloads or bots.
          </p>

          <div className="flex justify-center mt-6">
            <img
              src="/assets/benefits.svg"
              alt="orbit"
              className="w-40 drop-shadow-md"
            />
          </div>
        </div>

        {/* TRANSCRIPTION */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-1">
          <h3 className="font-semibold text-xl mb-2">Transcription</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Get accurate, searchable transcripts of all your meetings.
          </p>

          <div className="mt-6">
            {/* Progress bar */}
            <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-[#5748FF] transition-all duration-300"
                style={{ width: `${percent}%` }}
              ></div>
            </div>

            <p className="text-[#5748FF] text-4xl font-bold mt-3 text-center tracking-tight">
              {percent}%
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200  transition-all duration-300 hover:-translate-y-1">
          <h3 className="font-semibold text-xl mb-2">Search Across Meetings</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Quickly find key moments, topics, or decisions from any past meeting.
          </p>

          <div className="mt-6 bg-gray-100 rounded-xl p-3 flex items-center ring-1 ring-gray-200 shadow-inner">
            <span className="text-gray-500 text-sm">🔍 Search in meetings</span>
            <span className="ml-auto text-gray-400 text-xs">⌘ K</span>
          </div>
        </div>

        {/* AI SUMMARIES — FULL WIDTH */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200  transition-all duration-300 hover:-translate-y-1 lg:col-span-2 flex flex-col md:flex-row md:justify-between md:items-center">

          {/* Text Left */}
          <div className="max-w-lg">
            <h3 className="font-semibold text-xl mb-2">AI Summaries & Action Items</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Meetix transforms every meeting into transcripts, highlights, and insights you can act on instantly.
            </p>
          </div>

          {/* Right image */}
          <div className="mt-6 md:mt-0 flex justify-center">
            <img
              src="/assets/meetix.svg"
              className="w-[320px] rounded-xl border shadow-md hover:shadow-lg transition"
              alt="AI Summary Preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
