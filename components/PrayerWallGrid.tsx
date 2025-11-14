"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { samplePrayers } from "@/constants";
import PrayerCard from "./common/PrayerCard";
import { useRouter } from "next/navigation";
import PageHeader from "./common/PageHeader";

interface PrayerGridProps {
  hasHeader?: boolean;
}
const PrayerWallGrid: React.FC<PrayerGridProps> = ({ hasHeader = true }) => {
  const [currentPage, setCurrentPage] = useState(3);

  const totalPages = 10;

  const currentPrayers = samplePrayers;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      {hasHeader && (
        <PageHeader hasBackButton imageUrl="/images/nav-logo.png" />
      )}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-yellow-400">Prayer</span>{" "}
            <span className="text-gray-400">Wall</span>
          </h1>
          <p className="text-gray-700 font-medium mb-0">
            Together in prayer, we stand stronger.
          </p>
          <p className="text-gray-600">
            {`Add your request, encourage others, and let's lift our voices in one
            accord`}
          </p>
        </div>

        {/* Prayer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {currentPrayers.map((prayer) => (
            <PrayerCard key={prayer.id} prayer={prayer} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-10 h-10 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 rounded-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setCurrentPage(1)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${
              currentPage === 1
                ? "bg-yellow-400"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            1
          </button>

          <button
            onClick={() => setCurrentPage(2)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${
              currentPage === 2
                ? "bg-yellow-400"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            2
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-400">
            3
          </button>

          <div className="w-10 h-10 flex items-center justify-center">...</div>

          <button
            onClick={() => setCurrentPage(10)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${
              currentPage === 10
                ? "bg-yellow-400"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            10
          </button>

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            className="w-10 h-10 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 rounded-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrayerWallGrid;
