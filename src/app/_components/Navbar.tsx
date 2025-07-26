"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/30 backdrop-blur-lg sticky top-0 z-50">
      <div className="text-2xl font-extrabold tracking-wide">
        <span className="text-pink-400">Red</span>
        <span className="text-yellow-300">Pill</span>
      </div>

      <div className="flex gap-8 text-lg">
        <Link href="/" className="hover:text-pink-300 transition">Главная</Link>
        <Link href="/services" className="hover:text-pink-300 transition">Сервисы</Link>
        <Link href="/pricing" className="hover:text-pink-300 transition">Цены</Link>
        <Link href="/dashboard" className="hover:text-pink-300 transition">Кабинет</Link>
      </div>
    </nav>
  );
}
