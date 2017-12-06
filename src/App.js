import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Home from './home'
import Search from './search'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchButton from './searchButton'
import BookList from './booklist'
class App extends Component {
  changeShow = (msg) => {
    this.setState({ showSearchPage: msg })
  }
  getAllBook = () => {
    BooksAPI.getAll().then(res => {
      let bookList = {}
      res.forEach((item) => {
        let keys = Object.keys(bookList)
        if (keys.indexOf(item.shelf) === -1) {
          bookList[item.shelf] = [item]
        } else {
          bookList[item.shelf].push(item)
        }
      })
      this.setState({ bookList })
    })
  }
  componentWillMount () {
    this.getAllBook()
  }
  state = {
    bookList: {},
    showSearchPage: false
  }
  render() {
    return (
      <div className="App">
        {this.state.showSearchPage ? (
          <Search changeShow={(msg) => this.changeShow(msg)}  getAllBook={this.getAllBook}/>
        ) : (
          <Home>
            <BookList bookList={this.state.bookList} getAllBook={this.getAllBook}/>
            <SearchButton changeShow={(msg) => this.changeShow(msg)}/>
          </Home>
        )}
      </div>
    );
  }
}

export default App;
