"use client"
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full bg-[#001F3F] py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          

          {/* Middle Column - Quick Links */}
          <div className="lg:col-span-1 text-center">
            <h3 className="text-[#FFD700] text-sm font-medium mb-3">Quick Links</h3>
            <nav className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                <a href="#" className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors">
                  Home
                </a>
                <a href="#" className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors">
                  About Us
                </a>
                <a href="#" className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors">
                  Ministries
                </a>
                <a href="#" className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors">
                  Sermons
                </a>
                <a href="#" className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors">
                  Stories
                </a>
                <a href="#" className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors">
                  Events
                </a>
                <a href="#" className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors">
                  Contact
                </a>
              </div>
            </nav>
          </div>

          {/* Left Column - Mission & Newsletter */}
          <div className="lg:col-span-1 space-y-8">
            {/* Church Logo Placeholder */}
            <div className="w-40 h-24  rounded-lg flex items-center justify-center">
              <Image src="/images/footer-logo.png" alt="Newlife" width={160} height={90} />
            </div>
            
            {/* Mission Statement */}
            <p className="text-[#F5F5F5] text-sm leading-relaxed">
              Making disciples, glorifying God, and evangelizing the world through the power of Christ. Join our growing community of believers.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <p className="text-[#FCFCFC] text-xs font-medium">
                Subscribe to our newsletter for updates on services, events, and community news.
              </p>
              
              <div className="bg-white/90 border border-[#9CA3AF] rounded-xl p-3">
                <div className="flex items-center justify-between gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 text-[#6B7280] text-sm bg-transparent outline-none placeholder-[#6B7280]"
                  />
                  <button className="bg-[#6B7280] text-[#FCFCFC] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#4B5563] transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info & Social Media */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-[#FFD700] text-sm font-medium mb-3">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-[#C1C5CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-[#F5F5F5] text-base">(233) 456-7890</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-[#C1C5CE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[#F5F5F5] text-base">info@nlcbcgh.com</span>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[#C1C5CE] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[#FCFCFC] text-base">
                    Church Auditorium, opposite Don Bosco Technical Institute
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-[#FFD700] text-sm font-medium mb-3 pt-4">Stay Connected</h3>
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a href="#" className="w-6 h-6 text-[#C1C5CE] hover:text-[#FFD700] transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a href="#" className="w-6 h-6 text-[#C1C5CE] hover:text-[#FFD700] transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                
                <a href="#" className="w-6 h-6 text-[#C1C5CE] hover:text-[#FFD700] transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a href="#" className="w-6 h-6 text-[#C1C5CE] hover:text-[#FFD700] transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-[#6B7280] my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[rgba(255,215,0,0.74)] text-base">
            © 2025 Newlife Community Baptist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer