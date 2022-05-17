
import React, { useEffect, useState } from "react";
import { Box, Container,CircularProgress } from '@mui/material';
import ItemList from "./services/ItemList";
import Typography from '@mui/material/Typography';
import productos from '../Products'

export default function ItemListContainer({mensaje}){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState()
    const [error, setError] = useState("");

  
    const promesa = new Promise((res,rej) => {
        setTimeout(() => {
            res(productos);
        }, 2000);
    });

    useEffect(()=>{
        setLoading(true);
        promesa
        .then(res => {
            setLoading(false);
            setProducts(res)
        })
        .catch(err => {
            setError(err)
            console.log(error);
        })
        .finally(() => setLoading(false))
    },[])
 
    return (
    <>
        {
        loading ? (
        <Box sx={{marginTop: '40px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress
                variant="indeterminate"
                size={40}
                thickness={4}
                value={100}
            />
        </Box>)
        : 
        (<>
            <Container maxWidth='xl' sx={{position: "relative", justifyContent: 'center', display: { xs: 'flex', md: 'flex' },color: 'white',
                background: 'radial-gradient(circle, rgba(89,143,134,1) 1%, rgba(38,38,145,1) 100%, rgba(0,212,255,1) 100%)' }}>
                <Typography variant="h6" sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
                    {mensaje}   
                </Typography>
            </Container>

            <Box>
                <Container maxWidth='xl' sx={{position: "relative",justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex'}}}>
                    <ItemList products= {products} mensaje = {mensaje}/>
                </Container>
            </Box>
        </>
        )}
    </>
    )
}
