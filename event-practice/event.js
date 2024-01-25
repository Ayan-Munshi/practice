//***  code this like if user touch any iamges or the elixir link it will vanish without effecting others ***

const ul = document.querySelector('ul')
console.log(ul)
ul.addEventListener('click', function(e){
    
   if(e.target.tagName === 'IMG'){  // adding if else statement for the <a> tag because for the <a> tag its parent node is <ul> we cant delete the whole <ul> by clicking on the <a> tag 
    let target = e.target.parentNode
   console.log(e.target.parentNode) // targeting parent node because if we dont then <img> will be deleted and an empty <li> will be there
   target.remove()
   }             // also taking tagName here to delete the parentnode if the tag name is <img> else just delete the targeted element
   else{
    e.target.remove()
   }
    
   
   
},false)