import { createContext, useState } from "react";





export const GlobalContext = createContext(null);




export default function GlobalState({ children }) {  // the children are all the nested components

    const [searchParam, setSearchParam] = useState('');

    async function handleSubmit(event) {

        event.preventDefault()

        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`);
            const data = await response.json();

            console.log(data);

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit }}>{children}</GlobalContext.Provider>
        </>
    )
}

// Provider - it will provide the state then we will consume the state from this context
// in the root component we need to wrap this global state inside our App component