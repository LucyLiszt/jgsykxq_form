var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
// var multer = require('multer');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'sykxq19'
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
// app.use(express.static('img'));
// 文件部分
// var storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'./img/');
//     },
//     filename:function(req,file,cb){
//         cb(null,req.body.name + '-' + Date.now() + '.jpg');
//     }
// });
// var upload = multer({storage:storage});
// 文件部分
//console.log(upload);
app.post('/post',function(req,res){
   console.log(req.body);
  //  console.log(req.file);
    // conn.connect();
    conn.query("insert into 19sykxq(radio,renshu,name1,studentID1,gender1,phone1,class1,major1,name2,studentID2,gender2,phone2,class2,major2,name3,studentID3,gender3,phone3,class3,major3,name4,studentID4,gender4,phone4,class4,major4,name5,studentID5,gender5,phone5,class5,major5,name6,studentID6,gender6,phone6,class6,major6,timu) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [req.body.radio,req.body.renshu,req.body.name1,req.body.studentID1,req.body.gender1,req.body.phone1,req.body.class1,req.body.major1,req.body.name2,req.body.studentID2,req.body.gender2,req.body.phone2,req.body.class2,req.body.major2,req.body.name3,req.body.studentID3,req.body.gender3,req.body.phone3,req.body.class3,req.body.major3,req.body.name4,req.body.studentID4,req.body.gender4,req.body.phone4,req.body.class4,req.body.major4,req.body.name5,req.body.studentID5,req.body.gender5,req.body.phone5,req.body.class5,req.body.major5,req.body.name6,req.body.studentID6,req.body.gender6,req.body.phone6,req.body.class6,req.body.major6,req.body.timu]);
//     conn.query("insert into 19spring(qh,ld,cx,gt,sy,cayes,cano,q5,q6,q7,bgs,wt,jt,jtmg,jtjs,jg,pg,rz,cz,reason,words) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
//     [req.body.qh,req.body.ld,req.body.cx,req.body.gt,req.body.sy,req.body.cayes,req.body.cano,req.body.q5,req.body.q6,req.body.q7,req.body.bgs,req.body.wt,req.body.jt,req.body.jtmg,req.body.jtjs,req.body.jg,req.body.pg,req.body.rz,req.body.cz,req.body.reason,req.body.words]);
    
    // res.send("!");
   conn.end();
   res.sendFile(__dirname + '/success.html');
  //  var mystr="报名成功";
  //  document.write(mystr);
});

// app.post("/post",function(req,res){
//     console.log(req);
// });

app.listen(4000);

console.log("listening 4000");
