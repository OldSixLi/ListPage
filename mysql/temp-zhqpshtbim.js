/*
 * @Author:马少博 (ma.shaobo@qq.com)
 * @Date: 2017年4月10日13:33:33
 * @Last Modified by: 马少博
 * @Last Modified time:2017年4月10日13:33:36
 */

var mysql = require('mysql');

var TEST_DATABASE = 'nodesql';
var TEST_TABLE = 'user';
var client = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  port: '3306'
});

client.connect();
//和哪个数据库建立连接
client.query("use " + TEST_DATABASE);


/**
 * 查询当前的信息
 * @param {any} id  
 */

finds(132);

function finds(id) {
  if (id) {
    var sql = 'select * from  user where ID=' + id;
    client.query(sql, function(err, result) {
      if (!err) {
        try {
          var json = JSON.parse(result);

        } catch (error) {
          console.error("当前数据转化的错误为:" + error);
        }
        if (json) {
          console.log(json);
        } else {
          console.log("数据获取不到");
        }

      } else {
        console.log(err);
      }
    });
  };
}
//输出函数
// exports.start = start;
// exports.finds = finds;