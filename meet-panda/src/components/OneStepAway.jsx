import React from "react";
import { useNavigate } from "react-router-dom";

const OneStepAway = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-16 bg-white px-6 flex justify-center font-primary">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="-mt-10 px-3 py-1 mb-3 w-fit bg-gray-100 rounded-full border border-gray-300 text-xs font-medium text-gray-700">
            🚀 Just 1 Step Away
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
            You are <span className="text-[#6366F1]">One step</span> away from <br />
            Smarter Meetings
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 max-w-md">
            Start transforming your meetings with AI-powered summaries, 
            automated documentation, and actionable insights — instantly.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 text-gray-700 text-sm md:text-base mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#6366F1] text-lg">✔</span>
              AI notes & summaries available instantly.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6366F1] text-lg">✔</span>
              Save hours every week with smart automation.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#6366F1] text-lg">✔</span>
              Works seamlessly with all meeting platforms.
            </li>
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 bg-[#6366F1] text-white rounded-lg font-semibold hover:bg-[#4638cc] transition text-sm md:text-base"
          >
            Log In
          </button>
        </div>

        {/* RIGHT SIDE MOCKUP UI CARD */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-4 w-full max-w-sm relative">

            {/* Title */}
            <h3 className="text-sm font-semibold mb-2 text-[#6366F1] flex items-center gap-2">
              🧩 Meeting Preview
            </h3>

            {/* Card 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex justify-between items-center mb-3">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Team Standup
                </p>
                <p className="text-xs text-gray-500">
                  Daily quick sync with AI notes.
                </p>
              </div>
              <button className="px-3 py-1 bg-[#6366F1] text-white text-xs rounded-md">
                Preview
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Client Review
                </p>
                <p className="text-xs text-gray-500">
                  AI auto-captures follow-ups & tasks.
                </p>
              </div>
              <button className="px-3 py-1 bg-[#6366F1] text-white text-xs rounded-md">
                Preview
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OneStepAway;
