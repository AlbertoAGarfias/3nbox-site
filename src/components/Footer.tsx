import React from "react";

export const Footer: React.FC = () => (
  <footer className="border-t border-neutral-800 py-6 bg-black bg-opacity-80 text-center text-neutral-400">
    <div>
      © 2025 <span className="font-bold text-white">3NBOX</span> — Comunidad creativa.
    </div>
    <div className="mt-2">
      <a href="https://github.com/AlbertoAGarfias" target="_blank" rel="noopener" className="hover:text-white underline">
        GitHub
      </a>
      {" | "}
      <a href="mailto:info@3nbox.com" className="hover:text-white underline">
        Contacto
      </a>
    </div>
  </footer>
);