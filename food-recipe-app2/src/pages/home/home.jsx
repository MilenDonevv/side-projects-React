import { useContext } from "react"
import { GlobalContext } from "../../context/context";
import RecipeItem from "../../components/recipe-list/recipe-list";




export default function Home() {

    const {recipeList, loading} = useContext(GlobalContext);

    if (loading) return <div>Loading.. Please Wait!</div>

    console.log(recipeList);
    
    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 ">
            {
                recipeList && recipeList.length > 0 
                ? recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
                : ( 
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing to show! Please search for something else!</p>
                </div>
            )}
        </div>
    )
}