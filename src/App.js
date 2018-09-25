import React from 'react'
import { Route } from 'react-router-dom'
import BookSearch from './Components/BookSearch'
import MyBookShelf from './Components/MyBookShelf'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={MyBookShelf}/>
        <Route exact path="/Search" component={BookSearch}/>
      </div>

    )
  }
}

export default BooksApp
