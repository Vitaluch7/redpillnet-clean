"use client";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import ServiceCard from "./_components/ServiceCard";
import Footer from "./_components/Footer";

export default function Home() {
  const services = [
    { title: "🎥 Генерация видео", description: "Создавай AI-видео за секунды.", link: "/services/video" },
    { title: "🗣️ Генерация голоса", description: "Синтезируй реалистичный голос.", link: "/services/voice" },
    { title: "🎨 Генерация изображений", description: "Создавай потрясающие картинки.", link: "/services/image" },
    { title: "✍️ Генерация текста", description: "Пиши тексты и статьи с AI.", link: "/services/text" },
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </section>

      <Footer />
    </div>
  );
}
