import { galleryItems } from "./gallery-items.js";
// import { basicLightbox } from "basiclightbox";
// Change code below this line

// console.log(galleryItems);

const galleryRender = document.querySelector("div.gallery");

const galleryItemsPreview = galleryItems
  .map((galleryItem) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src=${galleryItem.preview}
      data-source= ${galleryItem.original}
      alt=${galleryItem.description}
    />
  </a>
</div>`;
  })
  .join("");

galleryRender.insertAdjacentHTML("beforeend", galleryItemsPreview);

galleryRender.addEventListener("click", selectPicture);

function selectPicture(event) {
  event.preventDefault();
  if (event.target.nodeName != "IMG") {
    return;
  }
  const instance = basicLightbox
    .create(
      `
		<img width="800" height="680" src="${event.target.dataset.source}">
	`
    )
    .show();
}
