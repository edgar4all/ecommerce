import React, { useState } from "react";

import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import { ItemsContext } from '../../context/ItemsContext';
import { useContext } from "react";

import "./Shop.css";

import TextField from "@mui/material/TextField";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
};

const Shop = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const [items,setItems,get_by_id, itemsCount, emptyCart] = useContext(ItemsContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();    
    values.items= items;

    const docRef = await addDoc(collection(db, "orders"), {
      values,
    });    
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1>Shop</h1>
      <form className="FormContainer" onSubmit={handleOnSubmit}>
        <TextField
          placeholder="Nombre"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
          required
        />
        <TextField
          placeholder="Apellido"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
          required
        />
        <TextField
          placeholder="Telefono"
          style={{ margin: 10, width: 400 }}
          name="phone"
          value={values.phone}
          onChange={handleOnChange}
          required
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
          required
        />        
        <button className="btnASendAction">Finalizar Compra</button>
      </form>
      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default Shop;
