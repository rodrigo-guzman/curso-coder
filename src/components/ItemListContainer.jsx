//@ts-check
import React, { useEffect, useState } from "react";
import { Box, Container } from '@mui/material';
//import ItemCount from "./ItemCount";
import ItemList from "./services/ItemList";
import Typography from '@mui/material/Typography';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const productos = [
    {id: "1", title: "Tv led 45", price: "72.000,00", pictureUrl: "https://www.lg.com/cac/images/televisores/md07504085/gallery/D1.jpg"},
    {id: "2", title: "Tv led 55", price: "92.000,00", pictureUrl: "https://www.lg.com/cac/images/televisores/md07504085/gallery/D2.jpg"},
    {id: "3", title: "Tv led 65", price: "132.000,00", pictureUrl: "https://www.lg.com/cac/images/televisores/md07504085/gallery/D1.jpg"},
    {id: "1", title: "Tv led 45", price: "72.000,00", pictureUrl: "https://www.lg.com/cac/images/televisores/md07504085/gallery/D1.jpg"},
    {id: "2", title: "Tv led 55", price: "92.000,00", pictureUrl: "https://www.lg.com/cac/images/televisores/md07504085/gallery/D2.jpg"},
    {id: "3", title: "Tv led 65", price: "132.000,00", pictureUrl: "https://www.lg.com/cac/images/televisores/md07504085/gallery/D1.jpg"}
];

function ItemListContainer({mensaje}){
    /*const onAdd = (stock,sumar) => {
        stock > 0 && alert('Se han agregado ' + sumar + ' elementos al carrito.');
    };*/

    const [products, setProducts] = useState()
    
    function fetchProductos(){
        const promesa = new Promise((res,rej) => {
            res(productos);
        });

       promesa.then(result => {
        setProducts(result);
       });
    }

    useEffect(()=>{
        fetchProductos();
    },[])

    return <>
    <Container maxWidth='xl' sx={{position: "relative", justifyContent: 'center', display: { xs: 'flex', md: 'flex' },color: 'white',
    background: 'radial-gradient(circle, rgba(89,143,134,1) 1%, rgba(38,38,145,1) 100%, rgba(0,212,255,1) 100%)' }}>
        <Typography variant="h6" sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
            {mensaje}   
        </Typography>
    </Container>
    <Box sx={{}}>


        <Container maxWidth='xl' sx={{position: "relative",justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex', paddingTop:"1em" }}}>
            {/*<ItemCount valorInicial={1} stock={5} onAdd={onAdd}/>*/}
            <ItemList products= {products} mensaje = {mensaje}/>
        </Container>
    </Box>
    </> ;
}

export default ItemListContainer;