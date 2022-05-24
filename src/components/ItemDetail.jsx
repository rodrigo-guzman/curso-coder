//@ts-check
import React, { useContext, useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Container } from "@mui/material";
import ItemCount from './ItemCount';
import { contextCart } from '../contexts/ContextCart';

function ItemDetail({item}){
    const {cart} = useContext(contextCart);
    const [count, setCount] = useState(0);
    const {id, title, price, pictures} = item;
    const url = pictures.map(function(picture) {
        return picture.url;
    });

    const onAdd = (add) => {
      console.log('sumar', add);
      setCount(add);

      return alert(`Se han agregado ${add} elementos al carrito`);
    }

    useEffect(() => {
      //console.log('cart', cart);
    }, [cart])
    


    return <>
    <Container sx= {{paddingTop: '1em'}}>
    <Card sx={{  backgroundColor: "whitesmoke" }}>
      <input type="hidden" value={id}></input>
      <CardContent>
        <Box >
        <Typography sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
            {title}
        </Typography>
        </Box>
      </CardContent>
      <Box sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
      <CardMedia
            component="img"
            image={url[1]}
            sx={{maxWidth: '30%', maxHeight: '30%'}}
        />
      </Box>
      <Box >
      <Typography sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
        Precio: ${price}
      </Typography>
      </Box>
      
      <CardActions sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' } }}>
      {!count && <ItemCount valorInicial={1} stock={5} item={item} />}
      </CardActions>
    </Card>
    </Container>
    </> ;
}

export default ItemDetail;
