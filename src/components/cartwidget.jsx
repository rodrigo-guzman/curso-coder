import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";

function CartWidget({qtyItems}){
    const cartColor = grey;
    return <>
    <Badge badgeContent={qtyItems} color="success">
        {/* ShoppingCart for responsive screens */}
        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <ShoppingCartIcon fontSize="medium" sx={{ color: cartColor }} />
        </Box>

        {/* ShoppingCart for desktop mode */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <ShoppingCartIcon fontSize="large" sx={{ color: cartColor }} />
        </Box>
    </Badge>

    </> ;
}

export default CartWidget;

