let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; 
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide(currentSlide); 
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    showSlide(currentSlide);
}

showSlide(currentSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
const reviewStars = document.querySelectorAll('.review-section .star');
let selectedRating = 0;

function updateStarsOnHover(rating) {
    reviewStars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = 'gold'; 
        } else {
            star.style.color = ''; 
        }
    });
}


function selectRating(rating) {
    selectedRating = rating;
    updateStarsOnHover(rating); 
}

function resetStars() {
    updateStarsOnHover(selectedRating);
}
reviewStars.forEach((star, index) => {
    const ratingValue = index + 1;

    star.addEventListener('mouseover', () => updateStarsOnHover(ratingValue));
    star.addEventListener('click', () => selectRating(ratingValue));
    star.addEventListener('mouseout', resetStars);
});


document.getElementById('submit').addEventListener('click', () => {
    if (selectedRating === 0) {
        alert('Please select a rating before submitting!');
    } else {
        const reviewMessage = `You rated us: ${selectedRating} star(s)!`;
        alert(reviewMessage);

        selectedRating = 0;
        updateStarsOnHover(0);
        document.getElementById('review').value = ''; 
    }
});
