/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
class SelectButton extends Component {
  changeSelect = (e) => {
    this.setState({selectValue: e.target.value});
    let obj = {
      'Currently Reading': 'currentlyReading',
      'Want to Read': 'wantToRead',
      'Read': 'read',
      'None': ''
    }
    if (obj[e.target.value]) {
      BooksAPI.update(this.props.id, obj[e.target.value]).then(res => {
      }).then(() => {
        this.props.getAllBook()
      })
    }
  }
  state = {
    selectValue: ''
  }
  render () {
    let selectArr = this.props.selectContent
    return (
      <select value={this.state.selectValue} onChange={(e) => this.changeSelect(e)}>
        <option value="" disabled>Move to...</option>
        {
          selectArr.map((item, index) =>
            <option value={item.name} key={index}>{item.name}</option>
          )
        }
      </select>
    )
  }
}

export default SelectButton;
