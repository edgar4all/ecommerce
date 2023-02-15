import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemDetail from "../components/ItemDetail";


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products`).then((res) =>
          setProducts(res.data)
        );
        console.log(products);
    }, [products]); 

    
    return <>
        <div style={{ textAlign: "center", padding: "100px" }}>
            <h1>
                Listado de productos
            </h1>
        </div>

        <div>
        {products.map((prod) => {
            return (
                <>
                 <ItemDetail key={prod.id} data={prod} />
                </>
            );
        })}
        </div>

    </>
}

export default ItemListContainer;