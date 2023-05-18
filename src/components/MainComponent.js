import React, { Component } from "react";
import bookList from "../assets/books";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";

import BookList from "./lists/BookList";
import BookDetail from "./representational/BookDetail";
import NewBook from "./representational/NewBook";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: bookList,
      selectedBook: null
    };
  }

  selectedBookHandler = (bookId) => {
    const book = this.state.books.filter((book) => book.id === bookId)[0];

    this.setState({
      selectedBook: book
    });
  };

  render() {
    const books = <BookList books={this.state.books} selectedBookHandler={this.selectedBookHandler} />;

    return (
      <div className="App">
        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink to="/books">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new-book">Book</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Navigate to="/books" />} />
          <Route path="/books" exact element={books} />
          <Route path="/new-book" exact element={<NewBook />} />
          <Route path="/book/:id" element={<BookDetail book={this.state.selectedBook} />} />
        </Routes>
      </div>
    );
  }
}

export default MainComponent;
