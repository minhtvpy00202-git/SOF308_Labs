<script setup lang="ts">

defineProps<{
  title: string;
  excerpt?: string;
  img?: string;
  comments?: number;
}>();
</script>

<template>
  <div class="card text-start h-100">
    <div class="card-body pb-2 text-justify">
      <h5 class="card-title mb-0">
        <a href="#" class="text-decoration-none text-dark fw-semibold">
          {{ title }} <i class="fa-solid fa-message ms-1"></i>{{ comments ?? 0 }}
        </a>
      </h5>
    </div>
    <img :src="img" class="card-img-top" alt="" v-if="img">
    <div class="card-body text-justify pt-2">
      <p class="card-text">{{ excerpt }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.card-img-top {
  max-height: 140px;
  object-fit: contain;
}
</style>
