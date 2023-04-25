for(let x=0;x<5;x++){
    console.log(x);
}
 const num=[1,2,3,4];
 num.forEach((ele)=>console.log(ele));

for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

let y=0;
while(y<5){
    console.log("hii "+y);
    y++;
}
// do{

// }while()
num.forEach(function(ele,index,arr){
    console.log(ele);
    console.log(num[index]);
    console.log(arr[index]);
})
num.forEach((ele)=>console.log(ele));
for (ele in num){
    console.log(num[ele]);
}
const x=[1,2,3,4,5,6,7,8,9,10];
y= x.splice();
document.writeln(x); 
var str="raam";
str="f";
console.log(str);

var str="1,2,3,4,5";
const app=str.split(",").map(Number);
const arr2=[];
for(var i in app){
   arr2.push(app[i]);
}
console.log(arr2);


