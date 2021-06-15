import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';




function ItemListContainer (){

    const OnAdd = (amount) => {
        console.log(amount)
        console.log('REALIZASTE UNA COMPRA')
    }

    return(
            
            <div className="ItemListContainer">
                
                <p>ItemListContainer</p>
            
                <ItemCount initial={1} stock={15} OnAdd={OnAdd}/>
                
            
            
            </div>
    )
}

export default ItemListContainer;