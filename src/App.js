import React, {useState, useEffect} from 'react'
import Main from './components/main'
import './App.css'

const App = () => {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [filterOption, setFilterOption] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  const [toUpdate, setToUpdate] = useState(null)
  const [updateInputText, setUpdateInputText] = useState("")

  useEffect(() => {
    const getTodosFromLocalStorage = () => {
      if(localStorage.getItem("localTodosStoragev2") === null){
        localStorage.setItem("localTodosStoragev2", [])
      }else {
        const todosFromLocalStorage = JSON.parse(localStorage.getItem("localTodosStoragev2"))
        setTodos(todosFromLocalStorage)
  
      }
    }

    getTodosFromLocalStorage()
  },[])

  useEffect(() => {
    const handleFilterOptions = () => {
      switch(filterOption){
        case "completed":
          const completedTodos = todos.filter(todo => todo.completed === true)
          setFilteredTodos(completedTodos)
          break
  
        case "uncompleted":
          const uncompletedTodos = todos.filter(todo => todo.completed === false)
          setFilteredTodos(uncompletedTodos)
          break
  
        default:
          const defaultTodos = todos
          setFilteredTodos(defaultTodos)
      }
    }

    const saveTodosToLocalStorage = () => {
      localStorage.setItem("localTodosStoragev2", JSON.stringify(todos))
    }
  
    handleFilterOptions()
    saveTodosToLocalStorage()
  }, [filterOption, todos])

  
  return(
    <div>
      <Main
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
        toUpdate={toUpdate}
        setToUpdate={setToUpdate}
        updateInputText={updateInputText}
        setUpdateInputText={setUpdateInputText}
      />
    </div>
  )
}

export default App

