const { log } = require("console")

const greeting = 'hello world'
for(const greet of greeting){
    //console.log(greet)
}

const numberws = [1,2,3,4,5]
for (let num of numberws ){
    //console.log(num)
}

//map 
console.log('*************** map *****************')

const map = new Map()


    map.set('IN',"india")
    map.set('USB',"united state of Bihar")
    map.set('PN',"pune")

for(const [key,value] of map)
{
    //console.log(key,":-",value)
}

//accesing object elemnt by using forof loop

console.log('*************** object for forof *****************')


const profile={
    'id':"123qwe",
    'name':"vishal",
    'city':"latur"
}
 for(const key in profile){
    console.log(key ," ",profile[key])
 }