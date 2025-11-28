<script setup lang="ts">
/* Sidebar component */
</script>

<template>
  <div>
    <h2 class="text-info mb-3">Về tôi</h2>
    <div class="card-blog bg-secondary-subtle p-3 text-start">
      <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-23.jpg"
        class="card-img-top" alt="not found">
      <div class="card-body">
        <h5 class="card-title">Giới thiệu bản thân</h5>
        <p class="card-text text-justify">
          Tôi là Trần Minh, sinh viên ngành Công nghệ thông tin tại trường Cao Đẳng FPT Polytechnic. Tôi đam mê
          lập trình và mong muốn phát triển kỹ năng của mình trong lĩnh vực này.
        </p>
      </div>
    </div>

    <h3 class="text-info mt-2">Chuyên mục</h3>
    <ul class="list-group">
      <li class="list-group-item active bg-info d-flex justify-content-between align-item-center">
        <a href="#" class="nav-link">Xây dựng giao diện tương tác Backend</a>
        <span class="badge bg-primary rounded-pill">12</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <a href="#" class="nav-link">Lập trình Java 4</a>
        <span class="badge bg-primary rounded-pill">15</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-item-center">
        <a href="#" class="nav-link">Kiểm thử cơ bản</a>
        <span class="badge bg-primary rounded-pill">15</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card-blog img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.list-group-item a {
  color: inherit;
  text-decoration: none;
}
</style>
