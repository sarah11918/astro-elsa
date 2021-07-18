import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx';
import Books from "../components/Books.jsx";
 
const DATA = {

  list: [
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
  ],
  
  buy: () => {
    alert("Sorry, this is just a test!");
  },

  currency: "$",
  
};


const CurrencyApp = () => {
  return (
    <CurrencyContext.Provider value={DATA} >
        <Books />
    </CurrencyContext.Provider>
  );
};
 
export default CurrencyApp;