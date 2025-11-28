<template>
  <div class="login-container">
    <!-- Form Đăng nhập -->
    <div v-if="!isLoggedIn" class="login-form">
      <h2>Form Đăng nhập</h2>
      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email:</label>
          <input 
            v-model="email" 
            type="text" 
            placeholder="Nhập email"
            @blur="validateEmail"
          />
          <p v-if="emailError" class="error">{{ emailError }}</p>
        </div>

        <div class="form-group">
          <label>Mật khẩu:</label>
          <input 
            v-model="password" 
            type="password" 
            placeholder="Nhập mật khẩu"
            @blur="validatePassword"
          />
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
        </div>

        <button type="submit" class="btn-login">Đăng nhập</button>
      </form>
    </div>

    <!-- Màn hình sau khi đăng nhập -->
    <div v-else class="welcome-screen">
      <h2>Chào mừng, {{ email }}!</h2>
      <button @click="handleLogout" class="btn-logout">Đăng xuất</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')
const isLoggedIn = ref(false)

const validateEmail = () => {
  if (!email.value.trim()) {
    emailError.value = 'Email không được để trống'
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Email không đúng định dạng'
    return false
  }
  
  emailError.value = ''
  return true
}

const validatePassword = () => {
  if (!password.value.trim()) {
    passwordError.value = 'Mật khẩu không được để trống'
    return false
  }
  
  if (password.value.length < 6) {
    passwordError.value = 'Mật khẩu phải có ít nhất 6 ký tự'
    return false
  }
  
  passwordError.value = ''
  return true
}

const handleLogin = () => {
  const isEmailValid = validateEmail()
  const isPasswordValid = validatePassword()
  
  if (isEmailValid && isPasswordValid) {
    isLoggedIn.value = true
  }
}

const handleLogout = () => {
  isLoggedIn.value = false
  email.value = ''
  password.value = ''
  emailError.value = ''
  passwordError.value = ''
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
}

.login-form {
  border: 2px solid #ddd;
  padding: 30px;
  border-radius: 8px;
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

.error {
  color: #dc2626;
  font-size: 0.9rem;
  margin-top: 5px;
}

.btn-login {
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
}

.btn-login:hover {
  background-color: #1d4ed8;
}

.welcome-screen {
  border: 2px solid #ddd;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
}

.welcome-screen h2 {
  margin-bottom: 20px;
  color: #059669;
}

.btn-logout {
  background-color: #2563eb;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
}

.btn-logout:hover {
  background-color: #1d4ed8;
}
</style>
