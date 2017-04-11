$("#button").hide();
var setting = {
  view: {
    addHoverDom: addHoverDom,
    removeHoverDom: removeHoverDom,
    fontCss: getFont
  },
  edit: {
    enable: true,
    drag: {
      isCopy: false,
      isMove: false,
      prev: false,
      next: canNext,
      inner: false
    },
    showRemoveBtn: false,
    showRenameBtn: false
  },
  async: {
    enable: true,
    url: "/tree",
    dataType: "JSON"
  },
  data: {
    simpleData: {
      enable: true,
      pIdKey: "parentId"
    },
    key: {}
  },
  callback: {
    onAsyncSuccess: onAsyncSuccess,
    beforeDrag: beforeDrag,
    beforeDrop: beforeDrop,
  }

};

function getFont(treeId, node) {
  return node.state == 'N' ? {
    'text-decoration': 'line-through',
    'text-decoration-color': 'red'
  } : {};
}
var dragId;

function beforeDrag(treeId, treeNodes) {
  dragId = treeNodes[0].parentId;
  if (treeNodes[0].drag === false) {
    tool.alert("确认", "特殊节点禁止拖拽",
      function() {});
    return false;
  }
  return true;
};

function beforeDrop(treeId, treeNodes, targetNode, moveType) {
  if (targetNode.parentId == dragId) {
    postAjax("system/department/ordernumsort", {
        id: treeNodes[0].id,
        targetNodeId: targetNode.id,
        moveType: moveType
      },
      function(data) {
        tool.alert("确认", "排序成功",
          function() {});
      });
  } else {
    tool.alert("确认", "只允许同级拖拽排序",
      function() {});
    return false;
  }
}

function canNext(treeId, nodes, targetNode) {
  if (targetNode.id == -2 || targetNode.id == -3) {
    return false;
  }
  return true;
}

function canPrev(treeId, nodes, targetNode) {
  if (targetNode.id == -3 || targetNode.id == -2) {
    return false;
  }
  return true;
}

// 加载成功后执行的事件
function onAsyncSuccess(treeId, treeNode) {
  var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
  treeObj.expandAll(true);

  var nodes = treeObj.transformToArray(treeObj.getNodes());
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].id == 1 || nodes[i].id == -2 || nodes[i].id == -3) {
      nodes[i].drag = false;
    }
  }

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].id == "-2") {
      nodes[i].icon = 'static/common/frame/ztree/css/metroStyle/img/diy/add.png';
      treeObj.updateNode(nodes[i], true);

    } else if (nodes[i].id == "1") {
      treeObj.updateNode(nodes[i], true);
    } else {
      treeObj.updateNode(nodes[i], true);
    }
  }

}

function beforeExpand(treeId, treeNode) {
  if (treeNode.children == null) {
    return false;
  }
}

function onDblClick(event, treeId, treeNode) {
  var nodes = zTree.getSelectedNodes();
  if (treeNode.parentId == null) {
    return false;
  } else {
    zTree.editName(treeNode);
  }
}
// 新增和修改节点
function onRename(event, treeId, treeNode, isCancel) {
  var id = treeNode.id;
  if ($.trim(treeNode.name) == "") {

    if (id == "-2") {
      treeNode.name = "双击添加同级";
    }
    zTree.updateNode(treeNode);
    return false;
  }

  if (treeNode.name == "双击添加同级") {
    treeNode.name = "双击添加同级";
    zTree.updateNode(treeNode);
    return false;
  }

  if (treeNode.name == "双击编辑下级") {

    treeNode.name = "双击编辑下级";
    zTree.updateNode(treeNode);
    return false;
  }
  var nodes = zTree.getSelectedNodes();
  var parentnode = nodes[0].getParentNode();

  if (treeNode.id == -2 || treeNode.id == -3) {
    postAjax("system/department/addbrother", {
        id: '',
        pId: treeNode.parentId,
        name: treeNode.name
      },
      function(data) {
        // alert(data.message);
        zTree.addNodes(parentnode, {
          id: data.bean,
          parentId: treeNode.parentId,
          name: treeNode.name
        });
        $.fn.zTree.getZTreeObj("treeDemo").reAsyncChildNodes(null, "refresh", "true");
        tool.alert("确认", "保存成功",
          function() {});
        zTree.selectNode(treeNode);
        findDept(event, treeId, treeNode);
      });
  } else {
    postAjax("system/department/addbrother", {
        id: treeNode.id,
        pId: '',
        name: treeNode.name,
        description: $("#description").val()
      },
      function(data) {
        treeNode.id = data.bean;
        findDept(event, treeId, treeNode);
        $.fn.zTree.getZTreeObj("treeDemo").reAsyncChildNodes(null, "refresh", "true");
        tool.alert("确认", "修改成功",
          function() {});
        zTree.selectNode(treeNode);
      });

  }
}

