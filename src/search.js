/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import Book from './book';
import * as BooksAPI from './BooksAPI'
class Search extends Component {
  getBook () {
    BooksAPI.get('nggnmAEACAAJ').then(res => {
      console.log(res, 'book')
      let arr = []
      arr.push(
        <li key={1}>
          <Book selectContent={this.props.selectContent} booksContent={res}/>
        </li>
      )
      this.setState({arr});
    })
    console.log(this.state.value)
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
