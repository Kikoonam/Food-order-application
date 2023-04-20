
import './App.css';
import Header from './Components/Layout/Header';
import { Fragment } from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Fragment>
     <Cart/>
    <Header/>
    <Meals/>
    </Fragment>
  );
}

export default App;
