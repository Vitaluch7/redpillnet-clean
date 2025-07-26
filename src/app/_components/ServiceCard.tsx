"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ title, description, link }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link href={link}>
      <div
        ref={cardRef}
        className={`p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition transform cursor-pointer ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } hover:scale-105 hover:rotate-[1deg]`}
        style={{ transition: "all 0.7s ease" }}
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-200 mt-2">{description}</p>
      </div>
    </Link>
  );
}
