<template>
  <div class="home">
    <h1>Chào mừng đến với MyBlog</h1>
    <p class="subtitle">Nơi chia sẻ những câu chuyện thú vị</p>
    
    <div class="nav-cards">
      <router-link :to="{ name: 'BlogList' }" class="nav-card">
        <h3>📝 Danh sách Blog</h3>
        <p>Xem tất cả các bài viết</p>
      </router-link>

      <router-link :to="{ name: 'UserProfile' }" class="nav-card">
        <h3>👤 Thông tin cá nhân</h3>
        <p>Xem hồ sơ của bạn</p>
      </router-link>

      <router-link :to="{ name: 'Dashboard' }" class="nav-card">
        <h3>📊 Dashboard</h3>
        <p>Bảng điều khiển</p>
      </router-link>

      <router-link :to="{ name: 'Login' }" class="nav-card">
        <h3>🔐 Đăng nhập</h3>
        <p>Đăng nhập vào hệ thống</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 40px 20px;
}

h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 50px;
}

.nav-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.nav-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 30px;
  text-decoration: none;
  transition: all 0.3s;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.nav-card h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 10px;
}

.nav-card p {
  color: #6b7280;
}
</style>
