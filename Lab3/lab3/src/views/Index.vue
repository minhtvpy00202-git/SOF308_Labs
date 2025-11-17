<script setup lang="ts">
import navbar from '../components/Navbar.vue'
import foot from '../components/footer.vue'
import carousel from '../components/Carousel.vue'
import Sidebar from '../components/Sidebar.vue'

</script>

<template>
    <div class="container">
        <!-- Navbar -->
        <navbar />

        <!-- End Navbar -->


        <!--Carousel-->
        <carousel />
        <!--End Carousel-->


        <section class="row">
            <!-- side bar-->
            <Sidebar />
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
                                <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png"
                                    class="card-img-top" alt="">
                                <div class="card-body text-justify pt-2">
                                    <p class="card-text">
                                        Bootstrap là một framework HTML, CSS và JavaScript miễn phí dùng để tạo website
                                        và web application.
                                    </p>
                                </div>

                            </div>
                        </div>



                        <div class="col-sm-6">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <a href="#"
                                            class="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                            <img src="https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2023%2F09%2Fbackend-developer-la-gi.png&w=640&q=75"
                                                class="rounded" style="width:64px; height:64px; object-fit:cover;">
                                            <div>
                                                <div class="fw-semibold">Backend Developer Là Gì? Lộ Trình Trở Thành
                                                    Backend Developer</div>
                                                <div class="text-muted small"><i class="fa-solid fa-message"></i> 30
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#"
                                            class="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                            <img src="https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2022%2F09%2FFRONT-END-la--gi-.png&w=640&q=75"
                                                class="rounded" style="width:64px; height:64px; object-fit:cover;">
                                            <div>
                                                <div class="fw-semibold">Front End là gì? 11 kỹ năng để trở thành Front
                                                    End Developer</div>
                                                <div class="text-muted small"><i class="fa-solid fa-message"></i> 28
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#"
                                            class="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                            <img src="https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2023%2F10%2FBlog26.jpg&w=640&q=75"
                                                class="rounded" style="width:64px; height:64px; object-fit:cover;">
                                            <div>
                                                <div class="fw-semibold">JPA là gì? Giới thiệu về Java Persistence</div>
                                                <div class="text-muted small"><i class="fa-solid fa-message"></i> 15
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#"
                                            class="d-flex align-items-center gap-3 text-decoration-none text-dark">
                                            <img src="https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2022%2F06%2F4-1.png&w=640&q=75"
                                                class="rounded" style="width:64px; height:64px; object-fit:cover;">
                                            <div>
                                                <div class="fw-semibold">Unit Testing là gì? Cách thực hiện Unit Testing
                                                </div>
                                                <div class="text-muted small"><i class="fa-solid fa-message"></i> 12
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary more">Xem thêm</button>
                </div>

                <!--VIDEO-->
                <h2 class="text-info">VIDEO - ĐỪNG BỎ LỠ</h2>
                <div class="row mb-3">
                    <div class="col-sm-6">
                        <div class="card">
                            <iframe width="100%" height="215" src="https://www.youtube.com/embed/UB1O30fR-EE"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="card-body">
                                <h5 class="card-title">What is Vue.js? Introduction to Vue.js</h5>
                                <p class="card-text">Vue.js is a progressive JavaScript framework used to build user
                                    interfaces and single-page applications.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <iframe width="100%" height="215" src="https://www.youtube.com/embed/FXpIoQ_rT_c"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="card-body">
                                <h5 class="card-title">Vue.js Tutorial for Beginners: Learn Vue in 1 Hour</h5>
                                <p class="card-text">Learn the basics of Vue.js, a popular JavaScript framework, in this
                                    comprehensive tutorial for beginners.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </article>




            <!-- end main content-->




        </section>

        <!--Footer-->
        <foot />

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

.carousel-item img {
    height: 350px !important;
    width: 1000px;
}
</style>
