'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-50 via-white to-blue-100 px-6 pt-28">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Создавай AI-контент за секунды
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-600 max-w-xl mb-8"
      >
        Видео, изображения, голос и текст — всё в одном месте. Без кода. Без лишних кликов.
      </motion.p>
      <motion.a
        href="/services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Начать сейчас →
      </motion.a>
    </section>
  );
}
