import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from './home';
import Search from './search';
import * as BooksAPI from './BooksAPI'
import BookList from './booklist';
import SearchButton from './searchButton';
import './App.css';
console.log(connect, 'connect')
class App extends Component {
  changeShow (msg) {
    this.setState({ showSearchPage: msg })
  }
  componentWillMount () {
    BooksAPI.getAll().then(res => {
      console.log(res, 'getAll')
      let bookList = {}
      res.forEach((item, index) => {
        let keys = Object.keys(bookList)
        if (keys.indexOf(item.shelf) === -1) {
          bookList[item.shelf] = [item]
        } else {
          bookList[item.shelf].push(item)
        }
      })
      this.setState({ bookList })
    })
    console.log('componentWillMount')
  }
  state = {
    bookList: {},
    showSearchPage: false,
    select: [
      {
        value: '1',
        name: 'Currently Reading'
      }, {
        value: '2',
        name: 'Want to Read'
      }, {
        value: '3',
        name: 'Read'
      }, {
        value: '4',
        name: 'None'
      }
    ]
  }
  render() {
    console.log(this.state.bookList, 'render')

    return (
      <div className="App">
        {this.state.showSearchPage ? (
          <Search changeShow={(msg) => this.changeShow(msg)} selectContent={this.state.select}/>
        ) : (
          <Home changeShow={(msg) => this.changeShow(msg)} selectContent={this.state.select} bookListContent={this.state.content} bookList={this.state.bookList}/>
        )}
      </div>
    );
  }
}

export default App;
