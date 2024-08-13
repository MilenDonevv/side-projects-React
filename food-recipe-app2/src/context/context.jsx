import { createContext, useState } from "react";





export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {  // the children are all the nested components

    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);


    console.log(recipeList);
    
    async function handleSubmit(event) {

        event.preventDefault()

        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`);
            const data = await response.json();

            if (data && data.recipes) {
                setRecipeList(data.recipes);
                setLoading(false);
                setSearchParam('')   // reset search 
            }


        } catch (error) {
            console.log(error.message)
            setLoading(false);
            setSearchParam('');
        }
    }


    return (
        <GlobalContext.Provider
            value={{ searchParam, loading, recipeList, setSearchParam, handleSubmit, recipeDetailsData, setRecipeDetailsData }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Provider - it will provide the state then we will consume the state from this context
// in the root component we need to wrap this global state inside our App component




/*

The event.preventDefault() method 



is used to prevent the default action that normally occurs when an event is triggered. 
In the context of a form submission, this method is particularly important.

Default Behavior of Form Submission:
When a form is submitted in a web browser, the default behavior is:

The browser sends a request (usually a GET or POST request) to the server.
The page reloads or navigates to a new page, depending on the form's action attribute and the request type.
Purpose of event.preventDefault():
By calling event.preventDefault() inside the handleSubmit function, you are telling the browser not to perform this default action. 
This allows you to handle the form submission with JavaScript, so you can:

Process the form data asynchronously without causing a page reload.
Handle the form submission entirely on the client side (e.g., using fetch to send a request to an API).
Implement custom validation or user feedback before actually sending any data


*/