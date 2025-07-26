'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const menuItems = [
    { label: 'Главная', href: '/' },
    { label: 'Сервисы', href: '/services' },
    { label: 'Цены', href: '/pricing' },
    { label: 'Кабинет', href: '/dashboard' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Redpillnet
        </Link>

        <div className="flex gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
