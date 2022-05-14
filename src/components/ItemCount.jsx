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


function ItemCount({valorInicial, stock, onAdd}){
    const color = red[500];
    const [sumar, setSumar] = useState(valorInicial);
;

    const agregar = ()=>{
        (sumar < stock  && setSumar(sumar+1));
    };

    const restar = ()=>{
        sumar > 1  && setSumar(sumar-1);
    };

    return <>
    <Card sx={{ minWidth: 275}}>
      <CardContent>
      <Box >
      <Typography sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
          TV LED SMART 55'
        </Typography>
      </Box>
      <CardMedia
        component="img"
        height="194"
        image="https://www.lg.com/cac/images/televisores/md07504085/gallery/D1.jpg"
        alt="Paella dish"
      />
      </CardContent>

      <CardActions sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex'} }}>
      
      <Button variant="text" onClick={() => {agregar()}}>+</Button>
      <Typography variant="button" display="block" gutterBottom sx={{paddingLeft: '2em', paddingRight: '2em'}}>
        {sumar !== '' ? sumar : '1'}
      </Typography>
        <Button variant="text" onClick={() => {restar()}}>-</Button>
      </CardActions>
      

      <CardActions sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' } }}>
      <Button
            variant='contained'
            sx={{ display: 'flex', backgroundColor: color}}  
            onClick={() => {onAdd(stock,sumar)}}          
        >
            {'Agregar al Carrito'}
        </Button>
      </CardActions>
    </Card>

    </> ;
}

export default ItemCount;
