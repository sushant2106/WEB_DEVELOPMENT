// function greee(grreting:string,...names:string[]){
//     console.log(grreting+" "+names.join(","));
// }
// greee("Hello","Rahul","Mohan");
var year:number=1997;

var chek=(year:number):boolean=>{

   if(year%4==0 && year%100!=0){
    return true;
   }
   else if(year%400==0){
    return true;
   }
    else{
        return false;
    }
};
console.log(chek(year));

