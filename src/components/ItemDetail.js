import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import './itemDetail.css';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const ItemDetail = ({ id, data }) => {

  

  return <div class="text-center">    

  <div class="gx-5 shadow p-3 mb-50 bg-white rounded row">
      <div class="col">
        <img src={data.img} class="containerImagenItem" loading="lazy" alt="" />
      </div>
      <div class="col ">
          <div class="text-center">
              <h1>{data.producto}</h1>
              <span>Codigo: {data.id}</span>
              <h3>Categoria: {data.categoria}</h3>
              <h3>Precio unitario: $ {data.precio}</h3>
              <div>
                <button disabled="" type="button" class="btn-lg btn-light bi bi-dash-circle-fill btn btn-primary">-</button>
                <label class="fs-3 mx-4 text-success"> 0 </label>
                <button disabled="" type="button" class="btn-lg btn-light btn-danger bi bi-plus-circle-fill btn btn-primary">+</button>
                  
              </div>
              <br/>
              <button type="button" class="btn btn-outline-dark btn-sm m-1" disabled="">Stock: {data.stock} unidades.</button>                
              <div class="text-center"><button disabled="" type="button" class="btn-success btn btn-primary">Agregar al Carrito</button></div>
          </div>
      </div>
  </div>

  </div>
}

export default ItemDetail;