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

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});

// galleryRender.addEventListener("click", selectPicture);

// new SimpleLightbox(".gallery a", {
//   captionData: `event.target.galleryItem.description`,
// });
// function selectPicture(event) {
//   event.preventDefault();
//   if (event.target.nodeName != "IMG") {
//     return;
//   }
//   new SimpleLightbox(".gallery a", {
//     captionData: `event.target.galleryItem.description`,
//   });
// }
