import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryRender = document.querySelector("ul.gallery");

const galleryItemsPreview = galleryItems
  .map((galleryItem) => {
    return `
    <a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
    </a>`;
  })
  .join("");

// console.log(galleryRender);
galleryRender.insertAdjacentHTML("beforeend", galleryItemsPreview);

galleryRender.addEventListener("click", selectPicture);

function selectPicture(event) {
  event.preventDefault();
  if (event.target.nodeName != "IMG") {
    return;
  }
  const altCaptionPicture = event.target.alt;
  let gallery = new SimpleLightbox(".gallery a");

  gallery.on("show.simplelightbox", function () {
    captionData: `${altCaptionPicture}`;
  });

  gallery.on("show.simplelightbox", function () {
    captionDelay: 250;
  });
}
