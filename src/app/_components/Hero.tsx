"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative text-center pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-100">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Создавай AI-контент будущего
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
      >
        Видео, изображения, голос и текст — всё в одном месте.  
        <br /> Быстро. Умно. Эффективно.
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        href="/services"
        className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        🚀 Начать сейчас
      </motion.a>
    </section>
  );
}
