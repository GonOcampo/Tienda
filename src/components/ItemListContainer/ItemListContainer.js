import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item'
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () =>{

    const OnAdd = (amount) => {
        console.log(amount)
        console.log('REALIZASTE UNA COMPRA')
    };

    const productList = [
        { name: 'Producto 1', value: 10, stock: 1 },
        { name: 'Producto 2', value: 20, stock: 1 },
        { name: 'Producto 3', value: 30, stock: 1 }
      ];

    return(
        
        
           
              
            <div className="ItemListContainer">
                {/* {productList.map((element, i) => {
            return (
                <div >
              */}
              <Item/> 
              
              

              <ItemCount initial={1} stock={15} OnAdd={OnAdd}/>
                
            
            
                </div>
    //     )
    // }



            //   )}

               
            // </div>
            
    )};
               

      

export default ItemListContainer;