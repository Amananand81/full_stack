fetch('https://jsonplaceholder.typicode.com/users')
.then((respons)=>{
    return respons.json()
})
.then((data)=>{
    console.log(data)

})
.catch((error)=> console.log(error))