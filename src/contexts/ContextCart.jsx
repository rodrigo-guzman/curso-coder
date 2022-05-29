import React, {createContext, useState} from "react";


export const contextCart = createContext();

const ContextCartProvider = ({children}) => {
const [cart, setCart] = useState([]);
const [errorAdd, setErrorAdd] = useState(false);
let amountCart = 0;
let totalPrice = 0;

//agrega un nuevo objeto al carro
const addToCart = (newCart) => {
    cart.map(item => {
        if(item.id === newCart.id){
            setErrorAdd(true)
            throw console.error('el objeto ya existe!');
        }
    })
    setCart([...cart, newCart]);
}   

const removeToCart = (id) => {
    const removeCart = cart.filter(data => data.id !== id);
    setCart(removeCart);
}

const removeAllToCart = () => {
    setCart([]);
}

const addOneToCart = (id, count) => {
    const updateCart = cart.map(item => {
        if (item.id === id){
             return {...item, quantity: count};
        }
        return item;
    });

    setCart(updateCart);
}

if (cart.length > 0){
    const initialValue = 0;
    const sumWithInitial = cart.map((item) => item.quantity).reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue);
    amountCart = sumWithInitial;
}

if (cart.length > 0){
    const initialValue = 0;
    const sumWithInitial = cart.map((item) => parseInt(item.price)).reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue);
    totalPrice = sumWithInitial;
}

return(
    <>
    <contextCart.Provider value={{cart, addToCart, amountCart, removeToCart, removeAllToCart, addOneToCart, errorAdd, totalPrice}}>
        {children}
    </contextCart.Provider>
    </>
)
}

export default ContextCartProvider;