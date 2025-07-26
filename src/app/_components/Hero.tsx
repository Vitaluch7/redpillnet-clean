'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center pt-32 pb-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Создавай AI-контент за секунды
      </motion.h1>

      <motion.p
        className="text-lg mb-8 text-blue-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Видео, изображения, голос и текст – всё в одном месте
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          href="/services"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Начать сейчас
        </Link>
      </motion.div>
    </section>
  );
}
