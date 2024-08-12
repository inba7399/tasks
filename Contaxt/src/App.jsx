import { CartProvider } from 'react-use-cart'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List'
import Cart from './Cart'

function App() {
  

  return (
    <>
     <CartProvider>
           <Cart/>
           <List/>
     </CartProvider>
      
    </>
  )
}

export default App
