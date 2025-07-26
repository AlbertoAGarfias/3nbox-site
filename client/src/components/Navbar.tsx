import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export const Navbar: React.FC = () => (
  <motion.nav
    initial={{ y: -60 }}
    animate={{ y: 0 }}
    className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur border-b border-neutral-800"
  >
    <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
      <span className="text-xl font-bold text-white">3NBOX</span>
      <div className="flex gap-8">
        <Link href="/">Inicio</Link>
        <Link href="/about">Acerca de</Link>
        <Link href="/community">Comunidad</Link>
      </div>
    </div>
  </motion.nav>
);