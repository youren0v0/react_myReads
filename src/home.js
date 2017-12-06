/**
 * Created by zhuyue on 17/7/24.
 */
import React from 'react'
export default function (props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {props.children}
    </div>
  )
}
