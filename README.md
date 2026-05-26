# Personal Portfolio - Backend Developer

Đây là mã nguồn trang web Portfolio cá nhân của tôi (được thiết kế cho vị trí Backend Developer), sở hữu giao diện kết hợp giữa phong cách **Nhật Bản / Cyberpunk** mang tông màu **Xanh Sky (Soft Sky Blue)** và hệ màu **Dracula Theme** nổi tiếng, cùng với khả năng hỗ trợ Đa ngôn ngữ (Tiếng Việt / Tiếng Anh).

## 🌟 Tính năng nổi bật

- **Giao diện Japanese Cyberpunk (Sky Blue & Dracula Theme)**: Thiết kế mang đậm chất tương lai với các góc khối vuông vức (sharp edges), kết hợp khéo léo các chữ Hán (Kanji) đặc trưng như 開発 (Phát triển), 経験 (Kinh nghiệm), 技術 (Kỹ thuật). Hỗ trợ chuyển đổi mượt mà giữa chế độ mặc định (Sky Blue) và chế độ **Dracula Theme** (với tông màu Hồng/Tím nổi bật).
- **Hỗ trợ Đa ngôn ngữ (i18n)**: Tích hợp khả năng chuyển đổi ngôn ngữ tức thì giữa **Tiếng Việt** và **Tiếng Anh** mà không cần tải lại trang. Các tuỳ chọn ngôn ngữ và Theme đều được tự động lưu lại (LocalStorage) cho những lần truy cập sau.
- **Trải nghiệm mượt mà**: Tích hợp thanh điều hướng dính (sticky navbar), hiệu ứng cuộn mượt mà (smooth scrolling), và các hiệu ứng ánh sáng (Neon Glow) tương tác ngay lập tức khi bạn rê chuột.
- **Tối ưu 100% Native**: Xây dựng hoàn toàn từ con số 0 bằng HTML5, CSS3 và Vanilla JavaScript. Không sử dụng thư viện UI nặng nề, đảm bảo tốc độ tải trang và hiệu suất tối đa.
- **Responsive Design**: Tương thích hoàn hảo với mọi kích thước màn hình từ thiết bị di động tới máy tính để bàn.

## 📂 Cấu trúc dự án

- `index.html` - Khung sườn HTML của trang web, chứa toàn bộ nội dung hiển thị (với hệ thống thẻ tag kết hợp Tiếng Việt & Kanji, đồng thời gắn các thuộc tính `data-i18n` phục vụ đa ngôn ngữ).
- `style.css` - Quản lý hệ thống biến (CSS Variables), thiết kế màu sắc Sky Blue, chế độ Dracula Theme, font chữ Noto Sans JP và tất cả các hiệu ứng thị giác mang phong cách Nhật Bản.
- `script.js` - Script xử lý logic tương tác: cuộn trang, hiệu ứng hover, logic lưu trữ và chuyển đổi Theme Dracula.
- `i18n.js` - Module độc lập quản lý từ điển đa ngôn ngữ (VN/EN) và logic chuyển đổi ngôn ngữ linh hoạt.
- `CV_Intern_Backend_Developer.pdf` - File CV PDF tĩnh được thiết kế sẵn (cho phép nhà tuyển dụng tải về trực tiếp từ trang web).
- `avt.jpg` - Ảnh đại diện của dự án.

## 🌐 Xem trực tiếp (Live Preview)

Bạn có thể trải nghiệm trang Portfolio trực tuyến thông qua GitHub Pages tại địa chỉ:
[https://son-uchiha.github.io/Portfolio](https://son-uchiha.github.io/Portfolio)

## 👨‍💻 Về bản thân tôi

Tôi là một Backend Developer (Intern / Fresher) – sinh viên năm 3 ngành Công nghệ Thông tin tại **PTIT**. Tôi có niềm đam mê mãnh liệt trong việc nghiên cứu và xây dựng các hệ thống có kiến trúc đạt chuẩn production-ready. 

Các công nghệ cốt lõi của tôi bao gồm **NestJS**, **TypeScript**, **Redis**, MySQL và các hệ thống Message Queue (điển hình là **BullMQ**). Toàn bộ kiến thức chuyên sâu đều được tôi tự nghiên cứu trực tiếp thông qua tài liệu tài liệu kỹ thuật bằng tiếng Anh.
