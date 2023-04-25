var Flight = /** @class */ (function () {
    function Flight(a, b, c, d) {
        this.flightno = a;
        this.from = b;
        this.to = c;
        this.flighttime = d;
    }
    Flight.prototype.display = function () {
        console.log("flightno:" + this.flightno);
        console.log("from:" + this.from);
        console.log("to:" + this.to);
        console.log("flighTime:" + this.flighttime);
    };
    return Flight;
}());
var obj = new Flight(123, "patna", "banglore", "9:30am");
obj.display();
