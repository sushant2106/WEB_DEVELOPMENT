// let val='test';
// function test1(){
//     let val='test1';
//     console.log(val);
// }
// console.log(val);
// test1();
// console.log(val);


// var num=0;
// function test2(){
//     add();
//     console.log("test "+num);
// }
// function add(){
//     num++;
// }
// add();
// test2();

let total=0;
function sum(val1=1,val2=1){
    console.log(val2);
    console.log(val1);

}
sum(0,0);

(function(){
    console.log('hello');
})();

let myfun=(a,b)=>a*b;
document.getElementById('ok').innerHTML=myfun(4,5);

const num=function(x){
    return x*5;
}
var number=prompt('Enter the no');
console.log(num(number));

const ek=(a)=>a*10;
console.log(ek(10));
var s=10;
console.log(`${s}`);