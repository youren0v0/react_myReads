/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import SelectButton from './selectButton';

class Book extends Component {
  constructor () {
    super()
    this.state = {
      title: 'book-title',
      authors: 'book-authors',
      url: 'http://img.sccnn.com/bimg/337/14943.jpg'
    }
  }
  render () {
    const {booksContent, ...props } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + booksContent.previewLink +')' }}></div>
          <div className="book-shelf-changer">
            <SelectButton selectContent={this.props.selectContent} {...props}/>
          </div>
        </div>
        <div className="book-title">{booksContent.title}</div>
        <div className="book-authors">{booksContent.authors}</div>
      </div>
    )
  }
}

export default Book;