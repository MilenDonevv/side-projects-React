import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context/context";




export default function Details() {

    const {id} = useParams();  // same as           const params = useParams();         ==> destructuring it
    // const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);


    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
            const data = await response.json();

            console.log(data);
        }

        getRecipeDetails();
    },[])

    return (
        <div className="container mx-auto">
            Details
        </div>
    )
}