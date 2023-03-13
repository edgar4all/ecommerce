import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where, documentId } from "firebase/firestore";

const ItemDetailContainer = () => {
    let {id} = useParams();
    
    const [product, setProduct] = useState({});    

    useEffect(() => {/*
        axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
          setProduct(res.data)
        );*/
        const getProduct= async () => {
            const q= query(
                collection(db,"petshop"),where(documentId(),"==",id)                
            );
            const querySnapshot = await getDocs(q);
            const docs= [];
            querySnapshot.forEach((doc)=> {
                docs.push({ ...doc.data(), id: doc.id});
            });
            //console.log( docs);                
            setProduct(docs[0]);            
        }
        getProduct();

      }, [id]); 

    return <>
        <div style={{ textAlign: "center", padding: "100px" }}>
            <h1>
                DETALLES DEL PRODUCTO
            </h1>
        </div>
        
        <ItemDetail key={product.id} data={product} />
    </>
}

export default ItemDetailContainer;