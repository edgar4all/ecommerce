import React, {useContext} from "react";
import { ItemsContext } from "../context/ItemsContext";

const CartWidget = () => {

    const [items,setItems] = useContext(ItemsContext);
    console.log(items);
    return <>    
        <i className="fa fa-shopping-cart"></i>
        &nbsp; {items.length}
    </>
}

export default CartWidget;