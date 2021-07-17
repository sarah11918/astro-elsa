import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx';
import BookContext from '../components/BookContext.jsx';
import Books from "../components/Books.jsx";
 
const DATA = [
  {
    id: '1',
    title: 'The Road to React',
    price: 19.99,
  },
  {
    id: '2',
    title: 'The Road to GraphQL',
    price: 29.99,
  },
  {
    id: '3',
    title: 'The Road to GastbyJS',
    price: 29.99,
  },
  {
    id: '4',
    title: 'The Rocket to Astro!',
    //title: 'The Voyage to Astro!',
    price: 29.99,
  },
];
 
const FUNCTIONS = {
  buy: () => {
    alert("Sorry, this is just a test!");
  }
}


const CurrencyApp = () => {
  return (
    <CurrencyContext.Provider value="€">
      <BookContext.Provider value={FUNCTIONS}>
        <Books list={DATA} />
      </BookContext.Provider>
    </CurrencyContext.Provider>
  );
};
 
export default CurrencyApp;