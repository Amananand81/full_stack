

const n=400.897555
console.log(n)

let num= new Number(400.98789788)
console.log(num.toFixed(3))

//conversaton

console.log(num.toString().length)
console.log(num.toString())
//*********** */
const hundress=1000000
console.log(hundress.toLocaleString('en-IN'))

//************** Maths ***************/
console.log("****************************");
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,7,1));

console.log("******* Random *********");

//always value come between 0-1

console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10)+1)
//
//// ****** to get random value in range 
const min=10
const max=20
console.log(Math.floor(Math.random()* (max-min+1))+min)

