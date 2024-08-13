import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";





export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {  // the children are all the nested components

    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);


    console.log(recipeList);

    const navigate = useNavigate();

    async function handleSubmit(event) {

        event.preventDefault()

        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`);
            const data = await response.json();

            if (data && data.recipes) {
                setRecipeList(data.recipes);
                setLoading(false);
                setSearchParam('')   // reset search 
                navigate('/')
            }


        } catch (error) {
            console.log(error.message)
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleAddToFavorite(getCurrentItem){
        let copyFavoriteList = [...favoritesList];
        const index = copyFavoriteList.findIndex(item => item.recipe_id === getCurrentItem.recipe_id)

        if (index === -1) {

            copyFavoriteList.push(getCurrentItem)
        } else {
            copyFavoriteList.splice(index)
        }

        setFavoritesList(copyFavoriteList);
    }

    console.log(favoritesList, 'favoritesList');
    
    return (
        <GlobalContext.Provider
            value={{ searchParam, loading, recipeList, setSearchParam, handleSubmit, recipeDetailsData, setRecipeDetailsData, handleAddToFavorite, favoritesList }}>
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