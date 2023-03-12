import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


const ItemCard = ({ id, data }) => {
    return <>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <NavLink to={`/item/${data.id}`}>
                                        
            <CardMedia
            component="img"
            height="140"
            alt="green iguana"
            image={data.img}
            />
            </NavLink>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.producto}
            </Typography>    
            <Typography gutterBottom variant="h5" component="div">
                Categoria: {data.categoria} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Precio unitario: $ {data.precio} - Stock: {data.stock}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Código: {data.id}
            </Typography>


            </CardContent>
        </CardActionArea>
        </Card>
        </>
}

export default ItemCard;