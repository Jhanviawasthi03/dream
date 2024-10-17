document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('em').value;
    const password = document.getElementById('passw').value;
    const confirmPassword = document.getElementById('cpassw').value;
    const errorDiv = document.getElementById('error');

    errorDiv.innerHTML = ''; 
    let At = false;
    let Dot = false;
    for (let i = 0; i < email.length; i++) {
        const char = email[i];
        if (char === '@') {
            At = true;
        }
        if (char === '.') {
            Dot = true;
        }
    }
    if (!At || !Dot == -1) { 
        errorDiv.innerHTML += 'Please enter a valid email address.';
    }

    if (password.length < 8) {
        errorDiv.innerHTML += 'Password must be at least 8 characters long.<br>';
    }

    let UpperCase = false;
    let LowerCase = false;
    let Digit = false;
    let SpecialChar = false;


    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') {
            UpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            LowerCase = true;
        } else if (char >= '0' && char <= '9') {
            Digit = true;
        } else {
            SpecialChar = true;
        }
    }

    if (!UpperCase) {
        errorDiv.innerHTML += 'Password must contain at least one uppercase letter.<br>';
    }
    if (!LowerCase) {
        errorDiv.innerHTML += 'Password must contain at least one lowercase letter.<br>';
    }
    if (!Digit) {
        errorDiv.innerHTML += 'Password must contain at least one number.<br>';
    }
    if (!SpecialChar) {
        errorDiv.innerHTML += 'Password must contain at least one special character.<br>';
    }
    if (password !== confirmPassword) {
        errorDiv.innerHTML += 'Passwords do not match.<br>';
    }

    if (errorDiv.innerHTML === '') {
        alert('Registration successful!');
        
    }
});

function togglePassword(id) {
    const passwordField = document.getElementById(id);
    let type = passwordField.getAttribute('type');
    if(type==='password')
    {
      type='text';
    }
    else
    {
        type='password';
    }
    passwordField.setAttribute('type', type);
}
let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

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
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
