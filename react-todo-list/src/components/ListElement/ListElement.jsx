import React from 'react';
import classNames from 'classnames/bind';

import './ListElement.css';

export class ListElement extends React.PureComponent {
  state = {
    selected: false,
  };

  remove = () => {
    this.setState(state => ({
      selected: state.selected ? false : true,
    }));
    this.props.removeTodo(this.props.item);
  };

  render() {
    const { selected } = this.state;
    const { item } = this.props;

    return (
      <li
        className={classNames({
          "list-item": true,
          "selected-item": selected,
          "remove": selected,
        })}
      >
        <div
          className={classNames({
            "default": true,
            "selected": selected,
          })}
          onClick={this.remove}
        />
        <span>{item}</span>
      </li>
    );
  }
}
