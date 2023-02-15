import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    let {id} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products`).then((res) =>
          setProducts(res.data)
        );
        console.log(id);
        /*if (id) {
            setProducts( products.filter(prod => prod.category == id ));
        }*/
    }, [products]); 
    
    return <>
        <div style={{ textAlign: "center", padding: "100px" }}>
            <h1>
                Listado de productos
            </h1>
        </div>

        <div>
        {products.filter(prod => !id || id == prod.category.trim().replace(" ","").replace("'",""))
        .map((prod) => {
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