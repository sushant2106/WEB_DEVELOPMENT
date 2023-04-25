interface IFLIGHT{
    flightno:number;
    from:string;
    to:string;
}
class Flight implements IFLIGHT{
    flightno:number;
    from:string;
    to:string;
    flighttime:string;
    constructor(a:number,b:string,c:string,d:string){
        this.flightno=a;
        this.from=b;
        this.to=c;
        this.flighttime=d;
    }
    display():void{
        console.log("flightno:"+this.flightno);
        console.log("from:"+this.from);
        console.log("to:"+this.to);
        console.log("flighTime:"+this.flighttime);
    }
}

var obj=new Flight(123,"patna","banglore","9:30am");
obj.display();