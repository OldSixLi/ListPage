 $(function() {
   //设置高度
   $("#preview").height($("#textareaBlock").height() - 80);
   //选择框
   $("#select").select2({
     placeholder: "请选择审核人员,不少于两位",
   });
 })


 /**
  * 声明Vue模块
  * @returns
  */
 var ArticleContent = new Vue({
   el: "#ArticleContent",
   /**
    * 数据 
    */
   data: {
     title: "", //标题
     abstract: "", //摘要
     content: "", //内容
     from: "", //参考文献
     isOpen: "Y", //是否公开
     isToCheck: "N", //是否提交审核
     keyWords: [{
       id: 1,
       word: "周杰伦"
     }],
     newKeyword: ""
   },
   /**
    * 方法 
    */
   methods: {
     /**
      * 添加关键词方法
      */
     addKeyWords: function() {
       var _self = this;
       //TODO  此处添加完返回成功后,将数组追加到已添加列表中,然后将newKeyword置空
       var word = _self.newKeyword;
       //TODO  AJAX请求success中处理此步骤

       _self.keyWords.push({
         id: Date.parse(new Date()),
         word: word
       });
       _self.newKeyword = "";
     },
     /**
      * 删除关键字方法
      */
     deleteKeyWord: function(id) {
       var _self = this;
       var arrkeyword = _self.keyWords;
       for (var index = 0; index < arrkeyword.length; index++) {
         var element = arrkeyword[index];
         if (element.id == id) {
           arrkeyword.splice(index, 1);
         }
       }
     },
     /**
      * 添加图片方法
      * 
      */
     addImg: function() {
       //添加图片操作
       insertContent("![老六](https://pic1.zhimg.com/da8e974dc_xs.jpg)\r\n", $("#text-content"));
       ArticleContent.content = $("#text-content").val();
     },
     /**
      * 保存文章
      */
     saveArticle: function() {
       var _self = this;
       var _error = [];
       if (!_self.title) {
         _error.push("请输入文章标题！");
       }
       if (!_self.abstract) {
         _error.push("请输入文章摘要！");
       }
       if (!_self.content) {
         _error.push("请输入文章内容！");
       }
       if (!_self.from) {
         _error.push("请输入参考文献！");
       }
       if (_self.isOpen == "N" && $("#departmentIds").val() == "") {
         _error.push("请选择可以查看此文章的部门！");
       }
       if (_self.isToCheck == "Y") {
         if ($("#select").val() == [] || $("#select").val() == null || $("#select").val() == "") {
           _error.push("请选择审核人员！");
         } else {
           if ($("#select").val().length < 2) {
             _error.push("请至少选择两位审核人员！");
           }
         }
       }
       //错误提示
       if (_error.length > 0) {
         alert(_error.join("\r\n"));
         return false;
       }

     },
     /**
      * 返回事件
      */
     cancalBack: function() {
       window.location.back(-1);
     }
   },
   /**
    * 实时计算 
    */
   computed: {
     /**
      * 预览页面HTML
      */
     previewHtml: function() {
       var htmlstr = "<h1 class=\"text-center article-title\">" + this.title + "</h1>" +
         "            <h3 class=\"text-center article-author\"> <small></small></h3>" +
         "            <div class=\"article-abstract\">" + markdown.toHTML(this.abstract) + "</div>" +
         "            <div class=\"article-content\">" + markdown.toHTML(this.content) + "</div>" +
         "            <div class=\"article-from\">" + markdown.toHTML(this.from) + "</div>";
       return htmlstr;
     },
     /**
      * 关键字ID
      * @returns id以','拼接
      */
     keywordIds: function() {
       var _self = this;
       var idlist = [];
       for (var index = 0; index < _self.keyWords.length; index++) {
         var element = _self.keyWords[index];
         idlist.push(element.id);
       }
       return idlist.join(',');
     }
   },
   /**
    * 加载后立即执行的方法(created 这个钩子在实例被创建之后被调用)
    */
   created: function() {
     var urlObj = new UrlSearch();
     if (urlObj.kid) {
       //传递当前知识点ID,进行详细内容的异步请求
     }
   }
 });

 /**
  * textarea 光标处追加内容
  * 
  * @param {any} myValue 要添加的文本
  * @param {any} t 元素
  */
 function insertContent(myValue, t) {
   var $t = $(t)[0];
   if (document.selection) { //ie
     this.focus();
     var sel = document.selection.createRange();
     sel.text = myValue;
     this.focus();
     sel.moveStart('character', -l);
     var wee = sel.text.length;
     if (arguments.length == 2) {
       var l = $t.value.length;
       sel.moveEnd("character", wee + t);
       t <= 0 ? sel.moveStart("character", wee - 2 * t - myValue.length) : sel.moveStart("character", wee - t - myValue.length);
       sel.select();
     }
   } else if ($t.selectionStart || $t.selectionStart == '0') {
     var startPos = $t.selectionStart;
     var endPos = $t.selectionEnd;
     var scrollTop = $t.scrollTop;
     $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
     this.focus();
     $t.selectionStart = startPos + myValue.length;
     $t.selectionEnd = startPos + myValue.length;
     $t.scrollTop = scrollTop;
     if (arguments.length == 2) {
       $t.setSelectionRange(startPos - t, $t.selectionEnd + t);
       this.focus();
     }
   } else {
     this.value += myValue;
     this.focus();
   }
 };

 /**
  * 分隔获取各个参数
  * 根据URL地址获取其参数
  */
 function UrlSearch() {
   var name, value;
   var str = location.href; //取得整个地址栏
   var num = str.indexOf("?");
   str = str.substr(num + 1);
   var arr = str.split("&"); //各个参数放到数组里
   for (var i = 0; i < arr.length; i++) {
     num = arr[i].indexOf("=");
     if (num > 0) {
       name = arr[i].substring(0, num);
       value = arr[i].substr(num + 1);
       this[name] = value;
     }
   }
 }

 /**
  * 富文本编辑器使用方法
  * @param {any} input 选择器
  * @param {any} preview 输出区域ID
  */
 function Editor(input, preview) {
   this.update = function() {
     preview.innerHTML = markdown.toHTML(input.value);
   };
   input.editor = this;
   this.update();
 }

 /**
  * 实现input的自增长
  * @returns
  */
 function textareaAdapt(event) {
   $(event.target).css({
     'height': 'auto'
   }).height(event.target.scrollHeight);
 }