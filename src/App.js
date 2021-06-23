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

  useEffect(() => getTodosFromLocalStorage(),[])

  useEffect(() => {
    handleFilterOptions()
    saveTodosToLocalStorage()
  }, [filterOption, todos])

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
    localStorage.setItem("localTodosStoragev1", JSON.stringify(todos))
  }

  const getTodosFromLocalStorage = () => {
    if(localStorage.getItem("localTodosStoragev1") === null){
      localStorage.setItem("localTodosStoragev1", [])
    }else {
      const todosFromLocalStorage = JSON.parse(localStorage.getItem("localTodosStoragev1"))
      setTodos(todosFromLocalStorage)

    }
  }

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





















// import React, {useState, useEffect} from 'react'
// import './App.css';
// import Main from './components/main'

// function App() {
//   //useState
//   const [inputText, setInputText] = useState("")
//   const [todos, setTodos] = useState([])
//   const [status, setStatus] = useState("all")
//   const [filteredTodos, setFilteredTodos] = useState([])

//   //useEffect
//   useEffect(() => getLocalTodos(), [])

//   useEffect(() => {
//     filterHandler()
//     saveLocalTodos()
//   } ,[status, todos])
//   //function
//   const filterHandler = () => {
//     switch(status){
//       case "completed":
//         const completedTodos = todos.filter(todo => todo.completed === true)
//         setFilteredTodos(completedTodos)
//         break
      
//       case "uncompleted": 
//         const uncompletedTodos = todos.filter(todo => todo.completed === false)
//         setFilteredTodos(uncompletedTodos)
//         break
      
//       default:
//         const allTodos = todos
//         setFilteredTodos(allTodos)
//         break
//     }
//   }

//   //localStorage
//   const saveLocalTodos = () => {
//     localStorage.setItem("todoStorage", JSON.stringify(todos))
//   }

//   const getLocalTodos = () => {
//     if(localStorage.getItem("todoStorage") === null){
//       localStorage.setItem("todoStorage", [])
//     } else {
//       const saveTodosData = JSON.parse(localStorage.getItem("todoStorage"))
//       setTodos(saveTodosData)
//     }
//   }

//   return (
//     <div className="">
//       <Main 
//         inputText={inputText}
//         setInputText={setInputText}
//         todos={todos}
//         setTodos={setTodos}
//         status={status}
//         setStatus={setStatus}
//         filteredTodos={filteredTodos}
//         setFilteredTodos={setFilteredTodos}
//       />
//     </div>
//   );
// }

// export default App;
