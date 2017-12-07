/**
 * Created by zhuyue on 17/7/24.
 */
import React from 'react'
import {Book} from '../../component'
export default function (props) {
  const {bookList, ...otherProps} = props
  let bookListArr = []
  for (let key in bookList) {
    let bookShelfArr = []
    bookList[key].forEach((item, index) => {
      bookShelfArr.push(
        <li key={index} >
          <Book booksContent={item} {...otherProps}/>
        </li>
      )
    })
    bookListArr.push(
      <div className="bookshelf" key={key} >
        <h2 className="bookshelf-title">{key}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookShelfArr}
          </ol>
        </div>
      </div>
    )
  }
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookListArr}
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => props.changeShow(true)}>Add a book</a>
      </div>
    </div>
  )
}
