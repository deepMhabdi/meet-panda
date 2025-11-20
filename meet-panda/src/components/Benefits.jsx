import React from "react";

const Benefits = () => {
  return (
    <section className="w-full py-10 bg-white px-3 flex flex-col items-center font-primary">

      {/* TOP BADGE */}
      <div className="px-3 py-1 mb-2 bg-gray-100 rounded-full border border-gray-300 text-[10px] font-medium text-gray-700">
        🎯 Features
      </div>

      {/* MAIN HEADING */}
      <h2 className="text-xl md:text-2xl font-bold text-center mb-1">
        One <span className="text-[#5748FF]">Product</span> Many Benefits
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-600 text-center max-w-lg mb-8 text-[11px] md:text-xs leading-relaxed">
        Unlock the smarter way to manage every meeting — from automation to intelligent insights.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl w-full">

        {/* AUTO JOIN MEETINGS */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm min-h-[180px]">
          <h3 className="text-sm font-semibold mb-1">Auto-Join Meetings</h3>
          <p className="text-gray-600 text-[11px] leading-relaxed">
            MeetPanda joins your scheduled meetings and captures clean summaries.
          </p>

          <div className="mt-3 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9751/9751426.png"
              className="w-12 opacity-90"
              alt="auto join"
            />
          </div>
        </div>

        {/* AI INSIGHTS */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm min-h-[180px]">
          <h3 className="text-sm font-semibold mb-1">AI Insights</h3>
          <p className="text-gray-600 text-[11px] leading-relaxed">
            Intelligent summaries, highlights, and patterns instantly.
          </p>

          <div className="mt-3 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/141/141070.png"
              className="w-14 opacity-90"
              alt="insights"
            />
          </div>
        </div>

        {/* SEARCH MEETING TRANSCRIPTS */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm min-h-[180px]">
          <h3 className="text-sm font-semibold mb-1">Search Meeting Transcripts</h3>
          <p className="text-gray-600 text-[11px] leading-relaxed">
            Quickly find keywords, summaries or decisions.
          </p>

          <div className="mt-3 bg-gray-100 rounded-md p-2 flex justify-between items-center">
            <span className="text-gray-500 text-[10px]">Search meetings...</span>
            <button className="px-3 py-0.5 bg-[#5748FF] text-white rounded text-[10px]">
              Go
            </button>
          </div>
        </div>

        {/* DATA-DRIVEN DECISIONS */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm min-h-[180px] md:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold mb-1">Data-Driven Decisions</h3>
          <p className="text-gray-600 text-[11px] leading-relaxed">
            View analytics, trends, and metrics for smarter decisions.
          </p>

          <div className="mt-3 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4149/4149678.png"
              className="w-16"
              alt="analytics"
            />
          </div>
        </div>

        {/* MEETPANDA LIVE ASSISTANT */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm md:col-span-2 min-h-[180px]">
          <h3 className="text-sm font-semibold mb-1">MeetPanda Live Assistant</h3>
          <p className="text-gray-600 text-[11px] leading-relaxed">
            Your AI teammate organizes, transcribes and assists in real-time.
          </p>

          <div className="mt-3 bg-gray-50 rounded-md p-2 border">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8142/8142879.png"
              className="w-full max-w-xs mx-auto"
              alt="assistant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
