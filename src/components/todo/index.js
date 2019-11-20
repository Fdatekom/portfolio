import React, { Component, Fragment } from "react";
import ItemsForm from "./ItemsForm/ItemsForm";
import TodoActive from "./TodoActiv/TodoActiv";
import Items from "./Items/Items";
import "./todo.css";
import Footer from "../footer/footer";
import { setTimeout } from "timers";
function updateArrayItem(array, action) {
  return array.map(item => {
    if (item.id !== action.id) {
      return item;
    } else if (item.id === action.id) {
      return { text: action.text, id: item.id, isAchived: item.isAchived, className: '' };
    }
  });
}

function removeArrayItem(array, id) {
  return array.filter(item => {
    return item.id !== id;
  });
}
function achievedArrayItem(array, action) {
  return array.map(item => {
    if (item.id !== action.id) {
      return item;
    } else if (item.id === action.id) {
      return { text: item.text, id: item.id, isAchieved: !action.isAchieved, className: '' };
    }
  });
}
function removeAchievidItems(array) {
  return array.filter(item => {
    return item.isAchieved === false;
  });
}
function alertUpdate(propertyName, array , arg){
 return array.map(item => {
   if(item.id === propertyName && arg ){
      return {  text: item.text, id: item.id, isAchieved: item.isAchieved, className: 'alert' }
  } else if(item.id === propertyName && !arg ){
     return {  text: item.text, id: item.id, isAchieved: item.isAchieved, className: '' }
   } else {
     return item
   }
 })

}
class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      active: "all",
      isEdit: false,
      updateItemId: ''
    };
  }

  onRemove = id => {
    const { todos } = this.state;
    const newText = removeArrayItem(todos, id);
    this.setState({
      todos: newText,
    });
  };

  handleAdd = todo => {
    const { todos } = this.state;

    this.setState({
      todos: todos.concat([todo]),
    });
  };

  onChange = (lastText, id) => {
    const todos = this.state.todos;
    const newTodo = updateArrayItem(todos, {
      id: id,
      text: lastText,
      isAchieved: false,
      updateItemId: ''
    });
    this.setState({
      todos: newTodo,
    });
  };

  onAchieved = (id, isAchieved) => {
    const todos = this.state.todos;
    const newTodo = achievedArrayItem(todos, {
      id: id,
      isAchieved: isAchieved,
    });
    this.setState({
      todos: newTodo,
    });
  };

  onActive = propertyName => {
    this.setState({
      active: propertyName,
      isEdit: false
    });
  };
  onRemoveAchieved = event => {
    const todos = this.state.todos;
    const newTodo = removeAchievidItems(todos);
    this.setState({ todos: newTodo });
  };

  onEdit = propertyName  =>{
    this.setState({
      isEdit: !this.state.isEdit,
      updateItemId: propertyName
    })
  }

  alertInput = propertyName => {
    const {updateItemId } = this.state
    const newTodos = alertUpdate(updateItemId, this.state.todos, true)
    this.setState({todos: newTodos })
    const after= arg => {
      const afterTodos = alertUpdate(updateItemId, this.state.todos, false)
      this.setState({
        todos: afterTodos
      })
    }
    setTimeout(after, 1000)
  }
  render() {
    const todos = this.state.todos;
    return (
      <Fragment>
        <section>
          <div style={{fontSize:"10pt"}}>
            Использование CRUD в приложении
          </div>
       

          <ItemsForm onAdd={this.handleAdd} />
          <TodoActive
            onActive={this.onActive}
            onRemove={this.onRemoveAchieved}
          />
          <Items
            items={todos.filter(item => {
              if (this.state.active === "all") {
                return item;
              } else if (
                this.state.active === "active" &&
                item.isAchieved === false
              ) {
                return item;
              } else if (
                this.state.active === "complited" &&
                item.isAchieved === true
              ) {
                return item;
              }
            })}
            onChange={this.onChange}
            onRemove={this.onRemove}
            onAchieved={this.onAchieved}
            isEdit={this.state.isEdit}
            onEdit={this.onEdit}
            alertInput={this.alertInput}
          />
          
        </section>
        <Footer />
      </Fragment>
    );
  }
}
export default Todo;
