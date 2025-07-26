"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = { title: string; description: string; link: string };

export default function ServiceCard({ title, description, link }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="border rounded-xl p-6 shadow hover:shadow-lg bg-white"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-blue-600 font-medium hover:underline">
        Подробнее →
      </Link>
    </motion.div>
  );
}
