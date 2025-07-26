'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 z-50 bg-white shadow-md px-8 py-4 flex justify-between items-center"
    >
      <Link href="/" className="text-2xl font-bold text-blue-600">Redpillnet</Link>
      <div className="flex gap-6 text-gray-700 font-medium text-sm md:text-base">
        <Link href="/">Главная</Link>
        <Link href="/services">Сервисы</Link>
        <Link href="/pricing">Цены</Link>
        <Link href="/dashboard">Кабинет</Link>
      </div>
    </motion.nav>
  );
}
