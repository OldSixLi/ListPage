import { resolve } from 'dns';

var array = [1, 2, 3, 4, 5, 6, 7];
var index = 90;
for (let index = 0; index < array.length; index++) {
  let element = array[index];
  console.log(element);
}

console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
console.log(index);
console.log("↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑");


var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
}
a[9](); // 9



"use strict";

var a = [];

var _loop = function _loop(i) {
  a[i] = function() {
    console.log(i);
  };
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}
a[9](); // 9


if (true) {


  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}



let jsonData = {
  id: 42,
  status: "OK",
  data: [456, 12]
};

let { id, status, data: qaaa } = jsonData;
console.log(id, status, qaaa);


let s = 'Hello world!';
console.log(s.startsWith('world', 6)); // true
console.log(s.endsWith('Hello', 5)); // true
console.log(s.includes('Hello', 6)); // false
/**
 * 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。 
 * @returns 
 */
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });



function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function() {
    this.s2++;
  }, 1000);
}

var s2 = 100;
var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

/**
 * symbol 
 * @returns 
 */
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
console.log(a[mySymbol]); // undefined
console.log(a['mySymbol']); // "Hello!"

/**
 * 判断某个字符串是否包含某个字母 
 * @returns 
 */
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log(new Set([...
  'world'
]).has('dd'));
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
//  或
console.log('world'.indexOf('w') > -1);



let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);


let a = [1, 2, 3];
let b = [4, 3, 2];


let union = (...a) => {
    let allArr = [...a].reduce((a, b) => (a.concat(b)));
    return [...new Set(allArr)]
  }
  // 多数组并集
console.log(union(a, b, [1, 2, 3, 4, 5, 9, 9, 9, 9, 9, 9, 98, 8, 88, 8, 8, , 8, 8]));
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));

/**
 * Map结构 
 * @returns 
 */

const m = new Map();
const o = { p: 'Hello World' };
// console.log(m.get(o));
m.set(o, 'content');
m.set(o.p, 'contentPP')
m.set('li', '李三')
console.log(m.get('li'));
console.log(m.get(o.p));
m.get(o) // "content"

console.log([2] == [2]); //false

/**
 * Map 
 * @returns 
 */
const map = new Map([
  ['F', 'no'],
  ['T', 'yes'],
]);

for (let [key, value] of map.entries()) {
  console.log(key, value);
}

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}


const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

console.log([...map.keys()]);
// [1, 2, 3]

console.log([...map.values()]);
// ['one', 'two', 'three']

console.log([...map.entries()]);
// [[1,'one'], [2, 'two'], [3, 'three']]

console.log([...map]);

map.forEach((x, y) => console.log(y))
  // [[1,'one'], [2, 'two'], [3, 'three']]

var arr = [0, 2, 4, 6, 8];
var str = arr.map(function(item, index, arr) {
  console.log(this == global);
  console.log("原数组arr：", arr); //注意这里执行5次
  return item / 2;
}, this);
console.log(str);


/**
 * proxy 
 * @returns 
 */
var obj = new Proxy({}, {
  get: function(target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function(target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});


let obj = new Proxy({}, {
  get: function(target, key, receiver) {
    console.log("读取的值是 " + key);
    return Reflect.get(target, key, receiver);

  },
  set: function(target, key, value, receiver) {
    console.log("设置的值是 " + key + ":" + value);
    return Reflect.set(target, key, value, receiver);

  }
})
obj.count = 1
console.log(obj.count);

var handler = {
  get: function(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
    console.log(target.prototype);
    console.log(thisBinding);
    console.log(args);
    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
    return args[0];
  },

  construct: function(target, args) {
    return { value: args[1] };
  }
};

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);

console.log(fproxy(1, 2));

new fproxy(1, 2) // {value: 2}
fproxy.prototype === Object.prototype // true
fproxy.foo === "Hello, foo" // true



var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw new ReferenceError("Property \"" + property + "\" does not exist.");
    }
  }
});


var person = {
  name: "张三"
};

var proxy = new Proxy(person, {
  get: function(target, property) {
    if (property in target) {
      return "结果:" + target[property];
    } else {
      return ("找不到这个属性,你搁这儿瞎白活啥呢?");
    }
  }
})

let aobj = Object.create(proxy);

//<debug>
console.log('调试结果:', aobj.aa);
//</debug>
//<debug>
console.log('调试结果:', arguments);
//</debug>

