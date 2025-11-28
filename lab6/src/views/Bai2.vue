<script setup lang="ts">
import { ref, computed } from 'vue';

const thang = ref<number | null>(null);

const mua = computed(() => {
  if (thang.value === null || thang.value === undefined) return '';

  const t = thang.value;

  if (t < 1 || t > 12) {
    return 'Vui lòng nhập tháng từ 1 đến 12!';
  } else if (t >= 1 && t <= 3) {
    return 'Mùa xuân';
  } else if (t >= 4 && t <= 6) {
    return 'Mùa hạ';
  } else if (t >= 7 && t <= 9) {
    return 'Mùa thu';
  } else {
    return 'Mùa đông';
  }
});
</script>

<template>
  <div class="container">
    <router-link to="/" class="back-link">← Quay lại trang chủ</router-link>

    <h1>Nhập tháng:</h1>
    <input
      v-model.number="thang"
      type="number"
      min="1"
      max="12"
      class="input-thang"
      placeholder="Nhập tháng (1-12)"
    />

    <div v-if="mua" class="ket-qua" :class="{ error: thang && (thang < 1 || thang > 12) }">
      {{ mua }}
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  border: 2px solid #333;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #42b883;
  text-decoration: none;
  font-size: 1.1rem;
}

.back-link:hover {
  text-decoration: underline;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
}

.input-thang {
  width: 100%;
  max-width: 300px;
  padding: 15px;
  font-size: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

.ket-qua {
  font-size: 2rem;
  font-weight: normal;
  color: #333;
  margin-top: 20px;
}

.ket-qua.error {
  color: #e74c3c;
}
</style>
