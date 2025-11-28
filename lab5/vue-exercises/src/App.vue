<script setup lang="ts">
import { ref } from 'vue'
import Bai1 from './components/Bai1.vue'
import Bai2 from './components/Bai2.vue'
import Bai3 from './components/Bai3.vue'
import Bai4 from './components/Bai4.vue'

const currentPage = ref('home')

const goToPage = (page: string) => {
  currentPage.value = page
}

const goHome = () => {
  currentPage.value = 'home'
}
</script>

<template>
  <div class="container">
    <h1 class="text-center my-5">Bài tập Vue.js</h1>
    
    <!-- Trang chủ -->
    <div v-if="currentPage === 'home'" class="text-center">
      <h2 class="mb-4">Chọn bài tập</h2>
      <div class="d-grid gap-3 col-6 mx-auto">
        <button @click="goToPage('bai1')" class="btn btn-primary btn-lg">
          Bài 1: Làm quen cơ bản với sự kiện và binding động
        </button>
        <button @click="goToPage('bai2')" class="btn btn-success btn-lg">
          Bài 2: Two-way Data Binding với v-model
        </button>
        <button @click="goToPage('bai3')" class="btn btn-info btn-lg">
          Bài 3: Nhập và hiển thị thông tin cá nhân
        </button>
        <button @click="goToPage('bai4')" class="btn btn-warning btn-lg">
          Bài 4: Ứng dụng tạo và hiển thị danh sách bài viết
        </button>
      </div>
    </div>

    <!-- Bài 1 -->
    <div v-if="currentPage === 'bai1'" class="card">
      <div class="card-body">
        <Bai1 />
        <button @click="goHome" class="btn btn-secondary mt-3">
          ← Quay lại trang chủ
        </button>
      </div>
    </div>

    <!-- Bài 2 -->
    <div v-if="currentPage === 'bai2'" class="card">
      <div class="card-body">
        <Bai2 />
        <button @click="goHome" class="btn btn-secondary mt-3">
          ← Quay lại trang chủ
        </button>
      </div>
    </div>

    <!-- Bài 3 -->
    <div v-if="currentPage === 'bai3'" class="card">
      <div class="card-body">
        <Bai3 />
        <button @click="goHome" class="btn btn-secondary mt-3">
          ← Quay lại trang chủ
        </button>
      </div>
    </div>

    <!-- Bài 4 -->
    <div v-if="currentPage === 'bai4'" class="card">
      <div class="card-body">
        <Bai4 />
        <button @click="goHome" class="btn btn-secondary mt-3">
          ← Quay lại trang chủ
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
