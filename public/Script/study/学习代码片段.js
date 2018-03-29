 // *****************************************************************
 /**
  * 实用代码片段
  * @returns
  */
 // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 /* jshint esversion: 6 */
 /**
  * 计算数组中值的出现次数。
  * @returns
  */
 const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
 console.log(countOccurrences([1, 1, 2, 3, 4, 5], 1));
 console.log(Array.from([1, 2, 3]).forEach(function(i) {
   console.log(i);
 }));
 console.log();

 /**
  * 计算数组的和
  * @returns
  */
 console.time("forLoop");
 const sumArr = (arr) => arr.reduce((a, v) => a + v, 0);
 console.log(sumArr([1, 2, 3, 4, 5, 6, 7, 8]));
 console.timeEnd("forLoop");

 console.time("forLoop");
 var arr = [1, 2, 3, 4, 5, 6, 7, 8],
   sum = 0;
 for (let index = 0; index < arr.length; index++) {
   const element = arr[index];
   sum += element;
 }
 console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
 console.log(sum);
 console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
 console.timeEnd("forLoop");#

 /**
  * forEach(不影响原来数组)
  * @returns
  */
 console.time("forLoop");
 var arr = [1, 2, 3, 4, 5, 6, 7, 8];
 arr.forEach((element, i) => {
   console.log(i + "是" + element);
 });
 console.log(arr);
 console.timeEnd("forLoop");

 /**
  * 返回两个数组间的差异
  * @returns
  */
 const difference = (a, b) => {
   const s = new Set(b);
   return a.filter(x => !s.has(x));
 };
 console.log(different([1, 2, 4, 5, 10], [1]));

 /**
  * 去重
  * @returns
  * 内部使用的比对类似于精确比对(===),但是精确比对认为NaN!=NaN,而在Set内部认为NaN==NaN
  */
 const unique = arr => [...new Set(arr)];
 console.log(unique([1, 1, 1, 11, 2, 2, 3, 4, 5, NaN, NaN, NaN]));

 function unique(arr) {
   let newarr = [];
   for (let i = 0; i < arr.length; i++) {
     const outarr = arr[i];
     let a = 0;
     for (let j = i + 1; j < arr.length; j++) {
       const inarr = arr[j];
       if (outarr === inarr) {
         j = ++i;
       }
     }
     //  if (a == 0) {
     //    newarr.push(outarr);
     //  }
     newarr.push(outarr);
   }

   return newarr;
 }
 /**
  * promise的使用 
  * @returns 
  */
 let fuc = i => new Promise(resolve => {
   setTimeout(() => {
     console.log(i);
     resolve();
   }, i * 1000);

 });

 let taskArr = [];
 for (let i = 0; i < 5; i++) {
   taskArr.push(fuc(i));
 }

 Promise.all(taskArr).then(() => {
   setTimeout(() => {
     console.log(55555555555);
   }, 1000);
 });



 console.log(unique([1, 2, 1, 1, 11, 1, 2, 2, 3, 4, 5, NaN, NaN, NaN]));

 function unique(arr) {
   var result = [],
     i, j, len = arr.length;
   for (i = 0; i < len; i++) {

     for (j = i + 1; j < len; j++) {

       if (arr[i] === arr[j]) {
         j = ++i;
       }
     }
     result.push(arr[i]);
   }
   return result;
 }

 /**
  * 筛选出数组中的唯一值
  * @returns
  */
 const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
 console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5]));
 /**
  * 参数转数组
  * @returns
  */
 const a = (...arr) => arr;
 console.log(a(1, 2, 3, 4, 100).reduce((arr, v) => arr + v, 0));
 /**
  * 递归减弱数组深度
  * @returns
  */
 const flattenDepth =
   (arr, depth = 1) =>
   depth != 1 ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), []) :
   arr.reduce((a, v) => a.concat(v), []);
 console.log(
   flattenDepth(
     [
       1, [2],
       [
         [
           [3], 4
         ], 5
       ]
     ], 2));
 /**
  * 根据给定函数对数组元素进行分组
  * @returns
  */
 const groupBy = (arr, func) => {
   console.log(arr
     .map(typeof func === 'function' ? func : val => val[func]));

   return arr
     .map(typeof func === 'function' ? func : val => val[func])
     .reduce((acc, val, i) => {
       acc[val] = (acc[val] || []).concat(arr[i]);
       return acc;
     }, {});
 };


 console.log(groupBy([6.1, 4.2, 6.3, 6.5], Math.floor));
 console.log(groupBy(['one', 'two', 'three'], 'length'));
 /**
  * 返回除最后一个数组之外的所有元素。
  * @returns
  */
 const initial = arr => arr.slice(0, -1);
 console.log(initial([1, 2, 3, 4, 5]));

 /**
  * 在指定范围内的数组(递增)
  * @returns
  */
 const initializeArrayWithRange =
   (end, start = 0) =>
   Array.from({
     length: end - start
   }).map((v, i) => i + start);
 console.log(initializeArrayWithRange(5));

 /**
  * 固定长度的值
  * @returns
  */
 const initializeArrayWithValues = (n, value = 0) => Array(n).fill(value);
 console.log(initializeArrayWithValues(10, 100));


 /**
  * 生成固定长度的数组
  * @returns
  */
 // 方法一
 var arr = [];
 const lengthArr = () => {
   arr.push(10);
   return arr.length < 5 ? lengthArr() : false;
 };
 lengthArr();
 console.log(arr);
 // 方法二
 var arr = Array.prototype.slice.call(new Int8Array(10));
 console.log(arr);
 /**
  * 返回数组中的每个第 n 个元素(例:返回2 4 6)
  * @returns 返回数组中的每个第 n 个元素
  */
 const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === 0);
 console.log(everyNth([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

 var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 arr.map(element => {
   element = 10;
 });
 console.log(arr);
 /* 
  * 筛选出数组中的唯一值(没有其他重复值)
  * @returns
  */
 const filterNonUniques = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
 console.log(filterNonUniques([1, 2, 2, 3, 5, NaN, 56, 6, 4, 4, 5, NaN, 445]));
 /**
  * 拼接数组
  * @returns
  */
 const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
 console.log(flatten([1, [2], 3, 4]));

 /**
  * 从对象中挑选键值对
  * @returns
  */
 const pick = (obj, arr) => arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
 console.log(pick({
   a: 1,
   b: 3,
   c: 5,
   d: 7
 }, ['c', 'd']));

 var goToDetail = "http://" + tool.getUrlArea() + "/csfwpt_console/user/advice/show";
 window.location.href = goToDetail;
 /**
  * 对原始数组进行变异, 以筛选出指定的值。(把和第二个参数中匹配的值给删掉)
  * @returns
  */
 const pull = (arr, ...args) => {
   let pulled = arr.filter((v, i) => !args.includes(v));
   arr.length = 0;
   pulled.forEach(v => arr.push(v));
 };
 let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
 pull(myArray, 'a', 'c');
 console.log(myArray); //- > ['b', 'b']
 //数组删除的方法
 arr.splice(index, length);

 /**
  * 数组的删除方法(根据index)
  * @returns
  */
 Array.prototype.remove = function(from, to) {
   form = form > to ? [to, to = form][0] : form;
   var rest = this.slice((to || from) + 1 || this.length);
   console.log(rest);
   this.length = from < 0 ? this.length + from : from;
   return this.push.apply(this, rest);
 };
 arr.remove(3, 1);

 /**
  * 根据函数进行删除
  * @returns
  */
 const remove = (arr, func) => {

   return Array.isArray(arr) ?
     arr
     .filter(func)
     .reduce(
       (acc, val) => {
         arr.splice(arr.indexOf(val), 1); //删除匹配的元素
         return acc.concat(val);
       }, []) : [];

 }

 var arr = [1, 2, 3, 4]
 console.log(remove(arr, n => n > 2));
 console.log(arr);

 /**
  * 返回数组中的随机元素
  * @returns 随机数
  */
 const sample = arr => arr[Math.floor(Math.random() * arr.length)];
 console.log(sample([3, 7, 9, 11]));

 /**
  * 随机数组值的顺序
  * @returns 随机混乱后的数组
  */
 const randomArr = a => a.sort(() => Math.random() - 0.5);
 console.log(randomArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

 /**
  * 返回两个数组中包含的元素的数组
  * @returns
  */
 const commonArr = (arr, values) => arr.filter(v => values.includes(v));
 console.log(commonArr([1, 2, 3], [1, 2, 4]));

 /**
  * 返回两个数组之间的差异
  * @returns
  */
 const diffArr = (a, b) => {
   const arrA = new Set(a),
     arrB = new Set(b);
   return [...a.filter(x => !arrB.has(x)), ...b.filter(x => !arrA.has(x))];
 };
 console.log(diffArr([1, 2, 3], [1, 2, 4]));
 /**
  * 返回数组中的所有元素, 除第一个。
  * @returns
  */

 const tail = arr => arr.length > 1 ? arr.slice(1) : arr;
 console.log(tail([1, 2, 3]));

 /**
  * 从第n个index以后删除数组(从开始截取几个数)
  * @returns
  */
 const take = (arr, n = 1) => arr.slice(0, n);
 console.log(take([1, 2, 3], 1));

 /**
  * 返回一个数组, 其中 n 个元素从末尾移除。(和上边方法相反,从末尾截取几个数)
  * @returns
  */
 const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
 console.log(takeRight([1, 2, 3], 3));

 /**
  * 返回两个数组组合后去重的值
  * @returns
  */
 const uniteArr = (a, b) => [...new Set([...a, ...b])];
 console.log(uniteArr([1, 2, 2, 3], [2, 3, 4]));

 /**
  * 创建基于原始数组中的位置分组的元素数组。
  * @returns
  */
 const zip = (...arrays) => {
   const maxNum = Math.max(...arrays.map(x => x.length));
   return Array.from({
     length: maxNum
   }).map(
     (_, i) => {
       return Array.from({
         length: arrays.length
       }, (_, k) => arrays[k][i]);
     });
 };

 let ass = [1, 2];
 let b = [3, 4];
 let c = [5, 6];
 let d = [7, 8];
 let e = [9, 10];
 console.log(zip(ass, b, c, d, e)); //[ [ 1, 3, 5, 7, 9 ], [ 2, 4, 6, 8, 10 ] ]

 //https://github.com/kujian/30-seconds-of-code#difference
 /**
  * 
  * Promise 例1
  * @returns
  */
 const sttClog = (m) => {
   return new Promise(function(resolve, reject) {
     if (true) {
       setTimeout(() => {
         resolve(500);
       }, m);
     } else {
       reject(error);
     }
   });
 };
 sttClog(5000).then(v => console.log(v));
 /**
  * Promise执行顺序
  * @returns
  */
 let promise = new Promise(function(resolve, reject) {
   console.log('先执行Promise');
   resolve();
 });

 promise.then(function() {
   console.log('最后执行回调函数resolved.');
 });
 console.log('后执行Hi!');
 /**
  * Promise处理错误
  * @returns
  */
 const someAsyncThing = function() {
   return new Promise(function(resolve, reject) {
     // 下面一行会报错，因为x没有声明
     resolve(x + 2);
   });
 };

 someAsyncThing().then(function() {
   console.log('everything is great');
 }).catch(e => console.log('当前的错误是' + e));
 // Uncaught (in promise) ReferenceError: x is not defined

 /**
  * Promise.all
  * @returns
  */
 const p1 = new Promise((resolve, reject) => {
     resolve('hello');
   })
   .then(result => result)
   .catch(e => e);

 const p2 = new Promise((resolve, reject) => {
     throw new Error('报错了');
   })
   .then(result => result)
   .catch(e => "当前错误" + e);

 Promise.all([p1, p2])
   .then((result) => console.log("结果" + result))
   .catch(e => console.log(e));
 // 结果hello,当前错误Error: 报错了 NOTE 在promise中自己处理了 ,不会走最后一个catch

 /**
  * 获取当前结果对象
  * @returns
  */
 const getURLParameters = url =>
   url.match(/([^?=&]+)(=([^&]*))/g).reduce(
     (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
   );
 console.log(getURLParameters('http://url.com/page?name=马少博&surname=网络名称'));
 /**
  * 重定向到指定的 URL。
  * 传递第二个参数以模拟链接单击 (true-默认值) 或 HTTP 重定向 (false)
  * @returns
  */
 const redirect = (url, asLink) =>
   asLink ? window.location.href = url : window.location.replace(url);
 // redirect('https://google.com');

 const digitize = n => [...
   ('' + n)
 ].map(i => parseInt(i));
 console.log(digitize('2sadsadasd334'));

 var a = Array.prototype.slice.call(new Int8Array(10));
 var b = a.map(x => 10);
 // var b = Array(n).fill(value);
 console.log(b);

 /**
  * 计算最大除数(最大公约数)
  * @returns
  */
 console.log(8 % 36);
 const gcd = (x, y) => !y ? x : gcd(y, x % y);
 // const gcd = (x, y) => {
 //   console.log(x + ":" + y);
 //   return !y ? x : gcd(y, x % y);
 // }
 console.log(gcd(8, 36));

 /**
  * 最小公倍数
  * @returns
  */
 const lcm = (x, y) => {
   const gcd = (x, y) => !y ? x : gcd(y, x % y);
   return Math.abs(x * y) / (gcd(x, y));
 };

 console.log(lcm(18, 30));

 /**
  * 写入文件 
  * @returns
  */
 const fs = require('fs');
 const path = require('path');
 const JSONToFile = (str) => fs.writeFile(path.resolve(__dirname, "./a.txt"), str);

 JSONToFile("文件写入相关的内容上行下效寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻\n你们测试的内容是恩邯郸市三大手笔");
 /**
  * 读取文件 
  * @returns 
  */
 const readFileLines = filename => fs.readFileSync(filename).toString('UTF8').split('\n');
 console.log(readFileLines(path.resolve(__dirname, "./a.txt")));


 /**
  * 将字符串的第一个字母大写
  * lowerRest参数以保持字符串的其余部分不变, 或将其设置为true以转换为小写
  * @returns 
  */
 const capitalize = ([first, ...rest], lowerRest = false) =>
   first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
 console.log(capitalize("ssssssssSSSsssssss", true));
 /**
  *  将字符串中每个单词的首字母大写。
  * @returns 
  */
 const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
 console.log(capitalizeEveryWord('hello world!')); //'Hello World!'
 /**
  * 根据首字母大写分隔字符串 (将驼峰处理成分隔的形状)
  * @returns 
  */
 const fromCamelCase = (str, separator = '_') =>
   str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
   .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase();
 // fromCamelCase('someDatabaseFieldName', ' ') -> 'some database field name'
 // fromCamelCase('someLabelThatNeedsToBeCamelized', '-') -> 'some-label-that-needs-to-be-camelized'
 // fromCamelCase('someJavascriptProperty', '_') -> 'some_javascript_property'
 console.log(fromCamelCase('someLabelThatNeedsToBeCamelized', '-')); //Vue组件声明类似的方法
 /**
  * 字符串反转 
  * @returns 
  */
 const reStr = (str) => [...str].reverse().join("");
 console.log(reStr('asdfghjkl'));
 /**
  * 
  * 字符串排序 
  * @returns 
  */
 const sortStr = (str) => [...str].sort((a, b) => a.localeCompare(b)).join('');
 console.log(sortStr('cabbage')); //aabbceg
 /**
  * 字符串截取固定长度 
  * @returns 
  */
 // truncateString('boomerang', 7) -> 'boom...'
 const toSetLengthStr = (str, num) => str.length > num ? str.slice(0, num > 3 ? num - 3 : num) : str;
 /**
  *  将3位色码扩展为6位色码。
  * @returns 
  */
 const extendHex = shortHex =>
   '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(x => x + x).join('');
 const zhuanbian = str => '#' + [...str.slice(str.startsWith("#") ? 1 : 0)].map(x => x + x).join("");
 console.log(zhuanbian('#03f'));

 /**
  * 
  * 判断是否是数组 
  * @returns 
  */
 const isArray = val => !!val && Array.isArray(val);
 // isArray(null) -> false
 // isArray([1]) -> true
 console.log(Array.isArray(0));
 /**
  * 类型判断 
  * @returns 
  */
 const testType = (val) => {
   typeof val === 'symbol';
   typeof val === 'string';
   typeof val === 'number';
   typeof val === 'function';
   typeof val === 'boolean';
   !!val && Array.isArray(val);
   return true;
 };
 console.log(testType('s'));

 /**
  * 邮件检测 
  * @returns 
  */
 const validateEmail = str =>
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
 console.log(validateEmail('mymai@lgmail.com'));
 // validateEmail(mymail@gmail.com) -> true
 /**
  * 判断是否是数字 
  * @returns 
  */
 const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
 console.log(validateNumber('10'));

 console.log(parseInt('90s')); //会忽略之后的数字


 // username cell_phone_number email  saveBtn
 $('#titleType').val('02&&01');
 $('#content').text('青龙永夜');
 $("#username").val('张三里');
 $("#cell_phone_number").val('15689655847');
 $("#email").val('1030@qq.com');
 $("#saveBtn").trigger('click');


 /**
  * 生成M行N列的table 
  * @returns 
  */
 const tableStr = (m, n) => {
   return Array(m).fill('<tr>' + Array(n).fill('<td>1</td>').join('') + '</tr>');
 };
 console.log(tableStr(4, 5).join(''));

 console.time("TODO");
 const mission1 = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('去吃饭');
   }, 1500);
 });

 const mission2 = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('去刷碗');
   }, 1000);
 });
 // mission2.then(x => console.log(x));
 // mission1.then((x) => console.log(x));
 mission1.then(x => {
   console.log(x);
   return mission2;
 }).then(x => {
   console.log(x);
   console.timeEnd("TODO");
 });

 const m1 = (x, t) => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(x);
     }, t);
   });
 };

 const m2 = (x, t) => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(x);
     }, t);
   });
 };

 m1('吃饭啊', 1000)
   .then(x => {
     console.log("第一件事是:" + x);
     return m1("洗碗", 2000);
   })
   .then(x => {
     console.log("第二件事是:" + x);
   });

 var p =
   Promise.all(
     [
       m1('吃饭啊', 1000),
       m1('吃饭啊', 2000),
       m1('吃饭啊', 3000)
     ]
   )
   .then(result => console.log(result))
   .finally(() => console.log("终于结束了"));
 // .done();

 /**
  *  参数是一个thenable对象
  * thenable对象指的是具有then方法的对象，比如下面这个对象。
  * @returns 
  */

 let thenable = {
   then: function(resolve, reject) {
     console.log("TODO");
     resolve(42);
   }
 };

 let p1 = Promise.resolve(thenable);
 p1.then(function(value) {
   console.log(value); // 42
 });

 /**
  * 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。 
  * @returns 
  */
 const p = Promise.resolve('Hello');

 p.then(function(s) {
   console.log(s);
 });
 // Hello


 var it = makeIterator(['a', 'b']);
 console.log(it.next());
 console.log(it.next());
 console.log(it.next());




 /**
  * 两种写法  TODO 这个东西是待了解的   因为现在想不明白他能干啥 
  * @returns 
  */
 function makeIterator(array) {
   var nextIndex = 0;
   return {
     next: function() {
       return nextIndex < array.length ? {
         value: array[nextIndex++]
       } : {
         done: true
       };
     }
   };
 }

 function makeIterator(array) {
   var nextIndex = 0;
   return {
     next: function() {
       return nextIndex < array.length ? {
         value: array[nextIndex++],
         done: false
       } : {
         value: undefined,
         done: true
       };
     }
   };
 }


 /**
  * Generator函数
  * ES6 提供的一种异步编程解决方案
  * @returns 
  */
 function* helloWorld() {
   yield 'hello';
   yield '小萨';
   yield '世界';
   return '结束';
 }


 let hi = helloWorld();
 console.log(hi.next());
 console.log(hi.next());
 console.log(hi.next());
 console.log(hi.next());

 /**
  * NOTE yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。 
  * @returns 
  */
 function* gen() {
   console.log("TODO");
   yield 123 + 456;
 }

 var g = gen();

 setTimeout(() => {
   console.log(g.next());
 }, 1500);
 // console.log(gen());
 console.log(gen().next());


 var arr = [1, [
     [2, 3], 4
   ],
   [5, 6]
 ];

 newFunction();

 function newFunction() {
   var flat = function*(a) {
     var length = a.length;
     for (var i = 0; i < length; i++) {
       var item = a[i];
       if (typeof item !== 'number') {
         yield* flat(item);
       } else {
         yield item;
       }
     }
   };
   for (var f of flat(arr)) {
     console.log(f);
   }
 }



 var json = {
   "listMsxm": [{
       "id": 1,
       "CId": 1,
       "sbmxId": 28,
       "sssqQ": "20170701",
       "sssqZ": "20170731",
       "ewbhxh": "1",
       "hmc": "合计",
       "mzzzsxmxse": 0.0,
       "bqsjkcje": 0.0,
       "kchmsxse": 0.0,
       "msxsedyjxse": 0.0,
       "mse": 0.0
     },
     {
       "id": 2,
       "CId": 1,
       "sbmxId": 28,
       "sssqQ": "20170701",
       "sssqZ": "20170731",
       "ewbhxh": "2",
       "hmc": "出口免税",
       "mzzzsxmxse": 0.0,
       "bqsjkcje": null,
       "kchmsxse": null,
       "msxsedyjxse": null,
       "mse": null
     },
     {
       "id": 3,
       "CId": 1,
       "sbmxId": 28,
       "sssqQ": "20170701",
       "sssqZ": "20170731",
       "ewbhxh": "3",
       "hmc": "其中：跨境服务",
       "mzzzsxmxse": 0.0,
       "bqsjkcje": null,
       "kchmsxse": null,
       "msxsedyjxse": null,
       "mse": null
     },
     {
       "id": 4,
       "CId": 1,
       "sbmxId": 28,
       "sssqQ": "20170701",
       "sssqZ": "20170731",
       "ewbhxh": "4",
       "hmc": "0001010504",
       "mzzzsxmxse": 0.0,
       "bqsjkcje": 0.0,
       "kchmsxse": 0.0,
       "msxsedyjxse": 0.0,
       "mse": 0.0
     }
   ],
   "listJsxm": [{
       "id": 7,
       "CId": 1,
       "sbmxId": 28,
       "sssqQ": "20170701",
       "sssqZ": "20170731",
       "ewbhxh": "1",
       "hmc": "合计",
       "qcye": 0.0,
       "bqfse": 0.0,
       "bqydjse": 0.0,
       "bqsjdjse": 0.0,
       "qmye": 0.0
     },
     {
       "id": 8,
       "CId": 1,
       "sbmxId": 28,
       "sssqQ": "20170701",
       "sssqZ": "20170731",
       "ewbhxh": "2",
       "hmc": "0001011705",
       "qcye": 0.0,
       "bqfse": 0.0,
       "bqydjse": 0.0,
       "bqsjdjse": 0.0,
       "qmye": 0.0
     }
   ]
 };


 //  console.log(Object.prototype.toString.call(json))

 let a = "false";
 if (!a) {
   console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
   console.log("");
   console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
 } else {
   console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
   console.log(a);
   console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
 }


 var a = 10;

 function fn() {
   var b = 20;

   function bar() {
     console.log(a + "    " + b);
   }

   return bar;
 }
 var x = fn();
 b = 200;

 x();
 /**
  * 定义父类:人
  * 
  * @class People
  */
 class People {
   constructor(name, weight, height) {
     this.name = name;
     this.weight = weight;
     this.height = height;
   }

   eat() {
     console.log(this.name + "正在吃饭");
   }
 }
 /**
  * 继承类:中国人
  * 
  * @class Chinese
  * @extends {People}
  */
 class Chinese extends People {
   constructor(x, y, z, skinColor) {
       //NOTE 因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
       //NOTE 这个super()必须放在第一行,否则this还不存在无法赋值等操作
       super(x, y, z);
       this.country = "中国";
       this.skinColor = skinColor;
     }
     // NOTE 如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。

   kangfu() {
     console.log("我是" + (this.country || "中国") + "人,我会中国功夫!");
   }
 }
 var bob = new Chinese("Bob", 80, 180);
 bob.kangfu();
 bob.eat();
 console.log(bob.height);


 // NOTE  根据指定元素，在数组里面找出 ff 数组（ff 数组这个名字是我瞎说的）。比如数组 [2, 3, 6, 7] ，指定元素 7，则 ff 数组是 [2, 2, 3]（2+2+3 = 7）和 [7]。若指定元素 6，则 ff 数组为 [2, 2, 2], [3, 3], 和 [6] 。


 let startArr = [2, 3, 6, 7]; //初始数组
 let obj = []; //对象
 let totalArr = []; //生成的所有数组
 let uniqueArr = []; //去重后的数组
 const getSum = arr => arr.reduce((a, v) => a += v, 0);
 const getIndex = (num) => startArr.indexOf(num);
 for (let i = 0; i < startArr.length; i++) {
   totalArr.push([].concat(startArr[i]));
 }

 totalArr = allArray(0, 0);
 uniqueArr = getUniqueArr();

 let filterArr = uniqueArr.filter(arr => getSum(arr) == 6);
 console.log(filterArr);

 /**
  * 获取到全部可能的数组
  * 
  * @param {any} index 
  * @param {any} prevLength 
  * @returns 
  */
 function allArray(index, prevLength) {
   var len = totalArr.length;
   for (let j = prevLength; j < len; j++) {
     const element_j = totalArr[j];
     for (let k = getIndex(element_j[0]); k < startArr.length; k++) {
       const element_k = startArr[k];
       totalArr.push(element_j.concat(element_k));
     }
   }
   if (index < (startArr.length - 2)) {
     return allArray(index + 1, len);
   } else {
     return totalArr;
   }
 }
 /**
  * 数组去重
  * 将数组中的子数组相同的,删除掉
  */
 function getUniqueArr() {
   totalArr.forEach(arr => {
     arr.sort((a, b) => a > b);
   });
   for (let x = 0; x < totalArr.length; x++) {
     const element_t = totalArr[x];
     var total = element_t.join("");
     if (!obj[total]) {
       obj[total] = 1;
       uniqueArr.push(element_t);
     }
   }
   return uniqueArr;
 }


 Function.prototype.a = 'a';
 Object.prototype.b = 'b';
 //  Person.prototype = Function.prototype;

 function Person() {};
 var p = new Person();
 console.log('p.a: ' + Person._proto_); // p.a: undefined
 console.log('p.b: ' + p.b); // p.b: b

 const person = {
   namea: 'menglinghua',
   say: function() {
     return function() {
       console.log(this);
       console.log(this.namea);
     };
   }
 };
 person.say()();

 　
 Function.prototype.bind = function(oThis) {
   if (typeof this !== 'function') {
     throw new TypeError('调用者不是当前函数对象');
   }
   var aArgs = Array.prototype.slice.call(arguments, 1),
     fToBind = this,
     fNOP = function() {},
     fBound = function() {
       return fToBind.apply(this instanceof fNOP && oThis ? this : oThis || window, aArgs.concat(Array.prototype.slice.call(arguments)));
     };
   fNOP.prototype = this.prototype;
   fBound.prototype = new fNOP();
   return fBound;
 };
 // 模拟实现bind方法
 Function.prototype._bind = function(oThis) {
   console.log(oThis);
   console.log(this);
   if (typeof this !== 'function') {
     throw new TypeError("不是fun,不可转换");
   }
   var args = Array.prototype.slice.call(arguments, 1);
   var fToBind = this;
   var fNop = function() {};
   var fBound = function() {
     return fToBind.apply(
       this instanceof fNop && oThis ?
       this :
       oThis || window,
       args.concat(Array.prototype.slice.call(arguments))
     );
   };
   fNop.prototype = this.prototype;
   fBound.prototype = new fNop();
   return fBound;
 }

 var gets = {
   name: "名字",
   say: function() {
     console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
     console.log(this.name);
     console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
   }
 }



 Function.prototype.bind = (oThis) => {
   //获取当前参数
   let args = Array.prototype.slice.call(arguments, 1);
   let fTobind = this;
   let fNop = function() {};
   let fBound = function() {
     return fToBind.apply(
       this instanceof fNop && oThis ? this :
       oThis || window,
       args.concat(Array.prototype.slice.call(arguments))
     );
   }
   fNop.prototype = this.prototype;
   fBound.prototype = new fNop();
   return fBound;
 }



 Function.prototype.bind = function(oThis) {
   let args = Array.prototype.slice.call(arguments, 1);
   let fNop = function() {};

   let fToBind = this;
   let Bound = function() {
     return fToBind.apply(
       this instanceof fNop ? this : oThis || window,
       args.concat(Array.prototype.slice.call(arguments))
     );
   }

   fNop.prototype = this.prototype;
   Bound.prototype = new fNop();
   return Bound;

 }
 var gets = {
   name: "名字",
   say: function() {
     console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
     console.log(this.name);
     console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
   }
 }
 var o = {
   name: "我是O泡..."
 }
 var newsay = gets.say.bind(o);
 newsay();

 console.log(getN(100));

 function getN(num) {
   var num_re = (num + "").split("").reverse().join("") - 0;
   num_re = parseInt(num_re);
   return num + num_re;
 }

 function getNUm(str) {
   var len = str.length;
   var arr = str.split('');
   var totalNum = 1;
   for (let index = 1; index < arr.length; index++) {
     if (arr[index] != arr[index - 1]) {
       totalNum++;
     }
   }
   return len / totalNum;
 }



 console.log(getNUm('aaabbaaaccccceeecccccccddd'));

 /**
  * finally实现 
  * @returns 
  */
 Promise.prototype.finally = function(callback) {
   let P = this.constructor;
   return this.then(function(value) {
       P.resolve(callback()).then(function() {
         return value;
       });
     },
     function(reson) {
       P.resolve(callback()).then(function() {
         throw reason;
       });
     });
 };


 Promise.prototype.finally = function(callback) {
   let P = this.constructor;
   return this.then(function(value) {
       P.resolve(callback()).then(function() {
         return value;
       })
     }),
     function(reason) {
       P.resolve(callback()).then(function() {
         throw reason;
       })
     }
 }

 const pA = (str) => {
   //返回一个promise对象才可以调用then等函数
   return new Promise(function(resolve, reject) {
     if (str) {
       resolve(str + "6666");
     } else {
       reject('1');
     }
   });
 }


 pA('21312').then((data) => {
   console.log(data);
 }).finally(
   () => console.log("执行完毕")
 );


 Promise.prototype.finally = function(callback) {
   let P = this.constructor;
   return this.then(
     val => P.resolve(callback()).then(val => val),
     reason => P.resolve(callback()).then(() => { throw reason; })
   );
 }

 const methods = ['push', 'pop', 'shift'];
 const arrayAugmentations = [];
 methods.forEach(method => {
   let arrFun = Array.prototype[method];
   arrayAugmentations[method] = function() {
     console.log("改变了");
     return arrFun.apply(this, arguments);
   }
 });

 let list = [1, 23, 4];

 // 将要监听的数组的原型指针指向上面定义的空数组对象
 list.__proto__ = arrayAugmentations;
 list.push(99)



 const aryMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
 const arrayAugmentations = [];

 aryMethods.forEach((method) => {

   // 这里是原生Array的原型方法
   let original = Array.prototype[method];

   // 将push, pop等封装好的方法定义在对象arrayAugmentations的属性上
   // 注意：是属性而非原型属性
   arrayAugmentations[method] = function() {
     console.log('我被改变啦!');

     // 调用对应的原生方法并返回结果
     return original.apply(this, arguments);
   };

 });

 let list = ['a', 'b', 'c'];
 // 将我们要监听的数组的原型指针指向上面定义的空数组对象
 // 别忘了这个空数组的属性上定义了我们封装好的push等方法
 list.__proto__ = arrayAugmentations;
 list.push('d'); // 我被改变啦！ 4

 // 这里的list2没有被重新定义原型指针，所以就正常输出
 let list2 = ['a', 'b', 'c'];
 list2.push('d'); // 4

 /**
  * 正则校验
  * 
  * @param {any} str 字符串
  * @returns 是否有效 T/F
  */
 function check(str) {
   if (!(/^[0-9a-zA-Z]*$/g.test(str))) {
     return false;
   } else {
     return true;
   }
 }

 console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
 console.log(check('213a.a1'));
 console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");


 var data = {
   name: '张三',
   age: 5456
 }

 var proData = {
   name: '李四',
   age: 10
 }
 var proxy = new Proxy(data, {
   get: function(target, property) {
     console.log(target);
     console.log(property);
     return proData[property];
     //  return 35;
   }
 });


 console.log(proxy.name);


 var handler = {
   get: function(target, name) {
     if (name === 'prototype') {
       return Object.prototype;
     }
     return 'Hello, ' + name;
   },

   apply: function(target, thisBinding, args) {
     return args[0];
   },

   construct: function(target, args) {
     return { value: args[1] };
   }
 };

 var fproxy = new Proxy(function(x, y) {
   return x + y;
 }, handler);

 fproxy(1, 2) // 1
 new fproxy(1, 2) // {value: 2}
 fproxy.prototype === Object.prototype // true
 fproxy.foo === "Hello, foo" // true