import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import axios from "axios";


const NavBar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
      axios('https://fakestoreapi.com/products/categories').then((res) =>
        setCategories(res.data)
      );
    }, []); 

    return <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <Link to="/" className="navbar-brand" >
          <img src="/logo.png" style={{ height: "40px", padding: "10px"}} ></img>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Computadoras <span className="sr-only">(current)</span></a>
            </li>

            {categories.map((category) => {
              return (
                <li key={category}>
                <Link to={`/detail/${category}`}  className="nav-link" >
                  {category}
                </Link>
                </li>
              );
            })}
          </ul>    
        </div>
        <div className="float-right" style={{padding: "15px"}} >
              <CartWidget/>
        </div>
      </nav>

    </>
}

export default NavBar;