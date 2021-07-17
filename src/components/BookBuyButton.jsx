import React, { useContext } from "react";

import BookContext from "../components/BookContext.jsx";

const BookBuyButton = () => {
  const data = useContext(BookContext);
  return (
      <p><button onClick={data.buy}>Buy!</button></p>
  );
};

export default BookBuyButton;