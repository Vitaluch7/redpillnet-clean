"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative text-center py-32 px-6 overflow-hidden"
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-400 animate-fade-in">
        Создавай будущее с AI
      </h1>
      <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
        Мы даём тебе лучшие AI-инструменты для генерации видео, изображений, голоса и текста.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/services"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:rotate-1"
        >
          Начать сейчас
        </Link>
        <Link
          href="/pricing"
          className="bg-white text-pink-600 font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:-rotate-1"
        >
          Узнать больше
        </Link>
      </div>
    </section>
  );
}
