/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';

class Book extends Component {
  getInitialState: () => {
    return {
      checked: true
    };
  },
  render () {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://img.sccnn.com/bimg/337/14943.jpg")' }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">book-title</div>
        <div className="book-authors">book-authors{this.state.checked}</div>
      </div>
    )
  }
}

export default Book;