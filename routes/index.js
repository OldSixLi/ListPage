var express = require('express');
var qiniu = require('qiniu'); //七牛获取uptoken
var router = express.Router();
var fs = require("fs");

/* 主页地址的返回 */
router.get('/', function(req, res, next) {
  //跳转到某个页面
  res.redirect('/Doc/Angularjs/floors.html');
});

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
// 　◆◆◆◆◆◆◆◆◆◆　◆◆◆◆◆◆◆　　　◆◆◆◆◆◆◆◆◆　　◆◆◆◆◆◆◆◆◆　
// 　◆◆◆◆◆◆◆◆◆◆　◆◆◆◆◆◆◆◆◆　◆◆◆◆◆◆◆◆◆　　◆◆◆◆◆◆◆◆◆　
// 　　　　　◆◆◆　　　　◆◆◆　　　◆◆◆　◆◆◆◆　　　　　　　◆◆◆　　　　　　　
// 　　　　　◆◆◆　　　　◆◆◆　　　◆◆◆　◆◆◆◆　　　　　　　◆◆◆　　　　　　　
// 　　　　　◆◆◆　　　　◆◆◆　　　◆◆◆　◆◆◆◆　　　　　　　◆◆◆　　　　　　　
// 　　　　　◆◆◆　　　　◆◆◆　　　◆◆◆　◆◆◆◆　　　　　　　◆◆◆　　　　　　　
// 　　　　　◆◆◆　　　　◆◆◆◆◆◆◆◆◆　◆◆◆◆◆◆◆◆◆　　◆◆◆◆◆◆◆◆　　
// 　　　　　◆◆◆　　　　◆◆◆◆◆◆◆　　　◆◆◆◆　　　　　　　◆◆◆　　　　　　　
// 　　　　　◆◆◆　　　　◆◆◆　◆◆◆　　　◆◆◆◆　　　　　　　◆◆◆　　　　　　　
// 　　　　　◆◆◆　　　　◆◆◆　◆◆◆◆　　◆◆◆◆　　　　　　　◆◆◆　　　　　　　
// 　　　　　◆◆◆　　　　◆◆◆　　◆◆◆　　◆◆◆◆　　　　　　　◆◆◆　　　　　　　
// 　　　　　◆◆◆　　　　◆◆◆　　◆◆◆◆　◆◆◆◆　　　　　　　◆◆◆　　　　　　　
// 　　　　　◆◆◆　　　　◆◆◆　　　◆◆◆　◆◆◆◆◆◆◆◆◆◆　◆◆◆◆◆◆◆◆◆　
// 　　　　　◆◆◆　　　　◆◆◆　　　◆◆◆◆◆◆◆◆◆◆◆◆◆◆　◆◆◆◆◆◆◆◆◆　
//zTree资源
router.all('/tree', function(req, res, next) {
  var data = fs.readFileSync("/PersonCodes/ListPage/public/JSON/tree.json", "utf-8");
  //控制延时返回数据
  var obj = JSON.parse(data);
  setTimeout(function() {
    res.json(obj);
  }, 0);
});

// ************************************************************************ 
// 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
// 　　　　　　●●●　　　　　　　　　　　　　　　●●●　　　　　　　　　　　　　　　　　　　　　　　
// 　　　　　　●●●　　　　　　　　　　　●●●　●●●　　　　　　　　　●●●●●●●●●●●●　　
// 　　　　　　●●●　　　　　　　　　　　●●●　●●●　　　　　　　　　　　　　　　　　　　　　　　
// 　　　　　　●●●　　　　　　　　　　　●●●●●●●●●●●●　　　　　　　　　　　　　　　　　　
// 　　　　　　●●●　　　●●●●　　　●●●　　●●●　　　　　　　　　　　　　　　　　　　　　　　
// 　　　　　　●●●●●●●●　　　　　●●●　　●●●　　　　　　　●●●●●●●●●●●●●●●　
// 　　　●●●●●●●　　　　　　　　●●●　　　●●●　　　　　　　●●●●●●●●●●●●●●●　
// 　●●●●●●●●　　　　　　　　　　　　　　　●●●　　　　　　　　　　　　●●●　　　　　　　　
// 　　　　　　●●●　　　　　　　　●●●●●●●●●●●●●●●●　　　　　●●●　　　　　　　　　
// 　　　　　　●●●　　　　　　　　　　　　　　　●●●　　　　　　　　　　　●●●　　●●●　　　　
// 　　　　　　●●●　　　　　　　　　　　　　　　●●●　　　　　　　　　　●●●　　　●●●●　　　
// 　　　　　　●●●　　　　●●●　　　　　　　　●●●　　　　　　　　　●●●　　　　　●●●　　　
// 　　　　　　●●●　　　　●●●　　　　　　　　●●●　　　　　　　　●●●●●●●●●●●●●　　
// 　　　　　　●●●●●●●●●●　　　　　　　　●●●　　　　　　　　　●●●●　　　　　　●●●　
// 　　　　　　　　　　　　　　　　　　　　　　　　●●●　　　　　　　　　　　　　　　　　　　　　　　
//获取七牛云Token接口
qiniu.conf.ACCESS_KEY = 'gfmlM2ZmBqZkpPZixYkPzb2zy-FbJv2mvR1KY3t_';
qiniu.conf.SECRET_KEY = '7ksC_gm9kaNmUHMaphcypwFK3nWzafwbxNKLxaNN';
router.get('/token', function(req, res, next) {

  var myUptoken = new qiniu.rs.PutPolicy('hes-upload');
  var token = myUptoken.token();
  res.header("Cache-Control", "max-age=0, private, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  if (token) {
    res.json({
      uptoken: token,
      // sava_key: currentKey
    });
  }
});
module.exports = router;