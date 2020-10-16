import React from 'react';
import { ListElement } from './components/ListElement';
import './App.css';

class App extends React.Component {
  state = {
    todo: '',
    todosList: [],
    keyEnter: false,
  };

  addTodo = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  removeTodo = (item) => {
    setTimeout(() => {
      this.setState(state => ({
        todosList: state.todosList.filter(todo => todo !== item),
        keyEnter:
          (state.todosList.length - 1) > 0
            ? true
            : false,
      }));
    }, 800);
  };

  pressKey = (event) => {
    const { value } = event.target;

    if (event.key !== 'Enter' || value === '') {
      return;
    }

    this.setState(state => ({
      keyEnter: true,
      todosList: [...state.todosList, value],
      todo: '',
    }));
  };

  render() {
    const { todo, todosList, keyEnter } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>todos</h1>
          <input
            className="list-item"
            type="text"
            name="todo"
            value={todo}
            id="todo"
            placeholder="What needs to be done?"
            onChange={this.addTodo}
            onKeyPress={this.pressKey}
          />
        </div>

        {keyEnter &&
          <div className="list">
            <ul>
              {todosList.map((item, index) => (
                <ListElement
                  item={item}
                  key={item + index}
                  removeTodo={this.removeTodo}
                />
              ))}
            </ul>
          </div>
        }
    </div>
    );
  }
}

export default App;
