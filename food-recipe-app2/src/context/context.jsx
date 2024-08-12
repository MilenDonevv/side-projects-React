import { createContext, useState } from "react";





export const GlobalContext = createContext(null);




export default function GlobalState({children}) {  // the children are all the nested components

    const [searchParam, setSearchParam] = useState('');



    return (
        <>
        <GlobalContext.Provider value={{ searchParam, setSearchParam }}>{children}</GlobalContext.Provider>
        </>
    )
}

// Provider - it will provide the state then we will consume the state from this context
// in the root component we need to wrap this global state inside our App component