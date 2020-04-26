import galleryItems from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.js-gallery'),
    isOpen: document.querySelector('.js-lightbox'),
    quality: document.querySelector('.lightbox__image'),
    button: document.querySelector('.lightbox__button'),
};

const newArrayWithLi = galleryItems => {
    return galleryItems.map(galleryItem => {
        const li = document.createElement('li');


        li.setAttribute('class', 'gallery__item');

        li.insertAdjacentHTML(
            'beforeend',
            `<img class='gallery__image' src=${galleryItem.preview} data-original=${galleryItem.original} alt=${galleryItem.description}>`,
        );
        return li;

        // console.log(li);
    });
};
refs.gallery.append(...newArrayWithLi(galleryItems));


function bigImage(e) {
    if (e.target === e.currentTarget) {
        return;
    }
    // e.preventDefault();
    refs.isOpen.classList.add('is-open');
    refs.quality.src = e.target.dataset.original;
    refs.button.classList.add('lightbox__button')

    // console.log(e)
}

refs.gallery.addEventListener('click', bigImage)


function close(e) {
    if (e && e.target === refs.quality) {
        return;
    }
    refs.isOpen.classList.remove('is-open');
    refs.quality.src = '';
}

refs.isOpen.addEventListener('click', close)


function esc(e) {
    if (e.keyCode === 27) {
        close();
    }
}

document.addEventListener('keydown', esc)






// console.log(galleryItems)