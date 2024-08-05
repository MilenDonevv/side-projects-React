import useFetch from "./index.jsx"



export default function UseFetchHookTest() {

    const {error, data, pending} = useFetch('https://dummyjson.com/products', {});

    return (
        <div>
            <h1>Use Fetch Custom Hook</h1>
            {
                pending 
                ? <h3>Pending! Please wait!</h3>
                : null
            }
            {
                error ? <h3>{error}</h3> : null
            }
            {
                data && data.products && data.products.length 
                ? data.products.map(product => <p key={product.id}>{product.title}</p> )
                : null
            }
        </div>
    )
}