<template>
  <div class="comment-section">
    <h2>Bình luận bài viết</h2>
    
    <div class="article">
      <img 
        src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800" 
        alt="Vegetables"
        class="article-image"
      />
      <h3>8 loại rau củ quả giàu canxi</h3>
      <p>
        Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều 
        cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống 
        là cách tốt nhất. Có 8 loại rau củ giàu canxi...
      </p>
    </div>

    <form @submit.prevent="addComment" class="comment-form">
      <textarea 
        v-model="newComment" 
        placeholder="Nhập bình luận của bạn"
        rows="4"
      ></textarea>
      <button type="submit" class="btn-comment">Gửi bình luận</button>
    </form>

    <div class="comments-list">
      <h3>Danh sách các bình luận:</h3>
      <div 
        v-for="(comment, index) in comments" 
        :key="index"
        class="comment-item"
      >
        <strong>{{ comment.username }}:</strong> {{ comment.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Comment {
  username: string
  text: string
}

const props = defineProps<{
  username: string
}>()

const newComment = ref('')
const comments = ref<Comment[]>([])

const addComment = () => {
  if (newComment.value.trim()) {
    comments.value.push({
      username: props.username,
      text: newComment.value
    })
    newComment.value = ''
  }
}
</script>

<style scoped>
.comment-section {
  max-width: 800px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.article {
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
}

.article-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.article h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1f2937;
}

.article p {
  color: #6b7280;
  line-height: 1.6;
}

.comment-form {
  margin-bottom: 30px;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
}

.btn-comment {
  background-color: #059669;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
}

.btn-comment:hover {
  background-color: #047857;
}

.comments-list {
  background-color: #f9fafb;
  padding: 20px;
  border-radius: 8px;
}

.comments-list h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.comment-item {
  padding: 15px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  margin-bottom: 10px;
}

.comment-item strong {
  color: #2563eb;
  margin-right: 8px;
}
</style>
