<script setup lang="ts">
import { ref } from 'vue';

interface Student {
  id: number;
  hoTen: string;
  diem: number;
  ngaySinh: string;
}

const students = ref<Student[]>([
  { id: 1, hoTen: 'Nguyễn Chí Hùng', diem: 8, ngaySinh: '2006-01-01' },
  { id: 2, hoTen: 'Phạm Thị Lan', diem: 9, ngaySinh: '2006-05-15' },
]);

const form = ref({
  hoTen: '',
  diem: 0,
  ngaySinh: '',
});

const editingId = ref<number | null>(null);
const nextId = ref(3);

const handleSubmit = () => {
  if (!form.value.hoTen || !form.value.ngaySinh) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  if (editingId.value !== null) {
    // Cập nhật
    const index = students.value.findIndex((s) => s.id === editingId.value);
    if (index !== -1) {
      students.value[index] = {
        id: editingId.value,
        hoTen: form.value.hoTen,
        diem: form.value.diem,
        ngaySinh: form.value.ngaySinh,
      };
    }
    editingId.value = null;
  } else {
    // Thêm mới
    students.value.push({
      id: nextId.value++,
      hoTen: form.value.hoTen,
      diem: form.value.diem,
      ngaySinh: form.value.ngaySinh,
    });
  }

  // Reset form
  form.value = { hoTen: '', diem: 0, ngaySinh: '' };
};

const editStudent = (student: Student) => {
  form.value = {
    hoTen: student.hoTen,
    diem: student.diem,
    ngaySinh: student.ngaySinh,
  };
  editingId.value = student.id;
};

const deleteStudent = (id: number) => {
  if (confirm('Bạn có chắc chắn muốn xóa học sinh này?')) {
    students.value = students.value.filter((s) => s.id !== id);
  }
};
</script>

<template>
  <div class="page-container">
    <router-link to="/" class="back-link">← Quay lại trang chủ</router-link>

    <div class="container">
      <div class="content">
        <div class="form-section">
          <h2>Thêm học sinh</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label>Họ tên:</label>
              <input v-model="form.hoTen" type="text" class="form-control" required />
            </div>

            <div class="form-group">
              <label>Điểm:</label>
              <input
                v-model.number="form.diem"
                type="number"
                class="form-control"
                min="0"
                max="10"
                step="0.1"
                required
              />
            </div>

            <div class="form-group">
              <label>Ngày sinh:</label>
              <input v-model="form.ngaySinh" type="date" class="form-control" required />
            </div>

            <button type="submit" class="btn btn-primary">
              {{ editingId !== null ? 'Cập nhật' : 'Thêm' }}
            </button>
          </form>
        </div>

        <div class="list-section">
          <h2>Danh sách học sinh</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Họ và tên</th>
                <th>Điểm</th>
                <th>Ngày sinh</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in students" :key="student.id">
                <td>{{ student.hoTen }}</td>
                <td>{{ student.diem }}</td>
                <td>{{ student.ngaySinh }}</td>
                <td>
                  <button @click="editStudent(student)" class="btn btn-warning">Sửa</button>
                  <button @click="deleteStudent(student.id)" class="btn btn-danger">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 20px;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #42b883;
  text-decoration: none;
  font-size: 1.1rem;
}

.back-link:hover {
  text-decoration: underline;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 30px;
}

.content {
  display: flex;
  gap: 40px;
}

.form-section {
  flex: 0 0 350px;
}

.list-section {
  flex: 1;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table thead {
  background-color: #f8f9fa;
}

.table th,
.table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  font-weight: 600;
  color: #333;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  margin-right: 5px;
}

.btn-primary {
  background-color: #28a745;
  color: white;
  width: 100%;
  padding: 12px;
  font-size: 1rem;
}

.btn-primary:hover {
  background-color: #218838;
}

.btn-warning {
  background-color: #ffc107;
  color: #333;
}

.btn-warning:hover {
  background-color: #e0a800;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .form-section {
    flex: 1;
  }
}
</style>
