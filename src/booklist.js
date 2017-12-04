/**
 * Created by zhuyue on 17/7/24.
 */
import React, { Component } from 'react';
import Bookshelf from './bookshelf';
class BookList extends Component {
  render () {
    var items = [];
    for (var i = 0; i < 3; i++) {
      items.push(
        <Bookshelf key={i}/>
      );
    }
    return (
      <div className="list-books-content">
        {items}
      </div>
    )
  }
}

export default BookList;
// <div className="bookshelf">
//   <h2 className="bookshelf-title">Currently Reading</h2>
//   <div className="bookshelf-books">
//     <ol className="books-grid">
//       {
//         // let arr = [1, 2, 3]
//         // arr.map((item, index) =>
//         //   <li key={index}> {item} </li>
//         // )
//         [1, 2, 3].map((item, index) =>
//           <li key={index}>
//             <Book />
//           </li>
//         )
//       }
//     </ol>
//   </div>
// </div>

