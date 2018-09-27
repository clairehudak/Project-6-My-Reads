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
  updateQuery = (value) => {
    console.log('searching...')
    this.setState({
      query: value
    });

    if (value === '') {
      this.setState({
        searchResults: []
      });
      return;
    }

    BooksAPI.search(value)
      .then((results) => {
        console.log(results);
        results.length === 0 ? this.setState({ searchResults: [] }) : this.setState({ searchResults: results });
      });
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({ query: value });
    this.updateQuery(value);
  }

  render () {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to ="/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">

              {/* Set the value of the seach bar to query and call the searchBooks method when it changes */}
              <input type="text" 
                     placeholder="Search by title or author" 
                     value = {this.state.query}
                     onChange = {this.handleChange}/>
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          {/* Display the searchResults books using a map; update the books' shelves accordingly */}
          {this.state.query.length > 0 ? (
            this.state.searchResults.map((books, key) => <Books updateBookShelf= {this.updateBookShelf} books={books} key={books.id} />)
          ) : (
            <div>Search for books above!</div>
          )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
