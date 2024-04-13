import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { TailSpin } from "react-loading-icons";
import { useFakeItem } from "../apis/fakestore";
import { mdiAlertCircle } from '@mdi/js';
import { useState } from 'react';
import { decrementProduct, incrementProduct, getCountOfProduct } from '../cart';

const ProductInfo = ({product}) => {
  const [count, setCount] = useState(getCountOfProduct(product.id));

  return (
    <>
      <img src={product.image} alt={product.title}/>
      <h2 className='font-bold mt-2'>{product.title}</h2>
      <section className='mt-2 flex justify-between'>
        <span className='capitalize'>{product.category}</span>
        <span>{'$' + product.price}</span>
      </section>
      <section>
        {count === 0 ? 
        <button className='p-2 mt-2 bg-violet-800 text-violet-50 rounded-lg hover:bg-violet-600 active:bg-violet-900'
          onClick={() => {
            incrementProduct(product.id);
            setCount(1);
        }}>Add to cart</button> :
        <div>
          <button className='mt-2 bg-violet-800 text-violet-50 rounded-full hover:bg-violet-600 active:bg-violet-900 font-bold text-center py-2 px-4'
            onClick={() => {
              incrementProduct(product.id);
              setCount(count + 1);
            }}>+</button>
          <span className='font-bold mx-2'>{count}</span>
          <button className='mt-2 bg-violet-800 text-violet-50 rounded-full hover:bg-violet-600 active:bg-violet-900 font-bold text-center py-2 px-4'
            onClick={() => {
              decrementProduct(product.id);
              setCount(count - 1);
            }}>-</button>
        </div>}
      </section>
    </>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
  }),
};

const Card = ({id}) => {
  const { item, error, loading } = useFakeItem(id);
  return (
    <div className='p-4 shadow-lg max-w-96'>
      {loading? 
        <TailSpin stroke="#6d28d9"/> :
        error ? <div className='text-red-600'>
          <Icon path={mdiAlertCircle} size={1} className='inline'/>
          <span className='pl-3'>Sorry, there was an error fetching this product.</span>
          <p className='italic'>{error.message}</p>
        </div> :
        <ProductInfo product={item}/>}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
};

export default Card;