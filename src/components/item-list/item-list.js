import React, {Component} from 'react';

import './item-list.css';

export default class ItemList extends Component {

  render() {
    return (
      <ul className='item-list list-group'>
        <li className="list-group-item">
          Luke Skywalker
        </li>
        <li className="list-group-item">
          Yoda Big
        </li>
        <li className="list-group-item">
          Princess Leia
        </li>
      </ul>
    );
  }
}