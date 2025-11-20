import React, { useState } from "react";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "MeetPanda completely changed how I handle meetings. Summaries are accurate, and I save at least 4–5 hours every week.",
  },
  {
    name: "Sana Kapoor",
    role: "HR Specialist",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The automated transcripts and task extraction are game-changers. My onboarding meetings are now so much smoother.",
  },
  {
    name: "Ritik Sharma",
    role: "Sales Lead",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Client calls are super easy to track. No more scribbling notes — MeetPanda handles everything.",
  },
  {
    name: "Emily Davis",
    role: "Team Coordinator",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
    text: "The accuracy of summaries surprised me. It feels like having a real assistant in every meeting.",
  },
  {
    name: "Kabir Singh",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/71.jpg",
    text: "Perfect for daily standups! I love how action items are extracted automatically.",
  },
  {
    name: "Priya Nair",
    role: "Marketing Strategist",
    img: "https://randomuser.me/api/portraits/women/57.jpg",
    text: "My productivity doubled. I never worry about missing details anymore.",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const ITEMS_PER_SLIDE = 2;

  const nextSlide = () => {
    setIndex((prev) =>
      prev + ITEMS_PER_SLIDE >= testimonials.length
        ? 0
        : prev + ITEMS_PER_SLIDE
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - ITEMS_PER_SLIDE < 0
        ? testimonials.length - ITEMS_PER_SLIDE
        : prev - ITEMS_PER_SLIDE
    );
  };

  const visibleTestimonials = testimonials.slice(
    index,
    index + ITEMS_PER_SLIDE
  );

  return (
    <section className="relative w-full py-20 px-6 text-center font-primary overflow-hidden">
      
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(60% 60% at 50% 100%, rgba(180, 190, 255, 0.35), transparent 70%)
          `,
        }}
      />

      {/* Badge */}
      <div className="px-4 py-1 mb-3 bg-gray-100 rounded-full border border-gray-300 text-xs font-medium inline-block">
        🌟 Testimonials
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
        Backed by Our <span className="text-[#5748FF]">Growing Community</span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed mb-10">
        Thousands of professionals rely on MeetPanda to make meetings 
        effortless, organized, and productive.
      </p>

      {/* Testimonials Row */}
      <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto">
        {visibleTestimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white w-full md:w-[45%] p-4 rounded-xl shadow border border-gray-200 text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={t.img} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>

            <p className="text-gray-700 text-xs leading-relaxed">
              “{t.text}”
            </p>
          </div>
        ))}
      </div>

      {/* Arrow Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border bg-white shadow hover:bg-gray-100 transition"
        >
          {/* Left Arrow SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full border bg-white shadow hover:bg-gray-100 transition"
        >
          {/* Right Arrow SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
