<template>
  <div class="profile-info">
    <h2>Thông tin cơ bản</h2>
    
    <div class="info-grid">
      <div class="info-item">
        <label>Họ và tên:</label>
        <p>{{ userInfo.name }}</p>
      </div>
      
      <div class="info-item">
        <label>Email:</label>
        <p>{{ userInfo.email }}</p>
      </div>
      
      <div class="info-item">
        <label>Số điện thoại:</label>
        <p>{{ userInfo.phone }}</p>
      </div>
      
      <div class="info-item">
        <label>Địa chỉ:</label>
        <p>{{ userInfo.address }}</p>
      </div>
      
      <div class="info-item">
        <label>Ngày tham gia:</label>
        <p>{{ userInfo.joinDate }}</p>
      </div>
      
      <div class="info-item">
        <label>Vai trò:</label>
        <p>{{ userInfo.role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userInfo = ref({
  name: 'Nguyễn Văn A',
  email: 'nguyenvana@example.com',
  phone: '0123456789',
  address: 'Hà Nội, Việt Nam',
  joinDate: '01/01/2024',
  role: 'Blogger'
})
</script>

<style scoped>
h2 {
  font-size: 1.8rem;
  color: #1f2937;
  margin-bottom: 30px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.info-item {
  padding: 15px;
  background: #f9fafb;
  border-radius: 8px;
}

.info-item label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.info-item p {
  color: #6b7280;
  font-size: 1.1rem;
}
</style>
