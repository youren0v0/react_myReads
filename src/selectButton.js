/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
class SelectButton extends Component {
  changeSelect = (e) => {
    this.setState({selectValue: e.target.value});
    if (e.target.value) {
      BooksAPI.update(this.props.id, e.target.value).then(res => {
      }).then(() => {
        this.props.getAllBook()
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
    let selectArr = this.state.select
    return (
      <select value={this.state.selectValue} onChange={(e) => this.changeSelect(e)}>
        <option value="" disabled>Move to...</option>
        {
          selectArr.map((item, index) =>
            <option value={item.value} key={index}>{item.name}</option>
          )
        }
      </select>
    )
  }
}

export default SelectButton;
