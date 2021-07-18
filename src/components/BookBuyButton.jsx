import React, { useContext } from "react";

import CurrencyContext from "../components/CurrencyContext.jsx";

const BookBuyButton = () => {
  const { buy } = useContext(CurrencyContext);
  return (
      <button onClick={buy}>Buy!</button>
  );
};

export default BookBuyButton;