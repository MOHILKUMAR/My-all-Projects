const form = document.querySelector('form');

//this useCase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === ''|| height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height} `;
    } 
    // results.innerHTML = `${height}`

     else if(weight === ''|| height < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
      const BMI = (weight /((height*height)/10000)).toFixed(2)
    
    //   show the results
    results.innerHTML = `<span>${BMI}</span>`

    }
     
   
    
})
