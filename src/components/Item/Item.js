import React from 'react';
import './Item.css';
import productList from '../ItemListContainer/ItemListContainer'
import { element } from 'prop-types';

const Item = () => {

 
return(
  // <div>
  //     {productList.map((element, i) => {
  //        return (
        <div className="product" >
          <p> Nombre : {element.name}</p>
          <p> Valor: {element.value}</p>
          <p> Stock : {element.stock}</p>
          <p> Índice : {}</p>
        </div>
  );
// })}

// </div> );
};

export default Item;