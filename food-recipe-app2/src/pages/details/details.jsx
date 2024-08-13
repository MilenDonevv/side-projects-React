import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context/context";




export default function Details() {

    const { id } = useParams();  // same as           const params = useParams();         ==> destructuring it
    const { recipeDetailsData, setRecipeDetailsData, handleAddToFavorite, favoritesList } = useContext(GlobalContext);



    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
            const data = await response.json();

            console.log(data);

            if (data) {
                setRecipeDetailsData(data);
            }
        }

        getRecipeDetails();
    }, [])

    return (
        <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="row-start-2 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img
                        src={recipeDetailsData?.recipe.image_url}
                        className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-sm text-cyan-700 font-medium">{recipeDetailsData?.recipe.publisher}</span>
                <h3 className="font-bold text-2xl truncate text-black">{recipeDetailsData?.recipe.title}</h3>
                <div>
                    <span className="text-2xl font-semibold text-black">Ingredients:</span>
                    <ul className="flex flex-col gap-3">
                        {
                            recipeDetailsData?.recipe.ingredients.map((i, index) =>
                                <li
                                    key={index}>
                                    <span className="text-2xl font-semibold text-black">{i}</span>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <div>
                    <button
                        className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
                        onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
                    >
                        {
                            favoritesList && favoritesList.length > 0 && favoritesList.findIndex(item => item.recipe_id === recipeDetailsData?.recipe.recipe_id) !== '-1' ? 'Remove from favorites' : 'Add to favorites'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}