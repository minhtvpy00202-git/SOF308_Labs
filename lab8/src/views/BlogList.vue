<template>
  <div class="blog-list">
    <h1>Danh sách Blog</h1>
    
    <div class="blog-grid">
      <div 
        v-for="post in blogPosts" 
        :key="post.id"
        class="blog-card"
        @click="goToPost(post.id)"
      >
        <div class="blog-image">
          <img :src="post.image" :alt="post.title" />
        </div>
        <div class="blog-content">
          <h3>{{ post.title }}</h3>
          <p class="blog-excerpt">{{ post.excerpt }}</p>
          <div class="blog-meta">
            <span>{{ post.author }}</span>
            <span>{{ post.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  image: string
}

const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: '8 loại rau củ quả giàu canxi',
    excerpt: 'Canxi là khoáng chất cần thiết đối với cơ thể người...',
    author: 'Nguyễn Văn A',
    date: '28/11/2025',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400'
  },
  {
    id: 2,
    title: 'Lợi ích của việc ăn trái cây hàng ngày',
    excerpt: 'Trái cây cung cấp nhiều vitamin và khoáng chất...',
    author: 'Trần Thị B',
    date: '27/11/2025',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400'
  },
  {
    id: 3,
    title: 'Cách nấu ăn giữ nguyên dinh dưỡng',
    excerpt: 'Phương pháp nấu ăn ảnh hưởng đến giá trị dinh dưỡng...',
    author: 'Lê Văn C',
    date: '26/11/2025',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400'
  }
])

const goToPost = (id: number) => {
  router.push({ name: 'BlogPost', params: { id } })
}
</script>

<style scoped>
.blog-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 40px;
  text-align: center;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.blog-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content {
  padding: 20px;
}

.blog-content h3 {
  font-size: 1.3rem;
  color: #1f2937;
  margin-bottom: 10px;
}

.blog-excerpt {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #9ca3af;
}
</style>
