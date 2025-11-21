import React from "react";

const AITeammateSection = () => {
  return (
    <section className="relative w-full py-20 px-6 flex flex-col items-center text-center font-primary overflow-hidden">

      {/* BACKGROUND BLUE GRADIENT */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
        radial-gradient(60% 60% at 90% 0%, rgba(150, 160, 255, 0.35), transparent 70%),
        radial-gradient(60% 60% at 0% 100%, rgba(150, 160, 255, 0.35), transparent 70%)
      `,
        }}
      />

      {/* TOP BADGE */}
      <div className="px-4 py-1 mb-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full text-xs font-medium text-gray-700">
        🤝 AI Collaboration
      </div>

      {/* HEADING */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
        Your <span className="text-[#5748FF]">AI Teammate</span>, Always in the room
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-600 text-xs md:text-sm max-w-xl leading-relaxed mb-10">
        Meetix ensures you never miss important insights — automatically taking notes,
        organizing content, and delivering actionable summaries from every call.
      </p>

      {/* ICON BOXES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-3xl">

        {/* Box 1 */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/942/942751.png"
            className="w-10 mb-2"
            alt="ai notes"
          />
          <p className="text-xs md:text-sm font-semibold">AI Notes</p>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828961.png"
            className="w-10 mb-2"
            alt="insights"
          />
          <p className="text-xs md:text-sm font-semibold">Insights</p>
        </div>

        {/* Box 3 */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png"
            className="w-10 mb-2"
            alt="tasks"
          />
          <p className="text-xs md:text-sm font-semibold">Task Items</p>
        </div>

        {/* Box 4 */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
            className="w-10 mb-2"
            alt="reminders"
          />
          <p className="text-xs md:text-sm font-semibold">Reminders</p>
        </div>
      </div>

      {/* MIDDLE CARD */}
      <div className="w-full max-w-xs bg-white rounded-2xl shadow-md border border-gray-200 py-10 px-4 relative">
        <div className="flex flex-col items-center">

          {/* Panda Icon */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/8162/8162898.png"
            className="w-14 mb-3"
            alt="panda assistant"
          />

          {/* AI Listening Text */}
          <p className="text-xs md:text-sm text-gray-800 font-medium">
            AI is listening to your meeting...
          </p>

          {/* Status */}
          <p className="mt-2 text-[10px] bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
            LIVE PROCESSING
          </p>
        </div>
      </div>
    </section>
  );
};

export default AITeammateSection;
