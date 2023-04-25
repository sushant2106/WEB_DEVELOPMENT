//  let myName=prompt('What is your name');
//  console.log(myName);

// let myname=prompt('What is your name.');
// let mes="Welcome to the Page,";
// let output=mes+myName;
// document.write(output);
// console.log(output);
// document.getElementById('message').innerHTML=output;
// let data=prompt('Enter data');
// function myfun(){
//   document.getElementById('click').innerHTML=typeof(data);;
// }
// obj={};
// obj.x=3;
// console.log(obj.x);
// let val=5;
// console.log(val*=5);
// let num=100;
// num=String(num);
// console.log(typeof(num));

// if(20>3)
// {
//     var message="Yes...loading";
// }
var message="nothing";
var num=prompt('Enter the number..');
var val=100;
if(num>val){
    message=`${num} is grater than ${val}`;
}
else{
    message=`${num} is less than ${val}`;
}

document.getElementById('ok').innerHTML=message;