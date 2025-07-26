import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import ServiceCard from './_components/ServiceCard';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="grid max-w-6xl mx-auto gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
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
    </>
  );
}
