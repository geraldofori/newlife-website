import React from 'react'

const WelcomeSection = () => {
  return (
      <section className="w-full bg-[#FCFCFC] py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-8">
            Welcome Message
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Pastor Photo Placeholder */}
            <div className="w-full lg:w-1/3">
              <div className="aspect-square bg-gray-200 rounded-xl"></div>
            </div>
            
            {/* Welcome Text */}
            <div className="w-full lg:w-2/3 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-black">Welcome Message</h3>
              </div>
              
              <p className="text-lg text-[#6B7280] leading-relaxed">
                {`Welcome to New Life Community Baptist Church, a vibrant family of believers committed to growing in Christ and serving our community. As part of the Ghana Baptist Convention, we stand on a rich heritage of faith while embracing God's calling for this generation.`}
              </p>
              
              <p className="text-lg text-[#6B7280] leading-relaxed">
                {`Our church is more than a building or weekly service – we are a community united by God's love, dedicated to making disciples who will transform Ghana and beyond. Whether you're exploring faith for the first time or seeking a church home, you'll find warmth, authenticity, and purpose here.`}
              </p>
              
              <p className="text-lg text-[#0054C2] font-medium">
                {`~ Rev. Michael A. Opoku`}
              </p>
            </div>
          </div>
          
          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {/* Mission Card */}
            <div className="bg-white border-l-4 border-[#D62828] rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[rgba(214,40,40,0.12)] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-black">Our Mission</h3>
              </div>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                {`To spread God's love and grace through worship, fellowship, and community service.`}
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="bg-white border-l-4 border-[#0054C2] rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[rgba(0,84,194,0.12)] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0054C2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-black">Our Vision</h3>
              </div>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                {`A thriving community where every person experiences God's transformative love.`}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WelcomeSection