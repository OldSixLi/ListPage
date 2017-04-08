/*
 * @Author:马少博 (ma.shaobo@qq.com)
 * @Date: 2017年4月5日13:54:19
 * @Last Modified by: 马少博
 * @Last Modified time:2017年4月7日10:53:45
 */

// 第一个控制器
app.controller('customersCtrl', function($scope, httpService, sortService) {
  /**
   * 异步分页请求数据 
   * @param {any} pageindex 当前页面(从0开始计算)
   * @param {any} url 请求服务地址
   * @param {any} params  请求参数
   */
  $scope.page = function(pageindex, url, params) {
    httpService.pageing(pageindex)
      .then(
        //请求成功操作
        function(res) {
          switch (res.status) {
            case 200:
              {
                //请求成功操作
                var data = res.data;
                $scope.data = data;
                $scope.dataLengths = data.content.length > 0;
                break;
              }
            case 404:
              {
                //请求地址不存在
                break;
              }
            case 500:
              {
                //服务器内部错误
                console.log(JSON.stringify(res));
                alert(res.data.errorMessage);
                break;
              }
            default:
              {
                //请求服务失败
                alert("请求服务失败");
                break;
              }
          }
        }
      );
  };

  // 页面加载时执行
  var page = $scope.page;
  page(0);

  /**
   * 排序方法相关的操作 
   * @param {any} ziduan 排序的字段名称 
   */
  $scope.sort = function(ziduan) {
    sortService.sort(ziduan, $scope.desc);
  };

});

// 当前页面中存在的第二个控制器
app.controller('secondCtrl', function($scope) {
  $scope.count = '同一个页面,第二个controller的数据绑定';
});


//info页面数据绑定
app.controller('infoCtrl', function($scope, urlService) {
  // $scope.datas = '我是详情页数据绑定部分';
  var urlObj = urlService.UrlSearch();
  $scope.datas = urlObj.id;
});