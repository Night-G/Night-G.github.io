const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

// app.listen(port,function () { 

// })


// app.get("/", function (req,res) { 
//     res.sendFile(__dirname + "/main.html")
// });