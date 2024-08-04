// Image slider functionality
let currentIndex = 0;
const images = document.querySelectorAll('.image-slider img');

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Form submission handling
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for booking with Hotel Sunshine!');
    this.reset();
});
