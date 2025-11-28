<script setup lang="ts">
import { ref } from 'vue'

type Post = {
  title: string
  img: string
  comments: number
}

const posts = ref<Post[]>([
  {
    title: 'Backend Developer Là Gì? Lộ Trình Trở Thành Backend Developer',
    img: 'https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2023%2F09%2Fbackend-developer-la-gi.png&w=640&q=75',
    comments: 30
  },
  {
    title: 'Front End là gì? 11 kỹ năng để trở thành Front End Developer',
    img: 'https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2022%2F09%2FFRONT-END-la--gi-.png&w=640&q=75',
    comments: 28
  },
  {
    title: 'JPA là gì? Giới thiệu về Java Persistence',
    img: 'https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2023%2F10%2FBlog26.jpg&w=640&q=75',
    comments: 15
  },
  {
    title: 'Unit Testing là gì? Cách thực hiện Unit Testing',
    img: 'https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2022%2F06%2F4-1.png&w=640&q=75',
    comments: 12
  }
])
</script>

<template>
  <div class="card">
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="(post, idx) in posts" :key="idx">
        <a href="#" class="d-flex align-items-center gap-3 text-decoration-none text-dark">
          <img :src="post.img" class="rounded" style="width:64px; height:64px; object-fit:cover;" />
          <div>
            <div class="fw-semibold">{{ post.title }}</div>
            <div class="text-muted small"><i class="fa-solid fa-message"></i> {{ post.comments }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-group-item a {
  align-items: center;
}
</style>
