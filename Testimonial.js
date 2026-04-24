const cards = document.querySelectorAll(".Testimonials-card");
const prevBtn = document.querySelector(".btn:first-child");
const nextBtn = document.querySelector(".btn:last-child");

let currentIndex = 0;

function showTestimonial(index) {
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

showTestimonial(currentIndex);

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  } else {
    showTestimonial(currentIndex);
  }
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length -1;
  } else {
    showTestimonial(currentIndex);
  }
});
