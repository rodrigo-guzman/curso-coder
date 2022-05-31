import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { contextCart } from '../contexts/ContextCart';
import { collection, getFirestore, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { useFormik } from 'formik';
import * as Yup from 'yup';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
  
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

export const Checkout = () => {
    const { cart, totalPrice } = useContext(contextCart);
    const [id, setId] = useState("");    
    const [values, setValues] = React.useState({});


    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: '',
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          phone: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

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
        addDoc(orders, myOrder).then(({ id }) => {
        setId(id);
        updateStock(myOrder);
        });
    }

    const updateStock = (myOrder) => {
        console.log('entro al updateStock');
        console.log('myOrder ', myOrder )
        const db = getFirestore();
        myOrder.cart.map(item => {
            const productDoc = doc(db, "products", item.id);
            let selectProduct=null;
                getDoc(productDoc)
                .then(producto=> {
                    selectProduct ={id: producto.id, ...producto.data()};
                    updateDoc(productDoc, {stock: selectProduct.stock - item.quantity})
                    console.log('paso el updateDoc')
                })
                .catch((err) => {
                    console.log('error', err);
                });

        })
        
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
            type="email"
            />
            <TextField
            required
            id="outlined-required"
            label="celular (solo números)"
            onChange={handleChange}
            value={buyer.phone}
            name="phone"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
