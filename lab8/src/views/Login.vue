<template>
  <div class="login-page">
    <div class="login-box">
      <h1>Đăng nhập</h1>
      <p class="subtitle">Đăng nhập để truy cập Dashboard</p>
      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Tên đăng nhập:</label>
          <input 
            v-model="username" 
            type="text" 
            placeholder="Nhập tên đăng nhập"
            required
          />
        </div>
        
        <div class="form-group">
          <label>Mật khẩu:</label>
          <input 
            v-model="password" 
            type="password" 
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
        
        <button type="submit" class="btn-login">Đăng nhập</button>
      </form>
      
      <div class="hint">
        <p>💡 Gợi ý: Nhập bất kỳ tên đăng nhập và mật khẩu để đăng nhập</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

const handleLogin = () => {
  if (username.value && password.value) {
    // Giả lập đăng nhập thành công
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('username', username.value)
    
    // Chuyển hướng đến Dashboard
    router.push({ name: 'Dashboard' })
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 20px;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h1 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 10px;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #6b7280;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
}

.btn-login {
  width: 100%;
  background-color: #3b82f6;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
}

.btn-login:hover {
  background-color: #2563eb;
}

.hint {
  margin-top: 20px;
  padding: 15px;
  background-color: #fef3c7;
  border-radius: 6px;
}

.hint p {
  color: #92400e;
  font-size: 0.9rem;
  margin: 0;
}
</style>
