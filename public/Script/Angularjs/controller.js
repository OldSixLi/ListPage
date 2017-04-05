// /**
//  * 控制层
//  * @马少博 (1030809514@qq.com)
//  * @时间  2017年4月5日13:54:19
//  * @version 1.0
//  */


// app.controller('customersCtrl', ['myFactory', function($scope, myFactory) {
//   //   $scope.page = function() {
//   $scope.page = function() {
//     myFactory.pageing(0, "")
//       .then(function(res) {
//         switch (res.status) {
//           case 200:
//             {
//               var str = JSON.stringify(res);
//               alert(str);
//               // $scope.message = "登录成功";
//               // save_key("userName", $scope.user.name);
//               // save_key("password", $scope.user.password);
//               // localStorage.accessKey = res.data.mtoken.accessKey;
//               // localStorage.securityKey = res.data.mtoken.securityKey;
//               // $state.go('main.home');
//               break;
//             }
//           case 403:
//             {
//               var str = JSON.stringify(res);
//               alert(str);
//               // $scope.promptMes = "登录失败，请检查用户名和密码是否正确！";
//               // $('#messages_model').modal('show');
//               break;
//             }
//           case 404:
//             {
//               var str = JSON.stringify(res);
//               alert(str);
//               // $scope.promptMes = "登录失败，用户名不存在！";
//               // $('#messages_model').modal('show');
//               break;
//             }
//           default:
//             {
//               var str = JSON.stringify(res);
//               alert(str);
//               // $scope.promptMes = "登录失败，请检查网络连接！";
//               // $('#messages_model').modal('show');
//               break;
//             }
//         }
//       });
//   };


// }]);

// var app = angular.module('myApp', []);
// app.controller('customersCtrl', function($scope, myFactory) {
//   $scope.page = function() {
//     myFactory.alerts();
//     myFactory.pageing(0, "").then(function(res) {
//       switch (res.status) {
//         case 200:
//           {
//             var str = JSON.stringify(res);
//             alert(str);
//             // $scope.message = "登录成功";
//             // save_key("userName", $scope.user.name);
//             // save_key("password", $scope.user.password);
//             // localStorage.accessKey = res.data.mtoken.accessKey;
//             // localStorage.securityKey = res.data.mtoken.securityKey;
//             // $state.go('main.home');
//             break;
//           }
//         case 403:
//           {
//             var str = JSON.stringify(res);
//             alert(str);
//             // $scope.promptMes = "登录失败，请检查用户名和密码是否正确！";
//             // $('#messages_model').modal('show');
//             break;
//           }
//         case 404:
//           {
//             var str = JSON.stringify(res);
//             alert(str);
//             // $scope.promptMes = "登录失败，用户名不存在！";
//             // $('#messages_model').modal('show');
//             break;
//           }
//         default:
//           {
//             var str = JSON.stringify(res);
//             alert(str);
//             // $scope.promptMes = "登录失败，请检查网络连接！";
//             // $('#messages_model').modal('show');
//             break;
//           }
//       }
//     });


//   }
// });


// // //创建控制器
// // app.controller('customersCtrl', function($scope, myFactory) {
// //   myFactory.setAge(20);
// //   $scope.r = myFactory.getAge();
// //   alert(myFactory.name);
// // });