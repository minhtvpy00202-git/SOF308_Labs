<template>
  <div class="p-5">
    <h2 class="mb-4">Bài 1: Làm quen cơ bản với sự kiện và binding động</h2>
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Thông điệp ban đầu');

const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!';
};
</script>
