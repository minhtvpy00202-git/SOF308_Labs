<template>
  <div class="bai4-container">
    <!-- Hiển thị form đăng nhập nếu chưa đăng nhập -->
    <Bai4Login 
      v-if="!isLoggedIn" 
      @login="handleLogin"
    />
    
    <!-- Hiển thị phần bình luận nếu đã đăng nhập -->
    <Bai4Comment 
      v-else 
      :username="currentUser"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Bai4Login from './Bai4Login.vue'
import Bai4Comment from './Bai4Comment.vue'

const isLoggedIn = ref(false)
const currentUser = ref('')

const handleLogin = (username: string) => {
  currentUser.value = username
  isLoggedIn.value = true
}
</script>

<style scoped>
.bai4-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>
