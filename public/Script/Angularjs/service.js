/**
 * 服务层
 * @马少博 (1030809514@qq.com)
 * @时间  Date
 * @version ID
 */
// var app = angular.module('myApp', []);
// app.factory('myFactory',
//   function($http, $q) {
//     var defer = $q.defer();
//     var pageing = function(pageindex, params) {
//       alert("21232");
//       var url = "http://60.205.170.209:8080/admin/api/" + "payment?" + params + "page=" + pageindex + "&pageNum=10"; //请求的参数和地址
//       $http.get(url)
//         .success(function(data, status, headers, config) {
//           if (data != null && data != "" && data != "null") {
//             //判断当前是否存在记录
//             $scope.dataLengths = data.content.length > 0;
//             if (data.content != null && data.content.length > 0) {
//               //赋值操作 
//               $scope.data = data;
//             } else {
//               alert("未获取到数据");
//             }

//           }
//           var res = {
//             data: data,
//             status: status
//           };
//           defer.resolve(res);
//         })
//         .error(function(data, status, headers, config) {
//           var res = {
//             data: data,
//             status: status
//           };
//           defer.resolve(res);
//         });
//       return defer.promise;
//     };
//     return {
//       pageing: pageing
//     };

//   }
// );


// var app = angular.module('myApp', []);

// //通过工厂模式创建自定义服务
// app.factory('myFactory', function() {
//   var service = {}; //定义一个Object对象'
//   service.name = "张三";
//   var age; //定义一个私有化的变量
//   //对私有属性写getter和setter方法
//   service.setAge = function(newAge) {
//     age = newAge;
//   }
//   service.getAge = function() {
//     return age;
//   }
//   return service; //返回这个Object对象
// });