import React, {} from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = (element, i , OnAdd) => {

  return (
        <div className="product">
        <img src={element.image}></img>
        <p>{element.name}</p>
        <p>$:{element.value}</p>
        <p>Id:{i + 1}</p>
        <ItemCount initial={0} stock={element.stock} OnAdd={OnAdd}/>
      </div>
    );
  
}

export default Item;