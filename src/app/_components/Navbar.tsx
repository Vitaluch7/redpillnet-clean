"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Главная", path: "/" },
  { name: "Сервисы", path: "/services" },
  { name: "Цены", path: "/pricing" },
  { name: "Кабинет", path: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          🚀 Redpillnet
        </Link>
        <div className="flex gap-6">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative text-gray-700 font-medium hover:text-blue-600 transition ${
                pathname === item.path ? "text-blue-600" : ""
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
