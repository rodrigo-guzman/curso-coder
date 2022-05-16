//@ts-check
import React from 'react';
import Item from './Item';
import { Box, Grid } from '@mui/material';


function ItemList({products, mensaje}) {
  return (
    <>
    <Box sx={{ flexGrow: 1, maxWidth: 652, display: { xs: 'none', md: 'flex' } }}>
        <Grid container spacing={3}>
            {products && products.map((product) => 
                <Grid item xs={12} md={6}>
                    <div key={product.id} >
                        <Item id = {product.id} title = {product.title} price = {product.price} pictureUrl = {product.pictureUrl}/>
                    </div>
                </Grid>
        )}
    </Grid>
    </Box>

     <Box sx={{ flexGrow: 1, maxWidth: 352, minWidth: 200, maxHeight: 400, display: { xs: 'flex', md: 'none' } }}>

        <Grid container spacing={3}>
            {products && products.map((product) => 
                <Grid item xs={12} md={6}>
                    <div key={product.id} >
                        <Item id = {product.id} title = {product.title} price = {product.price} pictureUrl = {product.pictureUrl}/>
                    </div>
                </Grid>
        )}
    </Grid>
    </Box>
    </>
  )
}

export default ItemList;