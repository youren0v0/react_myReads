import React, { Component } from 'react';
import Home from './home';
import Search from './search';
import BookList from './booklist';
import SearchButton from './searchButton';
import './App.css';

class App extends Component {
  changeShow (msg) {
    this.setState({ showSearchPage: msg })
  }
  state = {
    showSearchPage: false,
    select: [
      {
        value: '1',
        name: 'Currently Reading'
      }, {
        value: '2',
        name: 'Want to Read'
      }, {
        value: '3',
        name: 'Read'
      }, {
        value: '4',
        name: 'None'
      }
    ],
    content: [
      {
        bookshelfTitle: 'bookshelfTitle1',
        bookshelfContent: [
          {
            title: 'title1',
            authors: 'authors1',
            url: 'http://img.sccnn.com/bimg/337/19941.jpg'
          }
        ]
      },
      {
        bookshelfTitle: 'bookshelfTitle2',
        bookshelfContent: [
          {
            title: 'title2',
            authors: 'authors2',
            url: 'http://img.sccnn.com/bimg/337/14941.jpg'
          },
          {
            title: 'title2',
            authors: 'authors2',
            url: 'http://img.sccnn.com/bimg/337/14945.jpg'
          }
        ]
      },
      {
        bookshelfTitle: 'bookshelfTitle3',
        bookshelfContent: [
          {
            title: 'title3',
            authors: 'authors3',
            url: 'http://img.sccnn.com/bimg/337/14923.jpg'
          },
          {
            title: 'title3',
            authors: 'authors3',
            url: 'http://img.sccnn.com/bimg/337/14543.jpg'
          },
          {
            title: 'title3',
            authors: 'authors3',
            url: 'http://img.sccnn.com/bimg/337/14843.jpg'
          }
        ]
      },
      {
        bookshelfTitle: 'bookshelfTitle4',
        bookshelfContent: [
          {
            title: 'title4',
            authors: 'authors4',
            url: 'http://img.sccnn.com/bimg/337/12943.jpg'
          },
          {
            title: 'title4',
            authors: 'authors4',
            url: 'http://img.sccnn.com/bimg/337/14947.jpg'
          },
          {
            title: 'title4',
            authors: 'authors4',
            url: 'http://img.sccnn.com/bimg/337/23943.jpg'
          },
          {
            title: 'title4',
            authors: 'authors4',
            url: 'http://img.sccnn.com/bimg/337/14043.jpg'
          }
        ]
      }
    ]
  }
  render() {

    return (
      <div className="App">
        {this.state.showSearchPage ? (
          <Search changeShow={(msg) => this.changeShow(msg)} selectContent={this.state.select}/>
        ) : (
          <Home changeShow={(msg) => this.changeShow(msg)} selectContent={this.state.select} bookListContent={this.state.content}/>
          // <div className="list-books">
          //   <div className="list-books-title">
          //     <h1>MyReads</h1>
          //   </div>
          //   <BookList bookListContent={this.state.content} selectContent={this.state.select}/>
          //   <SearchButton changeShow={(msg) => this.changeShow(msg)}/>
          // </div>
        )}
      </div>
    );
  }
}

export default App;
