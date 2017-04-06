/**
 * 创建HTTP 请求的服务
 * @马少博 (1030809514@qq.com)
 * @时间  Date
 * @version 1.0
 */

//声明APP
var app = angular.module('myApp', []);
//创建
app.factory('httpService',
  function($http, $q) {
    var pageing = function(pageindex, url, params) {
      // $q是Angular的一种内置服务， 它可以使你异步地执行函数， 并且当函数执行完成时或异常时它允许你使用函数的返回值或返回执行状态通知等。
      var defer = $q.defer();
      var url = "/users/users" + "?" + "page=" + pageindex + "&pageNum=10"; //请求的参数和地址
      $http.get(url)
        .success(function(data, status, head, config) {
          var res = {
            data: data,
            status: status,
            config: config
          };
          defer.resolve(res);
        })
        .error(function(data, status, headers, config) {
          var res = {
            data: data,
            status: status
          };
          defer.resolve(res);
        });
      //返回数据
      return defer.promise;
    };
    //返回的方法
    return {
      pageing: pageing
    };

  }
);