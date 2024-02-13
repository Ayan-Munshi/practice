import { createContext,useReducer } from "react";

const countcontext = createContext()
const initialstate = 0
const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1 
        default :
         return state      
    }
}

const Countprovider = ({children}) => {

    const [count,dispatch ] = useReducer(reducer,initialstate)
    

    return (<countcontext.Provider value={{count,dispatch}}>
        {children}
    </countcontext.Provider>)

}

export {Countprovider,countcontext}

