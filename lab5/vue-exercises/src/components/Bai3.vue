<template>
  <div class="p-5">
    <h2 class="mb-4">Bài 3: Nhập và hiển thị thông tin cá nhân</h2>
    
    <div class="row">
      <div class="col-md-6">
        <h4>Thông tin cá nhân</h4>
        
        <div class="mb-3">
          <label class="form-label">Họ và Tên:</label>
          <input 
            v-model="fullName" 
            type="text" 
            class="form-control" 
            placeholder="Nguyen Van A"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Tuổi:</label>
          <input 
            v-model="age" 
            type="number" 
            class="form-control" 
            placeholder="18"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Email:</label>
          <input 
            v-model="email" 
            type="email" 
            class="form-control" 
            placeholder="anv@example.com"
          />
        </div>
      </div>

      <div class="col-md-6">
        <div class="bg-dark text-white p-4 rounded">
          <h4>Thông tin đã nhập:</h4>
          <p><strong>Họ và Tên:</strong> {{ fullName }}</p>
          <p><strong>Tuổi:</strong> {{ age }}</p>
          <p><strong>Email:</strong> {{ email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fullName = ref('');
const age = ref('');
const email = ref('');
</script>
