import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


ReactDOM.render(
  <React.StrictMode>
  
    <NavBar />
    <ItemListContainer/>
  
    
  </React.StrictMode>,
  document.getElementById('root')
);

