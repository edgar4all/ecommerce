import React, {useContext, useEffect} from "react";
import { ItemsContext } from "../context/ItemsContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const [items,setItems,get_by_id, itemsCount] = useContext(ItemsContext);
    
    
  useEffect(()=>{
    itemsCount();
  },[] );

    return <>    
        <Link to={`/cart`}  className="nav-link" >
            <i className="fa fa-shopping-cart"></i>
            &nbsp; { itemsCount() }
        </Link>            
    </>
}

export default CartWidget;