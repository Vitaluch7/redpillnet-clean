"use client";

import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import ServiceCard from "./_components/ServiceCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          title="Генерация видео"
          description="Создавай уникальные AI-видео за секунды."
          link="/services/video"
        />
        <ServiceCard
          title="Генерация голоса"
          description="Синтезируй реалистичный голос для проектов."
          link="/services/voice"
        />
        <ServiceCard
          title="Генерация изображений"
          description="Создавай картинки любой тематики."
          link="/services/image"
        />
        <ServiceCard
          title="Генерация текста"
          description="Пиши статьи, описания и тексты с AI."
          link="/services/text"
        />
      </section>
    </div>
  );
}
