"use client";
import { HeroParallax } from "./ui/hero-parallax";
import { config } from "../../lib/config";
import React from "react";
import { randomizeArray } from "@/lib/utils";

export default function WynbizHeroSection() {
  const [gallery, setGallery] = React.useState<string[]>([]);

  React.useEffect(() => {
    setGallery(randomizeArray(config.gallery));
  }, []);

  return <HeroParallax products={gallery} />;
}
