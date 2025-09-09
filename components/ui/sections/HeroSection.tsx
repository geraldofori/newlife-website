import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Main Hero Section */}
      <section className="relative w-full h-[790px] bg-gradient-to-br from-[#001F3F] to-[#001F3F] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] to-[#001F3F] opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 lg:px-8 max-w-6xl mx-auto">
          {/* Theme Tag */}
          <div className="mb-8">
            <div className="inline-flex items-center px-5 py-1 bg-[#FFFCEB] rounded-full">
              <span className="text-[#2E2E2E] text-lg font-bold">
                {`2025 Theme: "The Holy Spirit, Power Behind God's Kingdom"`}
              </span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#FCFCFC] mb-6 leading-tight">
            Welcome to<br />
            Newlife Community Baptist Church
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-[#FCFCFC] mb-8 leading-relaxed max-w-4xl mx-auto">
            {`A place where faith grows, community thrives, and lives are transformed through God's love and grace.`}
          </p>
          
          {/* About Us Button */}
          <button className="bg-[#FFD700] text-[#2E2E2E] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#E6C200] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 mx-auto">
            About Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}

export default HeroSection