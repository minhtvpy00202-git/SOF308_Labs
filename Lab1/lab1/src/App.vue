<script setup lang="ts">

</script>

<template>
  <div class="container">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-sm bg-primary-subtle">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img src="https://caodang.fpt.edu.vn/wp-content/uploads/logo-3.png" style="height:32px" alt="not found" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a href="#" class="nav-link"><i class="fa-solid fa-list"></i> Bài viết</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><i class="fa-solid fa-film"></i> Video</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                <i class="fa-solid fa-user text-success"></i> Tài khoản
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
              </ul>
            </li>

          </ul>
          <ul class="navbar-nav d-flex">
            <li class="nav-item">
              <a class="nav-link">Tiếng Việt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">English</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- End Navbar -->

    <section class="row">
      <!-- side bar-->
      <div class="col-sm-4">
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
      <!-- end side bar-->
      <!-- main content-->
       
      <article class="col-sm-8">
        
        <h2 class="text-info mb-3">Blog của tôi</h2>
        <div class="bg-light p-3">
        <div class="row">
          <div class="col-sm-6">
            <div class="card text-start">
              <div class="card-body pb-2 text-justify">
                <h5 class="card-title mb-0">
                  <a href="#" class="text-decoration-none text-dark fw-semibold">
                    Bootstrap là gì? Hướng dẫn download và cài đặt
                    <i class="fa-solid fa-message ms-1"></i>16
                  </a>
                </h5>
              </div>
              <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png" class="card-img-top" alt="">
              <div class="card-body text-justify pt-2">
                <p class="card-text">
                  Bootstrap là một framework HTML, CSS và JavaScript miễn phí dùng để tạo website và web application.
                </p>
              </div>

            </div>
          </div>



          <div class="col-sm-6">
            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a href="#" class="d-flex align-items-center gap-3 text-decoration-none text-dark">
                    <img
                      src="https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2023%2F09%2Fbackend-developer-la-gi.png&w=640&q=75"
                      class="rounded" style="width:64px; height:64px; object-fit:cover;">
                    <div>
                      <div class="fw-semibold">Backend Developer Là Gì? Lộ Trình Trở Thành Backend Developer</div>
                      <div class="text-muted small"><i class="fa-solid fa-message"></i> 30</div>
                    </div>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#" class="d-flex align-items-center gap-3 text-decoration-none text-dark">
                    <img
                      src="https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2022%2F09%2FFRONT-END-la--gi-.png&w=640&q=75"
                      class="rounded" style="width:64px; height:64px; object-fit:cover;">
                    <div>
                      <div class="fw-semibold">Front End là gì? 11 kỹ năng để trở thành Front End Developer</div>
                      <div class="text-muted small"><i class="fa-solid fa-message"></i> 28</div>
                    </div>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#" class="d-flex align-items-center gap-3 text-decoration-none text-dark">
                    <img
                      src="https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2023%2F10%2FBlog26.jpg&w=640&q=75"
                      class="rounded" style="width:64px; height:64px; object-fit:cover;">
                    <div>
                      <div class="fw-semibold">JPA là gì? Giới thiệu về Java Persistence</div>
                      <div class="text-muted small"><i class="fa-solid fa-message"></i> 15</div>
                    </div>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#" class="d-flex align-items-center gap-3 text-decoration-none text-dark">
                    <img
                      src="https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2022%2F06%2F4-1.png&w=640&q=75"
                      class="rounded" style="width:64px; height:64px; object-fit:cover;">
                    <div>
                      <div class="fw-semibold">Unit Testing là gì? Cách thực hiện Unit Testing</div>
                      <div class="text-muted small"><i class="fa-solid fa-message"></i> 12</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

    <button type="button" class="btn btn-primary more">Xem thêm</button>
    </div>
      </article>
      <!-- end main content-->
    
  

    </section>

    <footer class="row bg-dark p-3">
      <div class="footer-content">
      ©Copyright FPT Polytechnic
      </div>
    </footer>

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.list-group-item div {
  text-align: justify;
}

.text-justify {
  text-align: justify;
}

.footer-content {
  color: white;
  text-align: center;
}
.more {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
