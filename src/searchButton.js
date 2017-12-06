/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
class SearchButton extends Component {
  render () {
    return (
      <div className="open-search">
        <a onClick={() => this.props.changeShow(true)}>Add a book</a>
      </div>
    )
  }
}

export default SearchButton;
