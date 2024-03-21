import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Axios_testig() {
    const [Data,setData] = useState([])

    useEffect(() => {
       Axios.get('https://jsonplaceholder.typicode.com/posts').then((i) => {
        setData(i.data)        // data is a predefine keyword
       })
    },[])
  return (
    <>
    {
        Data.map((i) => {
             return (<div key={i.id}>
                <h1>{i.id}</h1>
                <h2>{i.title}</h2>
                <h3>{i.body}</h3>
             </div>)
        })
    }
    
    </>
  )
}

export default Axios_testig
