<template>
  <div class="home-page">
    <h1>Bài Tập Lab 7 - Vue.js</h1>
    <p class="subtitle">Chọn bài tập bạn muốn xem:</p>
    
    <div class="exercise-grid">
      <div class="exercise-card" @click="$emit('navigate', 'bai1')">
        <div class="card-number">01</div>
        <h3>Quản lý công việc</h3>
        <p>Tạo ứng dụng quản lý công việc với form thêm mới và xóa công việc</p>
        <div class="card-footer">
          <span class="badge">Events</span>
          <span class="badge">v-model</span>
        </div>
      </div>

      <div class="exercise-card" @click="$emit('navigate', 'bai2')">
        <div class="card-number">02</div>
        <h3>Form đăng nhập</h3>
        <p>Form đăng nhập với validation email và mật khẩu</p>
        <div class="card-footer">
          <span class="badge">Validation</span>
          <span class="badge">v-if</span>
        </div>
      </div>

      <div class="exercise-card" @click="$emit('navigate', 'bai3')">
        <div class="card-number">03</div>
        <h3>Form đăng ký</h3>
        <p>Form đăng ký người dùng với nhiều loại input khác nhau</p>
        <div class="card-footer">
          <span class="badge">Binding</span>
          <span class="badge">Forms</span>
        </div>
      </div>

      <div class="exercise-card" @click="$emit('navigate', 'bai4')">
        <div class="card-number">04</div>
        <h3>Bình luận bài viết</h3>
        <p>Ứng dụng bình luận với giao tiếp giữa các component</p>
        <div class="card-footer">
          <span class="badge">Props</span>
          <span class="badge">Emit</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  navigate: [page: string]
}>()
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 50px;
}

.exercise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.exercise-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.exercise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #2563eb;
}

.card-number {
  position: absolute;
  top: -10px;
  right: 20px;
  font-size: 5rem;
  font-weight: bold;
  color: #f3f4f6;
  line-height: 1;
}

h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
}

p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.card-footer {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.badge {
  background-color: #dbeafe;
  color: #1e40af;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}
</style>
