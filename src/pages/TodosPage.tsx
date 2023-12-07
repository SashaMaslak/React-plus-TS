import React, { useState, useEffect } from "react"
import ShortUniqueId from "short-unique-id"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import { ITodo } from "../interfaces"

declare var confirm: (question: string) => boolean

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]

    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const { randomUUID } = new ShortUniqueId({ length: 10 })
    const newTodo: ITodo = {
      title,
      id: randomUUID(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
    console.log(`newTodo:`, newTodo)
  }

  const toggleHandler = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        console.log(todo.completed)
        todo.completed = !todo.completed
        console.log(`todos:`, todos)
      }
      return todo
    })
    setTodos(newTodos)
  }

  const removeHandler = (id: string) => {
    const shouldRemove = confirm("Are you sure you want to delete the item?")
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  )
}

export default TodosPage
