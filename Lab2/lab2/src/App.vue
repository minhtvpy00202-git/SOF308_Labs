<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container mt-5 ">

    <h2>Lab 2</h2>
    <hr>

    <!-- MENU -->
    <nav class="mb-4">
  <router-link to="/bai1" class="btn nav-btn me-2">Bài 1 - Table</router-link>
  <router-link to="/bai2" class="btn nav-btn">Bài 2, 3, 4 - Form + Tab</router-link>
</nav>


    <!-- Khu vực hiển thị bài -->
    <router-view></router-view>

  </div>
</template>

<style scoped>
/* Nút mặc định (chưa được chọn) */
.nav-btn {
  background-color: white;
  color: black;
  border: 1px solid black;
}

/* Nút đang được chọn */
.router-link-exact-active {
  background-color: black !important;
  color: white !important;
  border: 1px solid black !important;
}
</style>


