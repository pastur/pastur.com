export function preloadImage({ id , imgSrc }) {
    var elem = document.getElementById(id);
    
    if (imgSrc) {
      var img = new Image();
      img.src = imgSrc;
      img.onload = function() {
        elem.classList.add("is-loaded");
      };
    }
  }