import React, { Component } from "react";
import Book from "../representational/Book";
// import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'

class BookList extends Component {
     render() {
          console.log(this.props)
          return (
               this.props.books.map((book, index) => {
                    return (
                         <Link to={'/book/'+book.id} key={book.id} style={{textDecoration:'none', color: 'black'}}>
                              <Book
                                   bookName={book.name}
                                   writer={book.author}
                                   key={book.id}
                                   selectedBookHandler={() => this.props.selectedBookHandler
                                        (book.id)}
                              />

                         </Link>
                    );
               })
          );
     }
}

export default BookList;