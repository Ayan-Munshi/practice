// example of how to create a promise, reslove and connect with .then 
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async task')
        resolve()  // creating connection with .then to initiate the resolve
    },2000)
})
promise1.then(()=>{    // the first .then is directedly connected with resolve() if present
    console.log('the promised task is resolved')
})

// example of reject 
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async task')
        let error = true // creating to demonstrate the reject()
       if(!error){  // if error is false
        resolve()  // creating connection with .then to initiate the resolve
       }else{
        reject()}
    },2000)
})
promise2.then(()=>{    // the first .then is directedly connected with resolve() if present
    console.log('the promised task is resolved')
}).catch(()=>{  // .catch accessses the reject() portion 
    console.log('rejected')
})

// we can pass parameters through resolve()

new Promise((resolve,reject)=>{  // always dont have to contain/put the promise into variable
       console.log('async task')
       resolve({rank:'S' , level:'omega'}) //sending data throug resolve
}).then((value)=>{ // accepting the object as named value
    console.log(value)

})

// example of fetch()

fetch('https://api.github.com/users/Ayan-Munshi').then((result)=>{
   return (result.json()) // here JSON.parse() will not work thats hwy using .json()
    }).then((r)=>{
        console.log('final data with .then is',r)
        console.log(r.login)
    })

// lets do the same thing with async await

async function apicall(){        // async is like saying, "Hey, I might have to wait for something
   try{                  // we should always use try,catch
    const value = await fetch('https://api.github.com/users/Ayan-Munshi') //await is like saying, "Okay, let's pause here until we get the information we need, and then we can continue with the next steps."
    const data = await value.json()
    console.log( 'final data with async await is ',data)
  }
  catch(error){  // catching if any error occurs
    console.log(error)
  }
}

apicall()
