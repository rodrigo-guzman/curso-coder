//@ts-check
import {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from "@mui/material";
import { red } from '@mui/material/colors';
import { Box } from "@mui/system";
import { contextCart } from '../contexts/ContextCart';


function ItemCount({valorInicial, stock, item}){
    const {addToCart} = useContext(contextCart);
    const color = red[500];
    const [quantity, setQuantity] = useState(valorInicial);
    const {id, title, price} = item;

    const agregar = ()=>{
        (quantity < stock  && setQuantity(quantity+1));
    };

    const restar = ()=>{
      quantity > 1  && setQuantity(quantity-1);
    };

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
                  disabled={ quantity === 0 }
                  variant='contained'
                  sx={{ display: 'flex', backgroundColor: color}}  
                  size='small'
                  //onClick={ () => onAdd(sumar) }
                  onClick= {() => addToCart({id: {id}, title: {title}, price: {price}, quantity: {quantity}})}
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
