'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}

export default function ServiceCard({ title, description, link, icon }: Props) {
  return (
    <motion.div
      className="border rounded-xl p-6 shadow bg-white hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-blue-600 font-medium hover:underline">
        Перейти →
      </Link>
    </motion.div>
  );
}
