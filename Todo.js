import { useState } from 'react';


import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "저녁메뉴 결정하기",
    },
    {
      id: 2,
      content: "우유 사가기",
    },
    {
      id: 3,
      content: "반값택배 보내기",
    },
  ];

  const [ todos, setTodos ] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

return (
  <>
  <List todos={todos} deleteTodo={deleteTodo}/>  
  <Form createTodo={createTodo}/>  
  
  </>
)

};


export default Todo;
