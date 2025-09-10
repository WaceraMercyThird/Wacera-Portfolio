// SLIDES
function setupInfiniteSlider(trackId) {
  const track = document.getElementById(trackId);
  const cards = track.querySelectorAll(".quote-card");
  let index = 0;

  // Clone cards for infinite effect
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  function slide() {
    const cardWidth = cards[0].offsetWidth + 24;
    index++;
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    if (index >= cards.length) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        index = 0;
      }, 500);
      setTimeout(() => {
        track.style.transition = 'transform 0.6s ease-in-out';
      }, 600);
    }
  }

  setInterval(slide, 5000);
}

// Initialize both sliders
setupInfiniteSlider("quoteTrack");
setupInfiniteSlider("quoteTrack2");
setupInfiniteSlider("quoteTrack3");






// ------------CV PDF File----------
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


  function downloadCV() {
    const link = document.createElement('a');
    link.href = 'files/Wacera_CV.pdf';
    link.download = 'Wacera_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  function openImageModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = src;
  }
  function closeImageModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  

  const PortfolioApp = {  
    showToast(id) {
      const toast = document.getElementById(id);
      if (toast) {
        toast.style.display = "block";
        setTimeout(() => {
          toast.style.display = "none";
        }, 4000);
      }
    }
  };
  
  // Listen to iframe load to detect submit
  document.getElementById('formResponse').addEventListener('load', function () {
    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
  
    if (name === "" || email === "" || message === "") {
      PortfolioApp.showToast("toast-error");
    } else {
      form.reset();
      PortfolioApp.showToast("toast");
    }
  });

  // ------------------


  
  