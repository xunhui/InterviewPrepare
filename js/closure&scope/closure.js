//一、闭包
function foo() {
    var n = 1;
    function add() {
        n++;
        console.log(n)
    }
    return add;
}
var closure = foo();
closure();
//result: 2;add访问到了foo函数内的局部变量

//循环中创建闭包 实现打印0,1,2,3,4
for (var i = 0; i < 5; i++) {
    setTimeout(
        (function (i) {
            return function () { console.log(i) }
        })(i)
        , 1000);
}
//result: 1s后打印0-4

//二、变量提升
x = 5;
console.log(x);
var x; //result：5

console.log(x)
x = 5 //result：5 没有声明的变量默认为全局变量

console.log(x)
var x = 5;//result：undefined 变量提升：相当于 var x = undefined; log; x= 5;

var a = 10;
(function () {
    var a = 2;
    console.log(a)
})() //result:2

var a = 10;
(function () {
    console.log(a)
    var a = 2;
})() //result:undefined;变量提升、相当于var a = undefined; log(a);a = 2;

//对比let变量

//三、作用域、IIFE实例
for (var i = 0; i < 5; i++) {

}
console.log(i)  //result：5 i是全局变量

(function () {
    for (var i = 0; i < 5; i++) {

    }
})()
console.log(i) //result: undifined i被函数作用域锁住了


//四、let&const
for (let i = 0; i < 5; i++) {

}
console.log(i) //undefined; let定义的变量只在改作用域内有效；let完全可以取代了IIFE实现的效果

//对比：
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // result:10;
//i用var声明，注册为全局变量i，数组中所有的成员里面的i都是同一个i，循环结束后值为10

var a = []
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i)
    }
}
a[6](); //result:6; 变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。


for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
//result:3次abc; 循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

const foo = {}

foo.name = "cc"
console.log(foo.name) //result: "cc";

foo = {} //报错，无法改变指针的指向




























