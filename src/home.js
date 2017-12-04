/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import SearchButton from './searchButton';
import BookList from './booklist';
class Home extends Component {
  render () {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookList bookListContent={this.props.bookListContent} selectContent={this.props.selectContent}/>
        <SearchButton changeShow={(msg) => this.props.changeShow(msg)}/>
      </div>
    )
  }
}

export default Home;
