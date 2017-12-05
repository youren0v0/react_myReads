/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import Book from './book';
class Bookshelf extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tomy',
      isLiked: false
    }
  }
  allowDrop (ev) {
    ev.preventDefault();
  }
  drag (ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
  }
  drop (ev) {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
  }
  render () {
    const {bookshelfContent, ...props } = this.props
    var items2 = [];
    let shelf = ''
    for (let key in bookshelfContent) {
      shelf = key
      bookshelfContent[key].forEach((item, index) => {
        items2.push(
          <li key={index} >
            <Book booksContent={item} selectContent={this.props.selectContent} {...props}/>
          </li>  )
      })
    }

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {items2}
          </ol>
          <div id="dragTarget" onDrop={(ev)=> {this.drop(ev)}} onDragOver={(event)=> {this.allowDrop(event)}}></div>
          <div id="dragImg" draggable="true" onDragStart={(ev)=>{this.drag(ev)}} ></div>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
