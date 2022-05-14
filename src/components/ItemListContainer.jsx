//@ts-check
import React from "react";
import { Container} from '@mui/material';
import ItemCount from "./ItemCount";
import Typography from '@mui/material/Typography';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ItemListContainer({mensaje}){
    const onAdd = (stock,sumar) => {
        stock > 0 && alert('Se han agregado ' + sumar + ' elementos al carrito.');
    };
    return <>
    <Container maxWidth='xl' sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'none', md: 'flex' }, backgroundColor: '#e4b7e5' }}>

    <Typography variant="h5" sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
        {mensaje}
    </Typography>
    </Container>

    <Container maxWidth='xl' sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'none', md: 'flex' } }}>
        <ItemCount valorInicial={1} stock={5} onAdd={onAdd}/>
    </Container>

    </> ;
}

export default ItemListContainer;