// Imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Shelf from './Shelf'

// Define the MyBookShelf Component; this is the main page
class MyBookShelf extends Component {

  //Set the initial state of the books
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

//If BooksAPI mounted, set the state of the books to the returned value(s)
  componentDidMount(){
    BooksAPI.getAll().then(retval => {
      this.setState({books: retval})
    });
  }

  //Function to update a book's shelf
  updateBookShelf=(books, shelf) => {
    BooksAPI.update(books, shelf).then(retval => {
      books.shelf = shelf;
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== books.id).concat([ books ])
      }))
    })
  }

  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* Render the three shelves and add the corresponding books which are filtered based on their shelf prop */}
            <Shelf updateBookShelf = {this.updateBookShelf} name ="Currently Reading" books={this.state.books.filter(by =>by.shelf === "currentlyReading")} />
            <Shelf updateBookShelf = {this.updateBookShelf} name ="Want to Read" books={this.state.books.filter(by =>by.shelf === "wantToRead")} />
            <Shelf updateBookShelf = {this.updateBookShelf} name ="Read" books={this.state.books.filter(by =>by.shelf === "read")} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/Search" >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MyBookShelf
