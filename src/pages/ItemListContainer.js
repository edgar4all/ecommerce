import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemDetail from "../components/ItemDetail";


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products`).then((res) =>
          setProducts(res.data)
        );
        console.log(products);
    }, []); 

    
    return <>
        <div style={{ textAlign: "center", padding: "100px" }}>
            <h1>
                {greeting}
            </h1>
        </div>

        <div>
        {products.map((product) => {
            return (
                <ItemDetail key={product.id} product={product} />
            );
        })}
        </div>

    </>
}

export default ItemListContainer;