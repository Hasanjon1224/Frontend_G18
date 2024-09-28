window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const image = entry.target;
      const newImage = image.getAttribute('data-src');
      if (newImage) {
        image.src = newImage;
        image.classList.remove('lazy-img');
      }

      observer.unobserve(image);
    });
  });

  images.forEach(img => {
    observer.observe(img);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.operations__tab');
  const contents = document.querySelectorAll('.operations__content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // Remove active classes
      tabs.forEach(t => t.classList.remove('operations__tab--active'));
      contents.forEach(c => c.classList.remove('operations__content--active'));

      // Add active class to clicked tab and corresponding content
      this.classList.add('operations__tab--active');
      document
        .querySelector(`.operations__content--${this.dataset.tab}`)
        .classList.add('operations__content--active');
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.slider__btn--right');
  const prevBtn = document.querySelector('.slider__btn--left');
  let currentSlide = 0;
  const maxSlide = slides.length - 1;

  // Slaydlarni ko'rsatiladigan holatga o'zgartirish
  const goToSlide = slide => {
    slides.forEach((s, index) => {
      s.style.transform = `translateX(${100 * (index - slide)}%)`;
    });
  };

  // Keyingi slaydga o'tish
  const nextSlide = () => {
    currentSlide = currentSlide === maxSlide ? 0 : currentSlide + 1;
    goToSlide(currentSlide);
  };

  // Oldingi slaydga o'tish
  const prevSlide = () => {
    currentSlide = currentSlide === 0 ? maxSlide : currentSlide - 1;
    goToSlide(currentSlide);
  };

  // Dastlabki holatda slaydlarni ko'rsatish
  goToSlide(currentSlide);

  // Tugmalarni bosish
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
});

const openModal = document.querySelector('.btn--show-modal');

const modal = document.querySelector('.modal');

openModal.addEventListener('click', () => {
  modal.classList.toggle('hidden');
  console.log(openModal);
});
