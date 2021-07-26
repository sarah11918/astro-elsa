import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx';
import Book from '../components/Book';


const Books = () => {
  const { list } = useContext(CurrencyContext)
  return (
    <ul style={{listStyleType: "none", paddingInlineStart: "10px"}}>
      {list.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Books