import { cartInfo } from "../cart";
import PropTypes from "prop-types";

const ProductDisplay = ({product, quantity}) => {
  console.log(product);
  return (<section className="flex justify-between">
    <div className="mr-8">{product.title}</div>
    <div>{`${quantity} * $${product.price} = $${quantity * product.price}`}</div>
  </section>);
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
  quantity: PropTypes.number,
};

const Cart = () => {
  let totalAmount = 0;
  return (
    <main className="flex-1 bg-mall bg-cover flex justify-center items-center">
      <article className="bg-violet-50 p-4 rounded-md shadow-md">
        <h2 className="text-zinc-950 text-3xl font-bold border-b-2 border-violet-800 py-2 mb-5">Your Cart</h2>
        {cartInfo.size() === 0 ?
          <p className="text-xl my-2">Your cart is currently empty at the moment.</p> :
          cartInfo.products().map(productMap => {
            console.log(productMap);
            const product = cartInfo.productFromId(productMap[0]);
            totalAmount += product.price * productMap[1];
            return <ProductDisplay key={productMap[0]} product={product} quantity={productMap[1]}/>;
          })
        }
        {totalAmount !== 0 && 
          <div className="text-right mt-3">
            <h3 className="font-bold text-2xl">Total: ${totalAmount.toFixed(2)}</h3>
            <button className="bg-violet-800 text-violet-50 rounded-md p-2 mt-4 hover:bg-violet-500 active:bg-violet-900">Proceed to Buy</button>
          </div>}     
      </article>
    </main>
  );
}

export default Cart;