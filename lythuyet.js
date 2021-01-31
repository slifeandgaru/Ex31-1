// express : là frame work để tạo serve
// npm init: tạo liên kết với npm
// npm i express: cài đặt frame work
// npm i - g nodemon: cài đặt nodemon vào máy
    // là package của npm tự động cập nhật lại website khi mình sửa code
// app.get : chỉ được có duy nhất 1 res trong app.get 
// res.send("") : có thể truyền vào 1 code html
// res.json("") : kết quả trả về 1 dạng chuỗi nằm trong json

// cách đặt tên API: là chữ có 2 từ trở lên, viết thường chữ cái đâu và viết hoa chữ cái thứ 2, giữa 2 từ phải có dấu "-" 
    // vd: some-Thing
// method:
// - không nhận dữ liệu của người dùng
//     +Get: hiển thị dữ liệu hoặc giao diện
// - nhận dữ liệu của người dùng, không thể thử trực tiếp trên browswe
//     +post: Các trường hợp còn lại()
//     +Put(patch): cập nhật theo 1 điều kiện
//     +delete: xóa giá trị theo một kiều kiện

// VD: api: 1 mảng user 
//     get("/user") : hiện thị toàn bộ dữ liệu có trong array user
//     get("/user/:id") : hiển thị chi tiết 1 dữu liệu trong mảng array(giá trị thứ 0, 1, 2, 3...)
//     post("/user") : thêm mới 1 giá trị vào trong mảng array user hoặc kiểm tra tính chính xác của dữ liệu
//     put("/user/:id") : Cập nhật giá trị 1 bản ghi trong array
//     delete("/user/:id") : xóa giá trị 1 bản ghi trong array