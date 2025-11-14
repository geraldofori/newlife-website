"use client";

import React from "react";

interface Prayer {
  id: string;
  user: {
    name: string;
    initials: string;
    color: string;
  };
  timestamp: string;
  prayer: {
    title: string;
    content: string;
  };
}

const PrayerCard: React.FC<{ prayer: Prayer }> = ({ prayer }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
      <div
        className="p-3 flex items-center gap-2"
        style={{ backgroundColor: prayer.user.color }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
          style={{
            backgroundColor:
              prayer.user.color === "#FFF200"
                ? "#000"
                : prayer.user.color === "#BBF2B9"
                ? "#4CAF50"
                : prayer.user.color === "#28DEEB"
                ? "#0097A7"
                : prayer.user.color === "#55CF6F"
                ? "#2E7D32"
                : prayer.user.color,
          }}
        >
          {prayer.user.initials}
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-900">
            {prayer.user.name}
          </div>
        </div>
        <div className="text-xs text-gray-600">{prayer.timestamp}</div>
      </div>
      <div className="bg-white p-3 flex-1">
        <div className="text-xs font-semibold text-gray-900 mb-1">
          {prayer.prayer.title}
        </div>
        <div className="text-xs text-gray-700 leading-relaxed">
          {prayer.prayer.content}
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;
