/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import Book from './book';
class Bookshelf extends Component {
  render () {
    var items = [];
    for (var i = 0; i < 3; i++) {
      items.push(
        <li key={i}>
          <Book />
        </li>
      );
    }
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">bookshelf-title</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {items}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;