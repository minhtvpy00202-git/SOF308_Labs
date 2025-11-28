<template>
  <div class="p-5">
    <h2 class="mb-4">Bài 2: Two-way Data Binding với v-model</h2>
    <input 
      v-model="userInput" 
      placeholder="Nhập dữ liệu vào đây" 
      class="form-control mb-3" 
    />
    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userInput = ref('FPL');
</script>
