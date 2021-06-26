import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSnackbar } from 'notistack';

const Form = ({inputText, setInputText, todos, setTodos, setFilterOption}) => {
    
    const { enqueueSnackbar } = useSnackbar()

    const handleInputText = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmitTodos = (e) => {
        e.preventDefault()


        if(inputText.length > 0){
            const todoItems = [...todos, {
                inputText: inputText,
                id: uuidv4(),
                completed: false 
            }]
            setTodos(todoItems)
        } 
        else {
            enqueueSnackbar('Cannot add an empty todo!', { variant: 'error' })
        }

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
                    required
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
