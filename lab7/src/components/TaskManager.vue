<template>
  <div class="task-manager">
    <h1>Quản lý công việc</h1>
    
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label>Tên công việc:</label>
        <input 
          v-model="newTask" 
          type="text" 
          placeholder="Nhập tên công việc"
          class="task-input"
        />
      </div>
      <button type="submit" class="btn-add">Thêm công việc</button>
    </form>

    <div class="task-list">
      <div 
        v-for="(task, index) in tasks" 
        :key="index" 
        class="task-item"
      >
        <span>{{ task }}</span>
        <button @click="deleteTask(index)" class="btn-delete">Xóa</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref<string[]>([])

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>
.task-manager {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.task-input {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
}

.btn-add {
  background-color: #2563eb;
  color: white;
  padding: 15px 40px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
}

.btn-add:hover {
  background-color: #1d4ed8;
}

.task-list {
  margin-top: 40px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 15px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.task-item span {
  font-size: 1.1rem;
}

.btn-delete {
  background-color: #dc2626;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-delete:hover {
  background-color: #b91c1c;
}
</style>
