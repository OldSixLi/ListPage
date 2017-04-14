var express = require('express');
var qiniu = require('qiniu'); //七牛获取uptoken
var router = express.Router();
var fs = require("fs");
var multiparty = require('multiparty');
var util = require('util');

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

// 　　　　　◆◆　　　　　　　　　◆◆　　◆◆　　　　　　　　◆◆◆　　　　　　　◆◆　　◆◆　　　　　
// 　　　　　◆◆◆　　　　　　　◆◆◆◆◆◆◆　　　　　　　　◆◆　　　　　　　　◆◆◆　◆◆　　　　　
// 　　　　　　◆◆　　　　　　　◆◆◆◆◆◆◆　　　　　　　　◆◆　　　　　　　◆◆◆◆◆◆◆◆◆◆　　
// 　◆◆◆◆◆◆◆◆◆◆◆◆　◆◆◆◆◆◆◆◆◆◆◆　　　　　◆◆　　　　　　　◆◆◆　◆◆◆　　　　　
// 　　　◆◆◆　　◆◆　　　◆◆◆◆◆◆　◆◆　　　　　　　　◆◆◆◆◆◆◆　◆◆◆◆◆◆◆◆◆◆◆◆　
// 　　　　◆◆　◆◆◆　　　◆◆◆◆◆　　◆◆　　　　　　　　◆◆　　　　　　◆◆◆◆　◆◆　　　　　　
// 　　　　◆◆◆◆◆　　　　　　◆◆◆◆◆◆◆◆◆◆◆　　　　◆◆　　　　　　　◆◆◆　◆◆◆◆◆◆　　
// 　　　　　◆◆◆◆　　　　　　◆◆　　　◆◆　　　　　　　　◆◆　　　　　　　◆◆◆　◆　　◆◆◆　　
// 　　　　　◆◆◆　　　　　　　◆◆　　　◆◆　　　　　　　　◆◆　　　　　　　◆◆◆　◆◆　◆◆　　　
// 　　　　◆◆◆◆◆◆　　　　　◆◆　　　◆◆　　　　　　　　◆◆　　　　　　　◆◆◆　◆◆◆◆◆　　　
// 　◆◆◆◆　　　　◆◆◆◆　　◆◆　　　◆◆　　　　◆◆◆◆◆◆◆◆◆◆◆◆　◆◆◆　　　　◆◆◆　　
//文件上传
router.post('/upload', function(req, res, next) {
  try {

    var form = new multiparty.Form({ uploadDir: '../public/images/upload/' });
    form.parse(req, function(err, fields, files) {
      var filesTmp = JSON.stringify(files, null, 2);
      if (err) {
        console.log('parse error: ' + err);
        var obj = {
          success: false,
          message: ""
        }
        res.json(obj);
      } else {
        console.log('上传路径为: ' + filesTmp);　
        if (files.imageRes) {
          var inputFile = files.imageRes[0];
        }

        var uploadedPath = inputFile.path;
        uploadedPath = uploadedPath.substr(9); //利用public,截取public后的内容
        var obj = {
          success: true,
          message: uploadedPath
        }
        res.json(obj);
      }
    });

  } catch (err) {
    console.log(err);
  }
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