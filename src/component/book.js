/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react'
import * as BooksAPI from '../plugins/BooksAPI'
class SelectButton extends Component {
  changeSelect = (e) => {
    console.log(this.props, 'bookProps')
    let newShelf = e.target.value
    this.setState({selectValue: newShelf});
    if (newShelf) {
      BooksAPI.update(this.props.booksContent.id, newShelf).then(res => {
        console.log(res, '!!!!!!!!!!!!!!!!!!!!!!')
      }).then(() => {
        this.props.changeState(this.props.booksContent.id, this.props.booksContent.shelf, newShelf)
      })
    }
  }
  state = {
    selectValue: '',
    select: [
      {
        value: 'currentlyReading',
        name: 'Currently Reading'
      }, {
        value: 'wantToRead',
        name: 'Want to Read'
      }, {
        value: 'read',
        name: 'Read'
      }, {
        value: '',
        name: 'None'
      }
    ]
  }
  render () {
    const {booksContent} = this.props
    let selectArr = this.state.select
    return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + booksContent.previewLink +')' }}></div>
        <div className="book-shelf-changer">
          <select value={this.state.selectValue} onChange={(e) => this.changeSelect(e)}>
            <option value="" disabled>Move to...</option>
            {
              selectArr.map((item, index) =>
                <option value={item.value} key={index}>{item.name}</option>
              )
            }
          </select>
        </div>
      </div>
      <div className="book-title">{booksContent.title}</div>
      <div className="book-authors">{booksContent.authors}</div>
    </div>
    )
  }
}

export default SelectButton;
