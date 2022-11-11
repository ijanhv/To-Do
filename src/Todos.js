import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div>
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button onClick={() => {deleteTodo(todo.id)}}className="waves-effect waves-light btn-small secondary-content">Delete</button>

        </div>

        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;