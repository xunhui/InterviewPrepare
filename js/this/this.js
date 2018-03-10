//一、函数中this的指向
//情况1：函数中使用了this，但是没有被上一级对象所调用，则this指向window对象 strict模式下this为undefined
function test1() {
	var name = 'cc';
	console.log(this.name)
}
test1();//undefined (相当于window.test1(),方法由window对象执行调用)

//情况2：函数中使用了this且被上一级对象调用，则this指向该对象
var test2 = {
	name: 'dd',
	getName: function () {
		console.log(this.name)
	}
}
test2.getName();//dd (方法由test2对象执行调用)

//情况3：如果一个函数中有this，这个函数中包含多个对象，
//尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象
var test3 = {
	a: 10,
	b: {
		a: 15,
		getA: function () {
			console.log(this.a)
		}
	}
}
test3.b.getA() //15 (方法由b对象调用)

var obj = test3.b.getA
obj() //undefined (obj执行的时候是由window对象调用，故this.a为window.a)

//二、构造函数
function Hello(msg) {
	this.msg = 'hello'+ msg
}
let obj = new Hello('cc');
console.log(obj.msg) //result:hello cc 
//使用new去调用一个构造函数时，内部的this指向的是实例化出来的对象
Hello('dd');
console.log(window.msg)//result: hello dd; Hello函数由window对象调用


//三、call&apply&bind
let showThis = function () {
	console.log(this);
}

showThis() // window
showThis.call(undefined) // window 非strict模式下第一个参数为undefined和null，this指向全局对象
showThis.call(null) // window
showThis.call({name: 'aaa'}) // {name: 'aaa'}

//解决上述情况3的方法：
var test4 = {
	a: 10,
	b: function () {
		console.log(this.a)
	}
}
test4.b() //10 (方法由test4对象调用)
setTimeout(test4.b,1000) //undefined  setTimeout由window对象调用执行

var another = function () {
	test4.b.call(test4)
}
setTimeout(another, 1000) //10 


//四、ES6箭头函数
let obj = {
	name: 'aaa',
	showName1: () => {
		console.log(this.name)
	},
	showName2: function () {
		console.log(this.name)
	}
}
obj.showName1() // undefined
obj.showName2() // aaa


function asd () {
	return () => {
		console.log(this, this.id)
	}
}
asd()() // window, undefined
asd.call({id: 123})() // {id: 123} 123









