import React from 'react'

const Todo = ({todo, todos, setTodos, setUpdateInputText, updateInputText, toUpdate, setToUpdate}) => {
    const handleDeleteTodos = () => {
        const deleteItems = todos.filter(item => item.id !== todo.id)
        setTodos(deleteItems)
    }

    const handleUpdateInputText = (e) => {
        setUpdateInputText(e.target.value)
    }

    const handleToUpdateId = () => {
        setToUpdate(todo.id)
    }
    const handleUpdateTodos = () => {
        const updateItems = todos.map(item => {
            if(item.id === todo.id){
                return{...item, inputText: updateInputText}
            }
            return item
        })
        setTodos(updateItems)
        
        setToUpdate(null)
        setUpdateInputText("")

    }

    const handleCompleteTodos = () => {
        const completeItems = todos.map(item => {
            if(item.id === todo.id) return{...item, completed: !item.completed}
            
            return item
        })
        setTodos(completeItems)
    }

    return(
        <div className="todo">

            {toUpdate === todo.id ? (
                <input 
                    onChange={handleUpdateInputText} 
                    type="text" 
                    onFocus={e => setUpdateInputText(e.target.value)}
                    defaultValue={todo.inputText}
                    className="todo-update-input" 
                    placeholder="Blank Todo..."
                    autoFocus
                />) : (
                <li className={`todo-item ${todo.completed ? "completed" : "" }`}>
                    {todo.inputText}
                </li>
                )
            } 
            
            {toUpdate === todo.id ? (
                <button onClick={handleUpdateTodos} className="submit-updates-btn">
                        <i className="fas fa-save"></i>
                </button>) : (
                <button onClick={handleToUpdateId} className="update-btn">
                        <i className="fas fa-edit"></i>
                </button>
                )
            }
            <button onClick={handleCompleteTodos} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={handleDeleteTodos} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo

