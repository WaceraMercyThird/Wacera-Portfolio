// Declare globally at the top
var currentSlide = 0;
var currentCardImages = []; // use var or keep let at top to avoid reference error

// Open image modal and initialize slider array
document.querySelectorAll('.glass-card img').forEach(img => {
  img.addEventListener('click', function() {
    const card = img.closest('.glass-card');

    // Collect main + hidden images
    currentCardImages = [];
    card.querySelectorAll('img').forEach(i => currentCardImages.push(i.src));

    // Set currentSlide to clicked image index
    currentSlide = currentCardImages.indexOf(img.src);

    // Open modal (your existing function)
    openImageModal(img.src);
  });
});

function changeSlide(direction) {
  if (!currentCardImages.length) return;
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = currentCardImages.length - 1;
  if (currentSlide >= currentCardImages.length) currentSlide = 0;
  document.getElementById("modalImage").src = currentCardImages[currentSlide];
}

// Keyboard support
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById("imageModal");
  if (modal.style.display === "flex") {
    if (e.key === "ArrowRight") changeSlide(1);
    if (e.key === "ArrowLeft") changeSlide(-1);
    if (e.key === "Escape") modal.style.display = "none";
  }
});
