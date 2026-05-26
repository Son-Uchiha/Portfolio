/* ============================================
   Portfolio Script — Hiệu ứng & Tương tác
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Khởi tạo Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  /* ----- 1. Scroll Animation (Intersection Observer) ----- */
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hỗ trợ delay tuỳ chỉnh qua data-delay
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('visible'), Number(delay));
          observer.unobserve(entry.target); // Chỉ chạy 1 lần
        }
      });
    },
    { threshold: 0.15 }
  );
  animatedEls.forEach((el) => observer.observe(el));

  /* ----- 2. Navbar: đổi style khi cuộn ----- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- 3. Active nav-link theo section đang xem ----- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ----- 4. Mobile menu toggle ----- */
  const navToggle = document.getElementById('navToggle');
  const navLinksMenu = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksMenu.classList.toggle('active');
  });

  // Đóng menu khi click vào link
  navLinksMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinksMenu.classList.remove('active');
    });
  });

  /* ----- 5. Ẩn scroll indicator khi cuộn ----- */
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
    }, { passive: true });
  }
  /* ----- 6. Theme Toggle (Dracula) ----- */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const currentTheme = localStorage.getItem('theme') || 'dracula';
  
  // Áp dụng theme lưu trong localStorage
  if (currentTheme === 'dracula') {
    document.body.classList.add('theme-dracula');
    if (window.lucide && themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i data-lucide="sun"></i>';
      lucide.createIcons();
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('theme-dracula');
      let theme = 'default';
      
      if (document.body.classList.contains('theme-dracula')) {
        theme = 'dracula';
        themeToggleBtn.innerHTML = '<i data-lucide="sun"></i>';
      } else {
        themeToggleBtn.innerHTML = '<i data-lucide="moon"></i>';
      }
      
      localStorage.setItem('theme', theme);
      if (window.lucide) {
        lucide.createIcons(); // Re-render icon
      }
    });
  }

  /* ----- 7. Language Toggle ----- */
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      // setLanguage được định nghĩa trong i18n.js
      if (typeof setLanguage === 'function') {
        const currentLang = localStorage.getItem('preferredLanguage') || 'vi';
        const newLang = currentLang === 'vi' ? 'en' : 'vi';
        setLanguage(newLang);
      }
    });
  }
});
