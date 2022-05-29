//@ts-check
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import LoadingComponent from './Loading';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {
    let {idProduct} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [product, setProduct] = useState({});
    const db = getFirestore();
    const myDocumento = doc(db, 'products', idProduct);
    /*const getItem = () => {
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
    }*/

    useEffect(() => {
        setLoading(true);
        getDoc(myDocumento)
        .then(producto=> {
            setLoading(false);
            setProduct({id: producto.id, ...producto.data()});
        })
        .catch((err) => {
            setError(err);
        });

        /*setLoading(true);
        setTimeout(() => {
            getItem();
        }, 2000);*/
    }, [])
   
    return(<>
         {loading && loading ? 
         (<LoadingComponent/>)
        : 
        (<ItemDetail item = {product}/>)}
    </>);
}
export default ItemDetailContainer;