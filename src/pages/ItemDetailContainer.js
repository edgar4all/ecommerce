import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    let {id} = useParams();
    
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
          setProduct(res.data)
        );
      }, []); 

    return <>
        <div style={{ textAlign: "center", padding: "100px" }}>
            <h1>
                DETALLES DEL PRODUCTO {id}
            </h1>
        </div>

        <ItemDetail key={product.id} product={product} />
    </>
}

export default ItemDetailContainer;