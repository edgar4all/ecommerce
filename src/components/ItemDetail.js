import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


const ItemDetail = ({ id, data }) => {
    return <>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            alt="green iguana"
            image={data.image}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.category} - 
            </Typography>    
            <Typography gutterBottom variant="h5" component="div">
                {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                $ {data.price}
            </Typography
            >
            <NavLink to={`/item/${data.id}`}>
                Detalles
            </NavLink>
            </CardContent>
        </CardActionArea>
        </Card>
        </>
}

export default ItemDetail;