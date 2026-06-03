# LiteratureFlow VN — Học Ngữ văn kiểu Duolingo

Ứng dụng web học **Tiếng Việt / Ngữ văn** theo phong cách vi kỹ năng: học bài ngắn, luyện đọc hiểu, **phản hồi và phân tích lỗi sai tức thì**, kèm trực quan hóa văn học và game hóa.

## Chương trình

### Lớp 1 — SGK *Kết nối tri thức với cuộc sống* (141 bài học)

| Phần | Nội dung |
|------|----------|
| **Tập 1** | 80 bài học vần (Tuần 1–17) + 16 truyện kể xen kẽ + 4 bài ôn tập HK1 |
| **Tập 2** | 8 chủ điểm luyện tập tổng hợp (53 bài) + 4 bài ôn tập cuối năm |

**Tập 1 — Chào em vào lớp 1:** Học âm, chữ, vần; ôn tập và kể chuyện (Búp bê và dế mèn, Sừng và chân, …).

**Tập 2 — 8 chủ điểm:**
1. Tôi và các bạn
2. Mái ấm gia đình
3. Mái trường mến yêu
4. Điều em cần biết
5. Bài học từ cuộc sống
6. Thiên nhiên kì thú
7. Thế giới trong mắt em
8. Đất nước và con người

### Lớp 2 — SGK *Kết nối tri thức với cuộc sống* (66 bài học)

| Phần | Nội dung |
|------|----------|
| **Tập 1** | 32 bài — 4 chủ điểm + ôn giữa/cuối HK1 |
| **Tập 2** | 30 bài — 5 chủ điểm + ôn giữa/cuối HK2 |

**Tập 1:** Em lớn lên từng ngày · Đi học vui sao · Niềm vui tuổi thơ · Mái ấm gia đình

**Tập 2:** Vẻ đẹp quanh em · Hành tinh xanh của em · Giao tiếp và kết nối · Con người Việt Nam · Việt Nam quê hương em

### Lớp 3 — SGK *Kết nối tri thức với cuộc sống* (66 bài học)

| Phần | Nội dung |
|------|----------|
| **Tập 1** | 32 bài — 4 chủ điểm + ôn giữa/cuối HK1 |
| **Tập 2** | 30 bài — 4 chủ điểm + ôn giữa/cuối HK2 |

**Tập 1:** Những trải nghiệm thú vị · Cổng trường mở rộng · Mái nhà yêu thương · Cộng đồng gắn bó

**Tập 2:** Những sắc màu thiên nhiên · Bài học từ cuộc sống · Đất nước ngàn năm · Trái đất của chúng mình

### Lớp 4 — SGK *Kết nối tri thức với cuộc sống* (66 bài học)

| Phần | Nội dung |
|------|----------|
| **Tập 1** | 32 bài — 4 chủ điểm + ôn giữa/cuối HK1 |
| **Tập 2** | 30 bài — 4 chủ điểm + ôn giữa/cuối HK2 |

**Tập 1:** Mỗi người một vẻ · Trải nghiệm và khám phá · Niềm vui sáng tạo · Chắp cánh ước mơ

**Tập 2:** Sống để yêu thương · Uống nước nhớ nguồn · Quê hương trong tôi · Vì một thế giới bình yên

### Lớp 5 — SGK *Kết nối tri thức với cuộc sống* (66 bài học)

| Phần | Nội dung |
|------|----------|
| **Tập 1** | 32 bài — 4 chủ điểm + ôn giữa/cuối HK1 |
| **Tập 2** | 30 bài — 4 chủ điểm + ôn giữa/cuối HK2 |

**Tập 1:** Thế giới tuổi thơ · Thiên nhiên kì thú · Trên con đường học tập · Nghệ thuật muôn màu

**Tập 2:** Vẻ đẹp cuộc sống · Hương sắc trăm miền · Tiếp bước cha ông · Thế giới của chúng ta

### Lớp 6–9 — SGK *Kết nối tri thức với cuộc sống* (12 bài/lớp)

Mỗi lớp THCS: **10 chủ đề/bài học** (Tập 1: Bài 1–5 · Tập 2: Bài 6–10) + **2 ôn tập** (HK1, HK2).

| Lớp | Chủ đề tiêu biểu |
|-----|------------------|
| **6** | Tôi và các bạn · Gõ cửa trái tim · Quê hương yêu dấu · Sơn Tinh, Thủy Tinh · Cuốn sách tôi yêu |
| **7** | Bầu trời tuổi thơ · Khúc nhạc tâm hồn · Bài học cuộc sống · Hòa điệu với tự nhiên · Trang sách và cuộc sống |
| **8** | Câu chuyện của lịch sử · Vẻ đẹp cổ điển · Lời sông núi · Chân dung cuộc sống · Sách – người bạn đồng hành |
| **9** | Thế giới kì ảo · Hồn nước nằm trong tiếng mẹ cha · Đối diện với nỗi đau · Tiếng nói của lương tri · Văn học - lịch sử tâm hồn |

### Ôn hè lớp 6→7

6 chủ đề + 6 đề tổng hợp (sao thưởng, combo XP)

## Chạy local

```bash
cd literatureflow
python3 -m http.server 8080
```

## Sinh lại nội dung

```bash
node scripts/generate-literature-content.mjs
```

Chỉnh sửa chương trình: `scripts/grade1-kntt-curriculum.mjs` … `grade9-kntt-curriculum.mjs`

## Cấu trúc

```
literatureflow/
├── scripts/
│   ├── generate-literature-content.mjs
│   ├── kntt-primary-shared.mjs      # helpers lớp 1–5
│   ├── kntt-secondary-shared.mjs    # helpers lớp 6–9
│   └── grade1-kntt-curriculum.mjs   # SGK TV1–9 KNT
│       … grade9-kntt-curriculum.mjs
├── data/                            # skills, lessons, questions, …
└── modules/visualization.js         # syllableChart, plotDiagram, …
```

## Công nghệ

SPA ES modules, hash router, PWA offline. Trạng thái: `localStorage` key `literatureflow_accounts`.
