// Imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Books from './Books'

// Define the BookSearch Component; this is the search page
class BookSearch extends Component {

  //Set the initial state of the books, searchResults, and query
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchResults: [],
      query: ""
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
        books: state.books.filter((by) => by.id !== books.id).concat([ books ])
      }))
    })
  }

  // Per the requirements, no books should render when the search bar is cleared
  // update Query is called everytime the seach bar changes, and it calls searchBooks
  updateQuery = (event) => {
    this.setState({query: event.target.value}, this.searchBooks);
  }

  // Method called to search through all books for those that match the seach terms
  searchBooks() {
    console.log(this.state.query);
   if (this.state.query.trim() === "") {
       return this.setState({searchResults: [] });
    }

    // call the BooksAPI search method
    BooksAPI.search(this.state.query.trim()).then(retval => {
      if(retval.error){
        return this.setState({searchResults: [] });
      }
      else {
        // match the shelves of the queried books to the ones one our shelves
        retval.forEach (searchedBook => {
          let bookFound = this.state.books.filter(bookList => bookList.id === searchedBook.id);
          if(bookFound[0]) {
            searchedBook.shelf = bookFound[0].shelf;
          }
        })
        return this.setState({ searchResults: retval})
      }
    });
  }

  render () {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to ="/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
              {/* Set the value of the seach bar to query and call the searchBooks method when it changes */}
              <input type="text" placeholder="Search by title or author" value = {this.state.query}
              onChange = {this.updateQuery}/>
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {/* Display the searchResults books using a map; update the books' shelves accordingly */}
          {this.state.searchResults.length > 0 && this.state.searchResults.map((books, key) => <Books updateBookShelf= {this.updateBookShelf} books={books} key={key} />)}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
