"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onViewPrayerWall?: () => void;
  onSendRequest?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onViewPrayerWall,
  onSendRequest,
}) => {
  return (
    <motion.div
      className="text-center space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main heading */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-white text-6xl md:text-7xl font-extrabold leading-tight">
          Welcome to the
          <br />
          NLCBC Prayer Wall
        </h1>

        <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
          No request is too small for God.
          <br />
          Post your prayer and let others stand with you in faith.
        </p>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.button
          onClick={onViewPrayerWall}
          className="bg-black text-white px-6 py-3 rounded-lg font-medium text-base shadow-lg hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Prayer Wall
        </motion.button>
        <motion.button
          onClick={onSendRequest}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium text-base shadow-lg hover:bg-yellow-300 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send A Request
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
