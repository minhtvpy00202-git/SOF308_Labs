<script setup lang="ts">
</script>

<template>
  <div class="home">
    <h1>Trang chủ - Lab 6</h1>
    <div class="links">
      <router-link to="/bai1" class="link-button">Bài 1: Xếp loại học sinh</router-link>
      <router-link to="/bai2" class="link-button">Bài 2: Xác định mùa</router-link>
      <router-link to="/bai3" class="link-button">Bài 3: Danh sách bài viết</router-link>
      <router-link to="/bai4" class="link-button">Bài 4: Quản lý học sinh (CRUD)</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.link-button {
  display: block;
  width: 300px;
  padding: 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;
  transition: background-color 0.3s;
}

.link-button:hover {
  background-color: #35a372;
}
</style>
