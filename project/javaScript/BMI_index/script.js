const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#result')

    if(height === ' ' || height < 0 || isNaN(height)){
        results.innerHTML= `please give a vaild height ${height}`
    }
    else if(weight === ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML= `please give a valid weight ${weight}`
    }
    else {
        const bmi = weight / ((height * height) / 10000);

        if (bmi < 18.6) {
            results.innerHTML = `<pre>${bmi.toFixed(2)}
Under weight</pre>`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<pre>${bmi.toFixed(2)}
Normal weight</pre>`;
        }
        else {
            results.innerHTML = `<pre>${bmi.toFixed(2)}
Over weight</pre>`;
        }
    }
});