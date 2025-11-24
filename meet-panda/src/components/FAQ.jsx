import React, { useState } from "react";

const faqs = [
  {
    q: "How does Meetix work?",
    a: "Meetix joins your meetings automatically, listens in real-time, generates structured AI notes, summaries, and action items – all without interrupting your flow.",
  },
  {
    q: "Does Meetix record my meetings?",
    a: "No. Meetix does not record audio. It only listens during the call to generate summaries securely, following industry-grade privacy standards.",
  },
  {
    q: "Can I use Meetix with Google Meet or Zoom?",
    a: "Yes! Meetix supports Google Meet, Zoom, and Microsoft Teams, joining automatically based on your calendar schedule.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All summaries and transcripts are encrypted, never shared, and stored securely. You stay fully in control of your meeting data.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full py-20 px-6 flex flex-col items-center font-primary relative">

      {/* BACKGROUND LIGHT GRADIENT (same as your UI) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(45% 60% at 90% 0%, rgba(160,170,255,0.35), transparent 70%),
            radial-gradient(45% 60% at 0% 100%, rgba(190,200,255,0.35), transparent 70%)
          `,
        }}
      />

      {/* Section Badge */}
      <div className="-mt-10 px-4 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs font-semibold mb-3">
        ❓ FAQs
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Everything you want to know about{" "}
        <span className="text-[#6366F1]">Meetix</span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 text-center max-w-xl mt-3 text-sm md:text-base">
        Find answers to the most common questions about features, privacy,
        compatibility, and how Meetix works behind the scenes.
      </p>

      {/* FAQ List */}
      <div className="mt-10 w-full max-w-3xl space-y-4">
        {faqs.map((item, i) => {
          const isOpen = active === i;

          return (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              {/* Button */}
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="font-medium text-gray-900 text-sm md:text-base">
                  {item.q}
                </span>

                {/* Plus / Minus Icon */}
                <span className="w-8 h-8 flex items-center justify-center rounded-full border bg-gray-100">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* horizontal line */}
                    <path
                      d="M4 10H16"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* vertical line hides on open */}
                    <path
                      d="M10 4V16"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className={`transition-all duration-200 ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
