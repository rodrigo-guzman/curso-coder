import React from "react";
import { Container} from '@mui/material';

function ItemListContainer({mensaje}){
    return <>
    <Container maxWidth='xl' sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'none', md: 'flex' } }}>
    <h1>{mensaje}</h1>
    </Container>

    </> ;
}

export default ItemListContainer;