import React, {createContext, useState} from "react";

export const contextCart = createContext();

const ContextCartProvider = ({children}) => {
const [cart, setCart] = useState([]);
const addToCart = (newCart) => {
    setCart([...cart, newCart]);
}   
console.log('cart',cart);

if (cart.length > 1){
    const initialValue = 0;
    const sumWithInitial = cart.map((item) => item.quantity.quantity).reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue);

    console.log('Consologueo sumWithInitial: ', sumWithInitial);
}

return(
    <>
    <contextCart.Provider value={{cart, addToCart}}>
        {children}
    </contextCart.Provider>
    </>
)
}

export default ContextCartProvider;