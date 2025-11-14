"use client";
import React from "react";
import PrayerRequestModal from "../ui/PrayerRequestModal";
import { motion } from "framer-motion";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/navigation";
import PageHeader from "../common/PageHeader";

const LandingPage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const router = useRouter();
  return (
    <div className="h-screen relative p-4">
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover blur-sm"
        style={{
          backgroundImage: "url('/images/landing-back.png')",
          filter: "brightness(0.45) blur(1px)",
          backgroundSize: "150% 150%",
        }}
        animate={{
          backgroundPosition: ["100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <PageHeader hasDailyWord />
      <motion.div
        className="text-center space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="bg-black text-white px-6 py-3 rounded-lg! font-medium text-base shadow-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/prayer-request/wall")}
          >
            View Prayer Wall
          </motion.button>
          <motion.button
            // onClick={openModal}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg! font-medium text-base shadow-lg hover:bg-yellow-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send A Request
          </motion.button>
        </motion.div>
      </motion.div>
      <PrayerRequestModal show={isOpen} onHide={closeModal} />
    </div>
  );
};

export default LandingPage;
