import React from 'react'

const SermonSection = () => {
  return (
      <section className="w-full bg-[#FCFCFC] py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-8">
            Latest Sermon
          </h2>
          
          <div className="bg-white border border-[#6B7280] rounded-xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Video Player Placeholder */}
              <div className="relative w-full lg:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#FCFCFC] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-[#FCFCFC]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Sermon Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#E53935] rounded-full">
                  <span className="text-[#F5F5F5] text-sm font-bold">Sunday Service</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-semibold text-black">
                  {`"Walking in Faith: Trusting God's Plan"`}
                </h3>
                
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  {`Reverend Henry shares powerful insights on trusting God's timing and walking boldly in faith, even when the path ahead seems uncertain.`}
                </p>
                
                <button className="bg-[#24195D] text-[#FCFCFC] px-8 py-4 rounded-lg font-bold hover:bg-[#1A0F4A] transition-colors duration-300 flex items-center gap-2">
                  Listen Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a3 3 0 00-3-3H6a3 3 0 00-3 3v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SermonSection