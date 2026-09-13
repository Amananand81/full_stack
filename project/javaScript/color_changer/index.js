const body=document.querySelector('body');
const buttons=document.querySelectorAll('.button');
buttons.forEach(function(button){
    button.addEventListener('click', (e)=>{
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id
        }
        else if (e.target.id === 'darkgreen'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id==='darkcyan'){
            body.style.backgroundColor = e.target.id
        }
    })

})


// this is another simple way to write code without using loop 

// const body=document.querySelector('body');
// const grey= document.querySelector('#grey')
// grey.addEventListener('click',(e)=>{
//     body.style.backgroundColor=e.target.id
// })