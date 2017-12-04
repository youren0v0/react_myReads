/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import Book from './book';
class Search extends Component {
  render () {
    let arr = []
    for (let i = 0; i<10; i++ ) {
      arr.push(
        <li key={i}>
          <Book selectContent={this.props.selectContent}/>
        </li>
      )
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.props.changeShow(false)}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {arr}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
