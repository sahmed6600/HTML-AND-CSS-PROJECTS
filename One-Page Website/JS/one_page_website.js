
// Get all gallery images
const galleryImages = document.querySelectorAll(".gallery img");

// Get the lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

// Keep track of the current image
let currentImage = 0;

// Open the lightbox
function openLightbox(index) {
    currentImage = index;
    lightbox.style.display = "block";
    showImage();
}

// Display the selected enlarged image
function showImage() {
    const fullImage = galleryImages[currentImage].getAttribute("data-full");
    lightboxImage.src = fullImage;
    lightboxImage.alt = galleryImages[currentImage].alt;
}

// Close the lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Move to the previous or next image
function changeImage(direction) {
    currentImage += direction;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    showImage();
}

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard controls
document.addEventListener("keydown", function(event) {
    if (lightbox.style.display === "block") {
        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            changeImage(1);
        }

        if (event.key === "ArrowLeft") {
            changeImage(-1);
        }
    }
});
