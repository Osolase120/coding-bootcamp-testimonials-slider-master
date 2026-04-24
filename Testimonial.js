const cards = document.querySelectorAll(".Testimonials-card");
const prevBtn = document.querySelector(".btn:first-child");
const nextBtn = document.querySelector(".btn:last-child");

let currentIndex = 0;

// Show only the active testimonial
function showTestimonial(index) {
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

// Initial state
showTestimonial(currentIndex);

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0; // loop back
  } else {
    showTestimonial(currentIndex);
  }
});

// Previous button
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length -1; // loop to end
  } else {
    showTestimonial(currentIndex);
  }
});