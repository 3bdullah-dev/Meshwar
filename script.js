// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // Counter animation function
  function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start).toLocaleString();
      }
    }, 16);
  }

  // Intersection Observer for counters
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const target = parseInt(element.getAttribute("data-target"));
          animateCounter(element, target, 2000);
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Set up counters
  document.getElementById("yearsCounter").setAttribute("data-target", "10");
  document
    .getElementById("clientsCounter")
    .setAttribute("data-target", "1000");
  document
    .getElementById("shipmentsCounter")
    .setAttribute("data-target", "500");

  // Observe counter elements
  document.querySelectorAll(".stat-number").forEach((counter) => {
    if (counter.id) {
      observer.observe(counter);
    }
  });

  // Burger Menu Toggle
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.navbar-links');
  
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Scroll to top functionality
  const scrollTop = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  });
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });