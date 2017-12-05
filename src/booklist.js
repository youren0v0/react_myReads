/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import Bookshelf from './bookshelf';
class BookList extends Component {

  render () {
    const {bookList, ...props } = this.props
    var items2 = [];
    
    for (let key in bookList) {
      let obj = {}
      obj[key] = bookList[key]
      items2.push(
        <Bookshelf key={key} bookshelfContent={obj} selectContent={this.props.selectContent} {...props}/>
      )
    }
    return (
      <div className="list-books-content">
        <div>
          {items2}
        </div>
      </div>
    )
  }
}

export default BookList;

