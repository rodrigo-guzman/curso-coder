import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { contextCart } from '../contexts/ContextCart';
import { collection, getFirestore, addDoc } from "firebase/firestore";

export const Checkout = () => {
    const { cart, totalPrice } = useContext(contextCart);
    const [id, setId] = useState("");    

    const [buyer, setbuyer] = useState({
        name: "",
        email: "",
        phone: 0,
    });

    const handleChange = (e) => {
        e.preventDefault();

        console.log(e.target.name, e.target.value);
        setbuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date().toDateString();

        const Order = {
            buyer,
            cart,
            totalPrice,
            date,
        }
        pagar(Order);
    };

    const pagar = (myOrder) => {
        
        const db = getFirestore();
        const orders = collection(db, "orders");
        addDoc(orders, myOrder).then(({ id }) => setId(id));
    }

    return (
        <>

        <Container
            component="form"
            align= "center"
            sx={{
            "& .MuiTextField-root": { m: 5, width: "25ch" },
            alignItems: 'center',
            justifyContent: 'center',
            }}
            onSubmit={handleSubmit}
        >
        <Typography
            variant="title"
            display="block"
            sx={{
            fontSize: 25,
            letterSpacing: ".1rem",
            mt: 2,
            paddingLeft: '2em'
            }}
        >
            Datos del Cliente
        </Typography>
            <TextField
            required
            id="outlined-required"
            label="Nombre"
            onChange={handleChange}
            value={buyer.name}
            name="name"
            />
            <TextField
            required
            id="outlined-required"
            label="Email"
            onChange={handleChange}
            value={buyer.email}
            name="email"
            />
            <TextField
            required
            id="outlined-required"
            label="Celular"
            onChange={handleChange}
            value={buyer.phone}
            name="phone"
            />
            <>
                <div style={{display: 'flex', alignitems: 'center', justifyContent: 'center' }}>
                    {id && ("tu orden es: " + id)}
                </div>
                <Button
                color="secondary"
                align="left"
                sx={{
                    display: "flex",
                    margin: "auto",
                    mt: 4,
                    mb: 4,
                    fontSize: 16,
                    alignItems: "justify-end",
                }}
                type="submit"
                variant="contained"
                onSubmit={() => { handleSubmit()}}
                >
                Finalizar Compra
                </Button>
               </>
            
        </Container>
        
        </>
    );
};