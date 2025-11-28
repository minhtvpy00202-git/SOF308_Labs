<template>
  <div>
    <h3 class="mb-3">Danh sách bài viết</h3>
    
    <div v-if="posts.length === 0" class="alert alert-info">
      Chưa có bài viết nào. Hãy tạo bài viết mới!
    </div>

    <div 
      v-for="(post, index) in posts" 
      :key="index"
      class="card mb-3 p-3"
      :class="post.styleClass"
      :style="post.inlineStyle"
    >
      <h4 :style="{ color: post.titleColor }">{{ post.title }}</h4>
      <p class="text-danger mb-2"><strong>{{ post.author }}</strong></p>
      <p>{{ post.content }}</p>
      
      <div class="mt-3">
        <label class="me-2">Màu tiêu đề:</label>
        <select v-model="post.titleColor" class="form-select d-inline-block w-auto me-3">
          <option value="green">Xanh lá</option>
          <option value="blue">Xanh dương</option>
          <option value="red">Đỏ</option>
          <option value="purple">Tím</option>
          <option value="orange">Cam</option>
        </select>

        <label class="me-2">Kiểu dáng:</label>
        <select v-model="post.styleClass" class="form-select d-inline-block w-auto me-3">
          <option value="">Mặc định</option>
          <option value="border-primary">Viền xanh</option>
          <option value="border-success">Viền xanh lá</option>
          <option value="border-danger">Viền đỏ</option>
          <option value="bg-light">Nền sáng</option>
        </select>

        <label class="me-2">Kích thước chữ:</label>
        <select v-model="post.fontSize" @change="updateFontSize(post)" class="form-select d-inline-block w-auto">
          <option value="14px">Nhỏ</option>
          <option value="16px">Trung bình</option>
          <option value="18px">Lớn</option>
          <option value="20px">Rất lớn</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Post {
  title: string;
  author: string;
  content: string;
  titleColor: string;
  styleClass: string;
  fontSize: string;
  inlineStyle: { fontSize: string };
}

defineProps<{
  posts: Post[]
}>();

const updateFontSize = (post: Post) => {
  post.inlineStyle = { fontSize: post.fontSize };
};
</script>
