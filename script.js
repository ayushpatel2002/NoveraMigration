const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('in'), delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => observer.observe(el));

const counters = document.querySelectorAll('[data-count]');
const animateCounter = (el) => {
  const target = Number(el.dataset.count);
  const duration = 1200;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(target * eased);
    el.textContent = target > 999 ? value.toLocaleString() : value;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const metricObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        metricObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => metricObserver.observe(counter));

const glowOne = document.querySelector('.bg-glow--one');
const glowTwo = document.querySelector('.bg-glow--two');

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  glowOne.style.transform = `translate(${x * 22}px, ${y * 18}px)`;
  glowTwo.style.transform = `translate(${x * -18}px, ${y * -24}px)`;
});

document.getElementById('year').textContent = new Date().getFullYear();
