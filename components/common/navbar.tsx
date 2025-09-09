"use client"
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="w-full h-[90px] bg-white shadow-[0px_4px_4px_0px_rgba(107,114,128,0.08)] flex items-center justify-between px-8 lg:px-20">
      {/* Logo placeholder - you can add your church logo here */}
      <div className="flex-shrink-0">
        <Image src="/images/nav-logo.png" alt="Newlife" width={160} height={90} />
      </div>

      {/* Navigation Menu */}
      <div className="hidden lg:flex items-center space-x-5">
        <a href="#" className="text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors">
          Home
        </a>
        <a href="#" className="text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors">
          About Us
        </a>
        <a href="#" className="text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors">
          Ministries
        </a>
        <a href="#" className="text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors">
          Sermons
        </a>
        <a href="#" className="text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors">
          Stories
        </a>
        <div className="relative group">
          <button className="flex items-center space-x-1 text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors">
            <span>Events</span>
            <svg 
              className="w-5 h-5 transition-transform group-hover:rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Dropdown menu - you can implement this later */}
        </div>
        <a href="#" className="text-[#1A1A1A] text-base font-normal hover:text-[#FFD700] transition-colors">
          Contact
        </a>
      </div>

      {/* Join Us Button */}
      <div className="flex-shrink-0">
        <button className="bg-[#FFD700] text-[#2E2E2E] px-6 py-3 rounded-xl border border-[#2E2E2E] border-opacity-20 text-sm font-normal hover:bg-[#E6C200] transition-colors">
          Join Us
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button className="text-[#1A1A1A] hover:text-[#FFD700] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar