const { table, count } = require('console');
var express = require('express');
var app = express();
var port = 2806;
var path = require("path");
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// --------- Bài 1 ---------
var array = [{
    id: 1,
    name: "Phong",
    password: "1",
    address: "HN"
}, {
    id: 2,
    name: "Sang",
    password: "1",
    address: "HP"
}, {
    id: 3,
    name: "Tan",
    password: "1",
    address: "Bắc Ninh"
}, {
    id: 4,
    name: "Dũng",
    password: "1",
    address: "TQ"
}]
// a)
app.get("/show", function (req, res) {
    res.json(array)
})

// b)
// app.get("/show/:idUser",function(req, res){
//     var id = req.params.idUser;
//     var count = 0;
//     for(var i = 0; i < array.length; i++){
//         if(Number(id) === array[i].id){
//             count++
//             return res.json(array[i])
//         }
//     }
// })

// c)
// app.get("/show/:id/:name/:password/:address",function(req, res){
//     var idUser = req.params.id;
//     var nameUser = req.params.name;
//     var passwordUser = req.params.password
//     var addressUser = req.params.address
//     array.push({id:  Number(idUser),
//     name: nameUser,
//     password: passwordUser,
//     address: addressUser})

//     res.json(array)
// })

// d)
// app.get("/show/:id/:name/:password/:address",function(req, res){
//     var idUser = req.params.id;
//     var nameUser = req.params.name;
//     var passwordUser = req.params.password
//     var addressUser = req.params.address
//     for(var i = 0; i < array.length; i++){
//         if(Number(idUser) == 2){
//             array[idUser -1].name = nameUser
//             array[idUser-1].password = passwordUser
//             array[idUser-1].address = addressUser
//         }else{
//             return res.json("False")
//         }
//     }
//     res.json(array)
// })

// e)
// app.get("/show/:id",function(req, res){
//     var id = req.params.id
//     array.splice(Number(id)-1, 1)
//     res.json(array)
// })

// f)
// app.get("/show/:name/:pass", function (req, res) {
//     var name = req.params.name
//     var password = req.params.pass
//     var count = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (name === array[i].name && password === array[i].password) {
//             count++;
//         }
//     }
//     if (count > 0) {
//         res.json("Login successful")
//     } else {
//         res.json("Login fail")
//     }
// })

// g)

// -----------Bài 2-----------
var obj = {name: "nodemy"}
// a)
// app.get("/exercise",function(req, res){
//     res.json(obj)
// })

// b)
app.get("/exercise",function(req, res){
    var name = obj.name
    var name1 = req.query.name
    res.json(obj[name])
})

// c)
// app.get("/exercise/:age",function(req, res){
//     var age = req.params.age
//     obj.age = age
//     res.json(obj)
// })
// d)
app.listen(port, function () {
    console.log("serve dang cai dat thanh cong: " + 3000);
})





