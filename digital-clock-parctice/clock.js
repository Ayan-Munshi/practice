const clock = document.getElementById('clock')
setInterval(()=>{

    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString() // toLocaleTimeString() takes only the time value from new Date()

},1000)