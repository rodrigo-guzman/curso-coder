//@ts-check
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Container } from "@mui/material";
import ItemCount from './ItemCount';

function ItemDetail({item}){
    const {id, title, price, thumbnail, stock} = item;

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
            image={thumbnail}
            sx={{maxWidth: '30%', maxHeight: '30%'}}
        />
      </Box>
      <Box >
      <Typography sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' }}}>
        Precio: ${price}
      </Typography>
      </Box>
      
      <CardActions sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex' } }}>
      {<ItemCount valorInicial={1} stock={stock} item={item} />}
      </CardActions>
    </Card>
    </Container>
    </> ;
}

export default ItemDetail;
