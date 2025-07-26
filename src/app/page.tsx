import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import ServiceCard from './_components/ServiceCard';
import { FaVideo, FaMicrophone, FaImage, FaPen } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          title="Генерация видео"
          description="Создавай уникальные AI-видео за секунды."
          link="/services/video"
          icon={<FaVideo />}
        />
        <ServiceCard
          title="Генерация голоса"
          description="Синтезируй реалистичный голос для проектов."
          link="/services/voice"
          icon={<FaMicrophone />}
        />
        <ServiceCard
          title="Генерация изображений"
          description="Создавай картинки любой тематики."
          link="/services/image"
          icon={<FaImage />}
        />
        <ServiceCard
          title="Генерация текста"
          description="Пиши статьи, описания и тексты с AI."
          link="/services/text"
          icon={<FaPen />}
        />
      </section>
    </div>
  );
}
