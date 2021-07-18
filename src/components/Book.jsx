import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx';
import BookBuyButton from '../components/BookBuyButton.jsx';

const Book = ({ item }) => {
  const { currency } = useContext(CurrencyContext);
 
  return (
    <li>
      {item.title} - {item.price} {currency} {' '} <BookBuyButton />
    </li>
  );
};

export default Book