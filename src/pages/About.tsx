import React from "react";
import { Gallery } from "../components/Gallery";

const images = [
  {
    src: "https://images.unsplash.com/photo-1465101178521-c8c4e0c28af3?w=800&q=80",
    alt: "Sobre nosotros",
    title: "¿Quiénes somos?"
  },
  {
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    alt: "Visión",
    title: "Nuestra misión"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80",
    alt: "Valores",
    title: "Compromiso y pasión"
  }
];

export default function About() {
  return <Gallery images={images} section="Acerca de" />;
}