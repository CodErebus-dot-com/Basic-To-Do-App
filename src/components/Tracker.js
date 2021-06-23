import React from 'react'

const Tracker = ({setTodos, filteredTodos, filterOption}) => {
    const handleClearAllTodos = () => {
        const clearTodos = []
        setTodos(clearTodos)
    }
    
    return(
        <div>
            <div className="todo-container">
            {
                (
                    () => {
                        if(filterOption === "completed") {
                            if(filteredTodos.length === 0){
                                return "No tasks completed"
                            }else {
                                return "You have completed " + filteredTodos.length + " task/s"
                            }
                        }
                        else if (filterOption === "uncompleted") return(filteredTodos.length === 0 ? "All tasks completed" : "You are left with " + filteredTodos.length + " task/s")
                        else return(filteredTodos.length === 0 ? "Your TodoList is empty" : "Total no. of task/s added: " +filteredTodos.length)
                    }
                )()
            }    
            </div>
            <div className="todo-container" onClick={handleClearAllTodos}>
                <a href="">Clear All</a>
            </div>
        </div>
        
    )
}

export default Tracker