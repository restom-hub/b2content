import { ImageResponse } from "next/og";
import ConttaOgCard from "@/components/contta/OgCard";

export const alt = "Contta·ai — A IA que opera o seu escritório contábil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<ConttaOgCard />, size);
}
