import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(item => `
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}" 
        alt="${item.description}" 
        data-source="${item.original}">
        </a>
    </li>
    `).join("");

galleryContainer.innerHTML = galleryMarkup;


galleryContainer.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.tagName === "IMG") {
        const sourceUrl = event.target.dataset.source;

        const instance = basicLightbox.create(`
        <img src="${sourceUrl}" alt="" />
        `);

        instance.show();
    }
});






