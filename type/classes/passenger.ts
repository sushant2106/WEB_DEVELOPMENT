class Passenger{
    firstName:string;
    lastName:string;
    Frequ:number;
    constructor(name:string,las:string,num:number){
        this.firstName=name;
        this.lastName=las;
        this.Frequ=num;
    }
    display(){
        console.log(this.firstName+" "+this.lastName+" "+this.Frequ);
    }
}
var passenger=new Passenger("ram","gupta",1234);
passenger.display();
console.log(passenger.firstName+" "+passenger.lastName+" "+passenger.Frequ);

for(let item in passenger){
    // if(item!=="display"){
    //     console.log(item);
    // console.log(passenger[item]);
    // }
   if(passenger[item] instanceof Function){
       continue;
   }
   else{
    console.log(item);
    console.log(passenger[item]);
   }
}