// class constructor
class data{
    constructor(parameter){  // constructor fires itself  the moment we call the class to execute

       this.param = parameter // storing parameter in param((this.) means this context)
    console.log(`value is ${this.param}`)

    }
}

const d = new data('new data')
d // calling the class to execute this is not a func or method so no ()






// class
class newclass{ // this is a class

  constructor(userinput){ // this is a constructor receiving userinput as an argument
        this.input = userinput  // constructor storing the parameter(userinput) of this context in the input variable 
         
    }

    method(){  // this is method not function
       console.log (`user input in the constructor is ${this.input}`)
    }

 }

const lass = new newclass("ayan")  // new creates an empty object and calls the constructor with the newly created obj bound to (this)
lass.method() // calling the method which is in the  class




// class inheritance

class a{  // parent class
    constructor(name,title){   
       this.name = name
       this.title = title
    }
}

class b extends a{ // child/derived class of a class
    method2(){
        
        console.log(`this data is from class a ${this.name} ${this.title}`) // sharing the data of class a in class b
    }
}


const r = new b('samrat','munshi')// we will pass parameters in child class not in parent class
                                 // creating an instance of child class b with new keyword 
r.method2() // calling the method of class b 




// static keyword 

 class A{
    constructor(name,score){
     this.name = name
     this.score = score
    }
    
    static M(){     // static keyword will prevent M method from accessing by anyother class,child anywhere 
        console.log(`value from  class constructor ${this.name}`) 
    }

 }

 class B extends A{
    method3(){   // method
        console.log(`value from parent class ${this.score}`)
    }
 }

 const Data = new B('rock','467') // creating instance of class B
 Data.M()  // accessing the method from class A
 Data.method3() // accessing the method from class B
  

// Note: in any class we cant do anything without a constructor or a method


