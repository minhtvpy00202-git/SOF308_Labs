<script setup lang="ts">
import { ref, computed } from 'vue';

const diem = ref<number | null>(null);

const xepLoai = computed(() => {
  if (diem.value === null || diem.value === undefined) return '';

  const d = diem.value;

  if (d < 5.0) return 'Yếu';
  else if (d < 6.5) return 'Trung bình';
  else if (d < 8.0) return 'Khá';
  else if (d < 9.0) return 'Giỏi';
  else return 'Xuất sắc';
});
</script>

<template>
  <div class="container">
    <router-link to="/" class="back-link">← Quay lại trang chủ</router-link>

    <h1>Nhập điểm của bạn:</h1>
    <input
      v-model.number="diem"
      type="number"
      step="0.1"
      min="0"
      max="10"
      class="input-diem"
      placeholder="Nhập điểm (0-10)"
    />

    <div v-if="xepLoai" class="ket-qua">
      {{ xepLoai }}
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

.input-diem {
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
</style>
