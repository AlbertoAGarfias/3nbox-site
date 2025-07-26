import React from "react";
import { motion } from "framer-motion";

export const GuideModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-30"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="bg-neutral-900 rounded-xl p-8 max-w-lg w-full shadow-xl border border-neutral-700 relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-neutral-400 hover:text-white font-bold text-2xl"
        aria-label="Cerrar"
      >×</button>
      <h2 className="text-2xl font-bold mb-4">¿Cómo editar las imágenes?</h2>
      <ol className="list-decimal pl-5 space-y-2 text-neutral-300">
        <li>Ve al archivo correspondiente en <b>src/pages/Home.tsx</b>, <b>About.tsx</b>, o <b>Community.tsx</b>.</li>
        <li>Busca el arreglo llamado <code>images</code>.</li>
        <li>Agrega, elimina o cambia los objetos con <code>src</code>, <code>alt</code>, <code>title</code>.</li>
        <li>Usa URLs externas (ejemplo Unsplash) o imágenes locales en <code>src/assets/images/</code>.</li>
        <li>Guarda y publica tu sitio. ¡Los cambios son inmediatos!</li>
      </ol>
      <div className="mt-4 text-center text-xs text-neutral-500">
        Si tienes dudas, revisa la documentación o contáctanos.
      </div>
    </div>
  </motion.div>
);