//const { log } = require("node:console")
//
//let obj={
//    'name' : "aman",
//    age : 24,
//    email : "aman@123",
//    greet: function(){
//        console.log(`hello my name is ${this.name}`)
//    }
//
//}
//
//console.log(obj.name)
//obj.city = "pune"
//delete obj.age
//console.log(obj)
//obj.greet()
//obj.greeting = function(){
//    return "hello "
//}
//obj.greet
//obj.greeting();
//
//
////object reference
//console.log(obj.greeting()) 
//
//const obj1={
//    name:'Aman',
//    age:30
//}
//const obj2=obj1
//
//obj1.name='vishal'
//obj2.city='pune'
//obj2.name='alice'
//console.log(obj1)
//console.log(obj2)
//
console.log('"****************"')


const obj1={1:"abc123" , 2:"pqr123"}
const obj2={3:"abc123" , 4:"pqr123"}
const obj3={5:"abc123" , 6:"pqr123"}
 
const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4)

const obj5= {...obj1,...obj2,...obj3}
console.log(obj5)

console.log(Object.values(obj5))



console.log("************** destructure ************")
 

const user={
    name:'vishal',
    course:'mca',
    college:'iicmr'
}

const {college}=user
console.log(college)

const {college: c} = user
console.log(c)