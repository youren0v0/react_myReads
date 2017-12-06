/**
 * Created by zhuyue on 17/7/24.
 */
import React from 'react';
export default function (props) {
  return (
    <div className="open-search">
      <a onClick={() => props.changeShow(true)}>Add a book</a>
    </div>
  )
}
