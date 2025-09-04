// Fade-in cards animation
const cards = document.querySelectorAll('.card');

function revealCards() {
  const windowHeight = window.innerHeight;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < windowHeight - 100){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);