import './App.css';
import  {BrowserRouter, Routes, Route} from "react-router-dom"
import {NavBar} from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {Cart} from "./components/Cart/Cart"
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
              <NavBar/>
              <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
                  <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
                  <Route path='/Cart' element={<Cart/>}/>
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
