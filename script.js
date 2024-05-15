const gallery = document.querySelector('.gallery');
const lightboxModal = document.querySelector('.lightbox-modal');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxNav = document.querySelector('.lightbox-nav');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const paginationContainer = document.querySelector('.pagination');

let currentImageIndex = 0;
let images = [
    { src: 'art.png', alt: 'Beauty Art' },
    { src: 'moon.jpg', alt: 'Moon' },
    { src: 'view.jpg', alt: 'Mountain'},
    { src: 'women.jpg', alt: 'Women'},
    { src: 'moon.jpeg', alt: 'PinkMoon'},
    { src: 'food.jpg', alt: 'Pizza'},
    { src: 'earth.jpg', alt: 'Nature'},
    { src: 'mixed.avif', alt: 'Art'},
    { src: 'programming.avif', alt: 'Keyboard'},
    { src: 'tiger.webp', alt: 'Tiger'},
    { src: 'offroad.jpg', alt: 'Off-Road'},
    { src: 'solareclipse.jpg', alt: 'Solar Eclipse Glass'},  
];

// Lazy loading for images
images.forEach((image) => {
    const img = new Image();
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';
});

// Event listener for gallery images
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        currentImageIndex = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
        showLightbox();
    }
});

// Event listeners for lightbox navigation
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxContent();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxContent();
});

// Close lightbox on close button click
closeBtn.addEventListener('click', closeLightbox);

// Function to display lightbox with current image
function showLightbox() {
    updateLightboxContent();
    lightboxModal.style.display = 'block';
    updatePagination();
}

// Function to update lightbox content with current image
function updateLightboxContent() {
    lightboxContent.querySelector('img').src = images[currentImageIndex].src;
    lightboxContent.querySelector('figcaption').textContent = images[currentImageIndex].alt;
}

// Function to close lightbox
function closeLightbox() {
    lightboxModal.style.display = 'none';
}
