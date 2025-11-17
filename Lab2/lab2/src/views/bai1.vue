<template>
  <table class="table table-bordered table-dark table-striped table-hover table-1 text-center mx-auto">
    <thead >
      <tr>
        <th rowspan="2" class="text-center align-middle bg-warning">Thành phần</th>
        <th colspan="2" class="bg-warning">Giá trị</th>
      </tr>
      <tr>
        <th class="bg-warning">Khối lượng</th>
        <th class="bg-warning">% DV*</th>
      </tr>
    </thead>
    <tbody class="text-start align-middle">
      <tr>
        <td>Calories</td>
        <td>200 Kcal</td>
        <td>20%</td>
      </tr>
      <tr>
        <td>Chất béo</td>
        <td>9 g</td>
        <td>14%</td>
      </tr>
      <tr>
        <td>Chất béo bão hòa</td>
        <td>4 g</td>
        <td>20%</td>
      </tr>
      <tr>
        <td>Chất đạm</td>
        <td>8 g</td>
        <td>16%</td>
      </tr>
      <tr>
        <td>Chất xơ</td>
        <td>5 g</td>
        <td>20%</td>
      </tr>
      <tr>
        <td>Đường</td>
        <td>12 g</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="2">Vitamin</td>
        <td>Vitamin C</td>
        <td>25%</td>
      </tr>
      <tr>
        <td>Vitamin D</td>
        <td>10%</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

.table-1 {
  width: 50vw;          
  max-width: 800px;     
  min-width: 500px; 
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>