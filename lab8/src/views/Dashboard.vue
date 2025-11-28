<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1>Dashboard</h1>
      <button @click="handleLogout" class="btn-logout">Đăng xuất</button>
    </div>
    
    <p class="welcome">Chào mừng, <strong>{{ username }}</strong>!</p>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <h3>Bài viết</h3>
        <p class="stat-number">12</p>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">👁️</div>
        <h3>Lượt xem</h3>
        <p class="stat-number">1,234</p>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">💬</div>
        <h3>Bình luận</h3>
        <p class="stat-number">89</p>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">❤️</div>
        <h3>Lượt thích</h3>
        <p class="stat-number">456</p>
      </div>
    </div>
    
    <div class="recent-activity">
      <h2>Hoạt động gần đây</h2>
      <div class="activity-list">
        <div class="activity-item">
          <span class="activity-time">2 giờ trước</span>
          <p>Bạn đã đăng bài viết mới: "8 loại rau củ quả giàu canxi"</p>
        </div>
        <div class="activity-item">
          <span class="activity-time">5 giờ trước</span>
          <p>Bạn đã nhận được 15 lượt thích cho bài viết</p>
        </div>
        <div class="activity-item">
          <span class="activity-time">1 ngày trước</span>
          <p>Bạn đã trả lời 3 bình luận</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')

onMounted(() => {
  username.value = localStorage.getItem('username') || 'User'
})

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('username')
  router.push({ name: 'Login' })
}
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5rem;
  color: #1f2937;
}

.btn-logout {
  background-color: #dc2626;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-logout:hover {
  background-color: #b91c1c;
}

.welcome {
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 40px;
}

.welcome strong {
  color: #3b82f6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.stat-card h3 {
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 10px;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
}

.recent-activity {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.recent-activity h2 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 20px;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.activity-item {
  padding: 15px;
  background: #f9fafb;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.activity-time {
  color: #9ca3af;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 5px;
}

.activity-item p {
  color: #374151;
  margin: 0;
}
</style>
