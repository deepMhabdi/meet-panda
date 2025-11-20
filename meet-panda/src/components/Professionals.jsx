import React from "react";

const Professionals = () => {
  return (
    <section className="w-full py-20 px-6 flex flex-col items-center font-primary">

      {/* TOP BADGE */}
      <div className="px-4 py-1 mb-4 bg-gray-100 rounded-full border border-gray-300 text-xs font-medium text-gray-700">
        💼 For Everyone
      </div>

      {/* MAIN HEADING */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3">
        <span className="text-[#5748FF]">MeetPanda</span>: Built for Every Professional
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-600 text-xs md:text-sm max-w-2xl text-center mb-14 leading-relaxed">
        From sales teams to educators, MeetPanda adapts to your workflow — helping you save hours,
        stay organized, and never miss important meeting details again.
      </p>

      {/* CARDS CONTAINER */}
      <div className="w-full max-w-6xl space-y-8">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* LEFT SECTION */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              {/* TITLE */}
              <h3 className="text-lg font-bold mb-2">
                How Sales Teams Can Close Deals Faster With MeetPanda
              </h3>

              {/* TAGS */}
              <div className="flex gap-2 mb-3">
                <span className="text-[10px] bg-gray-100 rounded-full px-3 py-1 border text-gray-700">
                  Sales
                </span>
                <span className="text-[10px] bg-gray-100 rounded-full px-3 py-1 border text-gray-700">
                  Meetings
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Sales professionals rely heavily on fast follow-ups and clear notes. MeetPanda 
                automatically generates detailed meeting summaries, follow-up tasks, and organized 
                insights so teams can move deals forward faster. No more manual note-taking — just 
                instant clarity and efficiency.
              </p>
            </div>

            {/* USER PROFILE */}
            <div className="flex items-center gap-3 mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                className="w-8 h-8 rounded-full"
                alt="profile"
              />
              <span className="text-xs md:text-sm font-medium text-gray-700">
                Emily Carter — Sales Lead
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
              alt="sales team"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* LEFT SECTION */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              {/* TITLE */}
              <h3 className="text-lg font-bold mb-2">
                Enhancing Recruitment and Onboarding With MeetPanda
              </h3>

              {/* TAGS */}
              <div className="flex gap-2 mb-3">
                <span className="text-[10px] bg-gray-100 rounded-full px-3 py-1 border text-gray-700">
                  HR
                </span>
                <span className="text-[10px] bg-gray-100 rounded-full px-3 py-1 border text-gray-700">
                  Teamwork
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                HR professionals handle multiple candidate calls and training sessions. MeetPanda 
                simplifies the process with accurate transcripts, onboarding notes, and auto-organized 
                meeting summaries. Perfect for ensuring consistency and keeping teams aligned.
              </p>
            </div>

            {/* USER PROFILE */}
            <div className="flex items-center gap-3 mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-8 h-8 rounded-full"
                alt="profile"
              />
              <span className="text-xs md:text-sm font-medium text-gray-700">
                David Robinson — HR Specialist
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg"
              alt="hr team"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
