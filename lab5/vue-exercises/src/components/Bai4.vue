<template>
  <div class="p-5">
    <h2 class="mb-4">Bài 4: Xây dựng ứng dụng tạo và hiển thị danh sách bài viết</h2>
    
    <CreatePost @add-post="addPost" />
    
    <hr class="my-4" />
    
    <PostList :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CreatePost from './Bai4/CreatePost.vue';
import PostList from './Bai4/PostList.vue';

interface Post {
  title: string;
  author: string;
  content: string;
  titleColor: string;
  styleClass: string;
  fontSize: string;
  inlineStyle: { fontSize: string };
}

const posts = ref<Post[]>([]);

const addPost = (newPost: { title: string; author: string; content: string }) => {
  posts.value.push({
    ...newPost,
    titleColor: 'green',
    styleClass: '',
    fontSize: '16px',
    inlineStyle: { fontSize: '16px' }
  });
};
</script>
