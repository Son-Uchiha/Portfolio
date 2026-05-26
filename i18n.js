const translations = {
  vi: {
    // Navigation
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",
    
    // Hero
    "hero.badge": "Sẵn sàng cho cơ hội thực tập",
    "hero.hello": "Xin chào, tôi là<br />",
    "hero.desc": "Sinh viên năm 3 ngành CNTT tại <strong>PTIT</strong>, đam mê phát triển Backend với <span class=\"highlight\">NestJS</span> & <span class=\"highlight\">TypeScript</span>. Có kinh nghiệm xây dựng hệ thống E-Commerce production-ready với kiến trúc <span class=\"highlight\">Monolithic</span>.",
    "hero.btn.projects": "Xem dự án",
    "hero.btn.cv": "Tải CV",
    "hero.btn.contact": "Liên hệ",
    "hero.scroll": "Cuộn xuống",
    
    // About
    "about.tag": "[ 01 ] 概要 — Giới thiệu",
    "about.title": "Về tôi",
    "about.p1": "Tôi là sinh viên năm 3 ngành Công nghệ Thông tin tại <strong>Học viện Công nghệ Bưu chính Viễn thông (PTIT)</strong>. Với niềm đam mê mãnh liệt về phát triển Backend, tôi đã tự học và xây dựng hoàn chỉnh hệ thống E-Commerce với kiến trúc production-ready.",
    "about.p2": "Toàn bộ kiến thức về NestJS, BullMQ, VNPay, kiến trúc Worker đều được tôi tự học qua tài liệu chính thức bằng tiếng Anh. Tôi mong muốn được thực tập tại môi trường chuyên nghiệp để phát triển kỹ năng và đóng góp giá trị cho team.",
    "about.edu": "Học vấn",
    "about.location": "Vị trí",
    "about.goal": "Mục tiêu",
    "about.hanoi": "Hà Nội, Việt Nam",
    
    // Skills
    "skills.tag": "[ 02 ] 技術 — Kỹ năng",
    "skills.title": "Kỹ năng kỹ thuật",
    "skills.lang": "Ngôn ngữ",
    "skills.mq": "Caching & Message Queue",
    "skills.auth": "Authentication",
    "skills.tools": "Công cụ & Khác",
    "skills.deep": "Kiến thức chuyên sâu",
    
    // Experience
    "exp.tag": "[ 03 ] 経験 — Hành trình",
    "exp.title": "Kinh nghiệm & Học vấn",
    "exp.edu_badge": "Học vấn",
    "exp.project_badge": "Dự án cá nhân",
    "exp.soft_badge": "Kỹ năng mềm",
    "exp.uni_title": "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
    "exp.uni_role": "Kĩ Sư Công nghệ Thông tin — Sinh viên năm 3",
    "exp.uni_1": "Cơ sở dữ liệu",
    "exp.uni_2": "Mạng máy tính",
    "exp.uni_3": "Lập trình hướng đối tượng",
    "exp.uni_4": "Cấu trúc dữ liệu & Giải thuật",
    "exp.proj_desc": "Xây dựng từ đầu hệ thống API Backend thương mại điện tử hoàn chỉnh với kiến trúc production-ready, tích hợp thanh toán VNPay, xử lý bất đồng bộ BullMQ và hệ thống xác thực JWT + Redis.",
    "exp.soft_title": "Tự học & Nghiên cứu",
    "exp.soft_1": "Toàn bộ kiến thức NestJS, BullMQ, VNPay, kiến trúc Worker đều tự học qua tài liệu chính thức (tiếng Anh)",
    "exp.soft_2": "Đọc hiểu tài liệu kỹ thuật tiếng Anh — NestJS, Prisma, BullMQ, Redis",
    "exp.soft_3": "Tư duy phân tích và giải quyết vấn đề (thiết kế Idempotent, Serializable Transaction, Worker tách biệt)",
    "exp.soft_4": "Viết tài liệu kỹ thuật chi tiết (README, sequence diagram, architecture diagram)",
    
    // Projects
    "proj.tag": "[ 04 ] 開発 — Dự án",
    "proj.title": "Dự án nổi bật",
    "proj.subtitle": "Hệ thống Backend E-Commerce hoàn chỉnh, thiết kế theo kiến trúc production-ready",
    "proj.f1.title": "Authentication & Authorization",
    "proj.f1.1": "<strong>Stateless JWT</strong> với <strong>Redis Blacklist</strong> — thu hồi token tức thì",
    "proj.f1.2": "<strong>Token Rotation</strong> cho Refresh Token — chống Replay Attack",
    "proj.f1.3": "<strong>RBAC đầy đủ</strong> (3 tầng Guard): AuthGuard → PermissionsGuard → SuperAdminGuard",
    "proj.f1.4": "<strong>Forgot Password</strong> qua OTP — lưu Redis với TTL auto-expire",
    "proj.f2.title": "Checkout Engine & Thanh toán",
    "proj.f2.1": "Checkout trong <strong>Serializable Transaction</strong> — đảm bảo Data Consistency",
    "proj.f2.2": "Tích hợp cổng <strong>VNPay</strong>: Return URL + IPN Webhook, kiến trúc <strong>Idempotent</strong>",
    "proj.f2.3": "Sử dụng <strong>Prisma.Decimal</strong> (không dùng Number) — tránh sai số floating-point",
    "proj.f2.4": "Xử lý thanh toán thất bại: tự động hoàn kho + hủy đơn trong transaction",
    "proj.f3.title": "Message Queue & Worker Architecture",
    "proj.f3.1": "<strong>BullMQ</strong> (backed by Redis) — xử lý bất đồng bộ, không block API",
    "proj.f3.2": "<strong>2 Queue riêng biệt</strong>: mail_queue (6 loại email) + order_queue (auto-cancel 15 phút)",
    "proj.f3.3": "Worker tách biệt API Server — <strong>scale độc lập</strong> theo Competing Consumers",
    "proj.f3.4": "Worker crash không ảnh hưởng API Server — <strong>Fault Isolation</strong>",
    "proj.f4.title": "Quản lý Sản phẩm & Admin",
    "proj.f4.1": "CRUD sản phẩm: hình ảnh gallery, giá khuyến mãi, tìm kiếm + filter + phân trang",
    "proj.f4.2": "Giỏ hàng với <strong>Upsert + Atomic Increment</strong> — chống Lost Update",
    "proj.f4.3": "Admin Dashboard APIs với phân quyền chi tiết",
    "proj.f4.4": "State Machine đơn hàng: PENDING → CONFIRMED → SHIPPING → DELIVERED / CANCELLED",
    "proj.arch": "Kiến trúc hệ thống",
    
    // Contact & Footer
    "contact.tag": "[ 05 ] 連絡先 — Liên hệ",
    "contact.title": "Kết nối với tôi",
    "contact.desc": "Tôi luôn sẵn sàng cho cơ hội thực tập và các dự án mới. Hãy liên hệ nếu bạn muốn trao đổi thêm!",
    "contact.phone": "Điện thoại",
    "contact.profile": "Xem Profile",
    "footer.desc": "Thiết kế & Phát triển bởi <strong>Backend Developer</strong> · 2026"
  },
  
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    "hero.badge": "Ready for internship opportunities",
    "hero.hello": "Hello, I am<br />",
    "hero.desc": "3rd-year IT student at <strong>PTIT</strong>, passionate about Backend development with <span class=\"highlight\">NestJS</span> & <span class=\"highlight\">TypeScript</span>. Experienced in building a production-ready E-Commerce system with <span class=\"highlight\">Monolithic</span> architecture.",
    "hero.btn.projects": "View Projects",
    "hero.btn.cv": "Download CV",
    "hero.btn.contact": "Contact",
    "hero.scroll": "Scroll down",
    
    // About
    "about.tag": "[ 01 ] 概要 — About Me",
    "about.title": "About Me",
    "about.p1": "I am a 3rd-year Information Technology student at <strong>Posts and Telecommunications Institute of Technology (PTIT)</strong>. With a strong passion for Backend development, I have self-taught and built a complete E-Commerce system with a production-ready architecture.",
    "about.p2": "All my knowledge about NestJS, BullMQ, VNPay, and Worker architecture is self-taught through official English documentation. I am looking forward to interning in a professional environment to develop my skills and contribute value to the team.",
    "about.edu": "Education",
    "about.location": "Location",
    "about.goal": "Objective",
    "about.hanoi": "Hanoi, Vietnam",
    
    // Skills
    "skills.tag": "[ 02 ] 技術 — Skills",
    "skills.title": "Technical Skills",
    "skills.lang": "Languages",
    "skills.mq": "Caching & Message Queue",
    "skills.auth": "Authentication",
    "skills.tools": "Tools & Others",
    "skills.deep": "In-depth Knowledge",
    
    // Experience
    "exp.tag": "[ 03 ] 経験 — Journey",
    "exp.title": "Experience & Education",
    "exp.edu_badge": "Education",
    "exp.project_badge": "Personal Project",
    "exp.soft_badge": "Soft Skills",
    "exp.uni_title": "Posts and Telecommunications Institute of Technology",
    "exp.uni_role": "IT Engineer — 3rd Year Student",
    "exp.uni_1": "Database Systems",
    "exp.uni_2": "Computer Networks",
    "exp.uni_3": "Object-Oriented Programming",
    "exp.uni_4": "Data Structures & Algorithms",
    "exp.proj_desc": "Built a complete E-commerce Backend API system from scratch with production-ready architecture, integrated VNPay payment, BullMQ asynchronous processing, and JWT + Redis authentication system.",
    "exp.soft_title": "Self-learning & Research",
    "exp.soft_1": "All knowledge of NestJS, BullMQ, VNPay, Worker architecture self-taught via official docs",
    "exp.soft_2": "Reading English technical documentation — NestJS, Prisma, BullMQ, Redis",
    "exp.soft_3": "Analytical thinking and problem solving (Idempotent design, Serializable Transaction, Isolated Worker)",
    "exp.soft_4": "Writing detailed technical documents (README, sequence diagram, architecture diagram)",
    
    // Projects
    "proj.tag": "[ 04 ] 開発 — Projects",
    "proj.title": "Featured Projects",
    "proj.subtitle": "A complete E-Commerce Backend system, designed with a production-ready architecture",
    "proj.f1.title": "Authentication & Authorization",
    "proj.f1.1": "<strong>Stateless JWT</strong> with <strong>Redis Blacklist</strong> — instant token revocation",
    "proj.f1.2": "<strong>Token Rotation</strong> for Refresh Token — prevent Replay Attacks",
    "proj.f1.3": "<strong>Full RBAC</strong> (3 Guard layers): AuthGuard → PermissionsGuard → SuperAdminGuard",
    "proj.f1.4": "<strong>Forgot Password</strong> via OTP — stored in Redis with auto-expire TTL",
    "proj.f2.title": "Checkout Engine & Payment",
    "proj.f2.1": "Checkout in <strong>Serializable Transaction</strong> — ensure Data Consistency",
    "proj.f2.2": "Integrate <strong>VNPay</strong> gateway: Return URL + IPN Webhook, <strong>Idempotent</strong> architecture",
    "proj.f2.3": "Use <strong>Prisma.Decimal</strong> (not Number) — avoid floating-point inaccuracies",
    "proj.f2.4": "Failed payment handling: auto-restock + cancel order in transaction",
    "proj.f3.title": "Message Queue & Worker Architecture",
    "proj.f3.1": "<strong>BullMQ</strong> (backed by Redis) — async processing, non-blocking API",
    "proj.f3.2": "<strong>2 separate Queues</strong>: mail_queue (6 email types) + order_queue (15 min auto-cancel)",
    "proj.f3.3": "Worker isolated from API Server — <strong>independent scaling</strong> via Competing Consumers",
    "proj.f3.4": "Worker crash does not affect API Server — <strong>Fault Isolation</strong>",
    "proj.f4.title": "Product Management & Admin",
    "proj.f4.1": "Product CRUD: image gallery, promo pricing, search + filter + pagination",
    "proj.f4.2": "Cart with <strong>Upsert + Atomic Increment</strong> — prevent Lost Update",
    "proj.f4.3": "Admin Dashboard APIs with detailed role permissions",
    "proj.f4.4": "Order State Machine: PENDING → CONFIRMED → SHIPPING → DELIVERED / CANCELLED",
    "proj.arch": "System Architecture",
    
    // Contact & Footer
    "contact.tag": "[ 05 ] 連絡先 — Contact",
    "contact.title": "Connect with me",
    "contact.desc": "I am always open to internship opportunities and new projects. Feel free to contact me to discuss further!",
    "contact.phone": "Phone",
    "contact.profile": "View Profile",
    "footer.desc": "Designed & Developed by <strong>Backend Developer</strong> · 2026"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) return;
  
  // Save to localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Use innerHTML because some translations contain HTML tags (like <strong>, <span>)
      el.innerHTML = translations[lang][key];
    }
  });

  // Update active state of language toggle button if it exists
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'vi' ? 'VI' : 'EN';
  }
}

// Initialize language on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(savedLang);
});
