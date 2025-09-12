import React from 'react'

const WeeklySection = () => {
  return (
      <section className="w-full bg-[#FCFCFC] py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-8">
            Our Weekly Gatherings
          </h2>
          
          <p className="text-xl text-black text-center mb-12 max-w-4xl mx-auto">
            Join us throughout the week for worship, study, fellowship, and prayer
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Worship Service */}
            <div className="bg-[rgba(255,215,0,0.08)] rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#FFD700] rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FCFCFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Worship Service</h3>
                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <span className="font-medium">Sunday</span>
                    <span>•</span>
                    <span>8:30 AM - 10:00 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid-Week & Teaching Service */}
            <div className="bg-[rgba(36,25,93,0.08)] rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#24195D] rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FCFCFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Mid-Week & Teaching Service</h3>
                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <span className="font-medium">Wednesday</span>
                    <span>•</span>
                    <span>7:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Encounter Service */}
            <div className="bg-[rgba(15,0,178,0.08)] rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#0F00B2] rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FCFCFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Encounter Service</h3>
                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <span className="font-medium">Friday</span>
                    <span>•</span>
                    <span>7:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Youth Prayer Time */}
            <div className="bg-[rgba(214,40,40,0.08)] rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#D62828] rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FCFCFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Youth Prayer Time</h3>
                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <span className="font-medium">Tuesday</span>
                    <span>•</span>
                    <span>7:00 PM - 8:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WeeklySection