<template>
  <div class="login-box">
    <h2>Đăng Nhập</h2>
    
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label>Tên đăng nhập:</label>
        <input 
          v-model="username" 
          type="text" 
          placeholder="Bình An"
        />
      </div>

      <div class="form-group">
        <label>Mật khẩu:</label>
        <input 
          v-model="password" 
          type="password" 
          placeholder="•••"
        />
      </div>

      <button type="submit" class="btn-login">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  login: [username: string]
}>()

const username = ref('')
const password = ref('')

const handleLogin = () => {
  if (username.value.trim() && password.value.trim()) {
    emit('login', username.value)
  }
}
</script>

<style scoped>
.login-box {
  max-width: 400px;
  border: 2px solid #ddd;
  padding: 30px;
  border-radius: 8px;
  background-color: white;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.btn-login {
  background-color: #2563eb;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
}

.btn-login:hover {
  background-color: #1d4ed8;
}
</style>
