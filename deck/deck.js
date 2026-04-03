(() => {
  'use strict';

  const deck = document.getElementById('deck');
  const slides = deck.querySelectorAll('.slide');
  const total = slides.length;
  let current = 0;

  const counterCurrent = document.getElementById('currentSlide');
  const counterTotal = document.getElementById('totalSlides');
  const btnPrev = document.getElementById('prevSlide');
  const btnNext = document.getElementById('nextSlide');

  counterTotal.textContent = total;

  function goTo(index) {
    current = Math.max(0, Math.min(index, total - 1));
    deck.style.transform = `translateX(-${current * 100}vw)`;
    counterCurrent.textContent = current + 1;
    btnPrev.style.opacity = current === 0 ? 0.2 : 1;
    btnNext.style.opacity = current === total - 1 ? 0.2 : 1;

    slides[current].scrollTop = 0;
  }

  btnPrev.addEventListener('click', () => goTo(current - 1));
  btnNext.addEventListener('click', () => goTo(current + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goTo(current + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
    if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    if (e.key === 'End') { e.preventDefault(); goTo(total - 1); }
  });

  const SWIPE_THRESHOLD = 50;
  const ANGLE_THRESHOLD = 30;
  let touchStartX = 0;
  let touchStartY = 0;

  deck.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  deck.addEventListener('touchend', (e) => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    const dy = touchStartY - e.changedTouches[0].clientY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    const isHorizontal = absDx > absDy && absDx > SWIPE_THRESHOLD;
    const angleDeg = Math.atan2(absDy, absDx) * (180 / Math.PI);

    if (isHorizontal && angleDeg < ANGLE_THRESHOLD) {
      dx > 0 ? goTo(current + 1) : goTo(current - 1);
    }
  }, { passive: true });

  goTo(0);
})();
