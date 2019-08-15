import React, { useEffect } from "react";
import { preloadImage } from "./utils/images";

export default function Side() {
  useEffect(
    () => preloadImage({ id: "picture", imgSrc: "/images/avatar.jpg" }),
    []
  );

  return (
    <aside className="side">
      <figure id="picture" className="picture">
        <div className="picture-shadow" />
        <img
          id="pictureImage"
          className="picture-image"
          src="/images/avatar.jpg"
          alt="Portrait of Abel Pastur"
        />
      </figure>
    </aside>
  );
}
