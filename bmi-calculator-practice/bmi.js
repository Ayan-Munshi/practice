const button = document.querySelector("#button");

button.addEventListener("click", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector(".height").value); // have to parse the value in int because by default we get string value we cant calculate with string
  const weight = parseInt(document.querySelector(".weight").value); // .value gives us the value of the input field selected by the queryselector()
  const result = document.querySelector("#results");

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
    result.innerHTML= (`Your BMI is : ${(weight/((height*height)/10000)).toFixed(3)}`) // 3 numbers after decimal
  }
});
