import React from 'react'
import Form from './Form'
import TodoInterface from './TodoInterface'
import Tracker from './Tracker'

const Main = ({setInputText, inputText, todos, setTodos, setFilterOption, filteredTodos, filterOption, setUpdateInputText, setToUpdate, updateInputText, toUpdate}) => {
    return(
        <div>
            <header>
                Your TODO App
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setFilterOption={setFilterOption}
            />
            <TodoInterface
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                filteredTodos={filteredTodos}
                setInputText={setInputText}
                setToUpdate={setToUpdate}
                setUpdateInputText={setUpdateInputText}
                updateInputText={updateInputText}
                toUpdate={toUpdate}
            />
            <Tracker 
                filteredTodos={filteredTodos} 
                setTodos={setTodos}
                filterOption={filterOption}
            />
        </div>
    )
}

export default Main






















// import React from 'react'
// import Form from './Form'
// import TodoList from './TodoList';

// const Main = ({inputText, setInputText, todos, setTodos, status, setStatus, filteredTodos}) => {
//     return (
//         <div>
//             <header>
//                 <h1>Hello World {inputText}</h1>
//             </header>

//             <Form 
//                 inputText={inputText}
//                 setInputText={setInputText}
//                 todos={todos}
//                 setTodos={setTodos}
//                 status={status}
//                 setStatus={setStatus}
//             />
//             <TodoList 
//                 todos={todos}
//                 setTodos={setTodos}
//                 filteredTodos={filteredTodos}
//             />
//         </div>
//     )
// }

// export default Main