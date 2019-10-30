export default function preloadImage({ id, imgSrc }) {
  const elem = document.getElementById(id);

  if (imgSrc) {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      elem.classList.add('is-loaded');
    };
  }
}
