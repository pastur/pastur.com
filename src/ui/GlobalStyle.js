import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}img,embed,iframe,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}

* {
  scroll-behavior: smooth;
}

/* 1. Base */
html {
  background-color: #00bcf1;
  background-image: linear-gradient(to bottom right, #00bcf1, #180cac);
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  min-height: 100vh;
  min-width: 300px;
  overflow-x: hidden;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}

a {
  color: currentColor;
  cursor: pointer;
  text-decoration: none;
}

/* 2. Shared */
.wallpaper {
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.wallpaper,
.picture-shadow,
.picture-image {
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.job {
  font-family: sans-serif;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.social a {
  transform-origin: center;
  transition-duration: 100ms;
}

/* 3. Specific */
.wallpaper {
  background-image: url("/images/wallpaper.jpg");
  background-position: center;
  background-size: cover;
  opacity: 0.1;
  position: fixed;
}

.social {
  display: flex;
  margin-top: 1.5rem;
}

.social li {
  height: 2rem;
  margin-right: 0.5rem;
  text-align: center;
  width: 2rem;
}

.social a {
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  justify-content: center;
  opacity: 0.5;
  transition-property: opacity, transform;
  width: 2rem;
  will-change: opacity, transform;
}

.social a:hover {
  opacity: 1;
  transform: scale(1.25);
}

.social a:active {
  opacity: 1;
  transform: scale(1.1);
}

.job {
  font-size: 0.75rem;
}

.hr {
  background-color: orange;
  border: none;
  content: "";
  height: 1px;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  transform-origin: center left;
  width: 8rem;
}

.description {
  font-size: 1.2rem;
}

.contact {
  display: inline-block;
  margin-top: 2rem;
  vertical-align: top;
}

.contact > *:first-child {
  margin-right: 1em;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
}

.about {
  max-width: 26rem;
}

.picture {
  padding-top: 100%;
  position: relative;
  width: 100%;
}

.picture-shadow {
  border-radius: 19921216px;
  background-image: radial-gradient(#000 0%, rgba(0, 0, 0, 0) 70%);
  position: absolute;
  top: 10%;
}

.picture-image {
  border-radius: 290486px;
  position: absolute;
}

.name {
  font-size: 2.25rem;
  line-height: 1.125;
  margin-bottom: 0.5rem;
}

/* 4. Responsiveness */
@media screen and (max-width: 799px) {
  .content-wrapper {
    flex-direction: column;
    padding: 5rem 3rem;
  }
  .side {
    margin-top: 3rem;
    height: 10rem;
    width: 10rem;
  }
}

@media screen and (max-width: 425px) {
  .content-wrapper {
    padding-top: 3rem;
  }
  .side {
    height: 8rem;
    width: 8rem;
  }
}

@media screen and (min-width: 800px) {
  .content-wrapper {
    padding: 4rem;
  }
  .side {
    height: 15rem;
    width: 15rem;
  }
  .about {
    flex-grow: 1;
    flex-shrink: 1;
  }
}

/* Animation */

@keyframes bounceIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fillUp {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes picImage {
  from {
    opacity: 0;
    transform: scale(1.2) translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes picShadow {
  from {
    opacity: 0;
    transform: scale(1.2) translateY(4rem);
  }
  to {
    opacity: 1;
    transform: scale(1.1) translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomOut {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 0.1;
    transform: scale(1);
  }
}

/* Shared */

.wallpaper,
.picture-shadow,
.picture-image,
.name,
.job,
.hr,
.description,
.contact,
.social li {
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

.wallpaper {
  animation-timing-function: ease-out;
}

.picture-shadow,
.picture-image {
  animation-duration: 750ms;
  animation-timing-function: cubic-bezier(0, 0.5, 0.25, 1.25);
}

/* Initial state */

.wallpaper,
.picture-shadow,
.picture-image {
  opacity: 0;
}

/* Animation triggers */

.wallpaper.is-loaded {
  animation-name: zoomOut;
}

.picture.is-loaded .picture-shadow {
  animation-name: picShadow;
}

.picture.is-loaded .picture-image {
  animation-name: picImage;
}

.name {
  animation-name: slideDown;
}

.job {
  animation-name: slideUp;
}

.hr {
  animation-name: fillUp;
}

.description {
  animation-name: slideUp;
}

.contact {
  animation-name: bounceIn;
}

.social li {
  animation-duration: 500ms;
  animation-name: slideUp;
  animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1.5);
}

/* Delays */

.name {
  animation-delay: 100ms;
}

.job {
  animation-delay: 200ms;
}

.hr {
  animation-delay: 300ms;
}

.description {
  animation-delay: 400ms;
}

.picture-image {
  animation-delay: 500ms;
}

.picture-shadow {
  animation-delay: 500ms;
}

.contact {
  animation-delay: 600ms;
}

.social li:nth-child(1) {
  animation-delay: 800ms;
}

.social li:nth-child(2) {
  animation-delay: 900ms;
}

.social li:nth-child(3) {
  animation-delay: 1s;
}

.social li:nth-child(4) {
  animation-delay: 1.1s;
}

.social li:nth-child(5) {
  animation-delay: 1.2s;
}

.wallpaper.is-loaded {
  animation-delay: 0.5s;
}

`;

export default GlobalStyle;
