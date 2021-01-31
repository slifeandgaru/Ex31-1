const { table } = require('console');
var express = require('express');
var app = express();
var port = 2806;
var path = require("path");
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// app.get("/",function(req, res){
//     // res.json("Đây là số 5")
//     // res.send("<h1>Hello</h1>")
//     res.sendFile(path.join(__dirname, "./index.html"))
// })

//Truyền vào params(hay còn gọi là truyền công khai) 

// app.get("/:number/:number2", function(req, res){
//     console.log(req.params.number, req.params.number2);
//     // res.json([req.params.number,req.params.number2])
//     arr = [{
//         number:req.params.number,
//         number2:req.params.number2
//     }]
//     res.json(arr)
// })

// ------ GIẢI BÀI TẬP TRUYỀN PARAMS --------
// -- BÀI 1
// app.get("/:number/:number2", function(req,res){
//     var number = +req.params.number
//     var number2 = +req.params.number2
//     if((number + number2) > 0){
//         return res.json("so lon hon 0")
//     }else{
//         return res.json("so nho hon 0")
//     }
// })
// -- BÀI 2
// app.get("/:username/:password", function (req, res) {
//     var Username = req.params.username
//     var Password = req.params.password
//     var count = 0;
    // arr = [{
    //     name: "ta",
    //     password: 1
    // }, {
    //     name: "ta1",
    //     password: 2
    // }, {
    //     name: "ta2",
    //     password: 3
    // }]
    // app.get("/user",function(req,res){
    //     res.json(arr)
    // })
//     for(var i = 0; i < arr.length; i++){
//         if(Username === arr[i].name && Number(Password) === arr[i].password){
//             count++;
//         }  
//     }
//     if(count > 0){
//         res.json("Login successful")
//     }else{
//         res.json("Login fail")
//     }
// })


// ---------- Query Express ----------
// app.get("/apiv1",function(req,res){
//     var number = req.query.number
//     res.json(number)
// })

// ----------- -------------

// app.get("/user/:name",function(req, res){
//     res.json(arr)
// })
// app.post("/user", function(req,res){
//     var name1 = req.body.name
//     var password = req.body.password
//     console.log(req.body,"body");
//     let obj = {
//         name: name1,
//         password: password
//     }
//     arr.unshift(obj)
//     res.json("successful")
// })

// -------- Ex 31-1 ----------
var array = [{
    id: 1,
    name: "Phong",
    password: "1",
    address: "HN"
},{
    id: 2,
    name: "Sang",
    password: "1",
    address: "HP"
},{
    id: 3,
    name: "Tan",
    password: "1",
    address: "Bắc Ninh"
},{
    id: 4,
    name: "Dũng",
    password: "1",
    address: "TQ"
}]

app.get("/show", function(req, res){
    res.json(array)
})
app.listen(port, function () {
    console.log("serve dang cai dat thanh cong: " + 3000);
})



// BÀI TẬP VỀ TRUYỀN PARAMS
// 1, Truyền lên 2 số bất kì kiểm tra xem tổng 2 số đó có lớn hơn 0 hay không
// - Nếu có thì trả về thông báo là tổng 2 số lớn 0
// - Nếu không thì trả về thông báo là tổng 2 số nhỏ hớn 0

//  2, Cho arr = [{
//     name: ta,
//     password: 1
// },{
//     name: ta1,
//     password: 2
// },{
//     name: ta2,
//     password: 3
// }]
// Hãy thực hiện chức năng đăng nhập với tên đăng nhập là name = "ta" và password = 1
// thì in ra đăng nhập đúng? nếu không đúng tên hoặc mật khẩu thì in ra thông báo sai tên 
// hoặc mật khẩu vui lòng nhập lại. Yêu cầu nếu dùng if else thì phải dùng ===




