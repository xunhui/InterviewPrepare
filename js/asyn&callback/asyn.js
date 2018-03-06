//JS作用域


//JS异步执行
//1.异步回调
function f1(callback) {
    setTimeout(function () {
        callback();
    }, 100);//模拟耗时操作
    console.log('f1 finished')
}

function f2() {
    console.log('f2 finished')
}

f1(f2) //结果 f1 finished f2 finished

//2.事件监听 (没咋用过...)
f1.on('some', f2)

function f1() {
    setTimeout(function () {
        f1.trigger('some');//触发f2
    }, 100);//模拟耗时操作
    console.log('f1 finished')
}

//3.Promise



//4.js事件循环机制
for (var i = 0;i < 5;i++) {
    setTimeout(function () {
        console.log(i)
    },1000);
}
//result: 5个5

