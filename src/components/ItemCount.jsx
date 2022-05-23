//@ts-check
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from "@mui/material";
import { red } from '@mui/material/colors';
import { Box } from "@mui/system";


function ItemCount({valorInicial, stock, onAdd}){
    const color = red[500];
    const [sumar, setSumar] = useState(valorInicial);

    const agregar = ()=>{
        (sumar < stock  && setSumar(sumar+1));
    };

    const restar = ()=>{
        sumar > 1  && setSumar(sumar-1);
    };

    return <>

<Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Container sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex'}, paddingTop: '2em' }}>
              <Button variant="text" onClick={() => {agregar()}}>+</Button>
              
              <Typography variant="button" display="block" gutterBottom sx={{paddingLeft: '2em', paddingRight: '2em'}}>
                {sumar !== '' ? sumar : '1'}
              </Typography>
              
              <Button variant="text" onClick={() => {restar()}}>-</Button>
            </Container>
          </Grid>
          
          <Grid item xs={12} md={12}>
          <Container sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex'} }}>
          <Button
                  disabled={ sumar === 0 }
                  variant='contained'
                  sx={{ display: 'flex', backgroundColor: color}}  
                  size='small'
                  onClick={ (e) => onAdd(sumar) }
                >
                  Agregar al carrito
          </Button>
          </Container>
          </Grid>
        </Grid>
        </Box>
    </> 
}

export default ItemCount;
