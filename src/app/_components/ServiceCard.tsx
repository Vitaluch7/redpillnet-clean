'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  link: string;
};

export default function ServiceCard({ title, description, link }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border rounded-xl p-6 shadow-md hover:shadow-xl transition bg-white"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-blue-600 hover:underline font-medium">
        Перейти →
      </Link>
    </motion.div>
  );
}
