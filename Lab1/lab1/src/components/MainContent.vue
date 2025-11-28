<script setup lang="ts">
/* Kết hợp ArticleCard và PostList */
import ArticleCard from './ArticleCard.vue'
import PostList from './Postlist.vue'
</script>

<template>
  <article class="col-sm-8">
    <h2 class="text-info mb-3">Blog của tôi</h2>
    <div class="bg-light p-3">
      <div class="row">
        <div class="col-sm-6 mb-3">
          <ArticleCard
            title="Bootstrap là gì? Hướng dẫn download và cài đặt"
            :comments="16"
            img="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png"
            excerpt="Bootstrap là một framework HTML, CSS và JavaScript miễn phí dùng để tạo website và web application."
          />
        </div>

        <div class="col-sm-6 mb-3">
          <PostList />
        </div>
      </div>

      <button type="button" class="btn btn-primary more">Xem thêm</button>
    </div>
  </article>
</template>

<style scoped>
.more {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
