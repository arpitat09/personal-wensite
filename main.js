// Toggle mobile menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Fake contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent (this is a demo).');
  contactForm.reset();
});
