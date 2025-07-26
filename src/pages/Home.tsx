import React from "react";
import { Gallery } from "../components/Gallery";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    alt: "Creatividad en acción",
    title: "Bienvenido a 3NBOX"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80",
    alt: "Comunidad en colaboración",
    title: "Unidos por la innovación"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    alt: "Inspiración diaria",
    title: "Tu espacio, tus ideas"
  }
];

export default function Home() {
  return <Gallery images={images} section="Inicio" />;
}