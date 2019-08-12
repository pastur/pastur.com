import React, { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { preloadImage } from "../utils/images";

export default function Welcome() {
  function preloadImages() {
    preloadImage({ id: "wallpaper", imgSrc: "/images/wallpaper.jpg" });
    preloadImage({ id: "picture", imgSrc: "/images/avatar.jpg" });
  }

  useEffect(preloadImages, []);

  const socialLinks = [
    { href: "https://twitter.com/pastur", icon: faTwitter },
    { href: "https://github.com/pastur", icon: faGithub },
    { href: "https://www.linkedin.com/in/pastur", icon: faLinkedin }
  ];

  return (
    <Fragment>
      <div id="wallpaper" className="wallpaper" />

      <div className="content-wrapper">
        <main className="about">
          <h1 className="name">Abel Pastur</h1>
          <p className="job">Software Engineer</p>

          <hr className="hr" />

          <div className="description">
            <p>Full stack Web Developer.</p>
            <p>React ecosystem enthusiast.</p>
            <p>Based in London.</p>
          </div>

          <div className="contact">
            <a
              className="button"
              href="/abel-pastur-cv-2019.pdf"
              target="_blank"
            >
              View CV
            </a>
            <a className="button" href="mailto:getintouch@pastur.com">
              Get in touch
            </a>
          </div>

          <ul className="social">
            {socialLinks.map(link => (
              <li>
                <a href={link.href} target="_blank">
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </main>

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
      </div>
    </Fragment>
  );
}
