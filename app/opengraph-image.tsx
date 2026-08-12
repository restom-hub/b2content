import { ImageResponse } from "next/og";
import OgCard from "@/components/OgCard";

export const alt = "B2Content — IA que opera. Processos que escalam.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgCard />, size);
}
