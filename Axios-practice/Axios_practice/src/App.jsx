import { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'
import Axios_testig from './Axios_testig'

function App() {
  
  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  
  // Correct usage of useState hook
  const [my_Data, setMy_Data] = useState([])

  useEffect(() => {
    Axios.get(url).then((response) => {            // in axios we dont need to convert the data from url to json 
      setMy_Data(response.data)            
    })})

  return (
    <>
      {my_Data ? (      // conditional
        <div>
          <h1>{my_Data.id}</h1>
          <h2>{my_Data.title}</h2>
          <h3>{my_Data.body}</h3>
          
        </div>
      ):(<h1>no infromation available</h1>)}

      {<Axios_testig/>}
    </>
  )
}

export default App

