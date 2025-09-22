document.addEventListener('DOMContentLoaded', () => {
  var currentSlide = 0;
  var currentCardImages = [];

  document.querySelectorAll('.glass-card img').forEach(img => {
    img.addEventListener('click', function() {
      const card = img.closest('.glass-card');

      currentCardImages = [];
      card.querySelectorAll('img').forEach(i => currentCardImages.push(i.src));

      currentSlide = currentCardImages.indexOf(img.src);

      openImageModal(img.src);
    });
  });

  // Prev/Next buttons
  window.changeSlide = function(direction) {
    if (!currentCardImages.length) return;

    currentSlide += direction;

    // Infinite loop
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
});
