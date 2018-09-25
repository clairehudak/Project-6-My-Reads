import React, { Component } from 'react'

class Books extends Component {
  render () {
    return(
      <li>
        <div className="book">
          <div className="book-top">

            {/* If an image exists, display the thumbnail, otherwise display a blank book cover */}
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.books.imageLinks ? this.props.books.imageLinks.thumbnail : ""}")`}}></div>
            <div className="book-shelf-changer">

              {/* Set the value of the book's shelf to the shelf prop. Default to "none".
                  When the user changes the shelf, call updateBookShelf and pass in the book and target shelf */}
              <select value ={this.props.books.shelf || "none"} onChange= {(event) =>{this.props.updateBookShelf(this.props.books, event.target.value)} }>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.books.title}</div>
          
          {/*If the author exists, display the author's name; otherwise show "Author Unlisted" */}
          <div className="book-authors">{this.props.books.authors ? this.props.books.authors[0] : "Author Unlisted" }</div>
        </div>
      </li>
    )
  }
}

export default Books
