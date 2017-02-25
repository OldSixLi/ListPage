<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
	<%-- 添加课程页面 --%>
	<head>
			<!-- jsp文件头和头部 -->
			<jsp:include page="/WEB-INF/jsp/common/header.jsp" />
			<script type="text/javascript" src="static/common/frame/jquery/jquery-form.js"></script>
			<style>
				.modal-backdrop {
					position: fixed;
					top: 0px;
					right: 0px;
					bottom: 0px;
					left: 0px;
					z-index: -1;
					background-color: #fff;
				}

				.modal {
					position: fixed;
					top: 100px;
					right: 0px;
					bottom: 0px;
					left: 0px;
					z-index: 1050;
					display: none;
					overflow: hidden;
					outline: 0px;
				}

				#course_panel {
					margin-bottom: 0;
					border-bottom-left-radius: 0;
					border-bottom-right-radius: 0;
				}

				#newcolumn>div {
					display: inline-block;
					font-size: 14px;
					padding: 4px 8px;
				}

				#newcolumn {
					font-size: 0;
					border: 1px solid #ddd;
					border-top: none;
				}

				.course_column_bottom {
					padding: 5px 0;
					border: 1px solid #ddd;
					background-color: #EFF0F4;
					border-top: none;
					border-bottom-left-radius: 4px;
					border-bottom-right-radius: 4px;
				}

				.course_column_bottom:hover {
					background-color: #E5E7EC;
				}

				#addCourseColumn {
					margin: 0;
					cursor: pointer;
				}
				.img-responsive{
					width: 110px;
					height:110px;
				}
			</style>
		</head>
		<body>
			<div class="header container-fluid">
				<!-- 面包屑导航 -->
				<ol class="breadcrumb col-xs-6" style="border-radius:0;padding:0 15px;">
					<li>
						<a href="javascript:void(0)">课程管理</a>
					</li>
					<li>
						<a href="javascript:history.back(-1)">课程列表</a>
					</li>
					<li class="active">添加课程</li>
				</ol>
			</div>
			<div class="section workframe">
				<!-- 表单 -->
				<form class="form-horizontal" action="" method="post" role="form">
					<div class="col-md-12">
						<div class="tabbable" id="tabs">
							<ul class="nav nav-tabs" class="col-xs-12">
								<li class="active col-xs-6 text-center">
									<a href="#panel-info" data-toggle="tab"><b>课程基本信息</b></a>
								</li>
								<li class="col-xs-6 text-center">
									<a href="#panel-intro" data-toggle="tab"><b>课程宣传</b></a>
								</li>
							</ul>
							<div class="tab-content" style="padding-top:20px;">
								<%-- 课程基本信息 --%>
									<div class="tab-pane active" id="panel-info">
										<div class="container">
											<div class="row">
												<div class="col-md-12">

													<div class="form-group">
														<div class="col-sm-2 text-right">
															<label for="name" class="control-label">课程名称</label>
														</div>
														<div class="col-sm-10">
															<input type="text" class="form-control" id="name" name="name" placeholder="请输入课程名称"></div>
													</div>
													<div class="form-group">
														<div class="col-sm-2 text-right">
															<label for="teacherId" class="control-label">任课教师</label>
														</div>
														<div class="col-sm-10">
															<select id="teacherId" name="teacherId" class="form-control" style="height:34px;" placeholder="请输入任课教师">
															<option value="-2">请选择发票类型</option>
															<option value="000">收据</option>
															<option value="004">增值税专用发票</option>
															<option value="007">增值税普通发票</option>
															<option value="025">卷式发票</option>
															 </select>

														</div>
													</div>
													<div class="form-group" id="gender_group">
														<div class="col-sm-2 text-right">
															<label for="type" class="control-label">课程类型</label>
														</div>
														<div>
															<div class="col-sm-10" id="type">
																<input type="radio" name="type" id="type-1" value="D" checked="checked">&nbsp;
																<label for="gender-1">单次课程</label>&nbsp;&nbsp;
																<input type="radio" name="type" id="type-2" value="X">&nbsp;
																<label for="gender-2">系列课程</label>
															</div>
														</div>
													</div>
													<div class="form-group" id="gender_group">
														<div class="col-sm-2 text-right">
															<label for="forbid" class="control-label">报名限制</label>
														</div>
														<div class="col-sm-10 checkForm" id="forbid">
															<input type="checkbox" name="forbid" id="forbid-1" value="0">&nbsp;
															<label for="choice1-1">禁止一年内有报名记录但未到场者报名</label>&nbsp;&nbsp;
															<input type="checkbox" name="forbid" id="forbid-2" value="1">&nbsp;
															<label for="choice1-2">禁止取消报名后的用户再报名</label>&nbsp;&nbsp;
															<input type="checkbox" name="forbid" id="forbid-3" value="2">&nbsp;
															<label for="choice1-2">只允许会员报名</label>&nbsp;&nbsp;
															<input type="hidden" id="forbid_type" name="forbid_type" value="">
														</div>
													</div>
													<div class="form-group">
														<div class="col-sm-2 text-right">
															<label for="student_count" class="control-label">报名人数</label>
														</div>
														<div class="col-sm-3">
															<input type="text" class="form-control" id="student_count" name="student_count" placeholder="请输入报名人数" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"></div>
														<div class="col-sm-2 text-right">
															<label for="single_count" class="control-label">单账户参加人数</label>
														</div>
														<div class="col-sm-3">
															<input type="text" class="form-control" id="single_count" name="single_count" placeholder="单账户参加人数" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"></div>
													</div>
													<div class="form-group">
														<div class="col-sm-2 text-right">
															<label for="begin_time" class="control-label">报名开始时间</label>
														</div>
														<div class="col-sm-3">
															<div class="input-group input-append date form_datetime" data-picker-position="bottom-left">
																<input type="text" readonly class="form-control" id="begin_time" name="begin_time" placeholder="请输入报名开始时间"><span class="add-on input-group-addon"><i
												 class="icon-th glyphicon glyphicon-calendar"></i> </span>
															</div>
														</div>
														<div class="col-sm-2 text-right">
															<label for="end_time" class="control-label">报名结束时间</label>
														</div>
														<div class="col-sm-3">
															<div class="input-group input-append date form_datetime" data-picker-position="bottom-left">
																<input type="text" readonly class="form-control" id="end_time" name="end_time" placeholder="报名结束时间"><span class="add-on input-group-addon"><i
													 class="icon-th glyphicon glyphicon-calendar"></i> </span>
															</div>
														</div>

													</div>
													<div class="form-group">
														<div class="col-sm-2 text-right">
															<label for="fee_type" class="control-label">收费类型</label>
														</div>
														<div>
															<div class="col-sm-10" id="fee_type">
																<input type="radio" name="fee_type" id="fee_type-1" value="F" checked="checked">&nbsp;
																<label for="fee_type-1">免费</label>&nbsp;&nbsp;
																<input type="radio" name="fee_type" id="fee_type-2" value="P">&nbsp;
																<label for="fee_type-2">收费</label>
															</div>
															<span class="help-block"></span>
														</div>
													</div>
													<div class="form-group">
														<div class="col-sm-2 text-right">
															<label for="vip_price" class="control-label">会员价格</label>
														</div>
														<div class="col-sm-3">
															<input type="text" class="form-control" id="vip_price" name="vip_price" placeholder="请输入会员价格，单位：元" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
														</div>
														<div class="col-sm-2 text-right">
															<label for="non_vip_price" class="control-label">非会员差价</label>
														</div>
														<div class="col-sm-3">
															<input type="text" class="form-control" id="non_vip_price" name="non_vip_price" placeholder="请输入非会员差价，单位元" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"></div>
														<input type="checkbox" name="trans_vip" id="trans_vip" value="1">
														<label for="trans_vip">非会员报名后自动转会员</label>
													</div>
													<div class="form-group">
														<div class="col-sm-2 text-right">
															<label for="phone" class="control-label">咨询电话</label>
														</div>
														<div class="col-sm-10">
															<input type="text" class="form-control" id="phone" name="phone" placeholder="请输入咨询电话"></div>
													</div>
													<div class="form-group">
														<div class="col-sm-2 text-right">
															<label for="mutiply_sale" class="control-label">多人参加计费规则</label>
														</div>
														<div class="col-sm-9">
															<input type="text" class="form-control" id="mutiply_sale" name="mutiply_sale" placeholder="请输入计费规则，M代表单价，N代表人数。示例：M+(N-1)*(M-100)"></div>
														<div class="col-sm-1">
															<a id="yanzheng" class="btn btn-primary pull-right" href="#modal1" data-toggle="modal">验证</a></div>
													</div>
													<div class="form-group">
														<div class="col-sm-2 text-right">
															<label for="mutipl_des" class="control-label">规则说明</label>
														</div>
														<div class="col-sm-10">
															<input type="text" class="form-control" id="mutipl_des" name="mutipl_des" placeholder="请输入规则说明，示例：第一人全价，其他人每人减一百"></div>
													</div>
												</div>
											</div>
										</div>
										<!-- 上课地点编辑 -->
										<div class="container">
											<div class="row">
												<div class="col-md-11 col-md-offset-1">
													<h4>上课时间</h4>
													<div class="panel panel-default hasradius" id="course_panel">
														<input type="hidden" id="ZUOBIAO_X" value="">
														<input type="hidden" id="ZUOBIAO_Y" value="">
														<table class="table">
															<thead>
																<tr>
																	<th width="5%"></th>
																	<th width="25%">上课地点</th>
																	<th width="25%">上课时间</th>
																	<th width="30%">地图坐标</th>
																	<th width="15%">删除</th>
																</tr>
															</thead>
															<tbody id="tableBody">

															</tbody>
														</table>
													</div>
													<%-- 添加按钮 --%>
														<div id="addColumn">
															<div id="newcolumn" class="form-inline" style="display: none;">
																<div style="width:5%;">
																</div>
																<div style="width:25%;">
																	<input type="text" class="form-control" style="width:170px;" id="course_place" placeholder="请输入上课地点"></div>
																<div style="width:25%;">
																	<div class="input-group input-append date form_datetime" data-picker-position="top-right">
																		<%-- <div class="input-group input-append date form_datetime"
												 data-picker-position="bottom-left"> --%>
																			<input type="text" class="form-control" readonly style="width:170px;" id="course_time" placeholder="请输入上课时间"><span class="add-on input-group-addon"><i
											 class="icon-th glyphicon glyphicon-calendar"></i> </span>
																	</div>
																</div>
																<div style="width:30%;">
																	<a href="javascript:;" id="course_zuobiao" onclick="openMap()">添加新坐标</a></div>
																<div style="width:15%;">
																	<button type="button" name="button" class="btn btn-primary btn-sm" id="course_save">保存</button></div>
															</div>
														</div>
														<div class="form-inline course_column_bottom text-center">
															<p name="button" id="addCourseColumn">添加上课时间地点</button>
														</div>
												</div>
											</div>
										</div>
										<!-- 课程介绍 -->
										<div class="container">
											<div class="row">
												<div class="col-md-11 col-md-offset-1">
													<div class="form-group">
														<div class="col-md-12">
															<h4>课程介绍</h4>
															<textarea class="form-control" id="introduction" name="introduction" placeholder="请在此输入课程介绍"></textarea>
														</div>
													</div>
												</div>
											</div>

										</div>
									</div>
									<%-- 课程基本信息END --%>

										<%-- 课程宣传 --%>
											<div class="tab-pane" id="panel-intro">
												<div class="section">
													<div class="container">
														<div class="row">
															<div class="col-md-11 col-xs-offset-1">
																<ul class="media-list" id="media_intro">
																	<%-- 用来保存当前上传图片的div的名称 --%>
																	<input type="hidden" id="hidden_divname" name="" value="">
																	<li class="media">
																		<div class="col-xs-2" id="div_intro1">
																			<!-- 图片 -->
																			<a onclick="uploadPic(this)">
																			<img class="img-responsive" src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png"></a>
																		</div>
																		<div class="media-body">
																			<!-- 输入 -->
																			<textarea type="text" name="intro1" class="form-control" rows="5" cols="20" placeholder="请输入当前内容"></textarea>
																		</div>
																	</li>

																</ul>
																<div class="container" style="width:150px;height:150px;">
																	<a id="btnAdd"><span class="glyphicon glyphicon-plus" style="font-size:140px"></a></span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<%-- 课程宣传END --%>
							</div>
						</div>
					</div>
					<%-- 提交按钮 --%>
						<div class="container">
							<div class="row">
								<div class="col-md-11 col-md-offset-1">
									<div class="form-group text-right">
										<div class="col-md-12">
											<button type="submit" class="btn btn-primary" id="saveBtn">保存课程信息</button> &nbsp;&nbsp;
											<button type="button" class="btn btn-danger" id="cancelBtn" onclick="javascript:history.back(-1)">放弃本次操作</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<%-- 提交按钮END --%>
				</form>

				<form action="<c:url value="/sales/order/uploadPic"/>" id="headForm" method="post" enctype="multipart/form-data">
					<input type="file" style="display:none" name="imageRes" id="imageRes" onchange="uploadImage()"/>
					<input type="hidden" name="type" value="turn"/>
				</form>

				<div class="modal fade" id="modal1">
					<div class="modal-dialog ">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
								<h4 class="modal-title text-center">验证计费规则</h4>
							</div>
							<div class="modal-body">
								<div class="row">
									<div class="col-xs-11 col-xs-offset-1">
										<h3>当前计费规则为：<b id="rules"></b></h3>
									</div>
									<div class="col-xs-5 col-xs-offset-1">
										<div class="form-group">
											<label for="">价格(M)</label>
											<input type="text" class="form-control" placeholder="请输入单价" id="price" style="width:150px;display:inline;" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
										</div>
									</div>
									<div class="col-xs-5 ">
										<div class="form-group">
											<label for="">人数(N)</label>
											<input type="text" class="form-control" placeholder="请输入人数" id="number" style="width:150px;display:inline;" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
										</div>
									</div>
									<div class="col-xs-11 col-xs-offset-1">
										<div class="col-xs-5 col-xs-offset-3">
											<button type="button " class="btn btn-primary btn-block " id="bntCount" name="button">计算</button>
										</div>
									</div>
									<div class="col-xs-11  col-xs-offset-1">
										<h4 id="allCount"></h4></div>
								</div>
							</div>
							<div class="modal-footer">
								<a class="btn btn-default" data-dismiss="modal">关闭</a>
							</div>
						</div>
					</div>
				</div>
				<script type="text/javascript">

				//保存图片url
				var addPic = "<c:url value="/sales/order/saveAgree"/>";
					var media_index = 1; //添加课程介绍的组件index
					$(function() {
						//使用datePicker插件form_datetime
						tool.datePicker($(".form_datetime"), "yyyy-mm-dd");
						//美化check和radio
						tool.changeCheck($("input"));
						tool.changeSelect($("#teacherId"), false);
						//添加课程介绍
						$("#btnAdd").click(function() {
							media_index++;
							var name = "intro" + media_index;
							var htmlstr =
								'<li class="media"><div class="col-xs-2" id="div_'+name+'"><a onclick="uploadPic(this)"><img class="img-responsive" src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png" style="width:110px;height:110px;"></a></div><div class="media-body"> <textarea type="text"  name="' +
								name + '" class="form-control" rows="5" cols="20" placeholder="请输入当前内容"></textarea> </div></li>';
							$("#media_intro").append(htmlstr);
						});


						//点击验证按钮操作与验证
						$("#yanzheng").click(function() {
							if ($.trim($("#mutiply_sale").val())) {

								var istrue = isRight($.trim($("#mutiply_sale").val()));
								console.log(istrue);
								if (istrue) {
									$("#rules").text($.trim($("#mutiply_sale").val()));
									$("#allCount").text("");
								} else {
									return false;
								}
							} else {
								tool.alert("提示", "请输入规则后再进行验证");
								return false;
							}
						});
						// 根据规则计算金额
						$("#bntCount").click(function() {
							if ($("#price").val() && $("#number").val()) {
								//计算当前价格
								var price = $("#price").val(),
									num = $("#number").val();
								var rule = $.trim($("#mutiply_sale").val());　
								rule = rule.replace(new RegExp(/(M)/g), price).replace(new RegExp(/(N)/g), num);
								var result = 0;
								try {
									result = eval(rule);　
								} catch (e) {
									$("#allCount").text("计费规则出错，无法计算");
								}
								if (!isNaN(result) && result != 0) {
									$("#allCount").html("根据此规则计算总金额为：<b>" + result + "</b>");
								} else {
									$("#allCount").text("计费规则出错，无法计算");
								}
							} else {
								$("#allCount").text("");
							}
						});
						//点击添加课程地址按钮操作
						$("#addCourseColumn").click(function() {　
							$("#course_place,#course_time").val('');
							$("#course_zuobiao").text('添加新坐标');
							$("#newcolumn").show();
						});
						//添加课程保存按钮操作
						$("#course_save").click(function() {
							var trObj = {};
							var timestamp = (new Date()).valueOf();
							trObj.index = timestamp;
							trObj.place = $.trim($("#course_place").val());
							trObj.time = $("#course_time").val();
							trObj.zuobiao = $("#course_zuobiao").text();
							var error = [];
							if (trObj.place == "") {
								error.push("上课地点不能为空");
							}
							if (trObj.time == "") {
								error.push("上课时间不能为空");
							}
							if (error.length > 0) {
								tool.alert("提示", error.join("<br />"));
								return false;
							}
							var tr_html = '<tr data-col="' + trObj.index + '"><td></td> <td>' + trObj.place + '</td><td>' + trObj.time + '</td><td>' + trObj.zuobiao + '</td><td><a href="javascript:;"  onclick="deleteColumn(' + trObj.index + ')">删除</a></td></tr>'
							$("#tableBody").append(tr_html);
							$("#newcolumn").hide();

						});
						//数据提交时校验与操作
						$("#saveBtn").on('click', function() {
							var phone = $('#phone').val();
							var des = $("#mutipl_des").val();
							var __error = [];
							if (!$.trim($("#name").val())) {
								__error.push("课程名称不能为空！");
								$("#name").parent().addClass('has-error');
							}
							if (!$.trim($("#student_count").val())) {
								__error.push("课程报名人数不能为空！");
								$("#student_count").parent().addClass('has-error');
							}
							if (!$.trim($("#single_count").val())) {
								__error.push("单账户参加人数不能为空！");
								$("#single_count").parent().addClass('has-error');
							}
							if (!(/^1[34578]\d{9}$/.test(phone))) {
								__error.push("手机号码格式不正确！");
								$("#phone").parent().addClass('has-error');
							}
							if (!$.trim(des)) {
								__error.push("计费规则描述不能为空！");
								$("#mutipl_des").parent().addClass('has-error');
							}
							if (!$.trim($("#begin_time").val())) {
								__error.push("课程开始时间不能为空！");
								$("#begin_time").parent().addClass('has-error');
							}
							if (!$.trim($("#end_time").val())) {
								__error.push("课程结束时间不能为空！");
								$("#end_time").parent().addClass('has-error');
							}
							if (!$.trim($("#vip_price").val())) {
								__error.push("会员价格不能为空！");
								$("#vip_price").parent().addClass('has-error');
							}
							//时间地点信息
							var  courseArr=[];
							$("#tableBody").find('tr').each(function(index) {
								//对添加的上课时间地点信息进行遍历，输出JSON
								var obj={};
								obj.address=$(this).find('td').eq(1).text();//地址
								obj.x=$(this).find('td').eq(3).text().split(",")[0];//经度
								obj.y=$(this).find('td').eq(3).text().split(",")[1];;//纬度
								obj.time=$(this).find('td').eq(2).text();//时间
								obj.state='N';
								courseArr.push(obj);
							});
							if (courseArr.length==0) {
								__error.push("请至少录入一条上课地点信息！");
							}

							//课程介绍信息
							var introductionArr=[];
							$("#media_intro").find("li").each(function(index) {
							var introObj={
								image:$(this).find("img").attr("src"),//上传的图片的地址
								describe:$(this).find("textarea").val()//输入的文字
							};
							introductionArr.push(introObj);
							});
							if (introductionArr.length==0) {
								__error.push("请至少输入一条课程宣传信息！");
							}
							//错误提示
							if (__error.length > 0) {
								__error.push("请修改后再进行提交。")
								tool.alert("提示", __error.join("<br />"));
								return false;
							}
							// console.info('课程介绍信息'+JSON.stringify(introductionArr));
						});
					});

					//课程地点删除操作
					function deleteColumn(index) {
						$("[data-col='" + index + "']").remove();
					}
					//验证公式是否可用
					function isRight(string) {
						var obj = {
							'M': 1,
							'N': 1,
						}
						// 剔除空白符
						string = string.replace(/\s/g, '');
						var error = []; //错误信息
						if ("" === string) {
							error.push("当前计算规则不能为空！");
						}
						if (/^[0-9]*$/.test(string)) {
							error.push("计费规则不能为纯数字！");
						}
						if (/^[\u4E00-\u9FA5]+$/.test(string)) {
							error.push("计费规则不能包含汉字！");
						}
						if (/[\+\-\*\/]{2,}/.test(string)) {
							error.push("不能出现连续的运算符！");
						}
						if (/\(\)/.test(string)) {
							error.push("不能出现空括号！");
						}
						var stack = [];
						for (var i = 0, item; i < string.length; i++) {
							item = string.charAt(i);
							if ('(' === item) {
								stack.push('(');
							} else if (')' === item) {
								if (stack.length > 0) {
									stack.pop();
								} else {
									return false;
								}
							}
						}
						if (stack.length !== 0) {
							error.push("括号不配对！");
						}
						if (/\([\+\-\*\/]/.test(string)) {
							error.push("(括号后不能是运算符！");
						}
						if (/[\+\-\*\/]\)/.test(string)) {
							error.push(")括号前不能是运算符！");
						}
						if (/[^\+\-\*\/]\(/.test(string)) {
							error.push("(括号前为非运算符！");
						}
						if (/\)[^\+\-\*\/]/.test(string)) {
							error.push(")括号后为非运算符！");
						}
						// 错误情况，变量没有来自“待选公式变量”
						var tmpStr = string.replace(/[\(\)\+\-\*\/]{1,}/g, '`');
						var array = tmpStr.split('`');
						for (var i = 0, item; i < array.length; i++) {
							item = array[i];
							if (/[A-Z]/i.test(item) && 'undefined' === typeof(obj[item])) {
								if ([error.length - 1] != "出现无效的变量！") {
									error.push("出现无效的变量！");
								}
							}
						}
						if (error.length == 0) {
							return true;
						} else {
							error.push("请修改后再进行验证。")
							tool.alert("提示", error.join('<br/>'));
							return false;
						}
					}

					/*预览图片*/
					function show(btn){
						top.$('body').find(".jconfirm").hide();
						var frame = $('<div style="width:100%;height:100%;background:#000;opacity:0.8;z-index:10000;position:absolute;top:0;left:0"></div>').on('click',function(){
							top.$('body').find(".jconfirm").show();
							frame.remove();
							pic.remove();
						});
						var pic = $("<img style='max-width:80%;max-height:80%;z-index:15000;position:absolute;top:10%;left:50%' src='"+$(btn).attr('src')+"'>").on('click',function(){
							top.$('body').find(".jconfirm").show();
							frame.remove();
							pic.remove();
						});
						frame.appendTo(top.$('body'));
						pic.appendTo(top.$('body'));
						pic.css('margin-left','-'+pic.css('width').substring(0,pic.css('width').indexOf('px'))/2+'px');
					}
					function uploadPic(btn){
						$("#imageRes").click();
						var divId= $(btn).parent().attr("id");
						$("#hidden_divname").val(divId);//当前上传图片的父元素div的ID
					}
					/*上传协议*/
					function uploadImage(){
						 var options = {
				                dataType: 'json',
				                success: function (data) {
				                	if(data.success==true){
										tool.confirm("确定协议图片",
										"<img style='width:100%' src="+data.bean+" onclick='show(this)'>",
										function(){
											//发请求对数据库进行修改
											var divId=	$("#hidden_divname").val();
											$("#"+divId).find("img").eq(0).attr("src",data.bean);
										},
										function(){
											//删除缓存图片
											$.post(deletePic, {
												picurl : data.bean
											}, function(data){});
										});
				                	}else{
				               			tool.alert('提示','上传图片必须为JPG、PNG、JEPG',function(){});
				                	}
				                }
				         };
				         $('#headForm').ajaxSubmit(options);
					}

					//防止XSS攻击
					function filterXSS(str) {
						return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, "&quot;").replace(/'/g, "&#039;");
					}

					//打开地图窗口
					var locat = (window.location + '').split('/');
					$(function() {
						if ('tool' == locat[3]) {
							locat = locat[0] + '//' + locat[2];
						} else {
							locat = locat[0] + '//' + locat[2] + '/' + locat[3];
						};
					});
					$(hangge());
					$(hangge());
					var mb = myBrowser();
					var childX = "";
					var childY = "";
					//清除加载进度
					function hangge() {
						$("#jzts").hide();
					}

					function openMap() {
						var result = "";
						//解决Chrome浏览器不兼容showModalDialog问题
						if ("Chrome" == mb) {
							result = window.open(locat + "/course/toMap", "", "width=720px;height=500px;");
						} else {
							result = window.showModalDialog(locat + "/course/toMap", "", "dialogWidth=720px;dialogHeight=500px;");

							if (result == null || "" == result) {
								return;
							} else {
								var result = result.split("-");
								console.log("zuobiao" + result);
								document.getElementById("ZUOBIAO_X").value = result[0];
								document.getElementById("ZUOBIAO_Y").value = result[1];
								document.getElementById("course_zuobiao").innerHTML = result[1] + ',' + result[0];
							}
						}
					}

					//Chrome浏览器关闭地图子窗口时将选取的坐标传回该父页面
					function getXYForChrome(x, y) {
						document.getElementById("ZUOBIAO_X").value = x;
						document.getElementById("ZUOBIAO_Y").value = y;
						document.getElementById("course_zuobiao").innerHTML = y + ',' + x;
						}

					function myBrowser() {
						var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
						var isOpera = userAgent.indexOf("Opera") > -1;
						if (isOpera) {
							return "Opera"
						}; //判断是否Opera浏览器
						if (userAgent.indexOf("Firefox") > -1) {
							return "FF";
						} //判断是否Firefox浏览器
						if (userAgent.indexOf("Chrome") > -1) {
							return "Chrome";
						}
						if (userAgent.indexOf("Safari") > -1) {
							return "Safari";
						} //判断是否Safari浏览器
						if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
							return "IE";
						}; //判断是否IE浏览器
					}
				</script>
			</div>
		</body>
</html>
