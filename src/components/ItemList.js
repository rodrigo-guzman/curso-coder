//@ts-check
import React from 'react';
import Item from './Item';
import { Box, Grid } from '@mui/material';


function ItemList({products, mensaje}) {
  return (
    <>
    <Box sx={{ flexGrow: 1, maxWidth: 652, display: { xs: 'none', md: 'flex' } }}>
        <Grid container spacing={3}>
            
            {products && products.map((item, i) => 
                <Grid item xs={12} md={6} key={i}>
                        <Item key={item.id} item = {item}/>
                    </Grid>
            )}
            
        </Grid>
    </Box>

     <Box sx={{ flexGrow: 1, maxWidth: 352, minWidth: 200, maxHeight: 400, display: { xs: 'flex', md: 'none' }}}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                {products && products.map((item) => 
                        <Item key={item.id} item = {item}/>
                )}
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default ItemList;