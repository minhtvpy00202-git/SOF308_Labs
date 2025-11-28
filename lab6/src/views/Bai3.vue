<script setup lang="ts">
// Import hình ảnh từ thư mục assets
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

interface Article {
  title: string;
  content: string;
  image: string;
}

const items: Article[] = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content:
      'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi…',
    image: img1,
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content:
      'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn…',
    image: img2,
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content:
      'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim…',
    image: img3,
  },
];
</script>

<template>
  <div class="page-container">
    <router-link to="/" class="back-link">← Quay lại trang chủ</router-link>

    <div class="container mt-3">
      <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
      <div class="row">
        <div v-for="(item, index) in items" :key="index" class="col-sm-4">
          <div class="card">
            <img :src="item.image" :alt="item.title" class="card-img" />
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-text">{{ item.content }}</p>
              <button class="btn btn-info">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 20px;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #42b883;
  text-decoration: none;
  font-size: 1.1rem;
}

.back-link:hover {
  text-decoration: underline;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.mt-3 {
  margin-top: 1rem;
}

.text-center {
  text-align: center;
  margin-bottom: 2rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.col-sm-4 {
  flex: 0 0 calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-img {
  width: 100%;
  height: 189.83px;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #333;
}

.card-text {
  flex: 1;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.btn-info:hover {
  background-color: #138496;
}

@media (max-width: 768px) {
  .col-sm-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
