import images from './gallery-items.js'

const galleryRef = document.querySelector('.js-gallery');
const galleryMarkup = makeGalleryMarkup(images);
const lightboxRef = document.querySelector('.lightbox');
const imageModal = document.querySelector('.lightbox__image');
const btnCloseModal = document.querySelector('[data-action="close-lightbox"]');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', onGalleryImageClick);
btnCloseModal.addEventListener('click', onCloseModal);

function makeGalleryMarkup(images) {
  return images.map(({preview, original, description}) => {return  `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`}).join('')
}

function onGalleryImageClick(evt) {
    evt.preventDefault();
    const isImage = evt.target.classList.contains('gallery__image');
    
    if (!isImage) {
        return;
    }
    
    const imageSource = evt.target.dataset.source;

    imageModal.src = imageSource;
    lightboxRef.classList.add('is-open');   
    
};

function onCloseModal() {
    imageModal.src = '';
    lightboxRef.classList.remove('is-open');    
}