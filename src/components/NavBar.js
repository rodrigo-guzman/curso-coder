import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
//import { ReactDOM } from "react-dom";
//import '../App.css';

class barra extends React.Component {
    render() {
        return (
            <><nav>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="#Vehiculos">Vehículos</a></li>
                    <li><a href="#Electronica">Electrónica</a></li>
                    <li><a href="#Libros">Libros</a></li>
                    <li><i className="material-icons">shopping_cart</i></li>
                </ul>
                
            </nav>
            <ul id="slide-out" className="sidenav">
                Categorías
                <li><a href="#Vehiculos">Vehículos</a></li>
                <li><a href="#Electronica">Electrónica</a></li>
                <li><a href="#Libros">Libros</a></li>
            </ul>
            </>
        );
    }
}

export default barra;