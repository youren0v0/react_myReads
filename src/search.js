/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import Book from './book';
import * as BooksAPI from './BooksAPI'
class Search extends Component {
  getBook () {
    if (this.state.value) {
      BooksAPI.search(this.state.value, 10).then(res => {
        let arr = []
        res.forEach((item, index) => {
          arr.push(
            <li key={index}>
              <Book booksContent={item} {...this.props}/>
            </li>
          )
        })
        this.setState({arr});
      })
    }
  }
  state = {
    arr: [],
    value: ''
  }
  change (e) {
    this.setState({value: e.target.value});
  }
  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.props.changeShow(false)}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onBlur={() => this.getBook()} onChange={(e) => this.change(e)} value={this.state.value}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.arr}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
