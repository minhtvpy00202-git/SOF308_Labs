<template>
  <div class="profile-settings">
    <h2>Cài đặt người dùng</h2>
    
    <form @submit.prevent="saveSettings">
      <div class="form-group">
        <label>Ngôn ngữ:</label>
        <select v-model="settings.language">
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
      </div>
      
      <div class="form-group">
        <label>Chế độ hiển thị:</label>
        <select v-model="settings.theme">
          <option value="light">Sáng</option>
          <option value="dark">Tối</option>
          <option value="auto">Tự động</option>
        </select>
      </div>
      
      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" v-model="settings.notifications" />
          Nhận thông báo qua email
        </label>
      </div>
      
      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" v-model="settings.newsletter" />
          Đăng ký nhận bản tin
        </label>
      </div>
      
      <button type="submit" class="btn-save">Lưu cài đặt</button>
    </form>
    
    <div v-if="saved" class="success-message">
      ✓ Đã lưu cài đặt thành công!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const settings = reactive({
  language: 'vi',
  theme: 'light',
  notifications: true,
  newsletter: false
})

const saved = ref(false)

const saveSettings = () => {
  saved.value = true
  setTimeout(() => {
    saved.value = false
  }, 3000)
}
</script>

<style scoped>
h2 {
  font-size: 1.8rem;
  color: #1f2937;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

select {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.btn-save {
  background-color: #3b82f6;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
}

.btn-save:hover {
  background-color: #2563eb;
}

.success-message {
  margin-top: 20px;
  padding: 15px;
  background-color: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  font-weight: 500;
}
</style>
