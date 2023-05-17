
import Header from '../Components/Layout/Header';
import { useState} from 'react';
import Meals from '../Components/Meals/Meals';
import Cart from '../Components/Cart/Cart';
import CartProvider from '../Store/CartProvider';

export default function HomePage (){
     const [cartIsShown,setCartIsShown] = useState(false);

    const showCartHandler =()=>{
      setCartIsShown(true);
    }
  
    const hideCartHandler = ()=>{
      setCartIsShown(false);
    }
  
    return (
      <CartProvider>
          {cartIsShown&&<Cart onHideCart={hideCartHandler}/>}
           <Header onShowCart={showCartHandler} />
          <main>
             <Meals/>
          </main>
     
      </CartProvider>)
}