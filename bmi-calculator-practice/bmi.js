const button = document.querySelector("#button");

button.addEventListener("click", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector(".height").value); // have to parse the value in int because by default we get string value we cant calculate with string
  const weight = parseInt(document.querySelector(".weight").value); // .value gives us the value of the input field selected by the queryselector()
  const result = document.querySelector("#results");
  const conclusion = document.querySelector('#conclusion')

  //     let a = parseInt(height.value)
  //     let b = parseInt(weight.value)
  //     result.innerHTML = a + b

  if(height <= 0 || isNaN(height) || height == ""){
    result.innerHTML = 'please enter valid height'
    result.style.color = 'red'
  } 
  else if(weight <= 0 || isNaN(weight) || weight == ""){
    result.innerHTML = 'please enter valid weight'
    result.style.color = 'red'
  }
  else{
     
    const final_calculation = (weight/((height*height)/10000)).toFixed(3)

    result.innerHTML= (`Your BMI is : ${final_calculation}`) // 3 numbers after decimal

    if(final_calculation <  18.6 ){
      
      conclusion.innerHTML = 'under eight'
      conclusion.style.color = 'red'
     }
    else if(final_calculation > 24.9){
      conclusion.innerHTML = 'over weight'
      conclusion.style.color = 'red'
     }
    else{
      conclusion.innerHTML = 'normal weight'
      conclusion.style.color = 'green'
    }
      

  }
});
