/**
 * Created by zhuyue on 17/7/24.
 */
import React from 'react'
import Book from './book'
export default function (props) {
  const {bookshelfContent, ...otherProps} = props
  let items = [];
  let shelf = ''
  for (let key in bookshelfContent) {
    shelf = key
    bookshelfContent[key].forEach((item, index) => {
      items.push(
        <li key={index} >
          <Book booksContent={item} {...otherProps}/>
        </li>  )
    })
  }
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {items}
        </ol>
      </div>
    </div>
  )
}

