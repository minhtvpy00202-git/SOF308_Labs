<template>

  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#form">Mở form đăng ký - đăng nhập</button>


  <!--The Modal-->
  <div class="modal" id="form">
    <div class="modal-dialog">
      <div class="modal-content">
        <!--Modal Header-->
        <div class="modal-header">
          <h4 class="modal-title">Form Đăng ký - Đăng nhập</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!--Modal body-->
        <!--Nav Tabs-->
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
      <a href="#register" class="nav-link active" data-bs-toggle="tab">Đăng ký</a>
    </li>
    <li class="nav-item">
      <a href="#login" class="nav-link" data-bs-toggle="tab">Đăng nhập</a>
    </li>
  </ul>




  
    <h1 class="mb-4">Bài 2</h1>
  
  <!-- Tab Panes -->

   
      <!-- Form Đăng ký thông tin -->
      <div class="tab-content">
        <div class="container card tab-pane active" id="register">
          <div class="card-body">
            <h4 class="mb-3">Form Đăng ký thông tin</h4>

            <form class="was-validated">
              <div class="mb-3">
                <label for="fullName" class="form-label">Họ và tên</label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  placeholder="Nhập họ và tên"
                  required
                >
                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
              </div>

              <div class="mb-3">
                <label for="regEmail" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="regEmail"
                  placeholder="Nhập email"
                  required
                >
                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
              </div>

              <div class="mb-3">
                <label for="regPhone" class="form-label">Số điện thoại</label>
                <input
                  type="text"
                  class="form-control"
                  id="regPhone"
                  placeholder="Nhập số điện thoại"
                  required
                >
                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
              </div>

              <div class="mb-3">
                <label for="regPass" class="form-label">Mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  id="regPass"
                  placeholder="Nhập mật khẩu"
                  required
                >
                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
              </div>

              <div class="mb-3">
                <label for="regConfirm" class="form-label">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  id="regConfirm"
                  placeholder="Nhập lại mật khẩu"
                  required
                >
                <div class="invalid-feedback">Vui lòng điền vào trường này</div>
              </div>

              <div class="mb-3">
                <label class="form-label d-block">Giới tính</label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="genderMale"
                    value="male"
                    required
                  >
                  <label class="form-check-label" for="genderMale">Nam</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="genderFemale"
                    value="female"
                  >
                  <label class="form-check-label" for="genderFemale">Nữ</label>
                </div>
                <div class="invalid-feedback d-block">Vui lòng chọn giới tính</div>
              </div>

              <div class="mb-3">
                <label for="language" class="form-label">Ngôn ngữ</label>
                <select
                  class="form-select"
                  id="language"
                  required
                >
                  <option value="" disabled selected>Tiếng Việt</option>
                  <option value="vi">Tiếng Việt</option>
                  <option value="en">Tiếng Anh</option>
                </select>
                <div class="invalid-feedback">Vui lòng chọn ngôn ngữ</div>
              </div>

              <div class="mb-3 form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="agree"
                  required
                >
                <label class="form-check-label" for="agree">
                  Tôi đồng ý với các điều khoản và điều kiện
                </label>
                <div class="invalid-feedback">
                  Bạn phải đồng ý trước khi đăng ký
                </div>
              </div>

              <button type="submit" class="btn btn-primary">Đăng ký</button>
            </form>
          </div>
        </div>
      

      <!-- Form Đăng nhập -->
        <div class="container card tab-pane fade" id="login">
          <div class="card-body">
            <h4 class="mb-3">Form Đăng nhập</h4>

            <form class="was-validated">
              <div class="mb-3">
                <label for="loginEmail" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="loginEmail"
                  placeholder="Nhập email"
                  required
                >
                <div class="invalid-feedback">Vui lòng nhập email</div>
              </div>

              <div class="mb-3">
                <label for="loginPass" class="form-label">Mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  id="loginPass"
                  placeholder="Nhập mật khẩu"
                  required
                >
                <div class="invalid-feedback">Vui lòng nhập mật khẩu</div>
              </div>

              <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>

        <!--Modal footer -->
        <div class="modal-footer">
          <button class="btn-danger btn" data-bs-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  </div>

  
    
  
</template>
