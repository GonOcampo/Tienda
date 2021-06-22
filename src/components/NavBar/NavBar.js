import React from 'react';
import './NavBar.css';
import "bootstrap-icons/icons/cart-check.svg";
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
   
    return(
       
        <div className="NavBar">
                <a href="NavBar">INICIO</a>
                <a href="NavBar">PRODUCTOS</a>
                <a href="NavBar">DISEÑOS</a>
                <a href="NavBar">CLIENTES</a>
                <a href="NavBar">CONTACTO</a>

             
                <span>{CartWidget()}</span>
            
        </div>

    );

}


export default NavBar;