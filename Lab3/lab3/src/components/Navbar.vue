<template>
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
</template>