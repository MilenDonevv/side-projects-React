import { useEffect, useState } from "react";
import './styles.css';

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                // Ensure unique keys using product's actual id combined with count
                const newProducts = result.products.map((product) => ({
                    ...product,
                    uniqueId: `${count}-${product.id}`
                }));
                setProducts((prevData) => [...prevData, ...newProducts]);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) {
            setDisableButton(true);
        }
    },[products])

    if (loading) {
        return (
            <div>
                Loading data! Please wait!
            </div>
        );
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length ?
                    products.map(item => (
                        <div className="product" key={item.uniqueId}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null}
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
                {
                    disableButton ? <p>You have reached 100 products!</p> : null
                }
            </div>
        </div>
    );
}
