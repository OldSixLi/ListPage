var express = require('express');
var router = express.Router();
var qiniu = require('qiniu'); //七牛获取uptoken

// 处理请求的接口
var obj = {
 "content": [{
   "createAt": 1482248703000,
   "id": 7,
   "userName": "caoyan木木",
   "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
   "gender": "M",
   "district": "天津市河东区"
  },
  {
   "createAt": 1490591287000,
   "id": 11,
   "userName": "lucales",
   "iconUrl": "http://wx.qlogo.cn/mmopen/p1Vk3AlOA4h5d1yzNvHia9RCWxEar3DCUkhqHX57KDT0C5pImba31atdX2UCRMj6rlz3YoQ9l2QktBdrfk3WntuOm6ibjTBLye/0",
   "gender": "M",
   "district": "Chaoyang-Beijing"
  },
  {
   "createAt": 1490518722000,
   "id": 10,
   "userName": "Ryan Zhang",
   "iconUrl": "http://wx.qlogo.cn/mmopen/OJwnLib0QD3Eg6vdzMuyuZ06v3yE85QO64b7od9w1wnibD3GNeZFpd9cLLAxEIbzSD65P9sEPaAR4n4XT4dCIDVlvy4sN5NM8K/0",
   "gender": "M",
   "district": "-"
  },
  {
   "createAt": 1489543685000,
   "id": 9,
   "userName": "单眼皮下一口",
   "iconUrl": "http://wx.qlogo.cn/mmopen/OJwnLib0QD3ENloCl5OnSaQMXeqp8TCGQFZZh8dStRxEZcx9QaibVflyfubFoV20AVCicYu1m0VcBqHKdWLnrUZeoej9c9BhbU2/0",
   "gender": "M",
   "district": "-",
   "origin": "天津滨海新区中心"
  },
  {
   "createAt": 1489540739000,
   "id": 8,
   "userName": "川",
   "iconUrl": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLAk3WQuAC1YhPcZE8kXiazfumWPMO3D42CX7Fu9PvOW524RFmEKpCxgL7CmHzJYce8rY0kGUaRBCpg/0",
   "gender": "M",
   "district": "Suzhou-Jiangsu",
   "origin": "天津滨海新区中心"
  },
  {
   "createAt": 1482248703000,
   "id": 1,
   "userName": "睡个毛起来嗨啊",
   "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
   "gender": "M",
   "district": "天津市河北区xxx街道",
   "origin": "天津滨海新区中心"
  },
  {
   "createAt": 1488350467000,
   "id": 6,
   "userName": "绝",
   "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
   "gender": "F",
   "district": "-"
  },
  {
   "createAt": 1482248703000,
   "id": 3,
   "userName": "马悦3号",
   "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
   "gender": "M",
   "district": "天津市河东区",
   "origin": "天津滨海新区中心"
  },
  {
   "createAt": 1482248703000,
   "id": 4,
   "userName": "马悦6号",
   "iconUrl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEIbF9Ro3p37M7okINkaiaynzob80ibZNB0L05sJhCziaslFsymib7RKgfPfg5ceiaOonY1ZRkN1KPuicEicA/0",
   "gender": "M",
   "district": "天津市河东区",
   "origin": "天津滨海新区中心"
  },
  {
   "createAt": 1482248703000,
   "id": 5,
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
router.get('/users', function (req, res, next) {
 // res.send('返回的数据内容');
 setTimeout(function () {
  res.json(obj);
 }, 0);

});
// /users/name
router.get('/name', function (req, res, next) {
 // res.send('返回的数据内容');
 res.send("马三立老师");
});

/* GET users listing. */
router.get('/', function (req, res, next) {
 res.send('respond with a resourcess');
});

//获取七牛云Token接口
qiniu.conf.ACCESS_KEY = 'gfmlM2ZmBqZkpPZixYkPzb2zy-FbJv2mvR1KY3t_';
qiniu.conf.SECRET_KEY = '7ksC_gm9kaNmUHMaphcypwFK3nWzafwbxNKLxaNN';
router.get('/token', function (req, res, next) {

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