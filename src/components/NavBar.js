import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => { 
    return <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <Link to="/" className="navbar-brand" >
          <img className="logo" src="/logo.png" alt="logo"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">            
            <li>
              <Link to={`/`}  className="nav-link" >Todos los productos</Link>            
            </li>
            <li>
              <Link to={`/category/perros`}  className="nav-link" >Perros</Link>            
            </li>
            <li>
              <Link to={`/category/gatos`}  className="nav-link" >Gatos</Link>            
            </li>
            <li>
              <Link to={`/category/accesorios`}  className="nav-link" >Accesorios</Link>            
            </li>
            <li>
              <Link to={`/cart`}  className="nav-link" >Carrito</Link>            
            </li>     
          </ul>    
        </div>
        <div className="float-right" style={{padding: "15px"}} >
              <CartWidget/>
        </div>
      </nav>
      <div style={{textAlign:'center'}}>
        <img src="/banner-mascotas.jpg" alt="mascotas" />
      </div>
    </>
}

export default NavBar;