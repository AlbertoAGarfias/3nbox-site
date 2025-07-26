import React from "react";
import { motion } from "framer-motion";

type Image = {
  src: string;
  alt: string;
  title: string;
};

interface GalleryProps {
  images: Image[];
  section: string;
}

export const Gallery: React.FC<GalleryProps> = ({ images, section }) => (
  <section className="py-10">
    <h2 className="text-3xl font-bold mb-6 text-center">{section}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((img, idx) => (
        <motion.div
          key={img.src}
          whileHover={{ scale: 1.03 }}
          className="rounded-lg overflow-hidden shadow-lg bg-neutral-800"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{img.title}</h3>
            <p className="text-sm text-neutral-400">{img.alt}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);