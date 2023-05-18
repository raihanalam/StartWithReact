import React from "react";
import "../../stylesheets/book.css";

const Book = (props) => {

  return (
    <div className="Book" onClick={props.selectedBookHandler}>
      <h3>Book Name: {props.bookName}</h3>
      <h4>Writer: {props.writer}</h4>
      
    </div>
  );
};

export default Book;
