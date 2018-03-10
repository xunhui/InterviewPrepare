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

var test4 = {
	a: 10,
	b: {
		a: 15,
		getA: function () {
			console.log(this.a)
		}
	}
}

var obj = test4.b.getA
obj() //undefined (obj执行的时候是由window对象调用，故this.a为window.a)
























