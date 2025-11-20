<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <!-- Navbar chính của app -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
      <span class="navbar-brand">Lab3 - Vue</span>
      <div class="ms-auto">
        <RouterLink class="btn btn-outline-primary me-2" to="/">Index</RouterLink>
        <RouterLink class="btn btn-outline-success me-2" to="/post">Post</RouterLink>
        <RouterLink class="btn btn-outline-info" to="/postdetail">PostDetail</RouterLink>
      </div>
    </nav>

    <!-- Nội dung theo từng trang -->
    <main class="container my-4">
      <RouterView />
    </main>

   
  </div>
</template>

<style scoped>
/* tuỳ chỉnh nếu cần */
</style>
