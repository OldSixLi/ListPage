var express = require('express');

var qiniu = require('qiniu'); //七牛获取uptoken
var DBhelper = require('../mysql/sql.js');
var url = require('url');
var app = express();
//获取POST请求
var bodyParser = require("body-parser");
// router.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '1mb' })); //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));
var router = express.Router();
// 处理请求的接口
var obj = {
  "content": [{
      "createAt": 1482248703000,
      "id": 1,
      "userName": "caoyan木木",
      "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
      "gender": "M",
      "district": "天津市河东区"
    },
    {
      "createAt": 1490591287000,
      "id": 2,
      "userName": "lucales",
      "iconUrl": "http://wx.qlogo.cn/mmopen/p1Vk3AlOA4h5d1yzNvHia9RCWxEar3DCUkhqHX57KDT0C5pImba31atdX2UCRMj6rlz3YoQ9l2QktBdrfk3WntuOm6ibjTBLye/0",
      "gender": "M",
      "district": "Chaoyang-Beijing"
    },
    {
      "createAt": 1490518722000,
      "id": 3,
      "userName": "Ryan Zhang",
      "iconUrl": "http://wx.qlogo.cn/mmopen/OJwnLib0QD3Eg6vdzMuyuZ06v3yE85QO64b7od9w1wnibD3GNeZFpd9cLLAxEIbzSD65P9sEPaAR4n4XT4dCIDVlvy4sN5NM8K/0",
      "gender": "M",
      "district": "-"
    },
    {
      "createAt": 1489543685000,
      "id": 4,
      "userName": "单眼皮下一口",
      "iconUrl": "http://wx.qlogo.cn/mmopen/OJwnLib0QD3ENloCl5OnSaQMXeqp8TCGQFZZh8dStRxEZcx9QaibVflyfubFoV20AVCicYu1m0VcBqHKdWLnrUZeoej9c9BhbU2/0",
      "gender": "M",
      "district": "-",
      "origin": "天津滨海新区中心"
    },
    {
      "createAt": 1489540739000,
      "id": 5,
      "userName": "川",
      "iconUrl": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLAk3WQuAC1YhPcZE8kXiazfumWPMO3D42CX7Fu9PvOW524RFmEKpCxgL7CmHzJYce8rY0kGUaRBCpg/0",
      "gender": "M",
      "district": "Suzhou-Jiangsu",
      "origin": "天津滨海新区中心"
    },
    {
      "createAt": 1482248703000,
      "id": 6,
      "userName": "睡个毛起来嗨啊",
      "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
      "gender": "M",
      "district": "天津市河北区xxx街道",
      "origin": "天津滨海新区中心"
    },
    {
      "createAt": 1488350467000,
      "id": 7,
      "userName": "绝",
      "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
      "gender": "F",
      "district": "-"
    },
    {
      "createAt": 1482248703000,
      "id": 8,
      "userName": "马悦3号",
      "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
      "gender": "M",
      "district": "天津市河东区",
      "origin": "天津滨海新区中心"
    },
    {
      "createAt": 1482248703000,
      "id": 9,
      "userName": "马悦6号",
      "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
      "gender": "M",
      "district": "天津市河东区",
      "origin": "天津滨海新区中心"
    },
    {
      "createAt": 1482248703000,
      "id": 10,
      "userName": "马悦6号",
      "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
      "gender": "M",
      "district": "天津市河东区"
    }
  ],
  "totalPages": 1,
  "totalElements": 10,
  "pageNum": 10,
  "page": 0
};
//请求的是/users/users接口才会访问到此处
router.get('/users', function(req, res, next) {
  // res.send('返回的数据内容');
  setTimeout(function() {
    res.json(obj);
  }, 0);

});
// /users/name
router.get('/name', function(req, res, next) {
  // res.send('返回的数据内容');
  res.send("马三立老师");
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resourcess');
});

// 获取某个用户的具体信息
router.get('/userinfo', function(req, res, next) {
  var params = url.parse(req.url, true).query;
  var returnObj = {};
  returnObj.dataSuccess = false;
  if (!params.id) {
    returnObj.errorMessage = "未提供用户参数,获取不到数据";
    res.json(returnObj);
  } else {
    var id = params.id;
    var result = DBhelper.getDS(id, function(result) {
      if (result) {
        returnObj.dataSuccess = true;
        returnObj.data = result;
        res.json(returnObj);
      } else {
        returnObj.errorMessage = '没数据' + new Date().getSeconds();
        res.json(returnObj);
      }
    });
  }
});
// 新增用户信息
router.get('/add', function(req, res, next) {
  var data = req;
  console.log("GET:" + req.url)
  res.send(data.url);
});　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
// 　●●●●●●　　　●●●●●　　　●●●●●●　●●●●●●●●　
// 　●●●　●●●　●●●　●●●　　●●●●●●●　　　●●●　　　
// 　●●●　　●●●●●●　　●●●●●●　　●●●　　　●●●　　　
// 　●●●　　●●●●●●　　●●●●●●　　　　　　　　●●●　　　
// 　●●●　　●●●●●●　　●●●　●●●●　　　　　　●●●　　　
// 　●●●●●●●　●●●　　●●●　　　●●●●　　　　●●●　　　
// 　●●●●　　　　●●●　　●●●　　　　●●●●　　　●●●　　　
// 　●●●　　　　　●●●　　●●●●●●　　●●●　　　●●●　　　
// 　●●●　　　　　●●●　　●●●●●●　　●●●　　　●●●　　　
// 　●●●　　　　　●●●●●●●　●●●●●●●●　　　●●●　　　
// 　●●●　　　　　　　●●●●　　　　●●●●　　　　　●●●　
// POST新增用户信息
router.post('/add', function(req, res, next) {

  try {
    //NOTE:这个地方的data.body特别傻,不能直接输出,否则就报错.哪怕你输出一个object我都不会怪你
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓就是这个错误↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // Cannot convert object to primitive value
    // at F:\PersonCodes\ListPage\routes\users.js:172:25
    // at Layer.handle [as handle_request] (F:\PersonCodes\ListPage\node_modules\express\lib\router\layer.js:95:5)
    // at next (F:\PersonCodes\ListPage\node_modules\express\lib\router\route.js:131:13)
    // at Route.dispatch (F:\PersonCodes\ListPage\node_modules\express\lib\router\route.js:112:3)
    // at Layer.handle [as handle_request] (F:\PersonCodes\ListPage\node_modules\express\lib\router\layer.js:95:5)
    // at F:\PersonCodes\ListPage\node_modules\express\lib\router\index.js:277:22
    // at Function.process_params (F:\PersonCodes\ListPage\node_modules\express\lib\router\index.js:330:12)
    // at next (F:\PersonCodes\ListPage\node_modules\express\lib\router\index.js:271:10)
    // at Function.handle (F:\PersonCodes\ListPage\node_modules\express\lib\router\index.js:176:3)
    // at router (F:\PersonCodes\ListPage\node_modules\express\lib\router\index.js:46:12)
    //NOTE:以后还是得多细心啊,又特么浪费一个多小时(就为了console一哈)
    console.log("POST:" + JSON.stringify(req.body));
    var postData = req.body;
    var model = {
        name: postData.name,
        gender: postData.gender,
        age: postData.age,
        Regtime: postData.Regtime
      }
      //  addModel
    DBhelper.addModel(model);
  } catch (err) {
    console.log(err);
  }
  // data.body.user = "是大";
  // res.send(data.body);
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