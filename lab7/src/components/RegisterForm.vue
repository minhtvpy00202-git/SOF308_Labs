<template>
  <div class="register-container">
    <div class="form-section">
      <h2>Form Đăng Ký</h2>
      
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Họ tên:</label>
          <input v-model="formData.fullName" type="text" placeholder="Tèo" />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input v-model="formData.email" type="email" placeholder="tien@gmail.com" />
        </div>

        <div class="form-group">
          <label>Mật khẩu:</label>
          <input v-model="formData.password" type="password" placeholder="•••" />
        </div>

        <div class="form-group">
          <label>Ngày sinh:</label>
          <input v-model="formData.birthDate" type="date" />
        </div>

        <div class="form-group">
          <label>Giới tính:</label>
          <div class="radio-group">
            <label>
              <input v-model="formData.gender" type="radio" value="Nam" />
              Nam
            </label>
            <label>
              <input v-model="formData.gender" type="radio" value="Nữ" />
              Nữ
            </label>
            <label>
              <input v-model="formData.gender" type="radio" value="Khác" />
              Khác
            </label>
          </div>
        </div>

        <div class="form-group">
          <label>Ngôn ngữ:</label>
          <div class="checkbox-group">
            <label>
              <input v-model="formData.languages" type="checkbox" value="Tiếng Việt" />
              Tiếng Việt
            </label>
            <label>
              <input v-model="formData.languages" type="checkbox" value="Tiếng Anh" />
              Tiếng Anh
            </label>
            <label>
              <input v-model="formData.languages" type="checkbox" value="Tiếng Nhật" />
              Tiếng Nhật
            </label>
          </div>
        </div>

        <button type="submit" class="btn-register">Đăng ký</button>
      </form>
    </div>

    <div v-if="isRegistered" class="info-section">
      <h2>Thông tin đã đăng ký:</h2>
      <div class="info-item">
        <strong>Họ tên:</strong> {{ formData.fullName }}
      </div>
      <div class="info-item">
        <strong>Email:</strong> {{ formData.email }}
      </div>
      <div class="info-item">
        <strong>Ngày sinh:</strong> {{ formData.birthDate }}
      </div>
      <div class="info-item">
        <strong>Giới tính:</strong> {{ formData.gender }}
      </div>
      <div class="info-item">
        <strong>Ngôn ngữ:</strong> {{ formData.languages.join(', ') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isRegistered = ref(false)

const formData = reactive({
  fullName: '',
  email: '',
  password: '',
  birthDate: '',
  gender: 'Nam',
  languages: [] as string[]
})

const handleRegister = () => {
  if (formData.fullName && formData.email && formData.password) {
    isRegistered.value = true
  }
}
</script>

<style scoped>
.register-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.form-section {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.radio-group,
.checkbox-group {
  display: flex;
  gap: 20px;
}

.radio-group label,
.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: normal;
  cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
  width: auto;
  cursor: pointer;
}

.btn-register {
  background-color: #2563eb;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
}

.btn-register:hover {
  background-color: #1d4ed8;
}

.info-section {
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.info-item {
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
  font-size: 1.1rem;
}

.info-item:last-child {
  border-bottom: none;
}

.info-item strong {
  color: #374151;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .register-container {
    grid-template-columns: 1fr;
  }
}
</style>
