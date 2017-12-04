/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import Bookshelf from './bookshelf';
class BookList extends Component {

  render () {
    var items = [];
    // let booksContent = this.props.bookListContent
    // booksContent.forEach((item, index) => {
    //   items.push(
    //     <Bookshelf key={index} />
    //   )
    // })
    for (var i = 0; i < this.props.bookListContent.length; i++) {
      items.push(
        <Bookshelf key={i} bookshelfContent={this.props.bookListContent[i]} selectContent={this.props.selectContent}/>
      );
    }
    console.log(this.props, '1111111111111111111111111111111')
    return (
      <div className="list-books-content">
        {items}
      </div>
    )
  }
}

export default BookList;

