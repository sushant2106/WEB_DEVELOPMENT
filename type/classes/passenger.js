var Passenger = /** @class */ (function () {
    function Passenger(name, las, num) {
        this.firstName = name;
        this.lastName = las;
        this.Frequ = num;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.Frequ);
    };
    return Passenger;
}());
var passenger = new Passenger("ram", "gupta", 1234);
passenger.display();
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.Frequ);
for (var item in passenger) {
    // if(item!=="display"){
    //     console.log(item);
    // console.log(passenger[item]);
    // }
    if (passenger[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
