import React,{ useState} from'react';
import ItemCount from '../ItemCount/ItemCount';
import OnAdd from '../ItemCount/ItemCount';
import Item from '../Item/Item';

import './ItemList.css'

function ItemList (){
    const [products, setProducts] = useState ([
        {image:'https://pixabay.com/get/gb6445438123fc0ffc0aa25120f5ddb38f1213dce35b1061b77c1ba8a39763e844761235ed4b372cfcf39d00b27199c35_640.jpg', name: 'Producto 1', description:'Descripcion producto 1', value: 10, stock: 1 },
        {image:'https://pixabay.com/get/gc1fa00a4b2c7eb9c084dfabfe45cc4b7f89e7c99c87e9c4d9473a75a5cf8c6fd6c63bda8cf3a781556a8c2caa7137184_640.jpg', name: 'Producto 2', description:'Descripcion producto 2', value: 20, stock: 1 },
        {image:'', name: 'Producto 3', description:'Descripcion producto 3', value: 20, stock: 10 },
        {image:'', name: 'Producto 4', description:'Descripcion producto 4', value: 30, stock: 1 },
        {image:'', name: 'Producto 5', description:'Descripcion producto 5', value: 30, stock: 1 },
        {image:'', name: 'Producto ', description:'Descripcion producto 6', value: 30, stock: 1 }])








        //funcionando

return (

 
  <div>
    {products.map((element, i) => {
      //  <Item/>;
      //  <ItemCount initial={0} stock={15} OnAdd={Add}/>
      return (
        <div className="product">
          <img src={element.image}></img>
          <p> {element.name}</p>
          <p> $: {element.value}</p>
          <p> Id : {i + 1}</p>
          <ItemCount initial={0} stock={element.stock} OnAdd={OnAdd}/>
        </div>
      );
    })}
  </div>
);

};

export default ItemList;