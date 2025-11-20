<script setup lang="ts">
import { ref, computed } from 'vue'
import navbar from '../components/Navbar.vue'
import foot from '../components/footer.vue'
import carousel from '../components/Carousel.vue'
import Sidebar from '../components/Sidebar.vue'

interface BlogPost {
  id: number
  title: string
  category: string
  date: string
  comments: number
  thumbnail: string
  excerpt: string
  level: 'Cơ bản' | 'Trung cấp' | 'Nâng cao'
}

const posts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Xây blog cá nhân với Bootstrap & Vue.js',
    category: 'Vue.js',
    date: '20/11/2025',
    comments: 12,
    thumbnail: 'https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2022%2F09%2FFRONT-END-la--gi-.png&w=640&q=75',
    excerpt: 'Kết hợp Bootstrap cho phần giao diện và Vue.js cho phần logic giúp bạn tạo blog cá nhân linh hoạt, dễ mở rộng.',
    level: 'Cơ bản'
  },
  {
    id: 2,
    title: 'Hiểu về Component trong Vue: chia nhỏ giao diện như thế nào?',
    category: 'Vue.js',
    date: '18/11/2025',
    comments: 8,
    thumbnail: 'https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2023%2F10%2FBlog26.jpg&w=640&q=75',
    excerpt: 'Component giúp tái sử dụng code, tách Navbar, Sidebar, Footer và Carousel giống như bạn đang làm ở Lab 3.',
    level: 'Trung cấp'
  },
  {
    id: 3,
    title: 'Kết nối Frontend Vue với Backend Java Spring Boot',
    category: 'Backend',
    date: '15/11/2025',
    comments: 21,
    thumbnail: 'https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2023%2F09%2Fbackend-developer-la-gi.png&w=640&q=75',
    excerpt: 'Sau khi làm chủ giao diện, bước tiếp theo là kết nối với API từ Java Spring Boot để hiển thị dữ liệu thật.',
    level: 'Nâng cao'
  },
  {
    id: 4,
    title: '5 tips dùng Bootstrap 5 để layout không bị “bể” trên mobile',
    category: 'Bootstrap',
    date: '10/11/2025',
    comments: 5,
    thumbnail: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png',
    excerpt: 'Sử dụng grid system, class responsive và những tiện ích có sẵn của Bootstrap để tối ưu giao diện trên điện thoại.',
    level: 'Cơ bản'
  }
])

const keyword = ref('')

const filteredPosts = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  if (!kw) return posts.value
  return posts.value.filter(p =>
    p.title.toLowerCase().includes(kw) ||
    p.excerpt.toLowerCase().includes(kw) ||
    p.category.toLowerCase().includes(kw)
  )
})
</script>

<template>
  <div class="container">
    <!-- Navbar -->
    <navbar />
    <!-- Carousel -->
    <carousel />

    <section class="row mt-4">
      <!-- Sidebar bên trái -->
      <Sidebar />

      <!-- Danh sách bài viết -->
      <article class="col-sm-8">
        <h2 class="text-info mb-3">Danh sách bài viết</h2>

        <!-- Ô tìm kiếm -->
        <div class="bg-light p-3 mb-3">
          <div class="row align-items-center gy-2">
            <div class="col-md-8">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  v-model="keyword"
                  type="text"
                  class="form-control"
                  placeholder="Tìm kiếm bài viết theo tiêu đề, chủ đề..."
                />
              </div>
            </div>
            <div class="col-md-4 text-md-end small text-muted">
              Tìm thấy <strong>{{ filteredPosts.length }}</strong> bài viết
            </div>
          </div>
        </div>

        <!-- Cards bài viết -->
        <div class="row g-3">
          <div
            class="col-md-6"
            v-for="post in filteredPosts"
            :key="post.id"
          >
            <div class="card h-100 shadow-sm">
              <img
                :src="post.thumbnail"
                class="card-img-top"
                style="height: 180px; object-fit: cover"
                alt="thumbnail"
              />
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between mb-1 small text-muted">
                  <span>
                    <span class="badge bg-info-subtle text-info me-1">
                      {{ post.category }}
                    </span>
                    • {{ post.date }}
                  </span>
                  <span>
                    <i class="fa-solid fa-message me-1"></i>{{ post.comments }}
                  </span>
                </div>

                <h5 class="card-title">
                  <a href="#" class="text-decoration-none text-dark fw-semibold">
                    {{ post.title }}
                  </a>
                </h5>

                <p class="card-text small flex-grow-1 text-justify">
                  {{ post.excerpt }}
                </p>

                <div class="d-flex justify-content-between align-items-center mt-2">
                  <span class="badge bg-secondary-subtle text-secondary">
                    {{ post.level }}
                  </span>
                  <!-- Sau này bạn đổi thành router-link tới PostDetail -->
                  <a href="#" class="btn btn-sm btn-primary">
                    Đọc tiếp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phân trang giả lập -->
        <nav class="mt-4">
          <ul class="pagination justify-content-center mb-0">
            <li class="page-item disabled">
              <a class="page-link">Trước</a>
            </li>
            <li class="page-item active">
              <a class="page-link">1</a>
            </li>
            <li class="page-item">
              <a class="page-link">2</a>
            </li>
            <li class="page-item">
              <a class="page-link">3</a>
            </li>
            <li class="page-item">
              <a class="page-link">Sau</a>
            </li>
          </ul>
        </nav>
      </article>
    </section>

    <!-- Footer -->
    <foot />
  </div>
</template>

<style scoped>
.card-text.text-justify {
  text-align: justify;
}
</style>
