<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link :to="{ name: 'Home' }" class="logo">
          📝 MyBlog
        </router-link>
        
        <div class="nav-links">
          <router-link :to="{ name: 'Home' }">Trang chủ</router-link>
          <router-link :to="{ name: 'BlogList' }">Blog</router-link>
          <router-link :to="{ name: 'UserProfile' }">Hồ sơ</router-link>
          <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
          <router-link :to="{ name: 'Login' }" class="btn-login">Đăng nhập</router-link>
        </div>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view></router-view>
    </main>
    
    <footer class="footer">
      <p>&copy; 2025 MyBlog. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f3f4f6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3b82f6;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s;
}

.nav-links a:hover {
  color: #3b82f6;
  background-color: #eff6ff;
}

.nav-links a.router-link-active {
  color: #3b82f6;
  background-color: #eff6ff;
}

.btn-login {
  background-color: #3b82f6 !important;
  color: white !important;
}

.btn-login:hover {
  background-color: #2563eb !important;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.footer {
  background: white;
  padding: 20px;
  text-align: center;
  color: #6b7280;
  border-top: 1px solid #e5e7eb;
}
</style>
