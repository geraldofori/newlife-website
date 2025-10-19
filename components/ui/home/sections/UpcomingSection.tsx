"use client"
import { events } from '@/constants'
import React, { useState, useEffect } from 'react'

const UpcomingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [events.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentEvent = events[currentSlide]

  return (
    <section className="w-full py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-8">
          Upcoming Events
        </h2>
        
        <p className="text-xl text-black text-center mb-12 max-w-4xl mx-auto">
          Join us for our exciting upcoming church events!
        </p>
        
        {/* Event Carousel */}
        <div className="bg-[#FAF1DE] rounded-xl p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Event Image Placeholder */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-video bg-gradient-to-br from-[#24195D] to-[#E53935] rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">{currentEvent.preview}</div>
                  <div className="text-lg opacity-90">{currentEvent.badge}</div>
                </div>
              </div>
            </div>
            
            {/* Event Details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#E53935] rounded-full">
                <span className="text-[#F5F5F5] text-sm font-bold">{currentEvent.badge}</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-semibold text-black transition-all duration-300">
                {currentEvent.title}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#6B7280]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{currentEvent.date}</span>
                </div>
                
                <div className="flex items-center gap-3 text-[#6B7280]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{currentEvent.time}</span>
                </div>
                
                <div className="flex items-center gap-3 text-[#6B7280]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{currentEvent.location}</span>
                </div>
              </div>
              
              <p className="text-lg text-black leading-relaxed transition-all duration-300">
                {currentEvent.description}
              </p>
              
              <button className="bg-[#24195D] text-[#F5F5F5] px-8 py-4 rounded-lg font-bold hover:bg-[#1A0F4A] transition-colors duration-300 flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#FFCE00] scale-125' 
                    : 'bg-[#C1C5CE] hover:bg-[#A0A6B2]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingSection