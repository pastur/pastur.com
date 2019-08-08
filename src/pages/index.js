import { Head } from "react-static";
import React, { Fragment, useEffect } from "react";

export default () => {
  function loadImage(id, targetId) {
    var el = document.getElementById(id);
    var targetEl = targetId ? document.getElementById(targetId) : el;
    var imageToLoad;
    if (el.dataset.image) {
      imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === "undefined") {
      imageToLoad = el.src;
    } else {
      imageToLoad = el.currentSrc;
    }
    if (imageToLoad) {
      var img = new Image();
      img.src = imageToLoad;
      img.onload = function() {
        targetEl.classList.add("is-loaded");
      };
    }
  }

  function loadImages() {
    loadImage("wallpaper");
    loadImage("pictureImage", "picture");
  }

  useEffect(loadImages, []);

  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat|Quicksand"
          rel="stylesheet"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"
        />
      </Head>

      <div
        id="wallpaper"
        className="wallpaper"
        data-image="images/wallpaper.jpg"
      />

      <div className="content-wrapper">
        <aside className="side">
          <figure id="picture" className="picture">
            <div className="picture-shadow" />
            <img
              id="pictureImage"
              className="picture-image"
              data-image="/images/avatar.jpg"
              src="/images/avatar.jpg"
              alt="Portrait of Abel Pastur"
              width="320"
              height="320"
            />
          </figure>
        </aside>
        <main className="about">
          <h1 className="name">Abel Pastur</h1>
          <p className="job">Software Engineer</p>
          <hr className="hr" />
          <div className="description">
            <p>Full stack Web Developer.</p>
            <p>React enthusiast.</p>
          </div>
          <div className="contact">
            <a
              className="button"
              href="/abel-pastur-cv-2019.pdf"
              target="_blank"
            >
              CV
            </a>
            <a className="button" href="mailto:contact@pastur.com">
              Get in touch
            </a>
          </div>
          <ul className="social">
            <li>
              <a href="https://twitter.com/pastur" target="_blank">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://github.com/pastur" target="_blank">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abelpastur/" target="_blank">
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </main>
      </div>
    </Fragment>
  );
};
