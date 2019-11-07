var express = require('express');
var session = require('express-session');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var http = require('http');
var path = require('path');
var static = require('serve-static');

var mysql = require('mysql');
var url = require('url');

var app = express();

// DB 연결 설정
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "team2"
});

// DB 연결 시도
con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

// use 설정
app.use(static(path.join(__dirname, '/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: 'team2',
  resave: true,
  saveUninitialized: true
}));

// 포트 설정
app.set('port', process.env.PORT || 8080);

// login 요청 시 db에 요청 후 성공 여부 반환
app.post('/login', function(req, res) {
  console.log("요청 -> " + req.url);
  var id = req.body.id;
  var pw = req.body.pw;

  var sql = "SELECT ID FROM USER WHERE ID='" + id + "' AND PASSWORD='" + pw + "'";
  con.query(sql, function(err, rows, fields) {
    if(err) {
       throw err;
      }
    else {
      if(rows.length < 1) {
        res.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" });
        res.write("<script>alert('로그인에 실패하였습니다. 아이디 혹은 비밀번호를 다시 한 번 확인해주세요.');</script>");
        res.write("<script>location.href='login.html'</script>");
        res.end();
      }
      else {
        console.log("유저 '" + rows[0].ID + "' 로그인 성공!")
        req.session.user = { userid: rows[0].ID };
        res.redirect('main.html');
      }
    }
  });
});

// 회원 가입 요청 및 처리
app.post('/register', function(req, res) {
  console.log("요청 -> " + req.url);
  var id = req.body.id;
  var pw = req.body.pw;

  var sql = "INSERT INTO USER VALUES('" + id + "', '" + pw + "', '', '', '')";
  con.query(sql, function(err, result) {
    if ( err ) {
      console.log("회원가입 실패!");
      res.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" });
      res.write("<script>alert('이미 사용중인 아이디입니다.');</script>");
      res.write("<script>location.href='login.html'</script>");
      res.end();
    }
    else {
      console.log("회원가입 완료!");
      res.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" });
      res.write("<script>alert('회원 가입에 성공했습니다. 서비스를 이용하시려면 로그인 해주세요.');</script>");
      res.write("<script>location.href='login.html'</script>");
      res.end();
    }
  });
});

// 카테고리 저장 및 처리
app.post('/catsave', function(req, res) {
  console.log("요청 -> " + req.url);
  var id = req.body.id;
  var category = req.body.category;

  console.log("요청된 값 : " + id + ":" + category);

  var sql = "UPDATE USER SET CATEGORY='" + category + "' WHERE ID='" + id + "'";
  con.query(sql, function(err, result) {
    if ( err ) {
      console.log("카테고리 저장 실패!");
      res.send({ "success" : false });
    }
    else {
      console.log("카테고리 저장 완료!");
      res.send({ "success" : true });
    }
  });
});

// 카테고리 불러오기 및 처리
app.post('/catload', function(req, res) {
  console.log("요청 -> " + req.url);
  var id = req.body.id;

  var sql = "SELECT CATEGORY FROM USER WHERE ID='" + id + "'";
  con.query(sql, function(err, rows, fields) {
    if ( err ) { throw err; }
    else {
      if ( rows.length < 1 ) {
        console.log("카테고리 불러오기 실패!");
      }
      else {
        console.log("카테고리 불러오기 성공!");
        res.send({
          "category" : rows[0].CATEGORY
        });
      }
    }
  });
});

// main.html에 url로 강제 접근시 세션 체크
app.get('/session', function(req, res) {
  console.log("요청 -> " + req.url);
  if(req.session.user) {
    console.log("메인 페이지 접근에 대한 세션 승인! -> " + req.session.user.userid);
    res.send({
      "id" : req.session.user.userid,
      "success" : true
    });
  }
  else {
    console.log("메인 페이지 접근에 대하여 세션 미승인! -> " + req.ip);
    res.send({
      "success" : false
    });
  }
});

// 로그아웃 요청 시 세션 삭제
app.get('/logout', function(req, res) {
  console.log("요청 -> " + req.url);
  req.session.destroy();
  res.redirect('index.html');
});

// 요청 페이지가 없을 경우
app.all('*', function(req, res) {
  res.status(404).send("<h1>요청하신 페이지를 찾을 수 없습니다.</h1>");
});

// 클라이언트 접속 대기
http.createServer(app).listen(app.get('port'), function() {
  console.log('Server START...' + app.get('port'));
});
