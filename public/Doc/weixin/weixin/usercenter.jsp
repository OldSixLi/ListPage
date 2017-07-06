<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
      <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
        <%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
          <!DOCTYPE HTML>
          <html>

          <head>
            <base href="<%=basePath%>">
            <title>用户建议</title>
            <jsp:include page="/WEB-INF/jsp/common/header.jsp" />
            <link href='http://cdn.bootcss.com/bootstrap/3.3.4/css/bootstrap.min.css' rel='stylesheet'>
            <link href='../static/frames/editor/wangEditor.css' rel='stylesheet' type="text/css">
            <style>
              body {
                font-family: "MicroSoft YaHei";
              }
              
              .table>tbody>tr>td,
              .table>tbody>tr>th,
              .table>tfoot>tr>td,
              .table>tfoot>tr>th,
              .table>thead>tr>td,
              .table>thead>tr>th {
                border-top: none;
                border-bottom: 1px solid #ddd;
              }
              
              .content {
                /*text-align: center;*/
              }
              
              .content .h3 {
                margin-top: 40px;
                font-size: 20px;
                color: #333;
                margin-bottom: 22px;
              }
              
              .advice-form {
                margin-top: 40px;
              }
              
              .advice-form .control-label {
                font-size: 14px;
                /*margin-right: 10px;*/
              }
              
              .advice-block {
                margin-top: 25px;
              }
              
              .p-advice {
                margin-bottom: 8px;
              }
              
              .wangEditor-menu-container.clearfix {
                background-color: #f5f3f1;
              }
              
              #content {
                width: 760px;
                height: 140px;
                /*border: 1px solid #c9cee3;*/
              }
              
              .user-block .control-label {
                font-weight: normal;
                color: #333;
                font-size: 14px;
              }
              
              .user-block .input {
                border: 1px solid #ccc;
                width: 150px;
                height: 30px;
                padding-left: 5px;
              }
              
              .user-block .info {
                margin-left: 20px;
              }
              
              #username {
                width: 120px;
              }
              
              .p-used {
                font-weight: bold;
                margin: 0 0 20px 0;
                line-height: 16px;
                height: 16px;
                font-size: 16px;
                color: #333;
                padding-left: 10px;
                border-left: 4px solid #ff7700;
              }
              
              .button {
                width: 140px;
                height: 30px;
                border: 1px solid #ff7700;
                border-radius: 0;
                display: inline-block;
                font-size: 12px;
                color: #7f7f7f;
              }
              
              .btn-default:hover {
                background-color: #ff7700;
                color: #f4f4f4;
                border: none;
              }
              
              .btn-success {
                background-color: #ff7700;
                margin-left: 100px;
                color: #f4f4f4;
              }
              
              .btn-success:hover {
                background-color: #fa841c;
                color: #fff;
                border: none;
              }
              
              .button-block {
                width: 400px;
                margin: 30px auto 0;
              }
              
              .used-advices {
                margin-top: 20px;
                padding: 15px 0 40px 0;
                border-top: 2px solid #c9cee3;
              }
              
              .tabble-content {
                padding: 25px 20px 10px;
                background-color: #f4f4f4;
                margin: 0;
              }
              
              .table>thead>tr>th {
                border-bottom: 2px solid #c9cee3;
                color: #333;
                font-size: 14px;
                text-align: center;
              }
              
              .table tr>td {
                height: 40px;
                line-height: 40px;
                padding: 0 8px;
              }
              
              .table tr>td>a {
                font-size: 14px;
                color: #444;
              }
              
              td>.not-reply {
                /*未回复状态*/
                color: #4786c8;
              }
              
              td>.replied {
                /*已回复状态*/
                color: #ff7700;
              }
              
              td>.not-see {
                /*已回复未看*/
                color: #444;
              }
              
              .wrapA {
                display: block;
                height: 20px;
                max-width: 400px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            </style>
          </head>

          <body>
            <input type="hidden" id="showCount" value="${page}">
            <input type="hidden" id="totalPage" value="${pageCount}">
            <input type="hidden" id="nowPage" value="${pageSize}">
            <form class="form-inline" id="courseForm" role="form" action="<c:url value='/user/advice/show'/>" method="post">
              <input type="hidden" id="currentPage" name="currentPage" value="1">
            </form>
            <div class="content col-xs-offset-1 col-xs-10">
              <h3 class="text-center h3">您的宝贵建议</h3>
              <!--<hr>-->
              <div class="img-block text-center">
                <img src='../static/images/line.png' class='img' alt='自定义'>
              </div>
              <form role="form" class="advice-form">
                <div class="form-group form-inline text-center">
                  <label class="control-label" for="exampleInputEmail1">建议类别：</label>
                  <select class="form-control" id="titleType" style="width: 60%; ">
								<option value="">请选择建议类别</option>
								<c:forEach items="${titleList}" var="d" varStatus="x">
									<option value="${d.code}&&${d.advice_type}">${d.name}
									</option>
								</c:forEach>
							</select>
                </div>
                <div class="form-group advice-block">
                  <label class="control-label p-advice" for="content">请在这里写下您的建议：</label>
                  <div id="content"></div>
                </div>
                <div class="form-group form-inline">
                  <div class="user-block">
                    <label class="control-label" for="username">姓名：</label>
                    <input type="text" class="input" id="username" placeholder="请输入您的姓名">
                    <input type="radio" name="gender" id="gender-1" value="男" checked="checked" style="margin-left: 5px;">&nbsp;
                    <label for="gender-1" class="pointer control-label" style="margin-right: 10px;">先生</label>&nbsp;&nbsp;
                    <input type="radio" name="gender" id="gender-2" value="女">&nbsp;
                    <label for="gender-2" class="pointer control-label">女士</label>

                    <label class="control-label info" for="cell_phone_number">手机：</label>
                    <input type="text" class="input" id="cell_phone_number" placeholder="请输入手机号码" style="width: 130px;">


                    <label class="control-label info" for="email">邮箱：</label> <input type="text" class="input" id="email" placeholder="请输入邮箱地址" style="width: 166px;">

                  </div>
                </div>
                <div class="button-block">
                  <button type="button" class="btn btn-default button" id="saveBtn">提交</button>
                  <a type="button" href="javascript:history.back(-1)" class="btn btn-success button">取消</a>

                </div>
              </form>
              <div class=" used-advices">
                <div class="">

                  <c:if test="${not empty list}">
                    <p class="p-used">往期建议</p>
                    <div class="tabble-content">
                      <table class="table">
                        <thead>
                          <th>内容</th>
                          <th>时间</th>
                          <th>状态</th>
                        </thead>
                        <c:forEach items="${list}" var="d" varStatus="x">
                          <tr>
                            <td style="width:65%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
                              <a href="/user/advice/adviceDetail?id=${d.id}" class="wrapA"> 
                              ${d.content}  </a>
                            </td>

                            <td class="text-center">
                              <fmt:formatDate value="${d.send_time}" pattern="yyyy-MM-dd"></fmt:formatDate>
                            </td>
                            <c:if test="${d.state eq '1'}">
                              <td class="text-center not-reply">
                                未回复</td>
                            </c:if>
                            <c:if test="${d.state eq '2'}">
                              <td class="text-center replied">
                                已读</td>
                            </c:if>
                            <c:if test="${d.state eq '3'}">
                              <td class="text-center not-see">
                                <!--未查看-->
                                已回复</td>
                            </c:if>
                          </tr>
                        </c:forEach>
                      </table>
                      <div class="pagination-block text-center">
                        <ul class="pagination">
                          <c:if test="${page > 1 }">
                            <li><a href="user/advice/show?page=1"><span aria-hidden="true">首页</span> </a></li>
                            <li><a href="user/advice/show?page=${page-1}"><span aria-hidden="true">上一页</span> </a></li>
                          </c:if>
                          <c:if test="${page <= 1 }">
                            <li class="disabled"><a href="user/advice/show?page=1"><span aria-hidden="true">首页</span> </a></li>
                            <li class="disabled"><a href="user/advice/show?page=${page-1}"><span aria-hidden="true">上一页</span> </a></li>
                          </c:if>
                          <li class="active"><a href="javascript:"><span aria-hidden="true">${page }</span> </a></li>
                          <c:if test="${page >= pageCount }">
                            <li class="disabled"><a href="user/advice/show?page=${page+1}"><span aria-hidden="true">下一页</span> </a></li>
                            <li class="disabled"><a href="user/advice/show?page${pageCount}"><span aria-hidden="true">尾页</span> </a></li>
                          </c:if>
                          <c:if test="${page < pageCount }">
                            <li><a href="user/advice/show?page=${page+1}"><span aria-hidden="true">下一页</span> </a></li>
                            <li><a href="user/advice/show?page=${pageCount}"><span aria-hidden="true">尾页</span> </a></li>
                          </c:if>
                        </ul>
                      </div>
                    </div>
                  </c:if>
                </div>
              </div>
            </div>
            <!--富文本编辑器JS地址-->
            <script src='../static/frames/editor/wangEditor-edit.js' type="text/javascript"></script>
            <script>
              //富文本编辑器事件
              var editor = new wangEditor('content');
              editor.config.withCredentials = false;
              editor.config.menus = [ //富文本编辑器按钮配置
                '|', 'bold', 'italic', 'underline', 'forecolor'

              ];
              editor.create();
              //禁止页面元素拖动
              document.ondragstart = function() {
                return false;
              };
              $(function() {

                $("#saveBtn").on("click", function() {
                  var saveInfo = {
                    //TODO  后期修改用户ID
                    user_id: "1",
                    //建议类别
                    code: $("#titleType").val().split("&&")[0],
                    //建议类别
                    advice_type: $("#titleType").val().split("&&")[1],
                    //主体内容
                    content: $.trim(editor.$txt.html()),
                    //电话号码
                    cell_phone_number: $.trim($("#cell_phone_number").val()),
                    //邮箱地址
                    email: $.trim($("#email").val()),
                    //用户名称
                    username: $.trim($("#username").val()),
                    //性别
                    gender: $("[name='gender']:checked").val()
                  };
                  var __error = [];
                  //马少博 2017年5月16日09:03:21 新增  添加用户昵称非空校验
                  if (saveInfo.username === "") {
                    __error.push("请输入用户名称！");
                  }
                  if (saveInfo.code === "") {
                    __error.push("请选择建议类型！");
                  }
                  if (saveInfo.content === "<p><br/></p>" || saveInfo.content == "<p><br></p>") {
                    __error.push("请输入您的建议内容 ! ");
                  }
                  if (saveInfo.cell_phone_number === "") {
                    __error.push("请输入联系电话！");
                  }
                  if (saveInfo.email === "") {
                    __error.push("请输入联系邮箱！");
                  }
                  if (saveInfo.cell_phone_number != "" && !(/^1(3|4|5|7|8)\d{9}$/.test(saveInfo.cell_phone_number))) {
                    __error.push("手机号格式错误,请输入有效的手机号！");
                  }
                  if (saveInfo.email != "" && !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(saveInfo.email))) {
                    __error.push("邮箱格式错误,请输入有效邮箱地址！");
                  }
                  if (__error.length > 0) {
                    alert(__error.join("\r\n"));
                    // alert(__error.join("\r\n"));
                    return false;
                  }
                  var replaceStr = "<script>";
                  saveInfo.content.replace(new RegExp(replaceStr, 'gm'), '&lt;script&gt');
                  $(":button").attr("disabled", true);
                  $.ajax({
                    url: "user/advice/addAdvice",
                    data: saveInfo,
                    dataType: "JSON",
                    type: "POST"
                  }).done(function(data) {
                    if (data.success) {
                      alert("发表建议成功");
                      $("#email").val('');
                      //用户名称
                      $("#username").val('');
                      //性别
                      $("[name='gender']").val('');
                      $("#titleType").val('');
                      $("#cell_phone_number").val('');
                      window.location.reload();
                    } else {
                      alert(data.message);
                    }
                  }).done(function(data) {
                    $(":button").attr("disabled", false);
                  });
                  return false;
                });

                //使得表格中的标题等长并且过长的自动添加省略号
                $(".wrapA>p").each(function() {
                  $(this).css({
                    "max-width": "400px",
                    "overflow": "hidden",
                    "text-overflow": "ellipsis",
                    "white-space": "nowrap"
                  });
                })
              });
            </script>
          </body>

          </html>