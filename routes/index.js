var express = require('express');
var router = express.Router();

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(1306, function(){
    console.log('listening on *:1306');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('AMap', { title: '南昌公车管理' });
});

router.get('/sendCar', function(req, res, next) {
  io.emit('sendCar', req.query);
  console.log(req.query);
  res.json("ok")
});

io.on('connection',function(socket){
  //console.log(socket)
});


module.exports = router;
