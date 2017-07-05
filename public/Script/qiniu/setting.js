// $("#button").click(function () {
//       alert("成功");


// alert("你们为什么罢工呢？");

var domainUrl = "http://om6fr85l4.bkt.clouddn.com/"; //←←←←←←←修改上传的空间地址←←←←←←←
//获取七牛uptoken　
uploader = Qiniu.uploader({
  runtimes: 'html5,flash,html4',
  browse_button: 'pickfiles', //上传按钮的ID
  container: 'btn-uploader', //上传按钮的上级元素ID
  drop_element: 'btn-uploader',
  max_file_size: '100mb', //最大文件限制　
  dragdrop: false,
  chunk_size: '4mb', //分块大小  
  save_key: true,
  uptoken_func: function() { // 在需要获取uptoken时，该方法会被调用　
    var token = "";
    $.ajax({
      type: "get",
      url: "/token", //←←←←←←←修改请求token的地址←←←←←←←
      async: false,
      dataType: "json",
      success: function(data) {
        token = data.uptoken; //←←←←←←←修改字段名称←←←←←←←
      }
    });
    return token;
  },
  unique_names: false,
  domain: domainUrl, //自己的七牛云存储空间域名
  multi_selection: false, //是否允许同时选择多文件
  //文件类型过滤，这里限制为图片类型
  filters: {
    mime_types: [{
      title: "Image files",
      extensions: "jpg,jpeg,gif,png"
    }]
  },
  auto_start: true,
  init: {
    'FilesAdded': function(up, files) {
      //do something
    },
    'BeforeUpload': function(up, file) {
      //do something
    },
    'UploadProgress': function(up, file) {
      //可以在这里控制上传进度的显示
      console.log(up);
      console.log(file);
      //可参考七牛的例子
    },
    'UploadComplete': function() {
      //do something
    },
    'FileUploaded': function(up, file, info) {　
      var json = JSON.parse(info);
      alert("上传成功");
      //图片压缩处理:限制图片长宽均为200px ,且图片质量为原来75%;←←←←←←←图片质量自定义
      // ?imageView2/1/w/350/h/200/q/100|imageslim //设置长度宽度
      var imgSrc = domainUrl + json.key + "?imageView2/1/q/100|imageslim";
      $("#img").attr("src", imgSrc);
      $("[name='iconUrl']").val(imgSrc);
    },
    'Error': function(up, err, errTip) {
      alert(errTip);
    },
    'Key': function(up, file) {
      return file.name;
    }
  }
});
// });