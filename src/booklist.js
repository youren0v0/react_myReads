/**
 * Created by zhuyue on 17/7/24.
 */
import React from 'react'
import Bookshelf from './bookshelf'
export default function(props) {
  const {bookList, ...otherProps} = props
  let items = [];
  for (let key in bookList) {
    let obj = {}
    obj[key] = bookList[key]
    items.push(
      <Bookshelf key={key} bookshelfContent={obj} {...otherProps}/>
    )
  }
  return (
    <div className="list-books-content">
      <div>
        {items}
      </div>
    </div>
  )
}

