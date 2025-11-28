<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="container">
    <TheNavbar />

    <section class="row mt-3">
      <div class="col-sm-4">
        <Sidebar />
      </div>

      <MainContent />
    </section>

    <TheFooter />
  </div>
</template>

<style scoped>
.text-justify {
  text-align: justify;
}
</style>