function* eatLunch() {
  yield '洗手';
  yield '洗碗';
  yield '摆桌子';
  yield '吃饭';
  yield '收拾';
  return '午餐完毕';
}
let lunch = eatLunch();

for (let index = 1; index < 10; index++) {
  let obj = lunch.next();
  !obj.done && console.log(index + ':' + obj.value);
  if (obj.done) {
    console.log(index + ':' + obj.value);
    break;
  }

};
!lunch.next().done && console.log(lunch.next().value);
!lunch.next().done && console.log(lunch.next().value);
!lunch.next().done && console.log(lunch.next().value);
!lunch.next().done && console.log(lunch.next().value);
!lunch.next().done && console.log(lunch.next().value);
!lunch.next().done && console.log(lunch.next().value);

!lunch.next().done && console.log(lunch.next().value);
!lunch.next().done && console.log(lunch.next().value);
!lunch.next().done && console.log(lunch.next().value);


var arr = [1, [
    [2, 3], 4
  ],
  [5, 6]
];

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

function* inner() {
  yield 'hello!';
}

function* outer1() {
  yield 'open';
  for (const x of inner()) {
    yield x
  }
  //其实和 yield* inner()效果是一样的;
  yield 'close';
}

var gen = outer1()
console.log(gen.next().value);
console.log(gen.next().value); //返回一个遍历器对象
console.log(gen.next().value);

/**
 * 无返回值时 
 * @returns 
 */
function* inner() {
  yield 'hello!';
}

function* outer2() {
  yield 'open'
  yield* inner()
  yield ["a", "b", "c"] //如果加*的话就会遍历数据成员
  yield 'close'
}

var gen = outer2()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

/**
 * 有返回值时 
 * @returns 
 */
function* foo() {
  yield 2;
  yield 3;
  return "foo";
}

function* bar() {
  yield 1;
  var v = yield* foo();
  console.log("v: " + v); //会在最后一次next时触发此步骤
  yield 4;
}

var it = bar();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log(it.next());


/**
 *  数组形式
 * @returns 
 */

function* genFuncWithReturn() {
  yield 'a';
  yield 'b';
  return '返回的结果是当前的值';
}

function* logReturned(genObj) {
  let result = yield* genObj; //数组进行遍历
  console.log(result);
}
console.log([...genFuncWithReturn()]);
console.log([...logReturned(genFuncWithReturn())]); //两个输出的结果相同

/**
 * 遍历嵌套数组成员 
 * @returns 
 */
// 循环遍历时,如果深层嵌套的数据超出两层  则必须用yield* iterTree(tree[i]);来递归调用
// 如果数组的深度没有超出两层  则可以使用yield* [] 直接进行遍历
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = ['a', ['b', ['c', '55555555']],
  ['d', 'e']
];
for (let x of iterTree(tree)) {
  console.log(x);
}


// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

// 下面生成二叉树
function make(array) {
  // 判断是否为叶节点
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([
  [
    ['a'], 'b', ['c']
  ], 'd', [
    ['e'], 'f', ['g']
  ]
]);

// 遍历二叉树
var result = [];
for (let node of inorder(tree)) {
  result.push(node);
}
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log(result);
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");

var clock = function*() {
  while (true) {
    console.log('Tick!');
    yield;
    console.log('Tock!');
    yield;
  }
};

clock().next();
clock().next();
clock().next();
clock().next();
clock().next();
clock().next();
clock().next();
clock().next();


function* main() {
  var result = yield request("http://some.url");
  var resp = JSON.parse(result);
  console.log(resp.value);
}

function request(url) {
  makeAjaxCall(url, function(response) {
    it.next(response);
  });
}

var it = main();
it.next();
console.error("sd");

var fs = require('fs');
numbers()

function numbers() {
  let file = fs.readFile("C:/Users/Administrator/Desktop/45.txt", 'utf-8', function(error, data) {
    console.log(data);

  });
}

function* gen(x) {
  var y = yield x + 2;
  yield x;
}

var g = gen(1);
console.log(g.next());
console.log(g.next()); //为什么此处的值是undefined?? NOTE

var x = 1;

function f(m) {
  return m * 2;
}

console.log(f(x + 5));


async function getName(name) {
  const readname = await readName(name);
  const totalWord = await readAge(readname);
  return totalWord;
}

getName('张三').then(function(result) {
  console.log(result);
});


function readName(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("读出" + name + "的名字,然后");
    }, 5000);
  });
}

function readAge(word) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(",他的名字是25岁");
    }, 3000);
  });
}

var async = require('async');

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);


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