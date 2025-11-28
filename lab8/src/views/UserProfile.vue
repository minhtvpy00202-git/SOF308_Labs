<template>
  <div class="user-profile">
    <h1>Thông tin người dùng</h1>
    
    <div class="profile-nav">
      <router-link :to="{ name: 'ProfileInfo' }" class="nav-link">
        Thông tin cơ bản
      </router-link>
      <router-link :to="{ name: 'ProfileSettings' }" class="nav-link">
        Cài đặt
      </router-link>
    </div>
    
    <div class="profile-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.user-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 30px;
  text-align: center;
}

.profile-nav {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  border-bottom: 2px solid #e5e7eb;
}

.nav-link {
  padding: 15px 30px;
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.nav-link:hover {
  color: #3b82f6;
}

.nav-link.router-link-active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}

.profile-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
