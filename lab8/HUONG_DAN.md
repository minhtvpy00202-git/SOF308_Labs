# MyBlog - Ứng dụng Vue.js với Vue Router

## Mô tả
Ứng dụng blog đơn giản với đầy đủ tính năng routing, bao gồm:
- Routes động
- Routes lồng nhau
- Route guards (bảo vệ routes)
- Named routes
- Alias routes

## Cài đặt và chạy

```bash
cd lab8
npm install
npm run dev
```

## Cấu trúc Routes

### 1. Routes cơ bản
- `/` - Trang chủ (Home)
- `/blog` - Danh sách blog (BlogList)
- `/login` - Đăng nhập (Login)

### 2. Routes động
- `/blog/:id` - Chi tiết bài viết (BlogPost)
  - Ví dụ: `/blog/1`, `/blog/2`, `/blog/3`

### 3. Routes lồng nhau
- `/profile` - Thông tin người dùng (UserProfile)
  - `/profile/info` - Thông tin cơ bản (ProfileInfo)
  - `/profile/settings` - Cài đặt (ProfileSettings)

### 4. Routes được bảo vệ
- `/dashboard` - Dashboard (chỉ truy cập khi đã đăng nhập)
  - Nếu chưa đăng nhập, sẽ chuyển hướng đến `/login`

### 5. Alias Routes
- `/me` - Alias của `/profile`
  - Truy cập `/me` sẽ hiển thị trang UserProfile

## Tính năng

### Xác thực giả lập
- Đăng nhập với bất kỳ tên đăng nhập và mật khẩu nào
- Thông tin lưu trong localStorage
- Route guard kiểm tra trạng thái đăng nhập

### Named Routes
Tất cả routes đều có tên:
- Home
- BlogList
- BlogPost
- UserProfile
- ProfileInfo
- ProfileSettings
- Login
- Dashboard

### Điều hướng lập trình
Sử dụng `router.push({ name: 'routeName' })` để điều hướng

## Các Component

### Views
- `Home.vue` - Trang chủ
- `BlogList.vue` - Danh sách blog
- `BlogPost.vue` - Chi tiết bài viết
- `UserProfile.vue` - Thông tin người dùng (parent)
- `ProfileInfo.vue` - Thông tin cơ bản (child)
- `ProfileSettings.vue` - Cài đặt (child)
- `Login.vue` - Đăng nhập
- `Dashboard.vue` - Dashboard (protected)

### Router
- `router/index.ts` - Cấu hình routes

## Hướng dẫn sử dụng

1. **Xem danh sách blog**: Click vào "Blog" trên navbar
2. **Xem chi tiết bài viết**: Click vào bất kỳ bài viết nào
3. **Xem thông tin cá nhân**: Click vào "Hồ sơ" hoặc truy cập `/me`
4. **Đăng nhập**: Click vào "Đăng nhập", nhập bất kỳ thông tin nào
5. **Truy cập Dashboard**: Sau khi đăng nhập, click vào "Dashboard"

## Yêu cầu đã hoàn thành

✅ Yêu cầu 1: Thiết lập Vue.js với Vue Router
✅ Yêu cầu 2: Tạo đầy đủ 6 components
✅ Yêu cầu 3a: Routes lồng nhau (/profile/info, /profile/settings)
✅ Yêu cầu 3b: Routes động (/blog/:id)
✅ Yêu cầu 3c: Bảo vệ routes với xác thực giả lập
✅ Yêu cầu 3d: Named routes và điều hướng lập trình
✅ Yêu cầu 3e: Alias routes (/me -> /profile)
