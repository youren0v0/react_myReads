/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import Book from './book';
class Bookshelf extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tomy',
      isLiked: false
    }
  }
  render () {
    var items = [];
    for (var i = 0; i < this.props.bookshelfContent.bookshelfContent.length; i++) {
      items.push(
        <li key={i}>
          <Book bookName={this.props.bookshelfContent.bookshelfContent[i]} selectContent={this.props.selectContent}/>
        </li>
      );
    }
    console.log(this.props, 'alsdjkfal;sejdjksd')
    console.log(this.props.bookshelfContent.bookshelfContent, 'bookshelfContent')
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelfContent.bookshelfTitle}</h2>
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
