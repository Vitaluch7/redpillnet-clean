import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Redpillnet – AI Platform',
  description: 'Создавай AI-контент: текст, изображения, видео и голос за секунды!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
