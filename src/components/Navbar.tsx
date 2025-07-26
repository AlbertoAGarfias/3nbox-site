import React from "react";
import { motion } from "framer-motion";

interface Props {
  setPage: (p: "home" | "about" | "community") => void;
  setShowGuide: (v: boolean) => void;
  page: string;
}

export const Navbar: React.FC<Props> = ({ setPage, setShowGuide, page }) => (
  <motion.nav
    initial={{ y: -60 }}
    animate={{ y: 0 }}
    className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur border-b border-neutral-800"
  >
    <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
      <span className="text-xl font-bold text-white cursor-pointer" onClick={() => setPage("home")}>
        3NBOX
      </span>
      <div className="flex gap-8 text-neutral-300 font-medium">
        <button className={`hover:text-white ${page === "home" ? "text-white" : ""}`} onClick={() => setPage("home")}>Inicio</button>
        <button className={`hover:text-white ${page === "about" ? "text-white" : ""}`} onClick={() => setPage("about")}>Acerca de</button>
        <button className={`hover:text-white ${page === "community" ? "text-white" : ""}`} onClick={() => setPage("community")}>Comunidad</button>
        <button className="hover:text-cyan-400" onClick={() => setShowGuide(true)}>¿Cómo editar imágenes?</button>
      </div>
    </div>
  </motion.nav>
);