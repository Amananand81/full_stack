const clock=document.querySelector('#clock')
setInterval(function(){
    let data= new Date()
    clock.innerHTML= data.toLocaleTimeString();
},1000)