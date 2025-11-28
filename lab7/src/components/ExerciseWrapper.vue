<template>
  <div class="exercise-wrapper">
    <button @click="$emit('back')" class="btn-back">
      ← Quay lại trang chủ
    </button>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  back: []
}>()
</script>

<style scoped>
.exercise-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.btn-back {
  background-color: #6b7280;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 30px;
  transition: background-color 0.3s;
}

.btn-back:hover {
  background-color: #4b5563;
}
</style>
