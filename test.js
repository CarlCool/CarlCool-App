// function test(resolve, reject) {
//     var timeOut = Math.random() * 2;
//     log('set timeout to: ' + timeOut + ' seconds.');
//     setTimeout(function () {
//         if (timeOut < 1) {
//             log('call resolve()...');
//             resolve('200 OK');
//         }
//         else {
//             log('call reject()...');
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);
// }

// function test(v){
//     return function(x){
//         return v+x;
//     }
// }

// // test(2).then(function(data){
// //     console.log(data);
// // });
// var t = test(2);
// console.log(test(2)());


// yibu(100000, function(originData) {
//     console.log("f1执行的结果...." + originData);
// });
// (function a(){
//     console.log("这里开始执行f2");
// }());

// function yibu(num, callback) {
//     for(var i = 0; i < num; i++) {
//         console.log(i);
//     }
//     callback("OK");
// }

// var abc = function(y){
//     var x = y;
//     return function(){
//         console.log(x++);
//         console.log(y--);
//     }
// };
// var c = abc(5);
// c();
// c();
// c();
// abc();
// abc(5);

// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push(function () {
//             return i * i;
//         });
//     }
//     return arr;
// }

// var results = count();
// var f1 = results[0]();
// var f2 = results[1]();
// // var f3 = results[2]();
// console.log(f1);
// console.log(f2);
// // console.log(f3);

// function createFunction(){
// var result=new Array();
// for(var i=0;i<10;i++){
// result[i]=function(){
// return i;
// };
// }
// return result;
// } 

// var c = createFunction();
// var c1 = c[1]();
// console.log(c1);


// function foo(){
//     console.log("this is " + a);
// }
// function bar(){
//     var a = 5;
//     foo();
// }

// var a = 10;

// bar();


// function foo(){
//     console.log("this is foo");
// }

// var bar = foo();

// function foo(){
//     console.log("this is foo");
//     var b = 'b';
// }

// var a = new foo();
// console.log(a);

// function Foo(who){
//     console.log("this is"+ who);
// }
// Foo.prototype.a = function (){
//     console.log("this is foo of a");
// }
// function Bar(who){
//     Foo.call(this,who);
// }
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.b = function (){
//     console.log("this is bar of b");
// }
// console.log(Foo.prototype.constructor.name);
// console.log(Bar.prototype.constructor.name);
// var b1 = new Bar("b1");
// var b2 = new Bar("b2");
// b1.a();
// b1.b();

// "use strict"
// class C {
//     constructor(id) {
//         this.id = id;
//     }
//     id() {
//         console.log( "Id: " + id );
//     }
// }
// var c1 = new C("c1");
// console.log(c1.id);

// (function (){
//     function a(){
//         console.log("this is a");
//     }
//     a();
//     console.log("this is function");
// })();

// var a = 0.1
// var b = 0.3
// var c = 0.4
// var d = a + b;
// console.log(d);
// if(d === c){
//     console.log("equal");
// } else{
//     console.log("not equal");
// }

"use strict"
function doSomething() {
// 注： APP.ready 由程序自己定义
if (!APP.ready) {
// 稍后再试
return void setTimeout( doSomething,100 );
}
var result;
// 其他
return result;
}
// 现在可以了吗？
if (doSomething()) {
// 立即执行下一个任务
}