import React, {useContext} from "react";
import { ItemsContext } from "../context/ItemsContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const [items,setItems] = useContext(ItemsContext);
    console.log(items);
    return <>    
        <Link to={`/cart`}  className="nav-link" >
            <i className="fa fa-shopping-cart"></i>
            &nbsp; {items.length}
        </Link>            
    </>
}

export default CartWidget;