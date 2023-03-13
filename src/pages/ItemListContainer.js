import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import "./ItemListContainer.css";


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
    
    return <div>
        <div className="title">
            <h1>
                Listado de productos
            </h1>
        </div>
        <div style={{ padding:'50px'}}>
            <div className="itemList">
            {products.map((prod) => {
                return (
                    <div key={prod.id}>
                        <ItemCard key={prod.id} data={prod} />
                    </div>                
                );
            })}
            </div>
        </div>
    </div>
}

export default ItemListContainer;