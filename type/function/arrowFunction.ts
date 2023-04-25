var hello=():string=>{
    return "hello";
}
console.log(hello());

var hello1=(name:string):string=>{
    return "hello" +name;
}
console.log(hello1("bharath"));

var prod=(num1:number,num2:number):number=>num1*num2;
console.log(prod(3,4));

var myarray:Array<any>=[];
for(var i=0;i<10;i++){
 myarray.push(():number=>{return i});
}
for(var i=0;i<10;i++)
{
    console.log(myarray[i]());
 }
