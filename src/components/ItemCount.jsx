/*//@ts-check*/
import {useState, useContext, useEffect} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, TextField } from "@mui/material";
import { red } from '@mui/material/colors';
import { Box } from "@mui/system";
import { contextCart } from '../contexts/ContextCart';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function ItemCount({valorInicial, stock, item}){
    const {addToCart, cart } = useContext(contextCart);
    const color = red[500];
    const [quantity, setQuantity] = useState(valorInicial);
    const {id, title, price} = item;
    const [byEnd, setByEnd ] = useState(false);
    const [ added, setAdded] = useState(false);


    const agregar = ()=>{
        (quantity < stock  && setQuantity(quantity+1));
    };

    const restar = ()=>{
      quantity > 1  && setQuantity(quantity-1);
    };

    let objectCart = {
      id: id, 
      title: title, 
      price: price, 
      quantity: quantity
    }

 useEffect(() => {
  cart.map(item => {
    if(item.id === id){
      setAdded(true);
    }
  })
 }, [])
 

    return <>
    <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Container sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex'}, paddingTop: '2em' }}>
              <Button variant="text" onClick={() => {agregar()}}>+</Button>
              
              <Typography variant="button" display="block" gutterBottom sx={{paddingLeft: '2em', paddingRight: '2em'}}>
                {quantity !== '' ? quantity : '1'}
              </Typography>
              
              <Button variant="text" onClick={() => {restar()}}>-</Button>
            </Container>
          </Grid>
          
          <Grid item xs={12} md={12}>
          <Container sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex'} }}>
          
          <Button
              disabled={ quantity === 0 || byEnd}
              variant='contained'
              sx={{ display: 'flex', backgroundColor: color}}  
              size='small'
              onClick= {() => {
                addToCart(objectCart) 
                setByEnd(true)
              }}
          >
              Agregar al carrito
          </Button>
          </Container>
          </Grid>
          <Grid item xs={12} md={12}>
          {added && 
          <Container sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}} >
          <TextField 
          error
          id="outlined-error"
          label="Error"
          value='El objeto ya se encuentra agregado al carrito.'></TextField>
          </Container>
          }
          </Grid>
        </Grid>
        </Box>
    </> 
}

export default ItemCount;
