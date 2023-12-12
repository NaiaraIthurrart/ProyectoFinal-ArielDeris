import React from "react";
import { Header } from "./componentes/Header/Index";
import {BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import {DataProvider} from "./context/Dataprovider"
import Carrito from "./componentes/Carrito/Index"


import { Paginas } from "./componentes/Paginas"
import 'boxicons'


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      
            <Header/>
            <Carrito/>
            <Paginas/>
        
      </Router>
    
    </div>
    </DataProvider>
  );
}

export default App;
