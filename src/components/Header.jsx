import Cart from '../assets/cart-svgrepo-com.svg';
import NavBar from "./NavBar";

const Header = () => (
  <header className="flex justify-around p-4 border-b-2 border-violet-800 flex-none">
    <div className="flex gap-4">
      <img src={Cart} alt='logo' className='h-9'/>
      <h1 className='text-3xl font-bold'>Shopping Cart</h1>
    </div>
    <NavBar/>
  </header>
)

export default Header;