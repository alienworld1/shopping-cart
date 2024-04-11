import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { TailSpin } from "react-loading-icons";
import { useFakeItem } from "../apis/fakestore";
import { mdiAlertCircle } from '@mdi/js';

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
        <p>{item.title}</p>}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
};

export default Card;