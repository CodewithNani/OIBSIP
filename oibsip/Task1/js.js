// JavaScript for car carousel navigation

// Define images for each car
const carImages = {
    car1: [
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydlehXRHPENQflkTTJaS5THHqvLIqQ_08IModngx45Q&s', // Add additional image URLs for Car 1
        'https://example.com/car1-image3.jpg',
    ],
    car2: [
        'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/Honda-City-VTi-%283%29.jpg',
        'https://example.com/car2-image2.jpg', // Add additional image URLs for Car 2
        'https://example.com/car2-image3.jpg',
    ],
    // Add images for other cars similarly
};

// Function to switch to the previous image
function prevImage(carId) {
    const images = carImages[carId];
    const carousel = document.getElementById(carId);
    const currentImage = carousel.querySelector('img').src;
    const currentIndex = images.indexOf(currentImage);

    const newIndex = (currentIndex - 1 + images.length) % images.length;
    carousel.querySelector('img').src = images[newIndex];
}

// Function to switch to the next image
function nextImage(carId) {
    const images = carImages[carId];
    const carousel = document.getElementById(carId);
    const currentImage = carousel.querySelector('img').src;
    const currentIndex = images.indexOf(currentImage);

    const newIndex = (currentIndex + 1) % images.length;
    carousel.querySelector('img').src = images[newIndex];
}
