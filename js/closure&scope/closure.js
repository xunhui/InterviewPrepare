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

//循环中创建闭包
function loop() {
    for(var i =0;i < 5;i++) {
        (function (index) {
            console.log(i)
        }(i))
    }
}

//二、变量提升
x =5;
console.log(x);
var x; //result：5

console.log(x)
x = 5 //result：5 没有声明的变量默认为全局变量

console.log(x)
var x = 5;//result：undefined 变量提升：相当于 var x = undefined; log; x= 5;



//三、IIFE实例
for (var i = 0;i < 5;i++) {
    
}
console.log(i)  //result：5 i是全局变量

(function() {
    for (var i = 0;i < 5;i++) {

    }
})()
console.log(i) //result: undifined






var a = 10;
(function () {
    var a = 2;
    console.log(a)
})()





