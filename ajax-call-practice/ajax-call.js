const url = 'https://api.github.com/users/Ayan-Munshi'
    const x = new XMLHttpRequest()
    x.open('GET',url) // we are requesting the api to give a response
    x.send() // to complete send the request to the api we need to write x.send() -> (here we are calling the "open")
    
    //console.log(x.readyState)   // this will print 1 because readystate
                                 // means track the steps of ajax call because ajax calling has 4 steps 
                               // this will print only 1 because we didnt said track rest of the steps also after first step

    x.onreadystatechange = function(){    // here onreadystatechange is subcriber model which continuously tracks the steps

        console.log(x.readyState) // saying that print the steps (4th is the last step)
        if(x.readyState === 4){ 
            console.log(this.responseText) // we can write console.log(x.responseText) instead of this. This line will print all the api response

            console.log(JSON.parse(this.responseText).login) // here this.responseText has the total value/response of the api...
                                                             // and we want just the login section from it but... 
                                                             // without converting this.responseText into an object we cant takeout the login...
                                                             // thats why we  are converting the whole value/response->(this.responseText) into an object.
                                                             // JSON.parse() typecasts anything into an object.
                                                             // we cant write anything but responseText here coz this is a property of XMLHttpRequest which...
                                                             // holds the response from api as a string.
        }
    }     