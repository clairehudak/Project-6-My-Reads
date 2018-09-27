// Imports
import React, { Component } from 'react'
import Books from './Books'

// Define the Shelf Component; this makes up the logic for an indiviual shelf
class Shelf extends Component {
    render () {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* Display the books using a map; update the books' shelves accordingly */}
            {this.props.books.map((books, key) => <Books updateBookShelf= {this.props.updateBookShelf} books={books} key={books.id} />)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
