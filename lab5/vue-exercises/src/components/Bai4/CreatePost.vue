<template>
  <div class="mb-4">
    <h3>Tạo bài viết mới</h3>
    
    <div class="mb-3">
      <input 
        v-model="title" 
        type="text" 
        class="form-control" 
        placeholder="Tiêu đề bài viết"
      />
    </div>

    <div class="mb-3">
      <input 
        v-model="author" 
        type="text" 
        class="form-control" 
        placeholder="Tên tác giả"
      />
    </div>

    <div class="mb-3">
      <textarea 
        v-model="content" 
        class="form-control" 
        rows="4" 
        placeholder="Nội dung bài viết"
      ></textarea>
    </div>

    <button @click="createPost" class="btn btn-primary">Đăng bài</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('');
const author = ref('');
const content = ref('');

const emit = defineEmits<{
  addPost: [post: { title: string; author: string; content: string }]
}>();

const createPost = () => {
  if (title.value && author.value && content.value) {
    emit('addPost', {
      title: title.value,
      author: author.value,
      content: content.value
    });
    
    // Reset form
    title.value = '';
    author.value = '';
    content.value = '';
  }
};
</script>
