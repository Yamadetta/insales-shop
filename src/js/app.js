import * as functions from "./modules/functions.js";

functions.isWebp();


let rightArrow = document.querySelector('#brand-carousel-right-arrow');
let content = document.querySelector('.brand-carousel__content');
if (rightArrow && content) {
  rightArrow.addEventListener('click', function () {
    content.scrollLeft = content.offsetWidth / 2;
  });
}