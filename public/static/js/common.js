//Confirm使用方示例

// showConfirm('你好，恭喜通过测试！',
//   function() {
//     alert('确认回调事件');
//   },
//   function() {
//     alert('关闭');
//   },
//   '前去绑定',
//   '取消');

//Alert使用方法示例

// showAlert("low不low！", function() {
//     alert('点击了确认按钮');
//   },
//   '确认按钮操作');


/**
 * 调用微信端确认Confrim模态框
 * 
 * @param {any} wordStr  提示语
 * @param {any} confirmCallback  确认回调事件
 * @param {any} cancelCallback 取消回调事件
 * @param {any} confrimStr 确认按钮文字
 * @param {any} cancelStr 取消按钮文字
 */
function showConfirm(wordStr, confirmCallback, cancelCallback, confrimStr, cancelStr) {
  wordStr = wordStr || "提示！";
  cancelStr = cancelStr || "关闭";
  confrimStr = confrimStr || "确认";
  var str = '<div id="ConfirmDialogs">' +
    '          <div class="js_dialog" id="iosDialog2" style="display: block;">' +
    '            <div class="weui-mask"></div>' +
    '            <div class="weui-dialog">' +
    '              <div class="weui-dialog__bd" style="font-size: 18px;color: #333;">' + wordStr + '</div>' +
    '              <div class="weui-dialog__ft" style="padding: 10px;">' +
    '                <a class="btn btn-skip cancel-block" style="width: 40%;margin:0;">' + cancelStr + '</a>' +
    '                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary btn btn-yes" style="padding:5px;line-height: 150%;">' + confrimStr + '</a>' +
    '              </div>' +
    '            </div>' +
    '          </div>' +
    '        </div>';

  $(".page").append(str);
  //关闭事件
  $('#ConfirmDialogs').on('click', '.cancel-block', function() {
    //关闭回调事件
    cancelCallback();
    //关闭模态框 
    $('#ConfirmDialogs').fadeOut(200).remove();

  });


  //确认事件
  $('#ConfirmDialogs').on('click', '.btn-yes', function() {
    //确定回调事件
    confirmCallback();
    //关闭模态框
    $('#ConfirmDialogs').fadeOut(200).remove();
  });
}


/**
 * 调用微信端确认Alert模态框
 * 
 * @param {any} wordStr  提示语
 * @param {any} confirmCallback  确认回调事件
 * @param {any} confrimStr 确认按钮文字
 */
function showAlert(wordStr, confirmCallback, confrimStr) {
  confrimStr = confrimStr || "确定";
  var str = ' <div id="AlertDialogs">' +
    '          <div class="js_dialog" id="iosDialog2" style="display: block;">' +
    '            <div class="weui-mask"></div>' +
    '            <div class="weui-dialog">' +
    '              <div class="weui-dialog__bd" style="font-size: 18px;color: #333;">恭喜您，绑定成功！</div>' +
    '              <div class="weui-dialog__ft" style="padding: 10px;">' +
    '                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary btn big-confrim-btn" style="padding:5px;line-height: 150%;">' + confrimStr + '</a>' +
    '              </div>' +
    '            </div>' +
    '          </div>' +
    '        </div>';
  $(".page").append(str);
  //确认事件
  $('#AlertDialogs').on('click', '.big-confrim-btn', function() {
    //确定回调事件
    confirmCallback();
    //关闭模态框
    $('#AlertDialogs').fadeOut(200).remove();
  });

}