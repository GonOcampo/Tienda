import React, { useState } from 'react';
import './ItemCount.css';


const ItemCount = ({initial, stock, OnAdd}) => {

  const [ Items, setItems] = useState(initial);
  
  const AddItems = () =>{
    Items < stock &&
        setItems(Items + 1)};
  
  const LessItems = () =>{
          
          Items > 0 &&
              setItems(Items - 1)};

    console.log(Items);

    return(
      <div>
        <button onClick={LessItems} >-</button>
        <span> {Items} </span>
        <button onClick={AddItems} >+</button><br/>
        <button onClick={OnAdd} >Agregar al Carrito</button>

      </div>
    )

}

export default ItemCount;