/*
 * @Author:马少博 (ma.shaobo@qq.com)
 * @Date: 2017年4月10日13:33:33
 * @Last Modified by: 马少博
 * @Last Modified time:2017年4月10日13:33:36
 */

var mysql = require('mysql');
var Q = require('q');

var TEST_DATABASE = 'nodesql';
var TEST_TABLE = 'user';
var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306'
});

client.connect();
// 和哪个数据库建立连接
client.query("use " + TEST_DATABASE);


/**
 * 从mysql查询具体信息
 * 
 * @param {any} id 主键参数
 * @param {any} next 回调函数(处理结果的操作)
 */
function finds(id, next) {
  if (id) {
    var sql = 'select * from  user where ID=' + id;
    client.query(sql, function(err, result) {
      if (!err) {
        try {
          console.log("--当前结果为:" + JSON.stringify(result));
          var json = JSON.parse(JSON.stringify(result));
          next(json);
        } catch (error) {
          console.log("line-40:当前数据转化的错误为:" + error);
        }
      } else {
        console.log(err);
      }
    });
  };
}
var start = function(model, next) {
  var deferred = Q.defer();
  //语句 
  var addSql = 'INSERT INTO  `user`(gender,name,age,iconUrl,regtime)  VALUES(?,?,?,?,NOW())';
  //参数
  var addParams = [
    model.gender,
    model.name,
    model.age, model.iconUrl
  ];

  //增 add
  var B = client.query(addSql, addParams, function(err, result) {
    if (err) {
      deferred.reject(false);
      // console.log('[INSERT ERROR] - ', err.message);
      // return;
    } else {
      deferred.resolve(true);
      // next(true);
      // console.log('~~~~~~~~~用户:' + model.name + '插入成功~~~~~~~~~~~~~');
    }
    return deferred.promise;
  });
  console.log(B.toString() + "~~~~~~~~~~");

}

function returnModel(model) {
  var A = start(model);
  // A.then(

  //   function () {
  //     var obj = {
  //       success: true,
  //       message: "保存成功"
  //     }
  //     res.json(obj);
  //   },
  //   function () {
  //     var obj = {
  //       success: false,
  //       message: "保存失败"
  //     }
  //     res.json(obj);
  //   });

  A.done(function() {
    console.log("success");
  })
}




//输出函数
// exports.start = start;



exports.getDS = finds;
exports.addModel = start;
exports.returnModel = returnModel;