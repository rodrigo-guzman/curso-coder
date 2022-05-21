//@ts-check
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import LoadingComponent from './Loading';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    let {idProduct} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [item, setItem] = useState({});
    const getItem = () => {
        fetch('https://api.mercadolibre.com/items/'+idProduct)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setLoading(false);
            setItem(res);
        })
        .catch((err) => {
            setError(err);
        })
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getItem();
        }, 2000);
        
    }, [])
   
    return(<>
         {loading && loading ? 
         (<LoadingComponent/>)
        : 
        (<ItemDetail item = {item}/>)}
    </>);
}
export default ItemDetailContainer;