/**
 * 控制层
 * @马少博 (1030809514@qq.com)
 * @时间  2017年4月5日13:54:19
 * @version 1.0
 */
app.controller('customersCtrl', function($scope, httpService) {
  $scope.page = function() {
    console.log("page()方法");
    httpService.pageing(0)
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
  }

  var page = $scope.page;
  page();

});