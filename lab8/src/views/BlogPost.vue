<template>
  <div class="blog-post">
    <button @click="goBack" class="btn-back">← Quay lại</button>
    
    <article v-if="post">
      <img :src="post.image" :alt="post.title" class="post-image" />
      
      <h1>{{ post.title }}</h1>
      
      <div class="post-meta">
        <span>👤 {{ post.author }}</span>
        <span>📅 {{ post.date }}</span>
      </div>
      
      <div class="post-content">
        <p>{{ post.content }}</p>
      </div>
    </article>
    
    <div v-else class="not-found">
      <h2>Bài viết không tồn tại</h2>
      <p>ID: {{ route.params.id }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

interface Post {
  id: number
  title: string
  content: string
  author: string
  date: string
  image: string
}

const post = ref<Post | null>(null)

const blogData: Record<number, Post> = {
  1: {
    id: 1,
    title: '8 loại rau củ quả giàu canxi',
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi mà bạn nên biết: cải xoăn, bông cải xanh, cải bó xôi, đậu phụ, hạnh nhân, vừng, cà rốt và khoai lang. Những loại rau củ này không chỉ giàu canxi mà còn cung cấp nhiều vitamin và khoáng chất khác có lợi cho sức khỏe.',
    author: 'Nguyễn Văn A',
    date: '28/11/2025',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800'
  },
  2: {
    id: 2,
    title: 'Lợi ích của việc ăn trái cây hàng ngày',
    content: 'Trái cây cung cấp nhiều vitamin và khoáng chất thiết yếu cho cơ thể. Việc ăn trái cây hàng ngày giúp tăng cường hệ miễn dịch, cải thiện tiêu hóa, và giảm nguy cơ mắc các bệnh mãn tính. Các loại trái cây như cam, táo, chuối, nho đều rất tốt cho sức khỏe. Nên ăn ít nhất 2-3 phần trái cây mỗi ngày để đảm bảo cung cấp đủ chất dinh dưỡng.',
    author: 'Trần Thị B',
    date: '27/11/2025',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800'
  },
  3: {
    id: 3,
    title: 'Cách nấu ăn giữ nguyên dinh dưỡng',
    content: 'Phương pháp nấu ăn ảnh hưởng rất lớn đến giá trị dinh dưỡng của thực phẩm. Để giữ nguyên dinh dưỡng, bạn nên: hấp thay vì luộc, không nấu quá lâu, sử dụng ít dầu mỡ, và ăn rau củ tươi. Ngoài ra, việc cắt nhỏ thực phẩm ngay trước khi nấu cũng giúp giảm thiểu mất mát vitamin. Hãy áp dụng những phương pháp này để bữa ăn của bạn vừa ngon vừa bổ dưỡng.',
    author: 'Lê Văn C',
    date: '26/11/2025',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800'
  }
}

onMounted(() => {
  const id = Number(route.params.id)
  post.value = blogData[id] || null
})

const goBack = () => {
  router.push({ name: 'BlogList' })
}
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.btn-back {
  background-color: #6b7280;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 30px;
}

.btn-back:hover {
  background-color: #4b5563;
}

.post-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 30px;
}

h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 20px;
}

.post-meta {
  display: flex;
  gap: 30px;
  color: #6b7280;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e5e7eb;
}

.post-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #374151;
}

.not-found {
  text-align: center;
  padding: 60px 20px;
}

.not-found h2 {
  color: #dc2626;
  margin-bottom: 10px;
}
</style>
