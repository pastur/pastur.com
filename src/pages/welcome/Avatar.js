import React, { useEffect } from "react";
import styled from "styled-components";

import { preloadImage } from "./utils/images";

const StyledAvatar = styled.figure.attrs(props => ({ className: "picture" }))``;

const AvatarImage = styled.img.attrs(props => ({
  className: "picture-image"
}))``;

const AvatarShadow = styled.div.attrs(props => ({
  className: "picture-shadow"
}))``;

export default function Avatar() {
  useEffect(
    () => preloadImage({ id: "picture", imgSrc: "/images/avatar.jpg" }),
    []
  );

  return (
    <StyledAvatar id="picture">
      <AvatarShadow />
      <AvatarImage
        id="pictureImage"
        src="/images/avatar.jpg"
        alt="Portrait of Abel Pastur"
      />
    </StyledAvatar>
  );
}
