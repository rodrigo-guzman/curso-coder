//@ts-check
import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import { Container } from "@mui/material";


function ItemDetail({item}){
    const color = red[500];
    const {id, title, price, pictures} = item;
    const url = pictures.map(function(picture) {
        return picture.url;
    });

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
      <Button
            variant='contained'
            sx={{ display: 'flex', backgroundColor: color}}  
        >
            {'Detalle'}
        </Button>
      </CardActions>
    </Card>
    </Container>
    </> ;
}

export default ItemDetail;
