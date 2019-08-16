import React, { useEffect } from "react";
import styled from "styled-components";

import { preloadImage } from "./utils/images";

const StyledWallpaper = styled.div.attrs(props => ({
  className: "wallpaper"
}))``;

export default function Wallpaper() {
  useEffect(
    () => preloadImage({ id: "wallpaper", imgSrc: "/images/wallpaper.jpg" }),
    []
  );

  return <StyledWallpaper id="wallpaper" />;
}
