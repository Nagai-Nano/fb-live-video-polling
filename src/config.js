// Máy phải có NodeJs
// Download tại đây: https://nodejs.org/en/download
// Thêm ảnh ở thư mục public/images
// Tên của thư mục sẽ tương ứng với các loại tương tác (like, love, haha, wow, sad, angry)

// Chạy lệnh 'npm install' để cài đặt các gói cần thiết
// Chạy lệnh 'npm start' để khởi động app

// ID bài viết cần lấy dữ liệu
// Nếu là bài viết trong nhóm hoặc cá nhân thì phải có thêm ID của nhóm / cá nhân
// IDNHÓM_IDBÀIVIẾT
export const ID_POST = '364997627165697_762959870702802'

// https://facebook.com/me
// -> Ctrl + u
// -> Ctrl + f
// Nhập EAAA
// Click đúp chuột để bôi đen & copy đoạn chuỗi
export const ACCESS_TOKEN = ''

// Tiêu đề của app
export const TITLE_POLL = 'DJ yêu thích của bạn là ai ?'

// Thời gian cập nhật lượt tương tác(like, love, haha, wow, sad, angry) và bình luận
// Tính bằng ms
export const INTERVAL_FOR_REQUEST_REACTION = 1000
export const INTERVAL_FOR_REQUEST_COMMENT = 5000

// Có thể hiển thị đủ 6 loại like, love, haha, wow, sad, angry nếu muốn
// {
//    REACTION_TYPE: 'love',
//    REACTION_TITLE: 'Alan Walker'
// }
// Nhớ thêm ',' mỗi {}
export default [
  {
    REACTION_TYPE: 'like',
    REACTION_TITLE: 'Hardwell'
  },
  {
    REACTION_TYPE: 'haha',
    REACTION_TITLE: 'Martin Garrix'
  },
  {
    REACTION_TYPE: 'wow',
    REACTION_TITLE: 'David Guetta'
  }
]


