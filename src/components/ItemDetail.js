import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import './itemDetail.css';
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { display } from "@mui/system";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const ItemDetail = ({ id, data }) => {

  const [count, setCount] = useState(0);

  const decrement= () => {
    count >0 && setCount(count-1);
  }

  const increment = () => {
    (count < data.stock) && setCount(count +1 );
  }

 
  const addToCart = () => {
    let found = get_by_id(data.id);
    console.log(found);
    if(found[0]) {      
      found[0].quantity +=1
      setItems(items);
    }
    else{
      data.quantity=1;
      setItems([...items, data]);          
    }    
    console.log(items);
  }
  
  const [items,setItems,get_by_id] = useContext(ItemsContext);

  return <div className="text-center">    

  <div className="gx-5 shadow p-3 mb-50 bg-white rounded row">
      <div className="col">
        <img src={data.img} className="containerImagenItem" loading="lazy" alt="" />
      </div>
      <div className="col ">
          <div className="text-center">
              <h1>{data.producto}</h1>
              <span>Codigo: {data.id}</span>
              <h3>Categoria: {data.categoria}</h3>
              <h3>Precio unitario: $ {data.precio}</h3>
              <div style={{display:"none"}}>
                <button onClick={decrement} type="button" className="btn-lg btn-light bi bi-dash-circle-fill btn btn-primary"> - </button>
                <label className="fs-3 mx-4 text-success"> {count} </label>
                <button onClick={increment} type="button" className="btn-lg btn-light btn-danger bi bi-plus-circle-fill btn btn-primary"> + </button>
                  
              </div>
              <br/>
              <button style={{display:"none"}} type="button" className="btn btn-outline-dark btn-sm m-1" disabled="">Stock: {data.stock} unidades.</button>                
              <div className="text-center">
                <button onClick={addToCart()} type="button" className="btn-success btn btn-primary">Agregar al Carrito</button>
              </div>
          </div>
      </div>
  </div>

  </div>
}

export default ItemDetail;