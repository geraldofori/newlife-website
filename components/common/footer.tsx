"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#001F3F] py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Middle Column - Quick Links */}
          <div className="lg:col-span-1 text-center">
            <h3 className="text-[#FFD700] text-sm font-medium mb-3">
              Quick Links
            </h3>
            <nav className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                <a
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Ministries
                </a>
                <a
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Sermons
                </a>
                <a
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Stories
                </a>
                <a
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="text-[#F5F5F5] text-base hover:text-[#FFD700] transition-colors"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>

          {/* Left Column - Mission & Newsletter */}
          <div className="lg:col-span-1 space-y-8">
            {/* Church Logo Placeholder */}
            <div className="w-40 h-24  rounded-lg flex items-center justify-center">
              <Image
                src="/images/footer-logo.png"
                alt="Newlife"
                width={160}
                height={90}
              />
            </div>

            {/* Mission Statement */}
            <p className="text-[#F5F5F5] text-sm leading-relaxed">
              Making disciples, glorifying God, and evangelizing the world
              through the power of Christ. Join our growing community of
              believers.
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <p className="text-[#FCFCFC] text-xs font-medium">
                Subscribe to our newsletter for updates on services, events, and
                community news.
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
              <h3 className="text-[#FFD700] text-sm font-medium mb-3">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-[#C1C5CE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-[#F5F5F5] text-base">
                    (233) 456-7890
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-[#C1C5CE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-[#F5F5F5] text-base">
                    info@nlcbcgh.com
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-[#C1C5CE] mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-[#FCFCFC] text-base">
                    Church Auditorium, opposite Don Bosco Technical Institute
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-[#FFD700] text-sm font-medium mb-3 pt-4">
                Stay Connected
              </h3>
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/nwcbaptist?igsh=bzN2OTQ0enk5anRk&utm_source=qr"
                  className="w-6 h-6 text-[#C1C5CE] hover:text-[#FFD700] transition-colors"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@newlifebaptist?_t=ZS-90Zkh0LoUL2&_r=1"
                  className="w-6 h-6 text-[#C1C5CE] hover:text-[#FFD700] transition-colors"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/nwcbaptist?s=21"
                  className="w-6 h-6 text-[#C1C5CE] hover:text-[#FFD700] transition-colors"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>

                {/* Youtube */}
                <a
                  href="https://youtube.com/@nlcbcgh?si=rs-TaZDwgDxDV5Bs"
                  className="w-6 h-6 text-[#C1C5CE] hover:text-[#FFD700] transition-colors"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
  );
};

export default Footer;
