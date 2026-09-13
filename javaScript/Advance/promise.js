const { promises } = require("dns");

// promise store in variable
const promiseOne= new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("Async task is complete")
        resolve() // used to connect with resolve 
     },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")
})

// promise without store in variable ......

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 task is complete")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


// how pass data from resolved 

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user_name:'Aman',email:'aman@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

//  promise chaning


console.log("************* promise channing************")


const promiseFour=new  Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:'Aman',password:'123'})
        }
        else{
            reject('Error: something went wrong')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){   
    console.log(error)
}).finally(()=>{
    console.log("promise is either resolve or rejected")

})

// we can also handle promises by using async , await
// rather then then, catch, finally
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({username:'Alice',password:'Alice123'})
        }
        else{
            reject('error: js went wrong')
        }
    },1000)   
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);  
    }
    catch(error){
        console.log(error);
        
    }
}

consumePromiseFive()


// data fetch using api

// async function getAllUsers() {
//       try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')

//         const data=  await response.json()
//         console.log(data);
//       }
//       catch(error){
//         console.log("E: ", error)
//       }
    
// }
// getAllUsers()

// same work  using then, catch, finally.......

fetch('https://jsonplaceholder.typicode.com/users')
.then((respons)=>{
    return respons.json()
})
.then((data)=>{
    console.log(data)

})
.catch((error)=> console.log(error))


