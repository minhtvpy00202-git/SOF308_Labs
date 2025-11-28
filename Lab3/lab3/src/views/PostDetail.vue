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
  <div class="page-root container py-4">
    <navbar />
    <carousel />

    <section class="row mt-4">
      <article class="col-lg-8 order-1">
        <h1 class="post-title text-center text-primary mb-3">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h1>

        <div class="hero-img mb-3">
          <img src="/src/assets/pilates-hero.jpg" alt="pilates" />
        </div>

        <p class="lead text-justify">
          Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là
          phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường vững cơ và cải thiện sự linh hoạt, dẻo dai cho
          người tập. Đặc biệt, các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi
          chấn thương cột sống. Sau đây hãy cùng tìm hiểu các phương pháp tập luyện này giúp phục hồi chấn thương
          cột sống nhanh chóng nhé!
        </p>

        <h4 class="mt-4">Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h4>
        <p class="text-justify">
          Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn phòng, đó là đau lưng, thoát vị đĩa đệm.
          Tuy nhiên, nếu điều trị không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm, bao gồm: VI dụ, điều trị
          bằng laser không đúng cách hoặc tập yoga không đúng cách có thể khiến bệnh nhân nằm liệt giường.
        </p>

        <div class="inline-img mb-3">
          <img src="/src/assets/pilates-2.jpg" alt="pilates-2" />
        </div>

        <h5 class="mt-3">Phương pháp tập Pilates Cat Cow</h5>
        <p class="text-justify">Các bước thực hiện :</p>
        <ul>
          <li>Bắt đầu với tư thế 4 điểm. Vai và cổ tay của bạn phải thẳng hàng và vuông góc với thảm, lưng của bạn phải bằng phẳng và xương chậu của bạn phải cân đối.</li>
          <li>Hít vào, vồng lưng, nâng cằm lên, mở rộng ngực.</li>
          <li>Thở ra, cong xương cụt, nâng cong lưng và đưa cằm về gần khoang ngực.</li>
          <li>Lặp đi lặp lại động tác từ 5-7 lần.</li>
        </ul>

        <h4 class="mt-3">Lời kết</h4>
        <p class="text-justify">
          Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột sống nhanh chóng. Để đạt được kết quả
          tập luyện như mong muốn, bạn cần duy trì chế độ tập luyện đều đặn, thực hiện đúng động tác, kết hợp cùng chế
          độ ăn uống khoa học.
        </p>

        <hr />

        

        <!-- Bài viết liên quan -->
        <h5 class="mb-3">Bài viết liên quan</h5>
        <div class="row g-3">
          <div class="col-md-6" v-for="rel in relatedPosts" :key="rel.title">
            <div class="card h-100">
              <img :src="rel.thumbnail" class="card-img-top" style="height:140px; object-fit:cover" alt="related" />
              <div class="card-body">
                <h6 class="card-title">{{ rel.title }}</h6>
                <p class="card-text small text-muted text-justify">{{ rel.excerpt }}</p>
                <a href="#" class="small text-decoration-none">Đọc tiếp →</a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <aside class="col-lg-4 order-2">
        <div class="sticky-top" style="top:90px">
          <div class="card p-3 mb-3">
            <h6 class="mb-2">Bình luận ngay</h6>
            <input type="text" class="form-control mb-2" placeholder="Tên" />
            <textarea class="form-control mb-2" rows="3" placeholder="Nội dung..."></textarea>
            <button class="btn btn-success w-100">Gửi</button>
          </div>

          <div class="card p-3 mb-3">
            <h6 class="mb-2">Danh sách các bình luận</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2"><strong>Bình An</strong><div class="small text-muted">Bình luận rất hữu ích</div></li>
              <li><strong>Binh An</strong><div class="small text-muted">Cảm ơn những chia sẻ bổ ích</div></li>
            </ul>
          </div>

          <div class="card p-3">
            <h6 class="mb-2">Tìm kiếm</h6>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Tìm bài viết..." />
              <button class="btn btn-outline-secondary">Tìm</button>
            </div>
          </div>
        </div>
      </aside>
    </section>

    <foot />
  </div>
</template>

<style scoped>
.post-title { font-size: 1.8rem; font-weight: 700; }
.hero-img img { width:100%; height:360px; object-fit:cover; border-radius:6px; }
.inline-img img { width:100%; height:240px; object-fit:cover; border-radius:4px }
.text-justify { text-align: justify; }
@media (max-width:767px) { .hero-img img { height:220px } }
</style>