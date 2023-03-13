import React, { useState, createContext } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    
    const initialState = () => [];

    const get_by_id = (id) => { 
        return items.filter((i) => i.id === id);
    };

    const itemsCount= () => {        
        return items.reduce((total, item) => total + item.quantity, 0);
    }

    const emptyCart= () => {
        setItems([]);
    }

    const [items, setItems] = useState(initialState);

    return (
        <ItemsContext.Provider value={[items, setItems, get_by_id, itemsCount, emptyCart]}>
            {children}
        </ItemsContext.Provider>
    );
};
