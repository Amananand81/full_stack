let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(myDate.toISOString())
console.log(myDate.toDateString())


console.log(typeof(myDate))

// specfic date......
let myCreatedDate=new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())


console.log("********** time stamp **************")
let myTimeStamp=Date.now()
console.log(myTimeStamp)

console.log("****** to get specify date *******")
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
