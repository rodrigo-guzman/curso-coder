
import React, { useEffect, useState } from "react";
import { Box, Container,CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import ItemList from './services/ItemList';


export default function ItemListContainer({mensaje}){
    let {categoryId} = useParams();
    const [loading, setLoading] = useState(false);
    const [productList, setProducts] = useState()
    const [error, setError] = useState("");

    useEffect(()=>{
        console.log('paso por el useEffect')
        setLoading(true);
        if (categoryId){
            fetch('https://api.mercadolibre.com/sites/MLA/search?category=' + categoryId)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setLoading(false);
                setProducts(res.results);
            })
            .catch((err) => {
                console.log('err', error);
                setError(err);
            })
        }
    },[])

    console.log('productList', {productList})

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
                    {productList &&
                        <ItemList products= {productList} mensaje = {mensaje}/>
                    }
                </Container>
            </Box>
        </>
        )}
    </>
    )
}
