import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Home from './view/home'
import Search from './view/search'
import * as BooksAPI from './plugins/BooksAPI'
import './assets/App.css'

class App extends Component {
  changeShow = (msg) => {
    this.setState({ showSearchPage: msg })
  }
  getAllBook = () => {
    BooksAPI.getAll().then(res => {
      let bookList = {}
      console.log(res, 'allbook')
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
  changeState = (id, oldShelf, newShelf) => {
    let newBookList = {...this.state.bookList}
    this.state.bookList[oldShelf].forEach((item, index) => {
      if (item.id === id) {
        newBookList[oldShelf].splice(index, 1)
        newBookList[newShelf].push(item)
      }
    })
    this.setState({ newBookList })
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
          <Search changeShow={(msg) => this.changeShow(msg)}  changeState={(id, oldShelf, newShelf) => this.changeState(id, oldShelf, newShelf)}/>
        ) : (
          <Home bookList={this.state.bookList}  changeState={(id, oldShelf, newShelf) => this.changeState(id, oldShelf, newShelf)} changeShow={(msg) => this.changeShow(msg)}/>
        )}
      </div>
    );
  }
}

export default App;
