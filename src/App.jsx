import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import PropTypes from 'prop-types';

export default function App({page}) {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      {page === 'home'? <Home/> : page === 'shop' ? <Shop/> : <Cart/>}
      <Footer/>
    </div>
  );
}

App.propTypes = {
  page: PropTypes.string,
};