function zTreeBeforeRename(treeId, treeNode, newName) {
  if (newName == "") {
    tool.alert("确认", "请填写名称",
      function() {});
    return false;
  };
}

// 添加悬浮方法
var times = 0;

function addHoverDom(treeId, treeNode) {
  var sObj = $("#" + treeNode.tId + "_span");
  if ($("#removeBtn_" + treeNode.tId).length > 0 || $("#addBtn_" + treeNode.tId).length > 0 || $("#backRemoveBtn_" + treeNode.tId).length > 0 || $("#diyBtn_" + treeNode.tId).length > 0) {
    return;
  }
  var addStr = "";
  var addStr2 = "";
  var addStr3 = "";
  var addStr4 = "";
  var addStr5 = "";
  var parNode = treeNode.getParentNode();
  times = times + 1;
  if (parNode !== null) {
    if (treeNode.state == 'Y') {
      addStr3 = "<span class='button edit' id='editBtn_" + treeNode.tId + "' title='修改节点' ></span>";
      addStr += "<span class='button remove' id='removeBtn_" + treeNode.tId + "' title='作废' ></span>";
      addStr2 = "<span class='button add' id='addBtn_" + treeNode.tId + "' title='新增子节点'  ></span>";
    } else {
      if (treeNode.getParentNode().state == 'Y') {
        addStr = "<span class='button icon03' id='diyBtn_" + treeNode.tId + "' title='还原作废' onMouseOver=''></span>";
      }
    }
  } else {
    addStr2 = "<span class='button add' id='addBtn_" + treeNode.tId + "' title='新增子节点'  ></span>";
  }
  if (treeNode.id != -2 && treeNode.id != -3) {
    sObj.after(addStr);
    sObj.after(addStr3);
    sObj.after(addStr2);
    sObj.remove("#addBtn_" + treeNode.tId);
  };
  // 作废方法开始
  var removeBtn = $("#removeBtn_" + treeNode.tId);
  if (removeBtn) {
    if (removeBtn.is(".remove")) {
      removeBtn.bind("click",
        function() {
          deleteDept(treeNode);
        });

    }
  }
  // 作废方法结束
  // 添加下级方法开始
  var addBtn = $("#addBtn_" + treeNode.tId);
  if (addBtn) {
    if (addBtn.is(".add")) {
      addBtn.bind("click",
        function() {
          if (treeNode.state == "N") {
            return;
          }
          $("#button").show();
          $("#button1").hide();
          $("#panel-heading").text("新增文章分类");
          $("#pid").val(treeNode.id);
          $("#id").val("");
          $("#name").val("");
          $("#description").val("");
          $("#description").removeAttr("disabled");
          $("#name").removeAttr("disabled");
          $("#headdept").text(treeNode.name);
        });
    };
  };

  // 修改方法开始
  var editBtn = $("#editBtn_" + treeNode.tId);
  if (editBtn) {
    if (editBtn.is(".edit")) {
      editBtn.bind("click",
        function() {
          $("#button").show();
          $("#button1").hide();
          $("#panel-heading").text("修改分类名称");
          $("#id").val(treeNode.id);
          $("#name").val(treeNode.name);
          $("#description").val(treeNode.remarks);
          $("#description").removeAttr("disabled");
          $("#name").removeAttr("disabled");
          $("#headdept").text(treeNode.getParentNode().name);
        });
    };
  };

  // 添加还原作废方法
  var diyBtn_ = $("#diyBtn_" + treeNode.tId);
  if (diyBtn_) {
    if (diyBtn_.is(".icon03")) {
      diyBtn_.bind("click",
        function() {
          var ids = recursionSolveNode(treeNode);
          var ids1 = ids.substring(0, ids.length - 1);
          var result2 = ids1;
          tool.confirm("确认", "确定还原吗?",
            function(result) {
              postAjax("system/department/backremovebtn", {
                  ids: result2
                },
                function(data) {
                  if (data.bean == "true") {
                    $("#id").val("");
                    $("#name").val("");
                    $("#description").val("");
                    $("#headdept").text("");
                    $("#button").hide();
                    $("#button1").show();
                    $("#panel-heading").text("操作面板");
                    tool.alert("确认", "还原成功",
                      function() {});
                    zTree.reAsyncChildNodes(null, 'refresh', false);
                  }
                });
            },
            function(result) {});
        });
    }
  }

  if ($(".button.ico_docu")) {
    $(".button.ico_docu").bind("click",
      function() {
        $("#button").hide();
        $("#button1").show();

      });
  }

  if ($(".node_name")) {
    $(".node_name").bind("click",
      function() {
        $("#button").hide();
        $("#button1").show();
        $("#headdept").text("");
        $("#description").val("");
        $("#description").attr("disabled", "disabled");
        $("#name").attr("disabled", "disabled");
        $("#name").val("");

      });
  }
  return;
};

