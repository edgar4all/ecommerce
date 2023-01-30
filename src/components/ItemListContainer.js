import React from "react";

const ItemListContainer = ({greeting}) => {
    return <>
        <div style={{ "text-align": "center", padding: "100px" }}>
            <h1>
                {greeting}
            </h1>
        </div>
    </>
}

export default ItemListContainer;