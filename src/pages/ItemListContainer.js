import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


const ItemListContainer = () => {
    let {id} = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
/*     
        axios(`https://fakestoreapi.com/products`).then((res) =>
          setProducts(res.data)
        );
*/
        const getProducts= async () => {
            const q= query(
                collection(db,"petshop")
                //,where("categoria","==","perros")                
            );
            const querySnapshot = await getDocs(q);
            const docs= [];
            querySnapshot.forEach((doc)=> {
                docs.push({ ...doc.data(), id: doc.id});
            });
            console.log( docs);                
            setProducts(docs);            
        }
        getProducts();
    }, []); 
    
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