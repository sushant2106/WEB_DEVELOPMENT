const cars=["tata","honda","bmw"];
document.getElementById('ok').innerHTML=cars;

// const name=new Array("ram","shyam");
const person=[];
person[0]="ram";
person[1]="aam";
person[10]="shyam";
console.log(person);
console.log(person.length);
const person1=["test","mike",{},["one","two"]];
console.log(person1);
//to remove last element
const people3=[23,24,5,1,56];
const last=people3.pop();
console.log(last);
console.log(people3);
people3.push(44);
console.log(people3);
const num=prompt('Enter the number');
people3.push(Number(num));
console.log(people3);
const first=people3.shift();
console.log(first);
people3.unshift(111);
console.log(people3);
