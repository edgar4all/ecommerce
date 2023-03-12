import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ItemsContext } from '../../context/ItemsContext';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CartPage= () => {

    const [items,setItems] = React.useContext(ItemsContext);
    

    const calculateTotal = () => {
        return items.map((item)=> item.quantity * item.precio).reduce((a,b) => a+b);        
    }
    const quitar= (id)=>{
        setItems(items.filter((i) => i.id !== id));
    }

    return (
    <div>
        <div id='table container' style={{width:"90%" }}>
            <h1 style={{textAlign:'center'}}>
                {items.length} productos en el carrito.
            </h1>
            {items.length > 0 ? (                
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Producto</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Precio unitario</TableCell>
                    <TableCell align="right">SubTotal</TableCell>
                    <TableCell align="right">Quitar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                    <TableRow
                        key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row"> {item.quantity}</TableCell>
                        <TableCell align="right">{item.producto}</TableCell>
                        <TableCell align="right">{item.id}</TableCell>
                        <TableCell align="right">{item.precio}</TableCell>
                        <TableCell align="right">{item.precio * item.quantity}</TableCell>
                        <TableCell align="right">
                            <button onClick={() => quitar(item.id)}>Quitar</button>
                        </TableCell>
                    </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={5}>TOTAL</TableCell>
                        <TableCell align="right">{ items.length >0 ? calculateTotal() : "$0"}</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
            ) : null}
        </div>
    </div>
    );
}

export default CartPage;