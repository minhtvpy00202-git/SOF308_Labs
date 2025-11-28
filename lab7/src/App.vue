<template>
  <div id="app">
    <!-- Trang chủ -->
    <HomePage v-if="currentPage === 'home'" @navigate="navigateTo" />

    <!-- Bài 1 -->
    <ExerciseWrapper v-else-if="currentPage === 'bai1'" @back="goHome">
      <div class="exercise">
        <h2 class="exercise-title">Bài 1: Quản lý công việc</h2>
        <TaskManager />
      </div>
    </ExerciseWrapper>

    <!-- Bài 2 -->
    <ExerciseWrapper v-else-if="currentPage === 'bai2'" @back="goHome">
      <div class="exercise">
        <h2 class="exercise-title">Bài 2: Form đăng nhập</h2>
        <LoginForm />
      </div>
    </ExerciseWrapper>

    <!-- Bài 3 -->
    <ExerciseWrapper v-else-if="currentPage === 'bai3'" @back="goHome">
      <div class="exercise">
        <h2 class="exercise-title">Bài 3: Form đăng ký người dùng</h2>
        <RegisterForm />
      </div>
    </ExerciseWrapper>

    <!-- Bài 4 -->
    <ExerciseWrapper v-else-if="currentPage === 'bai4'" @back="goHome">
      <div class="exercise">
        <h2 class="exercise-title">Bài 4: Ứng dụng bình luận bài viết</h2>
        <Bai4 />
      </div>
    </ExerciseWrapper>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HomePage from './components/HomePage.vue'
import ExerciseWrapper from './components/ExerciseWrapper.vue'
import TaskManager from './components/TaskManager.vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import Bai4 from './components/Bai4.vue'

const currentPage = ref('home')

const navigateTo = (page: string) => {
  currentPage.value = page
}

const goHome = () => {
  currentPage.value = 'home'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
}

#app {
  padding: 20px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.exercise {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.exercise-title {
  color: #1f2937;
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e5e7eb;
}

.divider {
  height: 30px;
}
</style>
