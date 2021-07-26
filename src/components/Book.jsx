import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx';
import BookBuyButton from '../components/BookBuyButton.jsx';

const Book = ({ item }) => {
  const { currency } = useContext(CurrencyContext);
 
  return (
    <li style={{lineHeight: "1.85em"}}>
      <BookBuyButton />&nbsp; &nbsp; {item.title} - {item.price} {currency}
    </li>
  );
};

export default Book