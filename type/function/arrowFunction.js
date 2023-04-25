var hello = function () {
    return "hello";
};
console.log(hello());
var hello1 = function (name) {
    return "hello" + name;
};
console.log(hello1("bharath"));
var prod = function (num1, num2) { return num1 * num2; };
console.log(prod(3, 4));
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
