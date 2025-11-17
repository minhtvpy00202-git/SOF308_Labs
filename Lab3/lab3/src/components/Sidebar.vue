<template>
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

        <!-- Tabs -->
        <div class="tabs mt-4">
          <div class="container mt-2">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <button class="nav-link active text-info" data-bs-toggle="tab" href="#tab1">Đọc nhiều</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link text-info" data-bs-toggle="tab" href="#tab2">Xem nhiều</button>
              </li>
            </ul>
          </div>
          <!--Tab panes-->
          <div class="tab-content">
            <div id="tab1" class="container tab-pane active">
              <!--Đọc nhiều-->
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

                </ul>
              </div>
            </div>
            <div id="tab2" class="container tab-pane fade">
              <!--Xem nhiều-->
              <div class="card">
                <ul class="list-group list-group-flush">
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
        </div>
        <!-- End Tabs-->
      </div>
</template>