import { useEffect } from "react";
import { cartInfo } from "../cart";
import { fetchItemById } from "../apis/fakestore";
import PropTypes from "prop-types";

const ProductDisplay = ({product, numberOfProduct}) => (
  <section className="flex justify-between">
    <div>{product.title}</div>
    <div>{`${numberOfProduct} * $${product.price} = ${numberOfProduct * product.price}`}</div>
  </section>
);

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
  numberOfProduct: PropTypes.number,
};

const Cart = () => {
  let totalAmount = 0;
  return (
    <main className="flex-1 bg-mall bg-cover flex justify-center items-center">
      <article className="bg-violet-50 p-4 rounded-md shadow-md">
        <h2 className="text-zinc-950 text-3xl border-b-2 border-violet-800 py-2">Your Cart</h2>
        {cartInfo.size() === 0 ?
          <p className="text-xl my-2">Your cart is currently empty at the moment.</p> :
          cartInfo.products().map(async productId => {
            const product = await fetchItemById(productId[0]);
            console.log(product);
            totalAmount += product.price * productId[1];
            return <ProductDisplay key={productId} product={product} numberOfProduct={productId[1]}/>;           
          })}
      </article>
    </main>
  );
}

export default Cart;