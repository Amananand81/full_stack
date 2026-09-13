const arr=[1,2,3,4,5,6,7,8,9]
 
// for each loop does not return any value
let arrname = arr.forEach(function(num){
    //console.log(num)
    return num
})
//console.log(arrname)

const arr1 = [1,2,3,4,5,6,7,8,9]

arr1.forEach((num) =>   {
   // console.log(num)
    
});  


//filter
console.log('************ filter *************')

const arr2 = [1,2,3,4,5,6,7,8,9]
 
let a=arr2.filter((num)=>(num % 2 == 0) )
console.log(a)

// map
console.log("********map *********")
const arr3=[1,2,3,4,5,6,7,8,9]
//const b=arr3.map((num)=>num+10)
//console.log(b)

const b=arr3.map((num)=>{return num+10})
console.log(b)

// we can use mutiple function in one statement called chaining

//chainig

const arr4 = [1,2,3,4,5,6,7,8,9]
const d=arr4
    .map((numm)=>numm+1)
    .map((num)=>num*10)
    .filter((num)=>num%3==0)
console.log(d)

// reduce

console.log("***************** reduce ******************")
