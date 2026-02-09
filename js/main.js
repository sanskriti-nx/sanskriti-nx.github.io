// SANSKRITI NX - Modern Minimal JavaScript

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ==========================================
// AUTO-CLOSE MOBILE MENU ON LINK CLICK
// ==========================================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    if (navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
});

// ==========================================
// GALLERY FILTERING (for gallery.html)
// ==========================================
function filterGallery(category) {
  const products = document.querySelectorAll('.product-item');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Update active button
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('active');
    }
  });

  // Filter products with animation
  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');

    if (category === 'all' || productCategory === category) {
      product.style.display = 'block';
      setTimeout(() => {
        product.style.opacity = '1';
        product.style.transform = 'scale(1)';
      }, 10);
    } else {
      product.style.opacity = '0';
      product.style.transform = 'scale(0.9)';
      setTimeout(() => {
        product.style.display = 'none';
      }, 300);
    }
  });
}

// Initialize gallery filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (filterButtons.length > 0) {
    // Add transition styles
    document.querySelectorAll('.product-item').forEach(item => {
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

    // Set first button as active
    if (filterButtons[0]) {
      filterButtons[0].classList.add('active');
    }

    // Add click event to filter buttons
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        filterGallery(filter);
      });
    });
  }
});

// ==========================================
// SCROLL ANIMATION (Intersection Observer)
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with animation class
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
});

// ==========================================
// SMOOTH SCROLL TO TOP
// ==========================================
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ==========================================
// FORM VALIDATION (for contact.html)
// ==========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    contactForm.classList.add('was-validated');
  });
}

// ==========================================
// ACTIVE NAV LINK HIGHLIGHT
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentLocation ||
        (currentLocation === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// ==========================================
// CONSOLE BRANDING
// ==========================================
console.log('%cSANSKRITI NX', 'color: #E67E22; font-size: 24px; font-weight: bold;');
console.log('%cArt of Heart - Handcrafted with Modern Design', 'color: #2C3E50; font-size: 14px;');
