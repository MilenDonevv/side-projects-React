import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import RecipeItem from "../../components/recipe-list/recipe-list";




export default function Favorites() {


    const { favoritesList, loading } = useContext(GlobalContext);

    if (loading) return <div>Loading.. Please Wait!</div>

    
    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 ">
            {
                favoritesList && favoritesList.length > 0 
                ? favoritesList.map((item, index) => <RecipeItem key={index} item={item} />)
                : ( 
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">No recipes added to favorites yet!</p>
                </div>
            )}
        </div>
    )
}