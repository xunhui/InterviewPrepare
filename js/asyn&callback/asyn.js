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
const mypromise = new Promise(function (resolve, reject) {
    console.log('Do sth with a long time');
    let state = 'success'
    resolve(state)
})
mypromise.then(function(state) {
    console.log(state)
});
console.log("我路过打个酱油")
//Promise对象新建后就会立即执行
//result：Do sth with a long time；我路过打个酱油；success

//4.js事件循环机制 
for (var i = 0;i < 5;i++) {
    setTimeout(function () {
        console.log(i)
    },1000);
}
console.log(i);
//result: 立即输出5,一秒后输出5个5

