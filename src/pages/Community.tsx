import React from "react";
import { Gallery } from "../components/Gallery";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    alt: "Eventos",
    title: "Participa en eventos"
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    alt: "Foro",
    title: "Conversa y aprende"
  },
  {
    src: "https://images.unsplash.com/photo-1465101178521-c8c4e0c28af3?w=800&q=80",
    alt: "Proyectos",
    title: "Colabora en proyectos"
  }
];

export default function Community() {
  return <Gallery images={images} section="Comunidad" />;
}