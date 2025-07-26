"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-400 py-6 text-center mt-16"
    >
      <p>© 2025 Redpillnet. Все права защищены.</p>
    </motion.footer>
  );
}
