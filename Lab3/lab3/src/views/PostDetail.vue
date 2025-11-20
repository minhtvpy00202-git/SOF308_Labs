<script setup lang="ts">
import navbar from '../components/Navbar.vue'
import foot from '../components/footer.vue'
import carousel from '../components/Carousel.vue'
import Sidebar from '../components/Sidebar.vue'

interface RelatedPost {
  title: string
  thumbnail: string
  excerpt: string
}

const relatedPosts: RelatedPost[] = [
  {
    title: 'Tách Navbar, Footer, Sidebar thành component trong Vue',
    thumbnail:
      'https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2022%2F06%2F4-1.png&w=640&q=75',
    excerpt: 'Giúp code gọn hơn, dễ bảo trì và tái sử dụng cho nhiều trang khác nhau.'
  },
  {
    title: 'Kết hợp Bootstrap 5 Carousel với Vue một cách sạch sẽ',
    thumbnail:
      'https://cdn-media.sforum.vn/storage/app/media/hinh-nen-slide-mo-dau-powerpoint-thumb.jpg',
    excerpt: 'Đóng gói carousel vào 1 component riêng, nhận dữ liệu ảnh qua props.'
  }
]
</script>

<template>
  <div class="container">
    <!-- Navbar -->
    <navbar />
    <!-- Carousel (có thể coi như banner của bài) -->
    <carousel />

    <section class="row mt-4">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Nội dung bài viết -->
      <article class="col-sm-8">
        <p class="small text-muted mb-1">
          <span class="badge bg-success me-2">Vue.js</span>
          20/11/2025 • 10 phút đọc
        </p>

        <h2 class="text-info mb-3">
          Từ giao diện Bootstrap tĩnh đến ứng dụng Vue.js trong Lab 3
        </h2>

        <p class="lead text-justify">
          Ở Lab 3, bạn không chỉ dựng giao diện blog bằng Bootstrap mà còn “nâng cấp”
          nó lên thành một ứng dụng Vue.js có nhiều trang: <strong>Index, Post và
          PostDetail</strong>. Điều này giúp bạn làm quen với tư duy component và cách
          tổ chức layout chuyên nghiệp hơn.
        </p>

        <hr />

        <h4 class="mb-2">1. Giữ giao diện cũ nhưng nâng cấp công nghệ</h4>
        <p class="text-justify">
          Thay vì code lại toàn bộ, bạn có thể tái sử dụng hầu hết HTML và class Bootstrap
          từ bài Lab dùng HTML thuần. Công việc chính là:
        </p>
        <ul>
          <li>Đưa từng phần (navbar, carousel, sidebar, footer) vào các component riêng.</li>
          <li>Dùng <code>&lt;script setup&gt;</code> để code gọn và dễ hiểu.</li>
          <li>Chuẩn hoá cấu trúc thư mục: <code>components/</code> và <code>views/</code>.</li>
        </ul>

        <h4 class="mt-3 mb-2">2. Tổ chức 3 trang: Index, Post, PostDetail</h4>
        <p class="text-justify">
          <strong>Index</strong> là trang giới thiệu, hiển thị blog, video nổi bật.  
          <strong>Post</strong> là nơi liệt kê toàn bộ bài viết với ô tìm kiếm, badge mức độ học,
          số bình luận.  
          <strong>PostDetail</strong> chính là trang bạn đang xem – tập trung mô tả chi tiết
          một chủ đề, ví dụ: cách chuyển giao diện Bootstrap sang Vue.
        </p>

        <ol>
          <li>
            <strong>Index.vue</strong>: tập trung phần giới thiệu, blog nổi bật và video.
          </li>
          <li>
            <strong>Post.vue</strong>: danh sách bài viết, có thể sau này nối với API thật.
          </li>
          <li>
            <strong>PostDetail.vue</strong>: nội dung dài, thêm bình luận và bài viết liên quan.
          </li>
        </ol>

        <h4 class="mt-3 mb-2">3. Gợi ý mở rộng cho bạn</h4>
        <p class="text-justify">
          Sau khi hoàn thành đúng yêu cầu Lab, bạn có thể thử:
        </p>
        <ul>
          <li>Thêm router để chuyển trang mượt mà giữa Index, Post và PostDetail.</li>
          <li>Lưu danh sách bài viết vào một file JSON hoặc gọi API nhỏ từ backend Java.</li>
          <li>Thêm bộ lọc theo <em>category</em> hoặc <em>level</em> (Cơ bản, Trung cấp, Nâng cao).</li>
        </ul>

        <div class="alert alert-info mt-3">
          <strong>Tip nhỏ:</strong> Mỗi khi hoàn thành một phần (Navbar, Carousel, Sidebar),
          hãy commit lên Git. Sau này nếu sửa hư, bạn quay lại rất dễ.
        </div>

        <!-- Form bình luận -->
        <hr class="mt-4" />
        <h5 class="mb-3">Bình luận</h5>
        <div class="mb-3">
          <label class="form-label">Tên của bạn</label>
          <input type="text" class="form-control" placeholder="Nhập tên..." />
        </div>
        <div class="mb-3">
          <label class="form-label">Nội dung bình luận</label>
          <textarea
            class="form-control"
            rows="3"
            placeholder="Hãy chia sẻ cảm nhận hoặc thắc mắc của bạn về bài viết này..."
          ></textarea>
        </div>
        <button class="btn btn-primary mb-4">
          <i class="fa-solid fa-paper-plane me-1"></i> Gửi bình luận
        </button>

        <!-- Bài viết liên quan -->
        <hr />
        <h5 class="mb-3">Bài viết liên quan</h5>
        <div class="row g-3">
          <div class="col-md-6" v-for="rel in relatedPosts" :key="rel.title">
            <div class="card h-100">
              <img
                :src="rel.thumbnail"
                class="card-img-top"
                style="height: 140px; object-fit: cover"
                alt="related"
              />
              <div class="card-body">
                <h6 class="card-title">{{ rel.title }}</h6>
                <p class="card-text small text-muted text-justify">
                  {{ rel.excerpt }}
                </p>
                <a href="#" class="small text-decoration-none">
                  Đọc tiếp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- Footer -->
    <foot />
  </div>
</template>

<style scoped>
.text-justify {
  text-align: justify;
}
</style>
