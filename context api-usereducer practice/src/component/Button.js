import React from 'react'
import { useContext } from 'react'
import './Button.css';
import { countcontext } from '../Context-reducer';
function Button() {
  const{count,dispatch} = useContext(countcontext)
  const incre = () =>{dispatch('increment')}
  const decre = () =>{dispatch('decrement')}

  return (
    <>
    <h1 className='countid'>{count}</h1>
    <button className='btn' onClick={incre}>
        increment
    </button>
    
    <button className='btn' onClick={decre}>
        decrement
    </button>

    </>
  )
}

export default Button


