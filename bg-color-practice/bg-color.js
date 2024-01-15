let body = document.querySelector("body");
let classname = document.querySelectorAll(".press");
console.log(classname);

classname.forEach((i) => {
  console.log(i);
  i.addEventListener("click", function (i) {   // have to pass the (i) in the function to access the target.id
    
    body.style.backgroundColor = i.target.id; // id names are same as colors
   });
});

// suppose i do class = color names in html and 
// in js i do backgroundcolor = i.target.class instead i.target.id
// it is not going to work
