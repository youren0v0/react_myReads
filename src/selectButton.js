/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';

class SelectButton extends Component {
  render () {
    let selectArr = this.props.selectContent
    return (
      <select>
        <option value="none" disabled>Move to...</option>
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
