import React from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setFilterOption}) => {
    const handleInputText = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmitTodos = (e) => {
        e.preventDefault()
        const todoItems = [...todos, {
            inputText: inputText,
            id: Math.random()*1000,
            completed: false 
        }]    
        setTodos(todoItems)
        setInputText("")
    }

    const handleFilterOption = (e) => {
        setFilterOption(e.target.value)
        console.log(e.target.value);
    }
    
    return(
        <div>
            <form>
                <input 
                    onChange={handleInputText} 
                    value={inputText} 
                    type="text" 
                    className="todo-input"
                    placeholder="Add Todo"
                />
                <button onClick={handleSubmitTodos}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div onChange={handleFilterOption} className="select">
                    <select className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form





















// import React from 'react'

// const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
//     const inputTextHandler = (e) => {
//         console.log(e.target.value);
//         setInputText(e.target.value);
//     }

//     const submitHandler = (e) => {
//         e.preventDefault()
//         setTodos([...todos,{
//             inputText: inputText,
//             id: Math.random()*1000,
//             completed: false
//         }
//         ])
//         setInputText("")
//     }

//     const statusHandler = (e) => {
//         console.log(e.target.value);
//         setStatus(e.target.value)
//     }

//     return(
//         <div>
//             <form>
//                 <input 
//                     onChange={inputTextHandler} 
//                     value={inputText} 
//                     type="text" 
//                     className="todo-input"
//                 />
//                 <button onClick={submitHandler}>
//                     <i className="fas fa-plus-square"></i>
//                 </button>
//                 <div onChange={statusHandler} className="select">
//                     <select className="filter-todo">
//                         <option value="all">All</option>
//                         <option value="completed">Completed</option>
//                         <option value="uncompleted">Uncompleted</option>
//                     </select>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Form