//@ts-check
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import { Container } from "@mui/material";
import { NavLink } from 'react-router-dom';


function Item({item}){
    const color = red[500];
    const {id, title, price, pictures} = item;
    const [product, setProduct] = useState([]);
    const[loading,setLoading]=useState(false);
    const [error, setError] = useState();
    const [picures, setPictures] = useState([]);
    let url = "";


    const getProductById = () => {
        fetch('https://api.mercadolibre.com/items/' + id)
        .then((res) => {
          if (!res.ok) {
            setLoading(false);
            throw new Error("HTTP error " + res.status);
        }
          console.log('respuesta primer then', res)
          return res.json()
        })
        .then((res) => {
          setLoading(false);
          reorganize(res)
          console.log('pictures', {pictures})
          setProduct(res);
        })
        .catch((err) => {
          setError(err);
          console.log('error al consumir servicio', {error});
        })
    }

    function reorganize(data){
      let arrayPicture=[]
      for (const key in data.pictures) {
          arrayPicture.push(data.pictures[key].url)
      }
      setPictures(arrayPicture)
      //data.pictures.map(picture=>setPictures(pictures.push(picture.url)))
      console.log(pictures)
  }

    useEffect(() => {
      getProductById();
    }, [])
    
    console.log('url', url)

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
            image= {url[0]}
            alt="Paella dish"
        />
      </CardContent>
      
      <Box >
      <Typography sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
        Precio: ${price}
      </Typography>
      </Box>
      
      <CardActions sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' } }}>
      <NavLink to= {"/ItemDetailContainer/MLA1131792452"} style={{textDecoration: 'none'}}>
        <Button
              variant='contained'
              sx={{ display: 'flex', backgroundColor: color}}>
              {'Detalle'}
        </Button>
      </NavLink>
      </CardActions>
    </Card>
    </Container>
    </> ;
}

export default Item;
