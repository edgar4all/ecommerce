import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where, documentId } from "firebase/firestore";
import "./ItemListContainer.css";

const CategoryPage = () => {
    let {id} = useParams();
    
    const [products, setProducts] = useState([]);    

    useEffect(() => {
        const getProduct= async () => {
            const q= query(
                collection(db,"petshop"),where("categoria","==",id)                
            );
            const querySnapshot = await getDocs(q);
            const docs= [];
            querySnapshot.forEach((doc)=> {
                docs.push({ ...doc.data(), id: doc.id});
            });
            console.log( docs);                
            setProducts(docs);            
        }
        getProduct();

      }, [id]); 

    return <>
        <div className="title" >
            <h1>
                CATEGORIA {id.toUpperCase()}
            </h1>
        </div>
        <div className="itemList">

        {products.map((product)=>{
            return (
                <div key={product.id}>
                    <ItemCard key={product.id} data={product} />
                </div>                
            );
        })}
        </div>
    </>
}

export default CategoryPage;