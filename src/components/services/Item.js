//@ts-check
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import { Container } from "@mui/material";


function Item({item}){
    const color = red[500];
    //const [sumar, setSumar] = useState();
    const {id, title, price, pictureUrl} = item;

    return <>
    <Container sx= {{paddingTop: '1em'}}>
    <Card sx={{ minWidth: 275, backgroundColor: "whitesmoke" }}>
      <input type="hidden" value={id}></input>
      <CardContent>
        <Box >
        <Typography sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
            {title}
        </Typography>
        </Box>
        
        <CardMedia
            component="img"
            height="194"
            width="4em"
            image={pictureUrl}
            alt="Paella dish"
        />
      </CardContent>
      
      <Box >
      <Typography sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
        Precio: ${price}
      </Typography>
      </Box>
      
      <CardActions sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' } }}>
      <Button
            variant='contained'
            sx={{ display: 'flex', backgroundColor: color}}  
        >
            {'Agregar al Carrito'}
        </Button>
      </CardActions>
    </Card>
    </Container>
    </> ;
}

export default Item;
