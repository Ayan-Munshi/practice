import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Axios_testig() {
    const [Data,setData] = useState([])
    useEffect(() => {
       Axios.get('https://jsonplaceholder.typicode.com/posts/').then((item) => {
        setData(item.data)
       })
    },[])
  return (
    <>
    {
    Data.map((items) => {
        return (
        <div key={items.id}>
            <h1>{items.id}</h1>
            <h2>{items.title}</h2>
            <h3>{items.body}</h3>
          </div>
          )
    }
    )}
    </>
  )
}

export default Axios_testig
