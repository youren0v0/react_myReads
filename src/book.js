/**
 * Created by zhuyue on 17/7/24.
 */
import React from 'react'
import SelectButton from './selectButton'
export default function(props) {
  const {booksContent, ...otherProps} = props
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + booksContent.previewLink +')' }}></div>
        <div className="book-shelf-changer">
          <SelectButton id={booksContent.id} {...otherProps}/>
        </div>
      </div>
      <div className="book-title">{booksContent.title}</div>
      <div className="book-authors">{booksContent.authors}</div>
    </div>
  )
}
