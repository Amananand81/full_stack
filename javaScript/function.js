// WHEN  WE DO NOT  KNOW HOW MANY PARAMETERS ARE OCCURE IN FUNCTION 

const { input } = require("framer-motion/client")

 
function calculateNumber(...num){
    return num
}
 console.log(calculateNumber(10,20,30,450,499,500))
    


 const user = {
    username:'aman',
    price:20
 }

 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`)

 }
  handleobject(user)


  console.log('************** arrow function ************')

  const square = (num)  => (num * num)
  console.log(square(20))

