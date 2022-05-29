import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Container} from '@mui/material';
import { contextCart } from '../contexts/ContextCart';
import { useContext } from 'react';

const AddAndReset = ({ cartAddReset}) => {
    const { addOneToCart } = useContext(contextCart);
    const { id, quantity } = cartAddReset;
    var quantityInt = parseInt(quantity);

    const AddOrReset = (add) => {
        if (quantityInt >= 1){
            quantityInt = add ? quantityInt + 1 : quantityInt - 1;
            return addOneToCart(id, quantityInt);
        }
    } 

    return (
        <Container sx={{justifyContent: 'center', alignContent: 'center', display: { xs: 'flex', md: 'flex'}, paddingTop: '2em' }}>
              <Button variant="text" onClick={() => {AddOrReset(true)}}>+</Button>
              
              <Typography variant="button" display="block" gutterBottom sx={{paddingLeft: '2em', paddingRight: '2em'}}>
                {quantity !== '' ? quantity : '1'}
              </Typography>
              
              <Button variant="text" onClick={() => {AddOrReset(false)}}>-</Button>
        </Container>
    )
}

export default AddAndReset;