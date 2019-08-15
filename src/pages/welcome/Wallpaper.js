import React, { useEffect } from "react";
import { preloadImage } from "./utils/images";

export default function Wallpaper() {
  useEffect(
    () => preloadImage({ id: "wallpaper", imgSrc: "/images/wallpaper.jpg" }),
    []
  );

  return <div id="wallpaper" className="wallpaper" />;
}
