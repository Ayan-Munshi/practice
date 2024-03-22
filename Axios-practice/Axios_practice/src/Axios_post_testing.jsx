import  Axios  from 'axios'
import React, { useState } from 'react'

function Axios_post_testing() {
    const [my_title,setmytitle] = useState('')
    const [my_body,setmybody] = useState('')


    const postmethod = (e) => {    // in this function we are posting data into the api
        e.preventDefault()
        Axios.post('https://jsonplaceholder.typicode.com/posts',{ 
                
            title : my_title,   // api's title property is my_title
            body : my_body      // api's body property is my_body

        }).then((e) => console.log(e))   // in .then will be shown (status 201) this means successfully posting
        .catch((err) => console.error(err))
        setmytitle('')
        setmybody('')
    }
    
    // this api url is fake so we visivally can't see the addition of the data in the api
    // by this is the exact process to post data in api by Axios
    // when we will use actual api from db then we will be able to see the addition od data visibally


  return (
    <>
    <form >
        <lebel>Enter Title </lebel>
        <input type="text" value={my_title} onChange={(e) => setmytitle(e.target.value)} />
        <br/>
        <br/>
        <lebel>Enter Body </lebel>
        <input type="text" value={my_body} onChange={(e) => setmybody(e.target.value)} />
        <br/>
        <br/>
        <button type='submit' style={{border:'1px solid green'}} onClick={postmethod} >Post</button>
    </form>
    </>
  )
}

export default Axios_post_testing