function removeHoverDom(treeId, treeNode) {
  $("#removeBtn_" + treeNode.tId).unbind().remove();
  $("#addBtn_" + treeNode.tId).unbind().remove();
  $("#editBtn_" + treeNode.tId).unbind().remove();
  $("#backRemoveBtn_" + treeNode.tId).unbind().remove();
  $("#diyBtn_" + treeNode.tId).unbind().remove();

};

function setRemoveBtn(treeId, treeNode) {
  if (treeNode.id == -3) {
    $("#removeBtn_" + treeNode.parentTId).unbind().remove();
    $("#addBtn_" + treeNode.parentTId).unbind().remove();
    return true;
  }
  return false;
};

// 部门作废
function deleteDept(treeNode) {
  var nodes = zTree.getSelectedNodes()[0];
  var ids = recursionSolveNode(treeNode);
  var ids1 = ids.substring(0, ids.length - 1);
  var result2 = ids1;
  if (nodes != undefined) {
    //TODO 修改作废提示与作废接口
    tool.confirm("确认", "一旦作废，该部门下用户将被移除子部门也将被作废，是否作废?",
      function(result) {
        postAjax("system/department/finduserifexcist", {
            deptids: result2
          },
          function(result) {
            postAjax("system/department/deptremove", {
                deptIds: result2
              },
              function(data) {
                if (data.bean == "true") {
                  $("#id").val("");
                  $("#name").val("");
                  $("#description").val("");
                  $("#headdept").text("");
                  $("#button").hide();
                  $("#button1").show();
                  $("#panel-heading").text("操作面板");
                  tool.alert("确认", "作废成功",
                    function() {});
                  zTree.reAsyncChildNodes(null, 'refresh', false);
                }
              });
          });
      },
      function(result) {});
  }
};
/**
 * 递归处理节点数据
 */
function recursionSolveNode(treeNode) {
  var idS = "";
  if (treeNode != null) {
    if (treeNode.id != "-2" && treeNode.id != "-3") {
      idS += treeNode.id + ",";
    }
    var childNode = treeNode.children;
    if (childNode != null) {
      for (var i = 0; i < childNode.length; i++) {
        var treeNode0 = childNode[i];
        idS += recursionSolveNode(treeNode0);
      }
    }
  }
  return idS;
};

// 把数据填充到到表單
function findDept(event, treeId, treeNode) {
  if (treeNode.id == 1 || treeNode.id == -2 || treeNode.id == -3) {
    $("#id").val("");
    $("#name").val("");
    $("#description").val("");
    return false;
  }
  postAjax("system/department/findDeptById", {
      id: treeNode.id
    },
    function(data) {
      var result = data.bean;
      $("#id").val(result.id);
      $("#name").val(result.name);
      $("#description").val(result.remarks);
    });

};

function operation() {
  var id = $("#id").val();
  var name = $("#name").val();
  var pid = $("#pid").val();
  var description = $("#description").val();

  if (name == null || "" == name) {
    tool.alert("确认", "请填写部门名称",
      function() {});
    return;
  }
  postAjax("system/department/addbrother", {
      id: id,
      name: name,
      description: description,
      parentId: pid
    },
    function(data) {
      if (data.bean == "add") {
        $("#id").val("");
        $("#name").val("");
        $("#description").val("");
        $("#headdept").text("");
        $("#button").hide();
        $("#button1").show();

      }
      zTree.reAsyncChildNodes(null, 'refresh', false);
      tool.alert("确认", "保存成功",
        function() {});
    });
};
// 修改
function updatePanel() {
  var nodes = zTree.getSelectedNodes();
  if (nodes.length > 0) {
    var id = nodes[0].id;
  }
  if ($("#id").val() == null || "" == $("#id").val() || id == "-2" || id == "-3" || id == "1") {
    tool.alert("确认", "请选择一条有效的记录",
      function() {});
    return;
  }
  var id = $("#id").val();
  var name = $("#name").val();
  var description = $("#description").val();
  if (description == null || "" == description) {
    tool.alert("确认", "请填写分类描述",
      function() {});
    return;
  }

  postAjax("system/department/addbrother", {
      id: id,
      name: name,
      description: description
    },
    function(data) {
      tool.alert("确认", "保存成功",
        function() {});
    });

};

var zTree;
$(document).ready(function() {

  zTree = $.fn.zTree.init($("#treeDemo"), setting);
  var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
});

/**
 * 统一Ajax请求
 */
var postAjax = function(url, data, success) {
  $.ajax({
    type: "post",
    url: url,
    dataType: 'json',
    data: data,
    success: success != null && typeof success == "function" ? success : function(d) {
      $.messager.show({
        title: '提示',
        msg: d.msg
      });
      $.fn.zTree.getZTreeObj("treeDemo").reAsyncChildNodes(null, "refresh", false);
    }
  });
};